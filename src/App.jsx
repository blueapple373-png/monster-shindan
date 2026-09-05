import { useState } from "react";

const questions = [
  { id: 1, monster: "fuander", text: "まだ何も起きていないのに、最悪の結果を想像してしまうことがある" },
  { id: 2, monster: "fuander", text: "相手の反応が分からないと、「嫌われたのかも」と不安になることがある" },
  { id: 3, monster: "fuander", text: "新しいことを始める前に、失敗したらどうしようと考えすぎてしまうことがある" },
  { id: 4, monster: "fuander", text: "物事がうまくいっている時でも、「この先、悪くなるかもしれない」と警戒してしまうことがある" },
  { id: 5, monster: "kako", text: "昔傷ついた経験が、今の出来事と重なって急に思い出されることがある" },
  { id: 6, monster: "kako", text: "今の相手の言動が過去に傷ついた出来事と重なると、必要以上に身構えてしまうことがある" },
  { id: 7, monster: "kako", text: "今起きていること以上に、昔傷ついたときの気持ちまで一緒に大きくなることがある" },
  { id: 8, monster: "kako", text: "今の相手や状況は過去と違うと分かっていても、また同じように傷つく気がしてしまうことがある" },
  { id: 9, monster: "jiko", text: "うまくいかなかったとき、やり方ではなく自分自身がダメだと思ってしまうことがある" },
  { id: 10, monster: "jiko", text: "他の人が簡単にできることが自分にはできないと、情けなくなることがある" },
  { id: 11, monster: "jiko", text: "褒められたり、うまくできたことがあっても、「たまたま」「大したことではない」と打ち消してしまうことがある" },
  { id: 12, monster: "jiko", text: "誰かに否定されたり、受け入れてもらえないと感じると、自分の価値まで低くなったように感じることがある" },
  { id: 13, monster: "jisekin", text: "関係がうまくいかないとき、だいたい自分が原因だと思うことがある" },
  { id: 14, monster: "jisekin", text: "誰かが不機嫌だと、自分が何かしたせいかもと考えてしまうことがある" },
  { id: 15, monster: "jisekin", text: "本来自分だけの責任ではないことでも、「自分がなんとかしなきゃ」と抱え込んでしまうことがある" },
  { id: 16, monster: "jisekin", text: "何か問題が起きると、相手や状況を考えるより先に、「自分に原因があったのかも」と考えてしまうことがある" },
];

const monsters = {
  fuander:  { name: "フアンダー",  sub: "不安モンスター",    color: "#9B8EC4", bg: "#F0EDFB", img: "/FUAN.png", imgTreat:"/FUAN-Treat.png",num: "/01.png",desc: "まだ起きていない未来を心配するモンスター。あなたの見張り番として働いているけれど、時々暴走して、今ここにいることを難しくさせます。", treat: "「今この瞬間」に意識を向ける練習が効きます。深呼吸、五感への集中、「今日起きたいいこと1つ」を見つける習慣。", bridge: "フアンダーが暴走すると、何かが起きる前から動けなくなります。4週間プログラムでは、不安が立ち上がる兆候と、その手前で踏みとどまる方法を一緒に整理します。" },
  kako:     { name: "カコノキズ",  sub: "過去の傷モンスター", color: "#E07070", bg: "#FDF0F0", img: "/KAKO.png", imgTreat:"/KAKO-Treat2.svg",num: "/02.png",desc: "過去の痛みを忘れないモンスター。二度と傷つかないよう守ろうとするけれど、過去と今を混同させてしまうことがあります。", treat: "今の状況と過去の状況を「分けて見る」練習が効きます。「これは今のこと？昔のこと？」と自分に問いかける習慣。", bridge: "カコノキズが反応すると、今の出来事のはずなのに過去の痛みごと呼び起こされます。4週間プログラムでは、その混同が起きる瞬間を見分け、今の状況と切り分ける手がかりを作ります。" },
  jiko:     { name: "ジコヒテイ",  sub: "自己否定モンスター", color: "#6BAE8E", bg: "#EDF7F2", img: "/HITEI.png", imgTreat:"/HITEI-Treat.png",num: "/03.png",desc: "自分の価値を否定するモンスター。完璧でなければと追い込んでくる。でも実は、あなたに高い基準を持ってほしいという願いから生まれています。", treat: "「できたこと」を記録する習慣が効きます。小さいことでいい。歯磨きできた、それだけで充分。", bridge: "ジコヒテイが強く出ると、できなかったことばかりが目に入り、止まった自分をさらに責めてしまいます。4週間プログラムでは、その悪循環を断ち切る最初の一歩を一緒に探します。" },
  jisekin:  { name: "ジセキン",    sub: "自責モンスター",    color: "#6BAEC4", bg: "#EDF4F7", img: "/JISEKI.png",imgTreat:"/JISEKI-Treat.png",num: "/04.png", desc: "全部自分のせいにするモンスター。責任感の強さから生まれているけれど、本来あなたのせいではないことまで背負わせてしまいます。", treat: "「これは自分の責任？相手の責任？」と境界線を引く練習が効きます。責任の範囲を小さく限定する習慣。", bridge: "ジセキンが強いと、自分の範囲を超えたことまで背負い込み、身動きが取れなくなります。4週間プログラムでは、責任の境界線を一緒に引き直していきます。" },
};

