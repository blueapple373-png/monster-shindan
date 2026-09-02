import { useEffect, useState } from "react";
import "./site.css";
import "./app-editorial.css";
import "./app-phone-real.css";
import "./app-editorial-refine.css";

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

const flowSteps = [
  {
    title: "気づく",
    text: "今、どの反応が強くなっているのかを見る。",
  },
  {
    title: "Treatする／話す",
    text: "反応を扱いたいときはTreat、状況を話したいときはチャットへ。",
  },
  {
    title: "整理する",
    text: "必要なときだけ、事実・不明・推測と、今扱うことを分ける。",
  },
  {
    title: "選ぶ",
    text: "今すぐ動くのか、確認するのか、待つのか。次の一手を小さく決める。",
  },
  {
    title: "残す",
    text: "あとで振り返れるように、Treatや判断の記録を残す。",
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

function ChapterHeader({ number, label, title, titleId, children }) {
  return (
    <div className="app-chapter-head">
      <div className="app-chapter-number" aria-hidden="true">{number}</div>
      <div className="app-chapter-intro">
        <span>{label}</span>
        <h2 id={titleId}>{title}</h2>
      </div>
      <div className="app-chapter-copy">{children}</div>
    </div>
  );
}

function AppEditorial() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Treatアプリ｜MINAMI MINDLAB";
  }, []);

  return (
    <div className="mindlab-site app-editorial-page">
      <Header />
      <main>
        <section className="page-hero compact app-page-hero">
          <div className="hero-inner">
            <span className="eyebrow">TREAT APP</span>
            <h1>感情が強くなった、その場で使う。</h1>
            <p className="hero-copy">
              今起きている反応に気づき、Treatする。考えが止まらないときは、チャットで状況を整理する。
              そのとき必要な方から使い、次の小さな行動を選ぶためのアプリです。
            </p>
          </div>
        </section>

        <section className="app-system-section">
          <div className="container app-container">
            <section className="app-chapter app-entrances" aria-labelledby="app-entrances-title">
              <ChapterHeader number="01" label="TWO ENTRANCES" title="そのとき必要な方から使う" titleId="app-entrances-title">
                <p>
                  Treatしてからチャット、という決まった順番はありません。反応を少し扱いたいときも、
                  今すぐ話して整理したいときも、その時点で必要な入口から使います。
                </p>
              </ChapterHeader>

              <div className="app-entry-grid">
                <article className="app-entry app-treat-entry">
                  <div className="app-entry-visual app-phone-stage" aria-label="Treat機能の画面イメージ">
                    <div className="app-phone-mockup app-phone-real">
                      <div className="app-phone-screen app-phone-real-screen">
                        <div className="app-real-topbar">
                          <div className="app-real-user">
                            <strong>MINAMI MINDLAB</strong>
                            <span>MINAMIさん</span>
                          </div>
                          <div className="app-real-actions" aria-hidden="true">
                            <span>設定</span>
                            <span>取扱説明書</span>
                          </div>
                        </div>

                        <div className="app-real-monster-circle">
                          <img src="/KAKO-Treat2.svg" alt="Treat後のカコノキズ" />
                        </div>
                        <div className="app-real-monster-name">カコ</div>
                        <div className="app-real-cookie-count">今日のクッキー：0回</div>
                        <div className="app-real-cookie-button">🍪 クッキーをあげる</div>
                        <div className="app-real-subbutton">今週を振り返る</div>
                        <div className="app-real-subbutton app-real-subbutton-outline">モンスターマップを作る</div>
                      </div>
                    </div>
                  </div>
                  <div className="app-entry-copy">
                    <span>TREAT</span>
                    <h3>反応が強いとき、Treatする</h3>
                    <p>
                      今出ている反応をモンスターとして見つけて、自分そのものと切り分けます。
                      感情を消すのではなく、その場でできる小さなTreatを選びます。
                    </p>
                  </div>
                </article>

                <article className="app-entry app-chat-entry">
                  <div className="app-entry-visual app-chat-stage">
                    <div className="app-chat-preview" aria-label="開発中のチャット機能イメージ">
                      <div className="app-chat-topline">
                        <span>CHAT SUPPORT</span>
                        <small>開発中</small>
                      </div>
                      <div className="app-chat-bubble app-chat-user">今すぐ相手に送りたいことがある</div>
                      <div className="app-chat-bubble app-chat-assistant">
                        まず、確認できていることと、まだ分からないことを分けます。
                      </div>
                      <div className="app-chat-filters" aria-hidden="true">
                        <span>事実</span>
                        <span>不明</span>
                        <span>推測</span>
                        <span>今扱うこと</span>
                      </div>
                      <div className="app-chat-caption">機能イメージ</div>
                    </div>
                  </div>
                  <div className="app-entry-copy">
                    <span>CHAT SUPPORT</span>
                    <h3>考えが止まらないとき、話しながら整理する</h3>
                    <p>
                      感情が強いまま相談しても、結論や返信文を急がず、事実・不明・推測を分けながら、
                      「今扱うこと」を絞るチャット機能を開発・検証しています。
                    </p>
                  </div>
                </article>
              </div>
            </section>

            <section className="app-chapter app-flow" aria-labelledby="app-flow-title">
              <ChapterHeader number="02" label="HOW IT WORKS" title="全部を使わなくていい" titleId="app-flow-title">
                <p>
                  毎回すべての機能を順番に使う前提ではありません。必要なところだけ選びながら、
                  今の状態から次の小さな行動までをつなぎます。
                </p>
              </ChapterHeader>

              <div className="app-flow-list">
                {flowSteps.map((step) => (
                  <article className="app-flow-step" key={step.title}>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="app-chapter app-access" aria-labelledby="app-access-title">
              <ChapterHeader number="03" label="ACCESS" title="診断とアプリは、役割が違います" titleId="app-access-title">
                <p>
                  無料のモンスター診断は、今の自分にどの反応が強く出やすいかを知る入口です。
                  Treatアプリは、実際に何かが起きたその場で使うためのツールです。
                </p>
              </ChapterHeader>

              <div className="app-access-row">
                <div className="app-access-copy">
                  <h3>利用について</h3>
                  <p>
                    Treatアプリは、無料診断後に案内する4週間プログラム内で利用する設計です。
                    チャット機能は現在開発・検証中で、試験提供や安全性の確認に応じて仕様を調整します。
                  </p>
                  <a className="app-access-link" href={links.diagnosis}>
                    まず無料でモンスター診断を受ける <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default AppEditorial;
