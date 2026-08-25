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
        <path d="M7.1 9.2 7.7 5.1l3 1.35c.43-.1.87-.15 1.3-.15.44 0 .88.05 1.31.15l3-1.35.59 4.1v4.03c0 3.03-2.13 5.27-4.9 5.27s-4.9-2.24-4.9-5.27z" />
        <circle cx="9.9" cy="11.75" r=".72" fill="currentColor" stroke="none" />
        <circle cx="14.1" cy="11.75" r=".72" fill="currentColor" stroke="none" />
        <path d="M10.25 14.1c.5.65 1.08.97 1.75.97s1.25-.32 1.75-.97" />
        <path d="M11.15 13.15 12 13.65l.85-.5" />
      </svg>
    );
  }

  if (type === "program") {
    return (
      <svg {...common}>
        <rect x="4.7" y="6.4" width="14.6" height="12.2" rx="2.7" />
        <path d="M8 4.65v3.3M16 4.65v3.3M4.7 9.7h14.6" />
        <circle cx="8.2" cy="13.15" r=".72" fill="currentColor" stroke="none" />
        <circle cx="12" cy="13.15" r=".72" fill="currentColor" stroke="none" />
        <circle cx="15.8" cy="13.15" r=".72" fill="currentColor" stroke="none" />
        <path d="m10.55 16.1 1 1 2-2.15" />
      </svg>
    );
  }

  if (type === "app") {
    return (
      <svg {...common}>
        <rect x="7.15" y="3.65" width="9.7" height="16.7" rx="2.65" />
        <path d="M10.4 6.05h3.2" />
        <path d="m12 9.25.7 1.45 1.6.23-1.15 1.13.27 1.58L12 12.9l-1.42.74.27-1.58-1.15-1.13 1.6-.23z" />
        <path d="M11.35 17.55h1.3" />
      </svg>
    );
  }

  if (type === "learning") {
    return (
      <svg {...common}>
        <path d="M4.4 6.25c2.72-.55 4.95-.25 6.62 1.02.62.47.98 1.18.98 1.95v9.03c-1.62-1.36-4.14-1.73-7.6-.88z" />
        <path d="M19.6 6.25c-2.72-.55-4.95-.25-6.62 1.02-.62.47-.98 1.18-.98 1.95v9.03c1.62-1.36 4.14-1.73 7.6-.88z" />
        <path d="M12 9.15v9.1" />
        <path d="M7.15 9.45c.98-.08 1.83.05 2.55.4M14.3 9.85c.72-.35 1.57-.48 2.55-.4" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M6.2 6.45h9.9a2.65 2.65 0 0 1 2.65 2.65v5.45a2.65 2.65 0 0 1-2.65 2.65h-4.45l-3.15 2.15.62-2.15H7.9a2.65 2.65 0 0 1-2.65-2.65V9.1A2.65 2.65 0 0 1 7.9 6.45z" />
      <path d="M8.2 4.65h7.1a2.15 2.15 0 0 1 2.04 1.47" opacity=".55" />
      <circle cx="9.05" cy="11.7" r=".72" fill="currentColor" stroke="none" />
      <circle cx="12" cy="11.7" r=".72" fill="currentColor" stroke="none" />
      <circle cx="14.95" cy="11.7" r=".72" fill="currentColor" stroke="none" />
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