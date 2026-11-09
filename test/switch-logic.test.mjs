import test from "node:test";
import assert from "node:assert/strict";
import { BLOCKERS, STORE_KEY, cleanText, suggestActions, createRecord, startRecord, finishRecord, readRecords, writeRecords, remainingSeconds } from "../src/switch-logic.mjs";

test("入力を正規化し、文字数を制限する", () => {
  assert.equal(cleanText("  作業\n を   始める  "), "作業 を 始める");
  assert.equal(cleanText("123456", 3), "123");
});
test("どの停止理由でも具体的な一歩を返す", () => {
  for (const blocker of BLOCKERS) {
    const suggestions = suggestActions("資格の勉強", blocker.id);
    assert.ok(suggestions.length >= 3);
    assert.ok(suggestions.some((text) => text.includes("教材")));
  }
});
test("想定外の入力でも安全な候補が出る", () => {
  assert.equal(suggestActions("", "unknown").length >= 2, true);
  assert.equal(new Set(suggestActions("掃除", "unclear")).size, suggestActions("掃除", "unclear").length);
});
test("作成・着手・完了が別々に記録される", () => {
  const entry = createRecord({ task: "事業の準備", blocker: "overthink", action: "候補を1つ書く" }, 1000, 0.5);
  assert.equal(entry.status, "planned");
  assert.equal(entry.startedAt, null);
  assert.equal(finishRecord(entry, 2000).status, "planned");
  const started = startRecord(entry, 2000);
  assert.equal(started.startedAt, 2000);
  assert.equal(remainingSeconds(started, 32000), 90);
  const finished = finishRecord(started, 40000);
  assert.equal(finished.status, "done");
  assert.equal(finished.completedAt, 40000);
  assert.equal(startRecord(finished, 50000).status, "done");
});
test("空入力を完了扱いにしない", () => {
  assert.throws(() => createRecord({task: " ",action: " "}), /入力/);
  assert.throws(() => createRecord({task: "勉強",action: ""}), /入力/);
});
test("ブラウザー内保存を読み戻し、壊れたデータを無視する", () => {
  const map = new Map();
  const storage = {getItem: (key) => map.get(key), setItem: (key, value) => map.set(key, value)};
  const record = createRecord({task: "片付け",action: "ものを3個片付ける",blocker: "unclear"}, 100, 0.2);
  assert.equal(writeRecords(storage, [record]), true);
  assert.equal(JSON.parse(map.get(STORE_KEY)).length, 1);
  assert.equal(readRecords(storage)[0].task, "片付け");
  storage.setItem(STORE_KEY, "{broken");
  assert.deepEqual(readRecords(storage), []);
  assert.equal(writeRecords({setItem(){throw Error("blocked");}}, [record]), false);
});
