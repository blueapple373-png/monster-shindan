import React, { useEffect, useMemo, useState } from "react";
import {
  BLOCKERS, cleanText, suggestActions, createRecord, startRecord,
  finishRecord, readRecords, writeRecords, remainingSeconds
} from "./switch-logic.mjs";
import "./switch.css";

function safeStorage() {
  try { return window.localStorage; } catch { return null; }
}
function formatDate(value) {
  try { return new Date(value).toLocaleDateString("ja-JP", { month: "numeric", day: "numeric" }); }
  catch { return ""; }
}
function StatusMark({ status }) {
  const info = status === "done" ? ["完了", "done"] : status === "started" ? ["着手済み", "started"] : ["未着手", "planned"];
  return <span className={"sw-status sw-status-" + info[1]}>{info[0]}</span>;
}

export default function SwitchPage() {
  const [records, setRecords] = useState(() => readRecords(safeStorage()));
  const [screen, setScreen] = useState("capture");
  const [task, setTask] = useState("");
  const [blocker, setBlocker] = useState("unclear");
  const [action, setAction] = useState("");
  const [activeId, setActiveId] = useState(null);
  const [clock, setClock] = useState(Date.now());
  const [notice, setNotice] = useState("");
  const [error, setError] = useState("");
  const [showCompleted, setShowCompleted] = useState(false);
  const active = records.find((item) => item.id === activeId);
  const suggestions = useMemo(() => suggestActions(task, blocker), [task, blocker]);
  const remaining = remainingSeconds(active, clock);
  const inProgress = records.filter((r) => r.status !== "done");
  const completed = records.filter((r) => r.status === "done");

  useEffect(() => {
    if (!active || active.status !== "started") return;
    setClock(Date.now());
    const timer = window.setInterval(() => setClock(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, [activeId, active?.status, active?.startedAt]);

  function persist(next) {
    const limited = next.slice(0, 30);
    setRecords(limited);
    if (!writeRecords(safeStorage(), limited)) {
      setNotice("このブラウザーでは保存できませんでした。画面を閉じると記録が消える可能性があります。");
    } else {
      setNotice("");
    }
  }
  function chooseStep() {
    if (cleanText(task).length < 2) {
      setError("進めたいことを2文字以上で入力してください。");
      return;
    }
    setError("");
    setAction(suggestions[0] || "");
    setScreen("choose");
  }
  function saveStep() {
    try {
      const newRecord = createRecord({ task, blocker, action });
      persist([newRecord, ...records]);
      setActiveId(newRecord.id);
      setClock(Date.now());
      setScreen("run");
      setError("");
    } catch (err) {
      setError(err.message || "入力を確認してください。");
    }
  }
  function updateRecord(id, actionFn) {
    persist(records.map((record) => record.id === id ? actionFn(record) : record));
    setClock(Date.now());
  }
  function selectRecord(id) {
    setActiveId(id);
    setClock(Date.now());
    setScreen("run");
    setError("");
  }
  function returnHome() {
    setActiveId(null);
    setTask("");
    setAction("");
    setBlocker("unclear");
    setScreen("capture");
    setError("");
  }
  function createNext() {
    const lastTask = active?.task || "";
    returnHome();
    setTask(lastTask);
  }
  function removeRecord(id) {
    if (!window.confirm("この記録を削除しますか？ この操作は取り消せません。")) return;
    persist(records.filter((record) => record.id !== id));
    if (activeId === id) returnHome();
  }

  return (
    <div className="sw-app">
      <div className="sw-shell">
        <header className="sw-top">
          <a className="sw-brand" href="/" aria-label="MINAMI MINDLAB 公式サイトへ">MINAMI <span>MINDLAB</span></a>
          <span className="sw-mark">SWITCH / 試作版</span>
        </header>
        <main>
          <section className="sw-hero">
            <div className="sw-eyebrow"><span className="sw-spark" /> 止まっても、また始められる。</div>
            <h1>考えすぎて動けないとき、<br /><em>最初の一歩</em>を決めよう。</h1>
            <p>気合いを入れるより、やることを小さく。今の状態に合わせて行動を選び、着手した事実を残すためのミニツールです。</p>
          </section>

          <div className="sw-layout">
            <section className="sw-card sw-work" aria-label="行動再開ツール">
              <div className="sw-flowtop">
                <span className="sw-section-label">{screen === "capture" ? "01 / やること" : screen === "choose" ? "02 / 最初の一歩" : "03 / 行動する"}</span>
                <span className="sw-stepcount">{screen === "capture" ? "入力" : screen === "choose" ? "選択" : "実行"}</span>
              </div>
              <div className="sw-track" aria-hidden="true">
                <span className={screen !== "capture" ? "is-on" : "is-on"} />
                <span className={screen !== "capture" ? "is-on" : ""} />
                <span className={screen === "run" ? "is-on" : ""} />
              </div>

              {screen === "capture" && (
                <form onSubmit={(event) => { event.preventDefault(); chooseStep(); }}>
                  <h2>何を進めたい？</h2>
                  <p className="sw-lead">大きな目標のままで大丈夫。まずは一つだけ書いてみて。</p>
                  <label className="sw-label" htmlFor="sw-task">今、止まっていること</label>
                  <textarea id="sw-task" className="sw-input sw-textarea" maxLength={140}
                    value={task} onChange={(event) => setTask(event.target.value)}
                    placeholder="例：副業の商品を決めたいのに考えるだけで終わる" rows={3} required />
                  <label className="sw-label" htmlFor="sw-blocker">今、止まっている理由に近いもの</label>
                  <select id="sw-blocker" className="sw-input" value={blocker} onChange={(event) => setBlocker(event.target.value)}>
                    {BLOCKERS.map((item) => <option value={item.id} key={item.id}>{item.label}</option>)}
                  </select>
                  {error && <p className="sw-error" role="alert">{error}</p>}
                  <button className="sw-button sw-primary" type="submit">最初の一歩を選ぶ <span aria-hidden="true">→</span></button>
                </form>
              )}

              {screen === "choose" && (
                <div>
                  <h2>今できることを、1つだけ。</h2>
                  <p className="sw-lead">おすすめは固定ルールによる候補です。自分に合う言葉へ書き換えてもOK。</p>
                  <div className="sw-taskquote">{task}</div>
                  <div className="sw-choices" role="group" aria-label="最初の一歩の候補">
                    {suggestions.map((item, index) => (
                      <button key={item} type="button" aria-pressed={action === item}
                        className={"sw-choice" + (action === item ? " is-selected" : "")}
                        onClick={() => { setAction(item); setError(""); }}>
                        <span className="sw-choice-number">0{index + 1}</span>
                        <span>{item}</span>
                      </button>
                    ))}
                  </div>
                  <label htmlFor="sw-action" className="sw-label">自分の言葉に調整する</label>
                  <input id="sw-action" className="sw-input" maxLength={140} value={action}
                    onChange={(event) => setAction(event.target.value)} />
                  {error && <p className="sw-error" role="alert">{error}</p>}
                  <div className="sw-actions">
                    <button className="sw-button sw-secondary" type="button" onClick={() => setScreen("capture")}>戻る</button>
                    <button className="sw-button sw-primary" type="button" onClick={saveStep}>この一歩に決める →</button>
                  </div>
                </div>
              )}

              {screen === "run" && active && (
                <div>
                  <div className="sw-running-header">
                    <h2>{active.status === "done" ? "一歩、完了。" : "次にするのは、これだけ。"}</h2>
                    <StatusMark status={active.status} />
                  </div>
                  <p className="sw-lead">目標：{active.task}</p>
                  <div className="sw-actioncard">
                    <span className="sw-mini-label">今日の最初の一歩</span>
                    <strong>{active.action}</strong>
                  </div>
                  {active.status === "planned" && (
                    <>
                      <p className="sw-hint">始めるボタンを押すと、2分の目安を表示します。2分で完成させる必要はありません。</p>
                      <button className="sw-button sw-primary" onClick={() => updateRecord(active.id, (record) => startRecord(record))}>今から始める <span aria-hidden="true">▶</span></button>
                    </>
                  )}
                  {active.status === "started" && (
                    <>
                      <div className="sw-timer" role="status" aria-live="off">
                        <span>着手からの2分</span>
                        <strong>{String(Math.floor(remaining / 60)).padStart(2, "0")}:{String(remaining % 60).padStart(2, "0")}</strong>
                        <small>{remaining === 0 ? "2分経過。できたところまででOK。" : "時間は目安。途中で離れても記録は残ります。"}</small>
                      </div>
                      <button className="sw-button sw-primary" onClick={() => updateRecord(active.id, (record) => finishRecord(record))}>この一歩ができた <span aria-hidden="true">✓</span></button>
                      <button className="sw-button sw-textbutton" onClick={returnHome}>未完了のまま一覧に戻る</button>
                    </>
                  )}
                  {active.status === "done" && (
                    <>
                      <div className="sw-done-note">完了した操作を記録しました。大きな目標が終わっていなくても、次の一歩を作れます。</div>
                      <button className="sw-button sw-primary" onClick={createNext}>同じ目標の次の一歩を決める →</button>
                    </>
                  )}
                  <button className="sw-button sw-secondary sw-bottomback" onClick={returnHome}>一覧へ戻る</button>
                </div>
              )}
            </section>

            <aside className="sw-sidebar">
              <section className="sw-card sw-history">
                <div className="sw-sidehead"><div><span className="sw-section-label">MY STEPS</span><h2>続きから再開</h2></div><span className="sw-count">{inProgress.length}</span></div>
                {inProgress.length === 0 && <p className="sw-empty">まだ未完了の一歩はありません。最初の一歩を作ると、ここに残ります。</p>}
                <div className="sw-records">
                  {inProgress.map((item) => (
                    <div className="sw-record" key={item.id}>
                      <button className="sw-recordopen" onClick={() => selectRecord(item.id)}>
                        <span className="sw-date">{formatDate(item.createdAt)} <StatusMark status={item.status} /></span>
                        <strong>{item.task}</strong>
                        <span className="sw-actionsummary">{item.action}</span>
                        <span className="sw-link">{item.status === "started" ? "途中から再開 →" : "取りかかる →"}</span>
                      </button>
                      <button className="sw-delete" onClick={() => removeRecord(item.id)} aria-label={item.task + "の記録を削除"} title="記録を削除">×</button>
                    </div>
                  ))}
                </div>
                {completed.length > 0 && (
                  <>
                    <button className="sw-completed-toggle" onClick={() => setShowCompleted(!showCompleted)} aria-expanded={showCompleted}>
                      完了した記録 {completed.length}件 <span aria-hidden="true">{showCompleted ? "−" : "+"}</span>
                    </button>
                    {showCompleted && completed.map((item) => (
                      <div className="sw-completed" key={item.id}>
                        <button onClick={() => selectRecord(item.id)}>{formatDate(item.completedAt)}　{item.action}</button>
                        <button className="sw-delete" onClick={() => removeRecord(item.id)} aria-label={item.action + "の記録を削除"}>×</button>
                      </div>
                    ))}
                  </>
                )}
              </section>
              <section className="sw-privacy">
                <strong>この試作版について</strong>
                <p>入力内容は、このブラウザー内だけに保存します。サーバー送信、AI解析、アカウント同期、通知はありません。ブラウザーデータの削除や端末変更で記録が消える場合があります。</p>
                <p>これは医療・心理療法の代わりではありません。実際の効果や購入需要はまだ検証中です。</p>
              </section>
            </aside>
          </div>
          {notice && <p className="sw-storage-warning" role="alert">{notice}</p>}
        </main>
        <footer className="sw-footer">
          <span>© MINAMI MINDLAB · 行動再開のための実験的ツール</span>
          <a href="/">公式サイトへ戻る</a>
        </footer>
      </div>
    </div>
  );
}
