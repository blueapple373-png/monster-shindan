import { useState } from "react";

const questions = [
  { id: 1, monster: "fuander", text: "まだ何も起きていないのに、最悪の結果を想像してしまうことがある" },
  { id: 2, monster: "fuander", text: "相手から返信が来ないと、嫌われたかもと不安になる" },
  { id: 3, monster: "fuander", text: "新しいことを始める前に、失敗したらどうしようと考えすぎてしまう" },
  { id: 4, monster: "fuander", text: "楽しいはずの時間でも、「この後何か悪いことが起きるかも」と思ってしまう" },
  { id: 5, monster: "kako", text: "昔傷ついた経験が、今の出来事と重なって急に思い出されることがある" },
  { id: 6, monster: "kako", text: "一度裏切られると、その人をなかなか信用できなくなる" },
  { id: 7, monster: "kako", text: "過去の失敗を、何度も頭の中で繰り返してしまうことがある" },
  { id: 8, monster: "kako", text: "似たような状況になると、昔の感情がよみがえってくる" },
  { id: 9, monster: "jiko", text: "うまくいかなかったとき、やり方ではなく自分自身がダメだと思ってしまう" },
  { id: 10, monster: "jiko", text: "他の人が簡単にできることが自分にはできないと、情けなくなる" },
  { id: 11, monster: "jiko", text: "褒められても「どうせ本心じゃない」と素直に受け取れない" },
  { id: 12, monster: "jiko", text: "自分には価値がないと感じる瞬間がある" },
  { id: 13, monster: "jisekin", text: "関係がうまくいかないとき、だいたい自分が原因だと思う" },
  { id: 14, monster: "jisekin", text: "誰かが不機嫌だと、自分が何かしたせいかもと考えてしまう" },
  { id: 15, monster: "jisekin", text: "本来自分の責任ではないことでも、謝ってしまうことが多い" },
  { id: 16, monster: "jisekin", text: "何か悪いことが起きると、真っ先に「私のせいだ」と思う" },
];

const monsters = {
  fuander:  { name: "フアンダー",  sub: "不安モンスター",    color: "#9B8EC4", bg: "#F0EDFB", img: "/FUAN.png", imgTreat:"/FUAN-Treat.png",num: "/01.png",desc: "まだ起きていない未来を心配するモンスター。あなたの見張り番として働いているけれど、時々暴走して、今ここにいることを難しくさせます。", treat: "「今この瞬間」に意識を戻す練習が効きます。深呼吸、五感への集中、「今日起きたいいこと1つ」を見つける習慣。" },
  kako:     { name: "カコノキズ",  sub: "過去の傷モンスター", color: "#E07070", bg: "#FDF0F0", img: "/KAKO.png", imgTreat:"/KAKO-Treat.png",num: "/02.png",desc: "過去の痛みを忘れないモンスター。二度と傷つかないよう守ろうとするけれど、過去と今を混同させてしまうことがあります。", treat: "今の状況と過去の状況を「分けて見る」練習が効きます。「これは今のこと？昔のこと？」と自分に問いかける習慣。" },
  jiko:     { name: "ジコヒテイ",  sub: "自己否定モンスター", color: "#6BAE8E", bg: "#EDF7F2", img: "/HITEI.png", imgTreat:"/HITEI-Treat.png",num: "/03.png",desc: "自分の価値を否定するモンスター。完璧でなければと追い込んでくる。でも実は、あなたに高い基準を持ってほしいという願いから生まれています。", treat: "「できたこと」を記録する習慣が効きます。小さいことでいい。歯磨きできた、それだけで充分。" },
  jisekin:  { name: "ジセキン",    sub: "自責モンスター",    color: "#6BAEC4", bg: "#EDF4F7", img: "/JISEKI.png",imgTreat:"/JISEKI-Treat.png",num: "/04.png", desc: "全部自分のせいにするモンスター。責任感の強さから生まれているけれど、本来あなたのせいではないことまで背負わせてしまいます。", treat: "「これは自分の責任？相手の責任？」と境界線を引く練習が効きます。責任の範囲を小さく限定する習慣。" },
};

const ORDER = ["fuander", "kako", "jiko", "jisekin"];

const mbtiMap = {
  INFP:["fuander","kako"], INFJ:["jiko","jisekin"], ENFP:["fuander","jiko"], ENFJ:["jisekin","kako"],
  INTP:["jiko","fuander"], INTJ:["jiko","jisekin"], ENTP:["fuander","kako"], ENTJ:["jisekin","jiko"],
  ISFP:["kako","fuander"], ISFJ:["jisekin","kako"], ESFP:["fuander","kako"], ESFJ:["jisekin","fuander"],
  ISTP:["jiko","jisekin"], ISTJ:["jiko","jisekin"], ESTP:["fuander","jiko"], ESTJ:["jisekin","jiko"],
};

