import { useEffect, useState } from "react";
import "./site.css";

const BASE = "";

const siteLinks = {
  home: BASE,
  about: `${BASE}/about`,
  services: `${BASE}/services`,
  monsters: `${BASE}/monsters`,
  app: `${BASE}/app`,
  business: `${BASE}/business`,
  profile: `${BASE}/profile`,
  news: `${BASE}/news`,
  contact: `${BASE}/contact`,
  privacy: `${BASE}/privacy`,
  tokushoho: `${BASE}/tokushoho`,
  diagnosis: "/diagnosis",
};

const monsterData = [
  {
    name: "フアンダー",
    label: "不安",
    english: "ANXIETY",
    image: "/FUAN.png",
    description:
      "まだ起きていないことを繰り返し考え、不安に押しつぶされそうになる反応。",
  },
  {
    name: "カコノキズ",
    label: "過去の傷",
    english: "PAST WOUNDS",
    image: "/KAKO.png",
    description:
      "過去の傷が現在の出来事と重なり、再び痛みが広がる反応。",
  },
  {
    name: "ジコヒテイ",
    label: "自己否定",
    english: "SELF-NEGATION",
    image: "/HITEI.png",
    description:
      "失敗や欠点だけを見て、自分の良さや存在まで否定しようとする反応。",
  },
  {
    name: "ジセキン",
    label: "自責",
    english: "SELF-BLAME",
    image: "/JISEKI.png",
    description:
      "起きたことをすべて自分の責任として引き受け、自分を責め続ける反応。",
  },
];

const serviceCards = [
  {
    number: "01",
    title: "モンスター診断",
    text: "自分が止まるときに出やすい反応の入口を、4体のモンスターから整理します。",
    status: "公開中",
    href: siteLinks.diagnosis,
    cta: "診断を受ける",
  },
  {
    number: "02",
    title: "4週間プログラム",
    text: "実生活を材料に、自分専用の『復帰ルート仮説』をつくる少人数プログラムです。",
    status: "診断結果からご案内",
    href: siteLinks.diagnosis,
    cta: "まずモンスター診断を受ける",
  },
  {
    number: "03",
    title: "Treatアプリ",
    text: "反応が強くなったその場で開き、モンスターと自分をTreatするアプリを開発しています。",
    status: "開発中",
    href: siteLinks.app,
    cta: "開発内容を見る",
  },
  {
    number: "04",
    title: "学習コンテンツ",
    text: "感情が強くなる仕組み、戻り方、境界線、セルフケアなどを短く学ぶ形式です。",
    status: "再設計中",
  },
  {
    number: "05",
    title: "Discordコミュニティ",
    text: "アウトプット、定型チェックイン、雑談、日常の小さな出来事を共有する場です。",
    status: "試験運用に向けて調整中",
  },
  {
    number: "06",
    title: "法人・団体向け",
    text: "福利厚生、少人数導入、研修、共同検証、掲載・提携などを個別に相談できます。",
    status: "個別相談",
    href: siteLinks.business,
    cta: "法人向けを見る",
  },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href={siteLinks.home}>
            MINAMI MINDLAB
            <small>operated by CACHE-CACHE</small>
          </a>
          <nav className="desktop-nav" aria-label="メインナビゲーション">
            <a href={siteLinks.about}>MINAMI MINDLABとは</a>
            <a href={siteLinks.services}>サービス</a>
            <a href={siteLinks.monsters}>モンスター</a>
            <a href={siteLinks.business}>法人・提携</a>
            <a href={siteLinks.profile}>運営者</a>
            <a className="header-cta" href={siteLinks.contact}>
              お問い合わせ
            </a>
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
        <nav
          className={`mobile-nav ${menuOpen ? "open" : ""}`}
          aria-label="モバイルナビゲーション"
        >
          <a href={siteLinks.about}>MINAMI MINDLABとは</a>
          <a href={siteLinks.services}>サービス</a>
          <a href={siteLinks.monsters}>モンスター</a>
          <a href={siteLinks.app}>Treatアプリ</a>
          <a href={siteLinks.business}>法人・提携</a>
          <a href={siteLinks.profile}>運営者</a>
          <a href={siteLinks.news}>お知らせ</a>
          <a href={siteLinks.contact}>お問い合わせ</a>
        </nav>
      </header>
    </>
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
            <p className="footer-copy">
              感情をなくすのではなく、止まったあとに戻る方法をつくる。
            </p>
          </div>
          <div className="footer-nav">
            <div>
              <strong>MINAMI MINDLAB</strong>
              <a href={siteLinks.about}>私たちについて</a>
              <a href={siteLinks.monsters}>ネガティブモンスター</a>
              <a href={siteLinks.app}>Treatアプリ</a>
            </div>
            <div>
              <strong>サービス</strong>
              <a href={siteLinks.services}>サービス一覧</a>
              <a href={siteLinks.diagnosis}>モンスター診断</a>
              <a href={siteLinks.business}>法人・団体向け</a>
            </div>
            <div>
              <strong>運営情報</strong>
              <a href={siteLinks.profile}>運営者について</a>
              <a href={siteLinks.news}>お知らせ</a>
              <a href={siteLinks.contact}>お問い合わせ</a>
              <a href={siteLinks.privacy}>プライバシーポリシー</a>
              <a href={siteLinks.tokushoho}>特定商取引法に基づく表記</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">© CACHE-CACHE / MINAMI MINDLAB</div>
      </div>
    </footer>
  );
}

