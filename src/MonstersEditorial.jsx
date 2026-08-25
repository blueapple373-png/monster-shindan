import { useEffect, useState } from "react";
import "./site.css";
import "./monsters-editorial.css";

const links = {
  home: "/",
  about: "/about",
  services: "/services",
  monsters: "/monsters",
  app: "/app",
  business: "/business",
  profile: "/profile",
  news: "/news",
  blog: "/blog",
  contact: "/contact",
  privacy: "/privacy",
  tokushoho: "/tokushoho",
  diagnosis: "/diagnosis",
};

const monsters = [
  {
    name: "フアンダー",
    label: "不安",
    english: "ANXIETY",
    image: "/FUAN.png",
    description: "まだ起きていないことを繰り返し考え、不安に押しつぶされそうになる反応。",
  },
  {
    name: "カコノキズ",
    label: "過去の傷",
    english: "PAST WOUNDS",
    image: "/KAKO.png",
    description: "過去の傷が現在の出来事と重なり、再び痛みが広がる反応。",
  },
  {
    name: "ジコヒテイ",
    label: "自己否定",
    english: "SELF-NEGATION",
    image: "/HITEI.png",
    description: "失敗や欠点だけを見て、自分の良さや存在まで否定しようとする反応。",
  },
  {
    name: "ジセキン",
    label: "自責",
    english: "SELF-BLAME",
    image: "/JISEKI.png",
    description: "起きたことをすべて自分の責任として引き受け、自分を責め続ける反応。",
  },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href={links.home}>
          MINAMI MINDLAB
          <small className="brand-credit">
            <span>operated by</span>
            <img src="/cache-cache-mark.svg" alt="" aria-hidden="true" />
            <span>CACHE-CACHE</span>
          </small>
        </a>
        <nav className="desktop-nav" aria-label="メインナビゲーション">
          <a href={links.services}>サービス</a>
          <a href={links.blog}>ブログ</a>
          <a href={links.about}>MINAMI MINDLABとは</a>
          <a className="header-cta" href={links.diagnosis}>無料診断</a>
        </nav>
        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-label="メニューを開く"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>
      <nav className={`mobile-nav ${menuOpen ? "open" : ""}`} aria-label="モバイルナビゲーション">
        <a href={links.about}>MINAMI MINDLABとは</a>
        <a href={links.services}>サービス</a>
        <a href={links.monsters}>モンスター</a>
        <a href={links.app}>Treatアプリ</a>
        <a href={links.business}>法人・提携</a>
        <a href={links.profile}>運営者</a>
        <a href={links.news}>お知らせ</a>
        <a href={links.blog}>ブログ</a>
        <a href={links.contact}>お問い合わせ</a>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <div className="footer-brand">
              MINAMI MINDLAB
              <small>operated by CACHE-CACHE</small>
            </div>
            <p className="footer-copy">感情をなくすのではなく、起きている反応を知り、扱える形にする。</p>
          </div>
          <div className="footer-nav">
            <div>
              <strong>MINAMI MINDLAB</strong>
              <a href={links.about}>私たちについて</a>
              <a href={links.monsters}>ネガティブモンスター</a>
              <a href={links.app}>Treatアプリ</a>
            </div>
            <div>
              <strong>サービス</strong>
              <a href={links.services}>サービス一覧</a>
              <a href={links.diagnosis}>モンスター診断</a>
              <a href={links.business}>法人・団体向け</a>
            </div>
            <div>
              <strong>運営情報</strong>
              <a href={links.profile}>運営者について</a>
              <a href={links.news}>お知らせ</a>
              <a href={links.blog}>ブログ</a>
              <a href={links.contact}>お問い合わせ</a>
              <a href={links.privacy}>プライバシーポリシー</a>
              <a href={links.tokushoho}>特定商取引法に基づく表記</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">© CACHE-CACHE / MINAMI MINDLAB</div>
      </div>
    </footer>
  );
}

function MonstersEditorial() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "4体のネガティブモンスター｜MINAMI MINDLAB";
  }, []);

  return (
    <div className="mindlab-site monsters-editorial-page">
      <Header />
      <main>
        <section className="page-hero compact monsters-page-hero">
          <div className="hero-inner">
            <span className="eyebrow">NEGATIVE MONSTERS</span>
            <h1>4体のネガティブモンスター</h1>
            <p className="hero-copy">本人や人格ではなく、自動的に起きる反応を理解するための感情翻訳装置です。</p>
          </div>
        </section>

        <section className="monster-showcase-section">
          <div className="container">
            <div className="monster-showcase" aria-label="4体のネガティブモンスター">
              {monsters.map((monster, index) => (
                <article className={`monster-showcase-item monster-showcase-item-${index + 1}`} key={monster.name}>
                  <div className="monster-showcase-visual">
                    <span className="monster-showcase-halo" aria-hidden="true" />
                    <img src={monster.image} alt={monster.name} />
                  </div>
                  <span className="monster-showcase-english">{monster.english}</span>
                  <h2>{monster.name}</h2>
                  <strong>{monster.label}</strong>
                  <p>{monster.description}</p>
                </article>
              ))}
            </div>

            <section className="monster-meaning" aria-labelledby="monster-meaning-title">
              <div className="monster-meaning-mark" aria-hidden="true">✦</div>
              <div>
                <span className="monster-meaning-label">HOW TO READ</span>
                <h2 id="monster-meaning-title">モンスターは、敵ではありません</h2>
                <p>
                  ネガティブモンスターは、悪者として倒すための存在ではありません。
                  「今、自分の中でこの反応が強くなっている」と気づき、自分を責める代わりに、扱い方へ移るための目印です。
                </p>
              </div>
            </section>

            <section className="monster-diagnosis-cta" aria-labelledby="monster-diagnosis-title">
              <div>
                <span className="monster-diagnosis-label">MONSTER DIAGNOSIS</span>
                <h2 id="monster-diagnosis-title">今の自分に出やすいモンスターを知る</h2>
                <p>4体のうち、今の自分に強く出やすい反応を無料で整理できます。</p>
              </div>
              <a className="monster-diagnosis-button" href={links.diagnosis}>
                無料でモンスター診断を受ける <span aria-hidden="true">→</span>
              </a>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default MonstersEditorial;