const labels = ["まったくない", "あまりない", "ときどきある", "よくある", "いつもある"];

// 同率判定: トップスコアと同点のものを全て返す
const getTopMonsters = (scores) => {
  const max = Math.max(...Object.values(scores));
  return ORDER.filter(k => scores[k] === max);
};

function DiamondChart({ scores, maxScore }) {
  const size = 240, cx = 120, cy = 120, r = 78;
  const dirs = [{ dx:0,dy:-1 },{ dx:1,dy:0 },{ dx:0,dy:1 },{ dx:-1,dy:0 }];
  const outer = dirs.map(d => ({ x: cx+d.dx*r, y: cy+d.dy*r }));
  const inner = ORDER.map((key,i) => {
    const ratio = Math.min(scores[key]/maxScore,1);
    return { x: cx+dirs[i].dx*r*ratio, y: cy+dirs[i].dy*r*ratio };
  });
  const toPath = pts => pts.map((p,i)=>`${i===0?"M":"L"}${p.x},${p.y}`).join(" ")+"Z";
  const guides = [0.25,0.5,0.75,1.0].map(ratio=>dirs.map(d=>({ x:cx+d.dx*r*ratio, y:cy+d.dy*r*ratio })));
  const labelPos = [
    { x:cx, y:cy-r-14, anchor:"middle" },
    { x:cx+r+14, y:cy+4, anchor:"start" },
    { x:cx, y:cy+r+18, anchor:"middle" },
    { x:cx-r-14, y:cy+4, anchor:"end" },
  ];
  return (
   <svg
  width={size}
  height={size}
  viewBox={`0 0 ${size} ${size}`}
  style={{ display:"block", margin:"0 auto" }}
>
      {guides.map((pts,gi)=>(
        <polygon key={gi} points={pts.map(p=>`${p.x},${p.y}`).join(" ")} fill="none" stroke="#E0E0E8" strokeWidth={gi===3?1.5:0.8}/>
      ))}
      {dirs.map((d,i)=>(
        <line key={i} x1={cx} y1={cy} x2={cx+d.dx*r} y2={cy+d.dy*r} stroke="#D0D0DC" strokeWidth={0.8}/>
      ))}
      <path d={toPath(inner)} fill="rgba(155,142,196,0.35)" stroke="#9B8EC4" strokeWidth={1.5}/>
     {ORDER.map((key,i)=>(
  <image
    key={key}
    href={monsters[key].num}
    xlinkHref={monsters[key].num}
    x={labelPos[i].x - 10}
    y={labelPos[i].y - 10}
    width="20"
    height="20"
    preserveAspectRatio="xMidYMid meet"
  />
))}
    </svg>
  );
}