function Layout({ children }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mindlab-site">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

function Hero({ eyebrow, title, children, compact = true }) {
  return (
    <section className={`page-hero ${compact ? "compact" : ""}`}>
      <div className="hero-inner">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        {children}
      </div>
    </section>
  );
}

function Breadcrumb({ current }) {
  return (
    <div className="breadcrumb">
      <a href={siteLinks.home}>HOME</a> / {current}
    </div>
  );
}

function HomePage() {
  return (
    <Layout>
      <main>
        <section className="page-hero home-hero">
          <div className="hero-inner home-hero-grid">
            <div>
              <span className="eyebrow">MINAMI MINDLAB OFFICIAL SITE</span>
              <h1>
                感情をなくすのではなく、
                <br />
                <span className="hero-accent">止まったあとに戻る方法</span>
                をつくる。
              </h1>
              <p className="hero-copy">
                不安、過去の傷、自己否定、自責。
                頭では分かっていても日常が止まってしまうとき、
                自分を責め続けず、少しずつ戻るための仕組みを開発しています。
              </p>
              <div className="hero-actions">
                <a className="button primary" href={siteLinks.diagnosis}>
                  モンスター診断を受ける
                </a>
                <a className="button secondary" href={siteLinks.about}>
                  MINAMI MINDLABとは
                </a>
              </div>
            </div>
            <div className="hero-monsters" aria-label="ネガティブモンスター">
              {monsterData.map((monster, index) => (
                <div className={`hero-monster hero-monster-${index + 1}`} key={monster.name}>
                  <img src={monster.image} alt={monster.name} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section white">
          <div className="container brand-statement">
            <div>
              <div className="section-kicker">ABOUT MINAMI MINDLAB</div>
              <h2>
                苦しくならない人になるのではなく、
                苦しくなった自分を責めないために。
              </h2>
            </div>
            <div className="statement-box">
              <ul className="statement-list">
                <li>今起きている反応を、自分全体と切り分けて理解する</li>
                <li>感情を無理に消さず、その場でできるTreatを選ぶ</li>
                <li>完璧な回復を待たず、日常へ戻る最小の行動を探す</li>
              </ul>
              <a className="text-link" href={siteLinks.about}>
                MINAMI MINDLABについて詳しく見る →
              </a>
            </div>
          </div>
        </section>

        <section className="section lavender">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="section-kicker">SERVICES</div>
                <h2>現在の取り組み</h2>
              </div>
              <a className="text-link" href={siteLinks.services}>
                サービス一覧を見る →
              </a>
            </div>
            <div className="card-grid three">
              {serviceCards.slice(0, 3).map((service) => (
                <article className="info-card" key={service.title}>
                  <div className="card-number">{service.number}</div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <span className="status-label">{service.status}</span>
                  <a className="text-link" href={service.href}>
                    {service.cta} →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section white">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="section-kicker">NEGATIVE MONSTERS</div>
                <h2>4体のネガティブモンスター</h2>
              </div>
              <a className="text-link" href={siteLinks.monsters}>
                4体について詳しく見る →
              </a>
            </div>
            <div className="monster-grid">
              {monsterData.map((monster) => (
                <article className="monster-card" key={monster.name}>
                  <div className="monster-image-wrap">
                    <img src={monster.image} alt={monster.name} />
                  </div>
                  <span className="monster-english">{monster.english}</span>
                  <h3>{monster.name}</h3>
                  <p>{monster.label}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section rose">
          <div className="container split">
            <div className="phone-mockup" aria-label="Treatアプリ画面イメージ">
              <div className="phone-screen">
                <div className="phone-label">今日のマイモンスター</div>
                <img src="/FUAN-Treat.png" alt="Treat後のフアンダー" />
                <div className="cookie-button">クッキーをあげる</div>
              </div>
            </div>
            <div>
              <div className="section-kicker">TREAT APP</div>
              <h2>感情が強くなった、その場で使えるアプリへ。</h2>
              <p className="lead">
                知識を学ぶだけではなく、実際に止まりそうになった場面で開き、
                自分を責める前にTreatできるアプリを開発しています。
              </p>
              <ul className="feature-list">
                <li>反応の強まりに気づく</li>
                <li>モンスターをTreatする</li>
                <li>自分にできる小さなTreatを選ぶ</li>
                <li>戻るための記録を残す</li>
              </ul>
              <div className="hero-actions">
                <a className="button secondary" href={siteLinks.app}>
                  Treatアプリについて
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section white">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="section-kicker">TWO ENTRANCES</div>
                <h2>個人の方へ・法人の方へ</h2>
              </div>
            </div>
            <div className="route-grid">
              <article className="route-card individual">
                <h3>個人の方へ</h3>
                <p>
                  モンスター診断、4週間プログラム、今後のコミュニティなど、
                  現在利用できる入口をご案内します。
                </p>
                <a className="text-link" href={siteLinks.services}>
                  個人向けサービスを見る →
                </a>
              </article>
              <article className="route-card business">
                <h3>法人・団体・提携事業者の方へ</h3>
                <p>
                  福利厚生、試験導入、共同検証、研修、取材、掲載・提携について
                  ご相談いただけます。
                </p>
                <a className="text-link" href={siteLinks.business}>
                  法人・提携について見る →
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="section lavender">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="section-kicker">NEWS</div>
                <h2>お知らせ</h2>
              </div>
              <a className="text-link" href={siteLinks.news}>
                一覧を見る →
              </a>
            </div>
            <NewsList compact />
          </div>
        </section>

        <section className="section white">
          <div className="container profile-summary">
            <div className="profile-placeholder">PROFILE IMAGE</div>
            <div>
              <div className="section-kicker">FOUNDER</div>
              <h2>運営者について</h2>
              <p className="lead">
                感情に振り回されない強い人になったのではなく、
                不安や自己否定があっても、日常を完全には止めずに戻る方法を探してきました。
              </p>
              <a className="text-link" href={siteLinks.profile}>
                岡本 南美のプロフィールを見る →
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

function AboutPage() {
  return (
    <Layout>
      <Breadcrumb current="MINAMI MINDLABとは" />
      <main>
        <Hero eyebrow="ABOUT" title="MINAMI MINDLABとは">
          <p className="hero-copy">
            感情をなくすのではなく、反応を理解し、Treatし、日常へ戻る方法をつくるための活動です。
          </p>
        </Hero>
        <section className="section white">
          <div className="container content-layout">
            <aside className="side-nav">
              <a href="#mission">目指すこと</a>
              <a href="#approach">3つの考え方</a>
              <a href="#scope">現在の取り組み</a>
              <a href="#safety">安全方針</a>
            </aside>
            <article className="article-card">
              <section id="mission">
                <div className="section-kicker">MISSION</div>
                <h2>揺れても、自分を責めずに戻れるように。</h2>
                <p>
                  不安や自己否定が強くなると、目の前の家事、仕事、勉強、
                  人との関わりまで止まることがあります。
                  MINAMI MINDLABが目指すのは、感情を消すことではありません。
                </p>
                <p>
                  自分の中で起きている反応を、自分全体と切り分けて理解し、
                  その場で使える小さな対処を増やすことです。
                </p>
              </section>
              <section id="approach">
                <h3>3つの考え方</h3>
                <ul>
                  <li><strong>知る：</strong>今どの反応が強く出ているのかを整理する</li>
                  <li><strong>Treatする：</strong>感情を消そうとせず、今できる対処を選ぶ</li>
                  <li><strong>戻る：</strong>完璧に元気になる前でも、最小の行動を選ぶ</li>
                </ul>
              </section>
              <section id="scope">
                <h3>現在取り組んでいること</h3>
                <p>
                  モンスター診断、4週間プログラム、Treatアプリ、短い学習コンテンツ、
                  Discordコミュニティの設計を進めています。
                </p>
              </section>
              <section id="safety">
                <h3>安全方針</h3>
                <p>
                  医療・診断・心理療法・危機介入の代替ではありません。
                  緊急性や専門的支援が必要な場合は、医療機関や公的相談窓口などの利用を優先します。
                </p>
              </section>
            </article>
          </div>
        </section>
      </main>
    </Layout>
  );
}

function ServicesPage() {
  return (
    <Layout>
      <Breadcrumb current="サービス" />
      <main>
        <Hero eyebrow="SERVICES" title="サービス・取り組み">
          <p className="hero-copy">
            現在利用できるサービスと、開発中の取り組みを分けてご案内します。
          </p>
        </Hero>
        <section className="section white">
          <div className="container card-grid three">
            {serviceCards.map((service) => (
              <article className="info-card" key={service.title}>
                <div className="card-number">{service.number}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <span className="status-label">{service.status}</span>
                {service.href && (
                  <a className="text-link" href={service.href}>
                    {service.cta} →
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}

function MonstersPage() {
  return (
    <Layout>
      <Breadcrumb current="ネガティブモンスター" />
      <main>
        <Hero eyebrow="NEGATIVE MONSTERS" title="4体のネガティブモンスター">
          <p className="hero-copy">
            本人や人格ではなく、自動的に起きる反応を理解するための感情翻訳装置です。
          </p>
        </Hero>
        <section className="section white">
          <div className="container">
            <div className="monster-grid detailed">
              {monsterData.map((monster) => (
                <article className="monster-card" key={monster.name}>
                  <div className="monster-image-wrap">
                    <img src={monster.image} alt={monster.name} />
                  </div>
                  <span className="monster-english">{monster.english}</span>
                  <h3>{monster.name}</h3>
                  <strong>{monster.label}</strong>
                  <p>{monster.description}</p>
                </article>
              ))}
            </div>
            <article className="article-card standalone">
              <h2>倒すためのキャラクターではありません</h2>
              <p>
                ネガティブモンスターは、悪者や敵として扱うものではありません。
                「今、この反応が強くなっている」と気づき、自分への攻撃を止め、
                Treatへ移るために使います。
              </p>
            </article>
          </div>
        </section>
      </main>
    </Layout>
  );
}

function AppPage() {
  return (
    <Layout>
      <Breadcrumb current="Treatアプリ" />
      <main>
        <Hero eyebrow="TREAT APP" title="感情が強くなった、その場で使う。">
          <p className="hero-copy">
            知識を思い出せないときでも、開いて、気づいて、Treatし、
            次の小さな行動へ移るためのアプリです。
          </p>
        </Hero>
        <section className="section white">
          <div className="container split">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="phone-label">今日のマイモンスター</div>
                <img src="/FUAN-Treat.png" alt="Treat後のフアンダー" />
                <div className="cookie-button">クッキーをあげる</div>
              </div>
            </div>
            <div>
              <div className="section-kicker">CORE EXPERIENCE</div>
              <h2>暴走状態から、少し落ち着いた状態へ。</h2>
              <p className="lead">
                Treat画面を開くと、選択中のマイモンスターが高ぶった状態で表示されます。
                クッキーをあげると短いアニメーションを経て、
                同じモンスターが少し落ち着いた状態へ変化します。
              </p>
              <ul className="feature-list">
                <li>現在の反応に気づく</li>
                <li>モンスターにクッキーをあげる</li>
                <li>自分にできるTreatを選ぶ</li>
                <li>日常へ戻る小さな行動を選ぶ</li>
                <li>Treat記録を残す</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="section lavender">
          <div className="container article-card standalone">
            <h2>現在の開発状況</h2>
            <p>
              診断アプリは公開済みです。Treatアプリの中核体験、
              4体それぞれの暴走状態／Treat後の表現、記録機能、提供条件を順次整えています。
            </p>
            <p>
              開発中の内容は、試験提供の結果や安全性の確認に応じて変更されます。
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}

function BusinessPage() {
  return (
    <Layout>
      <Breadcrumb current="法人・団体・提携事業者の皆さまへ" />
      <main>
        <Hero eyebrow="FOR ORGANIZATIONS" title="法人・団体・提携事業者の皆さまへ">
          <p className="hero-copy">
            福利厚生、試験導入、共同検証、研修、取材、掲載・提携について個別にご相談いただけます。
          </p>
        </Hero>
        <section className="section white">
          <div className="container">
            <div className="card-grid three">
              <article className="info-card">
                <div className="card-number">A</div>
                <h3>福利厚生・試験導入</h3>
                <p>対象人数、実施期間、利用方法を伺い、現在提供できる範囲を整理します。</p>
              </article>
              <article className="info-card">
                <div className="card-number">B</div>
                <h3>研修・ワークショップ</h3>
                <p>自動反応の外在化、止まったあとの戻り方などを扱うオンライン形式を検討します。</p>
              </article>
              <article className="info-card">
                <div className="card-number">C</div>
                <h3>共同検証・事業連携</h3>
                <p>アプリ、学習プログラム、コミュニティの試験運用や共同検証について相談できます。</p>
              </article>
            </div>
            <article className="article-card standalone">
              <h2>現在の提供方針</h2>
              <p>
                法人向けサービスを一律の完成パッケージとして販売しているわけではありません。
                目的、対象者、人数、実施時期を伺い、現在提供できる内容と、
                追加開発が必要な内容を区別してお伝えします。
              </p>
              <h3>個人情報について</h3>
              <p>
                利用者個人の相談内容、診断結果、選択したモンスター、Treat記録などを、
                所属企業へ個人単位で提供することは想定していません。
              </p>
              <div className="hero-actions">
                <a className="button primary" href={siteLinks.contact}>
                  法人・提携について問い合わせる
                </a>
              </div>
            </article>
          </div>
        </section>
      </main>
    </Layout>
  );
}

function ProfilePage() {
  return (
    <Layout>
      <Breadcrumb current="運営者について" />
      <main>
        <Hero eyebrow="FOUNDER" title="運営者について">
          <p className="hero-copy">
            完璧に克服した人としてではなく、揺れたあとに戻る方法を言葉と仕組みに変える立場から活動しています。
          </p>
        </Hero>
        <section className="section white">
          <div className="container profile-detail">
            <div className="profile-placeholder">PROFILE IMAGE</div>
            <article className="article-card">
              <h2>岡本 南美</h2>
              <p><strong>MINAMI MINDLAB運営／CACHE-CACHE</strong></p>
              <p>
                私は、感情に振り回されない強い人になったわけではありません。
                不安や自己否定が強くなり、頭では分かっていても、
                家事や仕事、勉強まで止まってしまう経験を繰り返してきました。
              </p>
              <p>
                心理学や脳の仕組みを学び、自分の反応や行動を観察する中で、
                感情をなくすことより、感情に飲み込まれたあとに戻る方法が必要だと考えるようになりました。
              </p>
              <p>
                MINAMI MINDLABでは、自分自身の経験から見つけた仕組みを、
                同じように止まってしまう人が使える言葉、キャラクター、アプリ、学習方法へ翻訳しています。
              </p>
              <p>
                医療・心理職ではありません。そのため、診断や治療ではなく、
                日常で使う理解と対処の仕組みとして提供します。
              </p>
            </article>
          </div>
        </section>
      </main>
    </Layout>
  );
}

const newsItems = [
  {
    date: "2026.06.25",
    category: "開発情報",
    title: "公式ホームページを再構成しています",
    body: "個人向けLPとは別に、事業全体を案内する複数ページ型サイトを制作しています。",
  },
  {
    date: "2026.06.23",
    category: "キャラクター",
    title: "ネガティブモンスター4体の設計方針を確定しました",
    body: "不安・過去の傷・自己否定・自責の4体で構成します。",
  },
  {
    date: "2026.06.10",
    category: "プログラム",
    title: "4週間プログラムの募集ページを公開しました",
    body: "創設メンバー向けの内容を専用LPで案内しています。",
  },
];

function NewsList({ compact = false }) {
  return (
    <div className="news-list">
      {newsItems.map((item) => (
        <article className="news-item" key={`${item.date}-${item.title}`}>
          <div className="news-date">{item.date}</div>
          <div className="news-category">{item.category}</div>
          <div>
            <strong>{item.title}</strong>
            {!compact && <p>{item.body}</p>}
          </div>
        </article>
      ))}
    </div>
  );
}

function NewsPage() {
  return (
    <Layout>
      <Breadcrumb current="お知らせ" />
      <main>
        <Hero eyebrow="NEWS" title="お知らせ・開発状況">
          <p className="hero-copy">
            サービスの募集、アプリ開発、キャラクター設計などの更新情報を掲載します。
          </p>
        </Hero>
        <section className="section white">
          <div className="container">
            <NewsList />
          </div>
        </section>
      </main>
    </Layout>
  );
}

function ContactPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    window.alert("プレビュー版のため送信されません。公開時にフォームへ接続します。");
  };

  return (
    <Layout>
      <Breadcrumb current="お問い合わせ" />
      <main>
        <Hero eyebrow="CONTACT" title="お問い合わせ">
          <p className="hero-copy">
            内容に応じて項目を選択してください。プレビュー版では送信されません。
          </p>
        </Hero>
        <section className="section white">
          <div className="container article-card standalone">
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                <span>お問い合わせ種別</span>
                <select defaultValue="個人向けサービスについて">
                  <option>個人向けサービスについて</option>
                  <option>法人・福利厚生について</option>
                  <option>提携・共同検証について</option>
                  <option>取材・掲載について</option>
                  <option>その他</option>
                </select>
              </label>
              <label>
                <span>お名前</span>
                <input type="text" placeholder="例：山田 花子" />
              </label>
              <label>
                <span>会社・団体名</span>
                <input type="text" placeholder="法人・団体の場合" />
              </label>
              <label>
                <span>メールアドレス</span>
                <input type="email" placeholder="example@example.com" />
              </label>
              <label>
                <span>お問い合わせ内容</span>
                <textarea placeholder="目的、対象人数、実施時期、料金・契約条件などをご記入ください。" />
              </label>
              <div className="form-notice">
                営業・掲載サービスのご案内は、正式な会社名、サービス名、料金、
                契約期間、解約条件、実績資料を添えてください。
              </div>
              <button className="button primary" type="submit">
                入力内容を確認する
              </button>
            </form>
          </div>
        </section>
      </main>
    </Layout>
  );
}

function PrivacyPage() {
  return (
    <Layout>
      <Breadcrumb current="プライバシーポリシー" />
      <main>
        <Hero eyebrow="PRIVACY" title="プライバシーポリシー" />
        <section className="section white">
          <article className="container article-card standalone">
            <div className="draft-label">公開前の仮案</div>
            <h2>個人情報の取り扱いについて</h2>
            <p>
              正式公開時には、実際に取得する情報、利用目的、外部サービス、保存期間、
              問い合わせ窓口に合わせて内容を確定します。
            </p>
            <h3>取得する情報</h3>
            <p>
              お問い合わせフォーム、申込み、診断、アプリ利用等で、氏名、メールアドレス、
              回答内容、利用記録等を取得する場合があります。
            </p>
            <h3>利用目的</h3>
            <p>サービス提供、連絡、本人確認、品質改善、安全管理、法令対応のために利用します。</p>
            <h3>第三者提供</h3>
            <p>法令に基づく場合を除き、本人の同意なく第三者へ提供しません。</p>
            <h3>問い合わせ窓口</h3>
            <p>正式なメールアドレス確定後に掲載します。</p>
          </article>
        </section>
      </main>
    </Layout>
  );
}

function TokushohoPage() {
  return (
    <Layout>
      <Breadcrumb current="特定商取引法に基づく表記" />
      <main>
        <Hero eyebrow="LEGAL" title="特定商取引法に基づく表記" />
        <section className="section white">
          <div className="container">
            <div className="draft-label">公開前の仮案</div>
            <div className="table-wrap">
              <table className="legal-table">
                <tbody>
                  <tr><th>販売事業者</th><td>CACHE-CACHE</td></tr>
                  <tr><th>運営責任者</th><td>岡本 南美</td></tr>
                  <tr><th>所在地</th><td>正式公開前に法令・決済事業者の要件を確認して確定します。</td></tr>
                  <tr><th>連絡先</th><td>正式な問い合わせ先へ差し替えます。</td></tr>
                  <tr><th>販売価格</th><td>各商品・申込みページに税込価格を表示します。</td></tr>
                  <tr><th>支払方法・時期</th><td>各商品・申込みページに表示します。</td></tr>
                  <tr><th>役務の提供時期</th><td>各商品・申込みページに表示します。</td></tr>
                  <tr><th>キャンセル・返金</th><td>各商品・申込みページおよび利用規約に表示します。</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default function Site({ path }) {
  const normalized = path.replace(/\/$/, "") || "/";
  const routes = {
    "/": HomePage,
    "/about": AboutPage,
    "/services": ServicesPage,
    "/monsters": MonstersPage,
    "/app": AppPage,
    "/business": BusinessPage,
    "/profile": ProfilePage,
    "/news": NewsPage,
    "/contact": ContactPage,
    "/privacy": PrivacyPage,
    "/tokushoho": TokushohoPage,
  };

  const Page = routes[normalized] || HomePage;
  return <Page />;
}