// 同率2体の組み合わせごとの橋渡し文（順不同で引けるよう両方向のキーを用意）
const comboBridges = {
  "fuander,kako": "フアンダーが未来を心配し始めると、カコノキズが過去の痛みを呼び起こし、今のことなのか過去のことなのか分からないまま不安だけが膨らみます。4週間プログラムでは、この連鎖がどこから始まるのかを一緒に見分けます。",
  "fuander,jiko": "フアンダーが不安を強めると、ジコヒテイが「だからお前はダメなんだ」と追い打ちをかけ、動けない時間が長引きやすくなります。4週間プログラムでは、その連鎖が始まる瞬間を見分け、早い段階で抜け出すルートを一緒に作ります。",
  "fuander,jisekin": "フアンダーが心配を始めると、ジセキンが「全部自分のせいだ」と引き取り、身動きが取れなくなります。4週間プログラムでは、不安と自責が連動する手前で踏みとどまる方法を整理します。",
  "kako,jiko": "カコノキズが過去の痛みを呼び起こすと、ジコヒテイがそれを「今のあなたの欠陥」として責め立て、二重に苦しくなります。4週間プログラムでは、過去と評価を切り離す練習をします。",
  "kako,jisekin": "カコノキズが過去を呼び起こすと、ジセキンがその痛みまで自分の責任として背負い込んでしまいます。4週間プログラムでは、過去の出来事と今の責任を分けて見る練習をします。",
  "jiko,jisekin": "ジコヒテイが自分を否定し、ジセキンがすべてを背負い込むと、抜け出し口のない自己批判が続きます。4週間プログラムでは、その連鎖を断ち切る最初の一歩を一緒に探します。",
};

function getBridgeText(tops) {
  if (tops.length === 1) return monsters[tops[0]].bridge;
  if (tops.length === 2) {
    const key1 = tops.join(",");
    const key2 = [...tops].reverse().join(",");
    if (comboBridges[key1]) return comboBridges[key1];
    if (comboBridges[key2]) return comboBridges[key2];
  }
  // 3体以上同率、またはペア未定義時の汎用フォールバック
  const names = tops.map(k => monsters[k].name).join("・");
  return `${names}が同時に動くと、原因も止まり方も入り混じり、自分でも何が起きているのか分かりにくくなります。4週間プログラムでは、それぞれの動き方を切り分けて、自分専用の立て直しルートを一緒に整理します。`;
}

const ORDER = ["fuander", "kako", "jiko", "jisekin"];

const labels = ["まったくない", "ほとんどない", "ときどきある", "よくある", "かなりよくある"];

// 同率判定: トップスコアと同点のものを全て返す
const getTopMonsters = (scores) => {
  const max = Math.max(...Object.values(scores));
  return ORDER.filter(k => scores[k] === max);
};