export default function App() {
  const [step, setStep] = useState("intro");
  const [mbti, setMbti] = useState("");
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
    if (mbti && mbtiMap[mbti]) mbtiMap[mbti].forEach(m => { scores[m]+=2; });
    return scores;
  };

  const progress = Math.round((current/questions.length)*100);
  const maxScore = 16+2;

  return (
    <div style={{ minHeight:"100vh", background:"linear-gradient(135deg,#FDF6FF 0%,#EFF6FF 50%,#FFF5F5 100%)", fontFamily:"'Hiragino Kaku Gothic ProN','Noto Sans JP',sans-serif", display:"flex", alignItems:"center", justifyContent:"center", padding:"24px 16px" }}>
      <div style={{ width:"100%", maxWidth:520 }}>

        {step==="intro" && (
          <div style={{ textAlign:"center" }}>
            <div style={{ fontSize:56, marginBottom:8 }}>🧠</div>
            <h1 style={{ fontSize:22, fontWeight:800, color:"#2D2D3A", marginBottom:8, lineHeight:1.4 }}>あなたの脳の住人は<br/>どのモンスター？</h1>
            <p style={{ color:"#6B6B80", fontSize:14, lineHeight:1.8, marginBottom:32 }}>16問の質問に答えると、<br/>あなたのネガティブパターンを<br/>引き起こしやすいモンスターが分かります。</p>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(2, 1fr)", gap:20, marginBottom:32 }}>
  {Object.values(monsters).map(m=>(
    <div key={m.name} style={{ background:m.bg, border:`2px solid ${m.color}30`, borderRadius:16, padding:"8px 12px", textAlign:"center", boxSizing:"border-box" }}>
      <img src={m.img} alt={m.name} style={{ width:96, height:96, objectFit:"contain", display:"block", margin:"0 auto 2px" }} />
      <div style={{ fontSize:12, fontWeight:700, color:m.color, marginTop:0 }}>{m.name}</div>
    </div>
  ))}
</div>
            <button onClick={()=>setStep("mbti")} style={{ background:"linear-gradient(135deg,#9B8EC4,#E07070)", color:"white", border:"none", borderRadius:50, padding:"16px 48px", fontSize:16, fontWeight:700, cursor:"pointer", boxShadow:"0 4px 20px rgba(155,142,196,0.4)" }}>診断をはじめる →</button>
          </div>
        )}

        {step==="mbti" && (
          <div>
            <h2 style={{ fontSize:18, fontWeight:800, color:"#2D2D3A", marginBottom:8, textAlign:"center" }}>MBTIタイプを教えてください</h2>
            <p style={{ color:"#6B6B80", fontSize:13, textAlign:"center", marginBottom:24 }}>知らなくてもスキップできます</p>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:8, marginBottom:24 }}>
              {Object.keys(mbtiMap).map(type=>(
                <button key={type} onClick={()=>setMbti(type)} style={{ padding:"10px 4px", border:`2px solid ${mbti===type?"#9B8EC4":"#E0E0E8"}`, borderRadius:12, background:mbti===type?"#F0EDFB":"white", color:mbti===type?"#9B8EC4":"#4A4A5A", fontWeight:700, fontSize:13, cursor:"pointer" }}>{type}</button>
              ))}
            </div>
            <button onClick={()=>setStep("quiz")} style={{ width:"100%", background:"linear-gradient(135deg,#9B8EC4,#E07070)", color:"white", border:"none", borderRadius:50, padding:"16px", fontSize:16, fontWeight:700, cursor:"pointer" }}>{mbti?`${mbti}で診断する →`:"スキップして診断する →"}</button>
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
          const tops = getTopMonsters(scores);
          const isMultiple = tops.length > 1;

          return (
            <div>
              {/* ヘッダー */}
              <div style={{ textAlign:"center", marginBottom:24 }}>
                <div style={{ fontSize:13, color:"#9B9BAA", marginBottom:8 }}>
                  {isMultiple ? "あなたの脳の住人（同率）" : "あなたの脳の住人"}
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
                    <div style={{ fontSize:13, color:"#9B9BAA", marginTop:4 }}>複数のモンスターが同じくらい活発です</div>
                  </div>
                ) : (
                  <div>
                    <h2 style={{ fontSize:28, fontWeight:900, color:monsters[tops[0]].color, marginBottom:4 }}>{monsters[tops[0]].name}</h2>
                    <div style={{ fontSize:13, color:"#9B9BAA" }}>{monsters[tops[0]].sub}</div>
                  </div>
                )}
              </div>

              {/* ひし形チャート */}
              <div style={{ background:"white", borderRadius:20, padding:24, marginBottom:20, boxShadow:"0 4px 20px rgba(0,0,0,0.05)" }}>
                <div style={{ fontSize:13, fontWeight:700, color:"#4A4A5A", marginBottom:16, textAlign:"center" }}>4体のバランス</div>
                <div style={{ display:"flex", justifyContent:"center", marginBottom:16 }}>
                  <DiamondChart scores={scores} maxScore={maxScore}/>
                </div>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8 }}>
                  {ORDER.map((key,i)=>(
                    <div key={key} style={{ display:"flex", alignItems:"center", gap:6 }}>
                      <span style={{ width:10, height:10, borderRadius:"50%", background:monsters[key].color, flexShrink:0 }}/>
                      <span style={{ fontSize:11, color:"#4A4A5A", fontWeight:tops.includes(key)?700:400 }}>
                        {String(i+1).padStart(2,"0")} {monsters[key].name}
                      </span>
                    </div>
                  ))}
                </div>
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
  {m.name}のトリートヒント
</div>
                      <p style={{ color:"#4A4A5A", fontSize:14, lineHeight:1.8, margin:0 }}>{m.treat}</p>
                    </div>
                  </div>
                );
              })}

              <button onClick={()=>{ setStep("intro"); setAnswers({}); setCurrent(0); setMbti(""); }} style={{ width:"100%", background:"linear-gradient(135deg,#9B8EC4,#E07070)", color:"white", border:"none", borderRadius:50, padding:"16px", fontSize:15, fontWeight:700, cursor:"pointer", marginTop:8 }}>もう一度診断する</button>
            </div>
          );
        })()}
      </div>
    </div>
  );
}
