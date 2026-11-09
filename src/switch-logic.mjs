export const STORE_KEY = "mindlab_switch_v1";
export const BLOCKERS = [
  { id: "unclear", label: "何から始めればいいか分からない" },
  { id: "worry", label: "失敗が気になって動けない" },
  { id: "overthink", label: "考えすぎて決められない" },
  { id: "energy", label: "気力が出ない・面倒に感じる" },
  { id: "interrupted", label: "途中で止まってしまった" }
];
const blockerIds = new Set(BLOCKERS.map((item) => item.id));
const statuses = new Set(["planned", "started", "done"]);
export function cleanText(value, max = 140) {
  return String(value ?? "").replace(/[\u0000-\u001f\u007f]/g, " ").replace(/\s+/g, " ").trim().slice(0, max);
}
export function suggestActions(task, blocker) {
  const text = cleanText(task);
  const topics = [
    { pattern: /副業|起業|事業|商品|販売|売上|収益|集客/, actions: ["商品やサービスの候補を1つ書く", "お客さんが困る場面を1つ具体的に書く"] },
    { pattern: /勉強|学習|資格|試験|復習|宿題|課題/, actions: ["教材を開いて次の1問だけ読む", "分からない用語を1つメモする"] },
    { pattern: /書く|記事|note|投稿|メール|文章|資料|企画/, actions: ["仮の見出しを1行書く", "伝えたい要点を箇条書きで3つ出す"] },
    { pattern: /掃除|片付け|整理|収納|部屋/, actions: ["目の前のものを3個だけ片付ける", "最初に片付ける場所を1つ決める"] },
    { pattern: /連絡|返信|予約|電話|申請|手続き/, actions: ["必要な連絡先かページを開く", "伝える内容を1文だけ下書きする"] },
    { pattern: /運動|筋トレ|散歩|ストレッチ/, actions: ["運動する場所へ移動する", "無理のない動きを1つだけ試す"] }
  ];
  const byBlocker = {
    unclear: "必要な作業を3つ、順番を気にせず書く",
    worry: "誰にも見せない下書きを1つ作る",
    overthink: "今日決めることを1つに絞って書く",
    energy: "必要な道具や画面を1つだけ開く",
    interrupted: "前回どこまで進んだかを1文で書く"
  };
  const match = topics.find((item) => item.pattern.test(text));
  return [...new Set([
    byBlocker[blocker] || byBlocker.unclear,
    ...(match ? match.actions : []),
    "2分だけ手を動かして、終わったら続けるか決める",
    "最初の作業を1つだけメモする"
  ])].slice(0, 4);
}
export function createRecord(input, now = Date.now(), random = Math.random()) {
  const task = cleanText(input.task);
  const action = cleanText(input.action);
  if (task.length < 2 || !action) throw new Error("やることと最初の一歩を入力してください");
  return {
    id: "sw-" + now + "-" + Math.floor(random * 1e9),
    task,
    action,
    blocker: blockerIds.has(input.blocker) ? input.blocker : "unclear",
    status: "planned",
    createdAt: now,
    startedAt: null,
    completedAt: null
  };
}
export function startRecord(record, now = Date.now()) {
  if (!record || record.status === "done") return record;
  return { ...record, status: "started", startedAt: now };
}
export function finishRecord(record, now = Date.now()) {
  if (!record || record.status !== "started") return record;
  return { ...record, status: "done", completedAt: now };
}
export function readRecords(storage) {
  if (!storage) return [];
  try {
    const parsed = JSON.parse(storage.getItem(STORE_KEY) || "[]");
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item) =>
      item && typeof item.id === "string" &&
      typeof item.task === "string" && typeof item.action === "string" &&
      blockerIds.has(item.blocker) && statuses.has(item.status) &&
      Number.isFinite(item.createdAt)
    ).slice(0, 30).map((item) => ({
      id: item.id,
      task: cleanText(item.task),
      action: cleanText(item.action),
      blocker: item.blocker,
      status: item.status,
      createdAt: item.createdAt,
      startedAt: Number.isFinite(item.startedAt) ? item.startedAt : null,
      completedAt: Number.isFinite(item.completedAt) ? item.completedAt : null
    })).filter((item) => item.task && item.action);
  } catch {
    return [];
  }
}
export function writeRecords(storage, records) {
  if (!storage) return false;
  try {
    storage.setItem(STORE_KEY, JSON.stringify(records.slice(0, 30)));
    return true;
  } catch {
    return false;
  }
}
export function remainingSeconds(record, now = Date.now()) {
  if (!record || record.status !== "started" || !record.startedAt) return 120;
  return Math.max(0, 120 - Math.floor((now - record.startedAt) / 1000));
}
