import { useEffect, useState } from "react";
import "./site.css";
import "./services-editorial.css";

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

const steps = [
  {
    number: "01",
    title: "知る",
    description: "まずは、自分の反応のくせを知ることから。",
    items: [
      {
        key: "diagnosis",
        marker: "はじめての方はここから",
        title: "モンスター診断",
        description:
          "不安・過去の傷・自己否定・自責のうち、今の自分に強く出やすい反応を整理します。",
        status: "公開中",
        statusTone: "active",
        href: links.diagnosis,
        cta: "無料で診断を受ける",
      },
    ],
  },
  {
    number: "02",
    title: "扱う",
    description: "分かった反応を、実生活の中で扱う練習へ。",
    items: [
      {
        key: "program",
        title: "4週間プログラム",
        description:
          "実生活を材料に、感情に飲み込まれたあとも自分を責め続けないための練習をします。",
        status: "診断結果からご案内",
        statusTone: "guided",
        href: links.diagnosis,
        cta: "まずモンスター診断を受ける",
        companion: {
          key: "app",
          label: "実践サポート",
          title: "Treatアプリ",
          description:
            "4週間プログラムの実践を、日常の中で支えるツールです。診断で見えた反応に合わせて、今できる対処を選ぶ手助けをします。",
          status: "プログラム内で提供",
          href: links.app,
          cta: "Treatアプリを見る",
        },
      },
    ],
  },
  {
    number: "03",
    title: "続ける",
    description: "一度理解して終わらず、日常の中で続けていく。",
    items: [
      {
        key: "learning",
        title: "学習コンテンツ",
        description:
          "感情が強くなる仕組み、境界線、セルフケアなどを、短く学べる形でまとめています。",
        status: "再設計中",
        statusTone: "pending",
      },
      {
        key: "discord",
        title: "Discordコミュニティ",
        description:
          "アウトプット、定型チェックイン、雑談、日常の小さな出来事を共有する場です。",
        status: "試験運用に向けて調整中",
        statusTone: "pending",
      },
    ],
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
          <a className="header-cta" href={links.diagnosis}>
            無料診断
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
            <p className="footer-copy">
              感情をなくすのではなく、起きている反応を知り、扱える形にする。
            </p>
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

function Hero() {
  return (
    <section className="page-hero compact services-page-hero">
      <div className="hero-inner">
        <span className="eyebrow">SERVICES</span>
        <h1>サービス・取り組み</h1>
        <p className="hero-copy">
          無料診断を入口に、個人向けプログラム、Treatアプリ、学習コンテンツ、
          法人・提携向けの取り組みをご案内します。
        </p>
      </div>
    </section>
  );
}

function Icon({ type }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.45,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  if (type === "diagnosis") {
    return (
      <svg {...common}>
        <path d="M7.2 17.9V9.8c0-3.05 1.96-5.15 4.8-5.15s4.8 2.1 4.8 5.15v8.1l-1.6-1.28-1.6 1.28-1.6-1.28-1.6 1.28-1.6-1.28z" />
        <path d="M8.65 6.35 7.45 4.7l-.2 2.72M15.35 6.35l1.2-1.65.2 2.72" />
        <circle cx="10.05" cy="11.15" r=".7" fill="currentColor" stroke="none" />
        <circle cx="13.95" cy="11.15" r=".7" fill="currentColor" stroke="none" />
        <path d="M10.45 13.55c.45.55.97.82 1.55.82s1.1-.27 1.55-.82" />
      </svg>
    );
  }

  if (type === "program") {
    return (
      <svg {...common}>
        <rect x="4.8" y="6.25" width="14.4" height="12.2" rx="3" />
        <path d="M8.1 4.7v3.15M15.9 4.7v3.15M4.8 9.65h14.4" />
        <path d="m9.15 14.15 1.35 1.35 4-4.05" />
      </svg>
    );
  }

  if (type === "app") {
    return (
      <svg {...common}>
        <rect x="7.25" y="3.7" width="9.5" height="16.6" rx="2.8" />
        <path d="m12 8.3.72 1.48 1.63.24-1.18 1.15.28 1.62L12 12.03l-1.45.76.28-1.62-1.18-1.15 1.63-.24z" />
        <path d="M11.25 17.55h1.5" />
      </svg>
    );
  }

  if (type === "learning") {
    return (
      <svg {...common}>
        <path d="M4.45 6.5c2.8-.65 5.05-.3 6.62 1.02.6.5.93 1.2.93 1.95v8.78c-1.72-1.2-4.23-1.48-7.55-.58z" />
        <path d="M19.55 6.5c-2.8-.65-5.05-.3-6.62 1.02-.6.5-.93 1.2-.93 1.95v8.78c1.72-1.2 4.23-1.48 7.55-.58z" />
        <path d="M12 9.45v8.8" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M5.35 7.15h8.55a2.65 2.65 0 0 1 2.65 2.65v4.55A2.65 2.65 0 0 1 13.9 17H9.55L6.4 19.1l.58-2.1H7.9a2.55 2.55 0 0 1-2.55-2.55z" />
      <path d="M9.15 5.2h7.05a2.45 2.45 0 0 1 2.45 2.45v4.65c0 1.08-.7 2-1.68 2.32" opacity=".58" />
    </svg>
  );
}

function ServiceCompanion({ item }) {
  return (
    <div className="service-companion">
      <div className="service-companion-icon" aria-hidden="true">
        <Icon type={item.key} />
      </div>
      <div className="service-companion-copy">
        <span className="service-companion-label">{item.label}</span>
        <h4>{item.title}</h4>
        <p>{item.description}</p>
        <div className="service-companion-meta">
          <span className="service-entry-status" data-tone="included">
            {item.status}
          </span>
          <a className="service-companion-link" href={item.href}>
            {item.cta} <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}

function ServiceItem({ item }) {
  return (
    <article className={`service-entry ${item.companion ? "has-companion" : ""}`}>
      <div className="service-entry-icon" aria-hidden="true">
        <Icon type={item.key} />
      </div>
      <div className="service-entry-copy">
        {item.marker && <span className="service-entry-marker">{item.marker}</span>}
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <div className="service-entry-meta">
          <span className="service-entry-status" data-tone={item.statusTone || "neutral"}>
            {item.status}
          </span>
          {item.href && (
            <a className="service-entry-link" href={item.href}>
              {item.cta} <span aria-hidden="true">→</span>
            </a>
          )}
        </div>
        {item.companion && <ServiceCompanion item={item.companion} />}
      </div>
    </article>
  );
}

function ServicesEditorial() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "サービス・取り組み｜MINAMI MINDLAB";

    const description =
      "モンスター診断、4週間プログラム、Treatアプリなど、MINAMI MINDLABのサービスをご案内します。";
    let descriptionTag = document.querySelector('meta[name="description"]');
    if (!descriptionTag) {
      descriptionTag = document.createElement("meta");
      descriptionTag.setAttribute("name", "description");
      document.head.appendChild(descriptionTag);
    }
    descriptionTag.setAttribute("content", description);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://monster-shindan.vercel.app/services");
  }, []);

  return (
    <div className="mindlab-site services-editorial-page">
      <Header />
      <main>
        <Hero />
        <section className="services-editorial-section">
          <div className="services-editorial-inner">
            <div className="services-journey">
              {steps.map((step) => (
                <section className="service-step" key={step.number}>
                  <div className="step-number" aria-hidden="true">
                    {step.number}
                  </div>
                  <div className="step-intro">
                    <h2>{step.title}</h2>
                    <p>{step.description}</p>
                  </div>
                  <div className="step-items">
                    {step.items.map((item) => (
                      <ServiceItem item={item} key={item.key} />
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <section className="parallel-track" aria-label="法人・団体向け">
              <div className="parallel-track-copy">
                <div className="parallel-track-label">PARALLEL TRACK</div>
                <h2>法人・団体向け</h2>
                <p>
                  福利厚生、少人数導入、研修、共同検証、掲載・提携などを個別にご相談いただけます。
                </p>
              </div>
              <div className="parallel-track-meta">
                <span className="parallel-track-status">個別相談</span>
                <a href={links.business}>
                  法人向けを見る <span aria-hidden="true">→</span>
                </a>
              </div>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default ServicesEditorial;