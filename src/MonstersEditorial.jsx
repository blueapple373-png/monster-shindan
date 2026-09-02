import { useEffect } from "react";
import "./site.css";
import "./monsters-editorial.css";
import { SiteLayout, siteLinks } from "./SiteChrome.jsx";

const monsters = [
  {
    name: "フアンダー",
    label: "不安",
    english: "ANXIETY",
    image: "/FUAN.png",
    description: "まだ起きていないことを繰り返し考え、悪い未来を先回りしてしまう反応。",
  },
  {
    name: "カコノキズ",
    label: "過去の傷",
    english: "PAST WOUNDS",
    image: "/KAKO.png",
    description: "今の出来事に過去の痛みが重なり、当時の感覚まで強く戻ってくる反応。",
  },
  {
    name: "ジコヒテイ",
    label: "自己否定",
    english: "SELF-NEGATION",
    image: "/HITEI.png",
    description: "失敗や欠点から、自分の価値や存在そのものまで否定しようとする反応。",
  },
  {
    name: "ジセキン",
    label: "自責",
    english: "SELF-BLAME",
    image: "/JISEKI.png",
    description: "起きたことの責任を必要以上に自分へ集め、自分を責め続ける反応。",
  },
];

const usageSteps = [
  {
    title: "気づく",
    text: "まず、今どの反応が強くなっているのかを見つけます。",
  },
  {
    title: "切り分ける",
    text: "「私はダメ」ではなく、「今はこの反応が出ている」と自分全体から切り分けます。",
  },
  {
    title: "扱う",
    text: "反応に飲み込まれたまま結論を出さず、その場でできる小さな対処を選びます。",
  },
];

function ChapterHeader({ number, label, title, titleId, children }) {
  return (
    <div className="monster-chapter-head">
      <div className="monster-chapter-number" aria-hidden="true">{number}</div>
      <div className="monster-chapter-intro">
        <span>{label}</span>
        <h2 id={titleId}>{title}</h2>
      </div>
      <div className="monster-chapter-copy">{children}</div>
    </div>
  );
}

function MonstersEditorial() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "ネガティブモンスターとは｜MINAMI MINDLAB";
  }, []);

  return (
    <SiteLayout pageClass="monsters-editorial-page">
      <main>
        <section className="page-hero compact monsters-page-hero">
          <div className="hero-inner">
            <span className="eyebrow">NEGATIVE MONSTERS</span>
            <h1>ネガティブモンスターとは</h1>
            <p className="hero-copy">
              強く出ている反応を、自分そのものから切り分けて扱うための名前です。
            </p>
          </div>
        </section>

        <section className="monster-system-section">
          <div className="container monsters-container">
            <section className="monster-purpose monster-chapter" aria-labelledby="monster-purpose-title">
              <ChapterHeader number="01" label="PURPOSE" title="何に使うのか" titleId="monster-purpose-title">
                <p>
                  感情が強いときは、「起きている反応」と「自分自身」が一体化しやすくなります。
                  ネガティブモンスターは、その反応に名前をつけて一度外に置き、次の行動を選びやすくするための仕組みです。
                </p>
              </ChapterHeader>

              <div className="monster-usage-steps">
                {usageSteps.map((step) => (
                  <article className="monster-usage-step" key={step.title}>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="monster-reactions monster-chapter" aria-labelledby="monster-reactions-title">
              <ChapterHeader number="02" label="REACTIONS" title="反応は4つに整理しています" titleId="monster-reactions-title">
                <p>診断では、今の自分にどの反応が強く出やすいかを整理します。</p>
              </ChapterHeader>

              <div className="monster-reaction-list">
                {monsters.map((monster) => (
                  <article className="monster-reaction-item" key={monster.name}>
                    <div className="monster-reaction-visual" aria-hidden="true">
                      <img src={monster.image} alt="" />
                    </div>
                    <div className="monster-reaction-copy">
                      <span>{monster.english}</span>
                      <h3>{monster.label}</h3>
                      <small>{monster.name}</small>
                      <p>{monster.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="monster-example monster-chapter" aria-labelledby="monster-example-title">
              <ChapterHeader number="03" label="HOW TO USE" title="たとえば、返信が来ないとき" titleId="monster-example-title">
                <p>反応と自分を切り分けると、同じ出来事でも次に選べる行動が変わります。</p>
              </ChapterHeader>

              <div className="monster-example-flow">
                <div className="monster-example-side">
                  <span>反応と自分が一体化していると</span>
                  <p>「嫌われたのかもしれない。私に価値がないからだ」と、自分全体の問題として受け取りやすくなります。</p>
                </div>
                <div className="monster-example-arrow" aria-hidden="true">→</div>
                <div className="monster-example-side">
                  <span>モンスターとして切り分けると</span>
                  <p>「今はフアンダーが強く出ている」と捉え、結論を急ぐ前に、今できる対処へ移れます。</p>
                </div>
              </div>

              <p className="monster-example-note">
                モンスターは倒したり消したりする対象ではありません。今起きている反応を、自分そのものと混同しないための目印です。
              </p>
            </section>

            <section className="monster-diagnosis-cta" aria-labelledby="monster-diagnosis-title">
              <div>
                <span className="monster-diagnosis-label">MONSTER DIAGNOSIS</span>
                <h2 id="monster-diagnosis-title">今の自分に強く出やすい反応を整理する</h2>
                <p>4つの反応のうち、今の自分に強く出やすいものを無料診断で確認できます。</p>
              </div>
              <a className="monster-diagnosis-button" href={siteLinks.diagnosis}>
                無料でモンスター診断を受ける <span aria-hidden="true">→</span>
              </a>
            </section>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}

export default MonstersEditorial;
