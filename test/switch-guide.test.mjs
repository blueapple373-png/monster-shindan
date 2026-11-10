import test from "node:test";
import assert from "node:assert/strict";
import { GUIDED_GOALS, getGuidedPlan, getGuidedGoal } from "../src/switch-guide.mjs";
import { createRecord, startRecord, finishRecord, readRecords, writeRecords } from "../src/switch-logic.mjs";

test("入力なしでも全分野・全段階で具体的な行動候補が出る", () => {
  for (const goal of GUIDED_GOALS) {
    assert.ok(goal.label);
    for (const stage of goal.stages) {
      const plan = getGuidedPlan(goal.id, stage.id);
      assert.ok(plan.task.length >= 2);
      assert.ok(plan.actions.length >= 2);
      assert.ok(plan.actions.every((action) => action.length > 6));
      assert.equal(new Set(plan.actions).size, plan.actions.length);
      const record = createRecord({ task: plan.task, action: plan.actions[0], blocker: "unclear" }, 10, 0.1);
      assert.equal(finishRecord(startRecord(record, 20), 30).status, "done");
    }
  }
});
test("不正な段階・分野で動作が止まらない", () => {
  assert.equal(getGuidedGoal("missing").id, GUIDED_GOALS[0].id);
  assert.equal(getGuidedPlan("missing", "missing").stage, GUIDED_GOALS[0].stages[0].id);
});
test("事業の試作品段階は、既にあるものの操作確認から進める", () => {
  const plan = getGuidedPlan("business", "prototype");
  assert.match(plan.actions[0], /試作品/);
  assert.match(plan.actions[0], /記録/);
});
test("ガイドから作った記録は既存データ形式で保存・復旧可能", () => {
  const plan = getGuidedPlan("business", "prototype");
  const record = createRecord({ task: plan.task, action: plan.actions[0], blocker: "unclear" }, 100, 0.1);
  const values = new Map();
  const storage = { getItem: (key) => values.get(key), setItem: (key, value) => values.set(key, value) };
  assert.equal(writeRecords(storage, [record]), true);
  assert.equal(readRecords(storage).length, 1);
});