// 実測前の暫定閾値。回答分布を確認してから調整する。
const getResultLevel = (scores) => {
  const highestScore = Math.max(...Object.values(scores));
  if (highestScore <= 2) return "minimal";
  if (highestScore <= 5) return "mild";
  return "normal";
};

export default function App() {
  const [step, setStep] = useState("intro");
  const [answers, setAnswers] = useState({});
  const [current, setCurrent] = useState(0);

  const handleAnswer = (val) => {
    const newAnswers = { ...answers, [questions[current].id]: val };
    setAnswers(newAnswers);
    if (current < questions.length-1) setCurrent(current+1);
    else setStep("result");
  };

  const getScores = () => {
    const scores = { fuander:0, kako:0, jiko:0, jisekin:0 };
    questions.forEach(q => { if (answers[q.id]!==undefined) scores[q.monster]+=answers[q.id]; });
    return scores;
  };

  const progress = Math.round((current/questions.length)*100);

  const resetDiagnosis = () => {
    setStep("intro");
    setAnswers({});
    setCurrent(0);
  };

  return (
    <div style={{ minHeight:"100vh", background:"linear-gradient(135deg,#FDF6FF 0%,#EFF6FF 50%,#FFF5F5 100%)", fontFamily:"'Hiragino Kaku Gothic ProN','Noto Sans JP',sans-serif", display:"flex", alignItems:"center", justifyContent:"center", padding:"24px 16px" }}>
      <div style={{ width:"100%", maxWidth:520 }}>
        <a href="/" style={{ display:"inline-block", color:"#6B6B80", fontSize:13, textDecoration:"none", marginBottom:18 }}>← MINAMI MINDLAB公式サイトへ</a>

        {step==="intro" && (
          <div style={{ textAlign:"center" }}>
            <div style={{ fontSize:56, marginBottom:8 }}>🧠</div>
            <h1 style={{ fontSize:22, fontWeight:800, color:"#2D2D3A", marginBottom:8, lineHeight:1.4 }}>あなたの脳の住人は<br/>どのモンスター？</h1>
            <p style={{ color:"#6B6B80", fontSize:14, lineHeight:1.8, marginBottom:12 }}>16問の質問に答えると、<br/>今いちばん前に出ているモンスターが分かります。</p>
            <p style={{ color:"#6B6B80", fontSize:13, lineHeight:1.8, marginBottom:32 }}>最近1か月の生活を振り返って、<br/>それぞれの反応がどのくらいあったかを選んでください。</p>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(2, 1fr)", gap:20, marginBottom:32 }}>
  {Object.values(monsters).map(m=>(
    <div key={m.name} style={{ background:m.bg, border:`2px solid ${m.color}30`, borderRadius:16, padding:"8px 12px", textAlign:"center", boxSizing:"border-box" }}>
      <img src={m.img} alt={m.name} style={{ width:96, height:96, objectFit:"contain", display:"block", margin:"0 auto 2px" }} />
      <div style={{ fontSize:12, fontWeight:700, color:m.color, marginTop:0 }}>{m.name}</div>
    </div>
  ))}
</div>
            <button onClick={()=>setStep("quiz")} style={{ background:"linear-gradient(135deg,#9B8EC4,#E07070)", color:"white", border:"none", borderRadius:50, padding:"16px 48px", fontSize:16, fontWeight:700, cursor:"pointer", boxShadow:"0 4px 20px rgba(155,142,196,0.4)" }}>診断をはじめる →</button>
          </div>
        )}

        {step==="quiz" && (
          <div>
            <div style={{ marginBottom:24 }}>
              <div style={{ display:"flex", justifyContent:"space-between", marginBottom:8 }}>
                <span style={{ fontSize:12, color:"#9B9BAA" }}>質問 {current+1} / {questions.length}</span>
                <span style={{ fontSize:12, color:"#9B8EC4", fontWeight:700 }}>{progress}%</span>
              </div>
              <div style={{ height:6, background:"#E8E8F0", borderRadius:99 }}>
                <div style={{ height:"100%", width:`${progress}%`, background:"linear-gradient(90deg,#9B8EC4,#E07070)", borderRadius:99, transition:"width 0.3s ease" }}/>
              </div>
            </div>
            <div style={{ background:"white", borderRadius:24, padding:28, boxShadow:"0 4px 30px rgba(0,0,0,0.06)", marginBottom:24 }}>
              <div style={{ fontSize:11, color:"#9B8EC4", fontWeight:700, marginBottom:12, letterSpacing:1 }}>Q{current+1}</div>
              <p style={{ fontSize:16, color:"#2D2D3A", lineHeight:1.7, fontWeight:500 }}>{questions[current].text}</p>
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
              {labels.map((label,i)=>(
                <button key={i} onClick={()=>handleAnswer(i)} style={{ padding:"14px 20px", background:"white", border:"2px solid #E8E8F0", borderRadius:16, fontSize:14, color:"#4A4A5A", cursor:"pointer", textAlign:"left", fontWeight:500, display:"flex", alignItems:"center", gap:12 }}>
                  <span style={{ width:28, height:28, borderRadius:"50%", background:`hsl(${i*30+240},60%,${85-i*8}%)`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:12, fontWeight:800, color:"white", flexShrink:0 }}>{i}</span>
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}

        {step==="result" && (()=>{
          const scores = getScores();
          const resultLevel = getResultLevel(scores);
          const isMinimal = resultLevel === "minimal";
          const isMild = resultLevel === "mild";
          const tops = getTopMonsters(scores);
          const isMultiple = tops.length > 1;

          if (isMinimal) {
            return (
              <div>
                <div style={{ background:"white", borderRadius:24, padding:28, boxShadow:"0 4px 30px rgba(0,0,0,0.06)", textAlign:"center", marginBottom:20 }}>
                  <div style={{ fontSize:13, color:"#9B9BAA", marginBottom:10 }}>診断結果</div>
                  <h2 style={{ fontSize:22, fontWeight:800, color:"#2D2D3A", lineHeight:1.6, margin:"0 0 16px" }}>
                    今回は、強く前に出ている<br/>モンスターは見つかりませんでした
                  </h2>
                  <p style={{ color:"#4A4A5A", fontSize:14, lineHeight:1.9, margin:"0 0 12px", textAlign:"left" }}>
                    最近1か月では、この診断で扱う4つの反応は、どれも強く出ていなかったようです。
                  </p>
                  <p style={{ color:"#4A4A5A", fontSize:14, lineHeight:1.9, margin:"0 0 12px", textAlign:"left" }}>
                    これは「悩みがない」「何も困っていない」という意味ではなく、今回の16問では特定の反応が強く表れなかった、という結果です。
                  </p>
                  <p style={{ color:"#6B6B80", fontSize:13, lineHeight:1.9, margin:0, textAlign:"left" }}>
                    気持ちの状態は、時期や出来事によって変わります。また揺れを感じたときに、今の状態を確かめるために使ってください。
                  </p>
                </div>
                <button onClick={resetDiagnosis} style={{ width:"100%", background:"linear-gradient(135deg,#9B8EC4,#E07070)", color:"white", border:"none", borderRadius:50, padding:"16px", fontSize:15, fontWeight:700, cursor:"pointer" }}>もう一度診断する</button>
              </div>
            );
          }

          return (
            <div>
              {/* ヘッダー */}
              <div style={{ textAlign:"center", marginBottom:24 }}>
                <div style={{ fontSize:13, color:"#9B9BAA", marginBottom:8 }}>
                  {isMild
                    ? (isMultiple ? "診断結果" : "今、少し顔を出しているのは")
                    : (isMultiple ? "今いちばん前に出ているモンスター（同率）" : "今いちばん前に出ているモンスター")}
                </div>
                <div style={{ display:"flex", justifyContent:"center", gap:8, marginBottom:8 }}>
                {tops.map(key=>(
  <img
    key={key}
    src={monsters[key].img}
    alt={monsters[key].name}
    style={{
      width:110,
      height:110,
      objectFit:"contain",
      display:"block"
    }}
  />
))}
                </div>
                {isMultiple ? (
                  <div>
                    <div style={{ display:"flex", justifyContent:"center", gap:12, flexWrap:"wrap" }}>
                      {tops.map(key=>(
                        <span key={key} style={{ fontSize:22, fontWeight:900, color:monsters[key].color }}>{monsters[key].name}</span>
                      ))}
                    </div>
                    <div style={{ fontSize:13, color:"#9B9BAA", marginTop:4 }}>
                      {isMild
                        ? "いくつかの反応が、同じくらい少し見られました"
                        : "複数のモンスターが同じくらい活発です"}
                    </div>
                  </div>
                ) : (
                  <div>
                    <h2 style={{ fontSize:28, fontWeight:900, color:monsters[tops[0]].color, marginBottom:4 }}>{monsters[tops[0]].name}</h2>
                    <div style={{ fontSize:13, color:"#9B9BAA" }}>{monsters[tops[0]].sub}</div>
                    {isMild && (
                      <p style={{ fontSize:13, color:"#6B6B80", lineHeight:1.8, margin:"10px auto 0", maxWidth:420 }}>
                        強く出ているわけではありませんが、最近1か月では、{monsters[tops[0]].name}の反応が少し見られました。
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* 各モンスターの説明（トップのみ） */}
              {tops.map(key=>{
                const m = monsters[key];
                return (
                  <div key={key}>
                    <div style={{ background:m.bg, border:`2px solid ${m.color}30`, borderRadius:20, padding:24, marginBottom:16 }}>
                      <div
  style={{
    fontSize:13,
    fontWeight:700,
    color:m.color,
    marginBottom:8,
    display:"flex",
    alignItems:"center",
    gap:8
  }}
>
  <img
    src={m.img}
    alt={m.name}
    style={{
      width:40,
      height:40,
      objectFit:"contain"
    }}
  />
  {m.name}
</div>
                      <p style={{ color:"#2D2D3A", fontSize:14, lineHeight:1.8, margin:0 }}>{m.desc}</p>
                    </div>
                    <div style={{ background:"white", borderRadius:20, padding:24, marginBottom:16, boxShadow:"0 4px 20px rgba(0,0,0,0.05)" }}>
                      <div
  style={{
    fontSize:13,
    fontWeight:700,
    color:"#4A4A5A",
    marginBottom:12,
    display:"flex",
    alignItems:"center",
    gap:8
  }}
>
 <img
  src={m.imgTreat}
  alt={m.name}
  style={{
    width:40,
    height:40,
    objectFit:"contain"
  }}
/>
  {isMild ? `もし${m.name}が顔を出したら` : `${m.name}のトリートヒント`}
</div>
                      <p style={{ color:"#4A4A5A", fontSize:14, lineHeight:1.8, margin:0 }}>{m.treat}</p>
                    </div>
                  </div>
                );
              })}

              <button onClick={resetDiagnosis} style={{ width:"100%", background:"linear-gradient(135deg,#9B8EC4,#E07070)", color:"white", border:"none", borderRadius:50, padding:"16px", fontSize:15, fontWeight:700, cursor:"pointer", marginTop:8 }}>もう一度診断する</button>

          {(() => {
            const primary = monsters[tops[0]];
            const bridgeText = getBridgeText(tops);
            return (
              <div style={{
                background: primary.bg,
                border: `2px solid ${primary.color}30`,
                borderRadius: 20,
                padding: 24,
                marginTop: 20,
              }}>
                <div style={{ fontSize:13, fontWeight:700, color:primary.color, marginBottom:10 }}>
                  診断結果からのご案内
                </div>
                <p style={{ fontSize:14, lineHeight:1.9, color:"#2D2D3A", margin:0 }}>
                  {bridgeText}
                </p>
              </div>
            );
          })()}

          <a href="/lp" style={{
  display:"block",
  width:"calc(100% - 32px)",
  background:"linear-gradient(135deg,#9B8EC4,#E07070)",
  color:"white",
  border:"none",
  borderRadius:50,
  padding:"16px",
  fontSize:15,
  fontWeight:700,
  textAlign:"center",
  textDecoration:"none",
  marginTop:12,
}}>
  4週間プログラムの詳細を見る →
</a>  </div>
          );
        })()}
      </div>
    </div>
  );
}
