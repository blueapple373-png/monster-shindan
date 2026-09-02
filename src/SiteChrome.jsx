import { useState } from "react";

export const siteLinks = {
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

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href={siteLinks.home}>
          MINAMI MINDLAB
          <small className="brand-credit">
            <span>operated by</span>
            <img src="/cache-cache-mark.svg" alt="" aria-hidden="true" />
            <span>CACHE-CACHE</span>
          </small>
        </a>
        <nav className="desktop-nav" aria-label="メインナビゲーション">
          <a href={siteLinks.services}>サービス</a>
          <a href={siteLinks.blog}>ブログ</a>
          <a href={siteLinks.about}>MINAMI MINDLABとは</a>
          <a className="header-cta" href={siteLinks.diagnosis}>無料診断</a>
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
        <a href={siteLinks.about}>MINAMI MINDLABとは</a>
        <a href={siteLinks.services}>サービス</a>
        <a href={siteLinks.monsters}>モンスター</a>
        <a href={siteLinks.app}>Treatアプリ</a>
        <a href={siteLinks.business}>法人・提携</a>
        <a href={siteLinks.profile}>運営者</a>
        <a href={siteLinks.news}>お知らせ</a>
        <a href={siteLinks.blog}>ブログ</a>
        <a href={siteLinks.contact}>お問い合わせ</a>
      </nav>
    </header>
  );
}

export function SiteFooter() {
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
              <a href={siteLinks.blog}>ブログ</a>
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

export function SiteLayout({ pageClass = "", children }) {
  return (
    <div className={`mindlab-site ${pageClass}`.trim()}>
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}
