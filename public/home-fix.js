(() => {
  if (location.pathname !== "/" && location.pathname !== "") return;

  const styleId = "mindlab-mobile-home-fix";
  if (!document.getElementById(styleId)) {
    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = `
      .mindlab-injected-links,
      .mindlab-injected-journal {
        display: none;
      }

      @media (max-width: 640px) {
        .site-header {
          background: rgba(255, 254, 250, 0.72) !important;
          backdrop-filter: none !important;
          border: 0 !important;
        }

        .site-header .header-inner {
          min-height: 92px !important;
          padding: 0 26px !important;
          align-items: center !important;
        }

        .site-header .brand {
          max-width: 260px !important;
          color: #252238 !important;
          font-family: -apple-system, BlinkMacSystemFont, "Hiragino Kaku Gothic ProN",
            "Yu Gothic", "Noto Sans JP", sans-serif !important;
          font-size: 18px !important;
          font-weight: 800 !important;
          letter-spacing: 0.14em !important;
          line-height: 1.18 !important;
          white-space: nowrap !important;
        }

        .site-header .brand-credit {
          display: inline-flex !important;
          align-items: center !important;
          gap: 6px !important;
          margin-top: 8px !important;
          color: rgba(139, 116, 94, 0.62) !important;
          font-family: -apple-system, BlinkMacSystemFont, "Hiragino Kaku Gothic ProN",
            "Yu Gothic", "Noto Sans JP", sans-serif !important;
          font-size: 10px !important;
          font-weight: 600 !important;
          letter-spacing: 0.16em !important;
          line-height: 1 !important;
          white-space: nowrap !important;
        }

        .site-header .brand-credit span {
          display: inline !important;
          color: inherit !important;
          font: inherit !important;
          letter-spacing: inherit !important;
        }

        .site-header .brand-credit img {
          display: inline-block !important;
          width: 14px !important;
          height: 14px !important;
          min-width: 14px !important;
          max-width: 14px !important;
          object-fit: contain !important;
          flex: 0 0 14px !important;
        }

        .site-header .menu-button {
          width: 42px !important;
          height: 42px !important;
          padding: 0 !important;
          font-size: 28px !important;
          line-height: 1 !important;
        }

        .mindlab-site main {
          position: relative !important;
          overflow: hidden !important;
          background:
            radial-gradient(ellipse at 74% 36%, rgba(139, 188, 214, 0.20), transparent 44%),
            radial-gradient(ellipse at 78% 58%, rgba(220, 122, 130, 0.17), transparent 48%),
            radial-gradient(ellipse at 42% 66%, rgba(135, 190, 158, 0.11), transparent 43%),
            radial-gradient(ellipse at 44% 82%, rgba(232, 195, 135, 0.11), transparent 43%),
            #fffefa !important;
        }

        .mindlab-site main::before {
          content: "" !important;
          position: absolute !important;
          inset: 0 !important;
          z-index: 0 !important;
          pointer-events: none !important;
          background:
            conic-gradient(from 216deg at 77% 52%, transparent 0deg, rgba(139, 188, 214, 0.09) 38deg, transparent 84deg, rgba(220, 122, 130, 0.08) 132deg, transparent 178deg, rgba(135, 190, 158, 0.07) 238deg, transparent 292deg, rgba(232, 195, 135, 0.06) 332deg, transparent 360deg);
          filter: blur(22px) !important;
          opacity: 0.9 !important;
        }

        .mindlab-site main > * {
          position: relative !important;
          z-index: 1 !important;
        }

        .editorial-hero {
          min-height: auto !important;
          padding: 42px 20px 30px !important;
          background: transparent !important;
        }

        .editorial-hero::before,
        .editorial-hero::after,
        .hero-visual-stage,
        .hero-geometry-stage,
        .root-lines,
        .hero-rail-link,
        .hero-text-link,
        .hero-mobile-links,
        .editorial-hero .eyebrow {
          display: none !important;
        }

        .editorial-hero-inner,
        .editorial-hero-copy,
        .editorial-hero-side {
          display: block !important;
          min-height: 0 !important;
          max-width: none !important;
          overflow: visible !important;
        }

        .editorial-hero h1 {
          max-width: 100% !important;
          color: #292521 !important;
          font-family: var(--serif) !important;
          font-size: clamp(34px, 10.4vw, 42px) !important;
          font-weight: 500 !important;
          line-height: 1.62 !important;
          letter-spacing: 0.055em !important;
        }

        .editorial-hero .hero-copy {
          margin-top: 38px !important;
          color: rgba(41, 37, 33, 0.46) !important;
          font-family: var(--serif) !important;
          font-size: 17px !important;
          line-height: 2.05 !important;
          letter-spacing: 0.12em !important;
        }

        .mindlab-injected-links {
          display: block !important;
          margin: 42px 0 46px !important;
          position: relative !important;
          z-index: 4 !important;
        }

        .mindlab-injected-links a {
          display: inline-flex !important;
          align-items: center !important;
          gap: 16px !important;
          padding-bottom: 8px !important;
          border: 0 !important;
          border-bottom: 1px solid rgba(139, 116, 94, 0.42) !important;
          border-radius: 0 !important;
          background: transparent !important;
          box-shadow: none !important;
          color: rgba(41, 37, 33, 0.78) !important;
          font-family: var(--serif) !important;
          font-size: 16px !important;
          font-weight: 500 !important;
          letter-spacing: 0.12em !important;
          text-decoration: none !important;
        }

        .mindlab-injected-links a::after {
          content: "->" !important;
          color: rgba(139, 116, 94, 0.62) !important;
          font-family: var(--serif) !important;
          letter-spacing: 0 !important;
        }

        .home-journal:not(.mindlab-injected-journal) {
          display: none !important;
        }

        .mindlab-injected-journal {
          display: block !important;
          margin-top: 0 !important;
          position: relative !important;
          padding: 6px 28px 54px !important;
          background: transparent !important;
        }

        .home-journal-inner {
          width: 100% !important;
        }

        .home-journal-kicker {
          color: rgba(157, 134, 111, 0.78) !important;
          font-family: -apple-system, BlinkMacSystemFont, "Hiragino Kaku Gothic ProN",
            "Yu Gothic", "Noto Sans JP", sans-serif !important;
          font-size: 10px !important;
          font-weight: 700 !important;
          letter-spacing: 0.18em !important;
        }

        .home-journal-list {
          margin-top: 18px !important;
          border-top: 1px solid rgba(157, 134, 111, 0.2) !important;
        }

        .home-journal-item {
          display: grid !important;
          grid-template-columns: 88px 1fr !important;
          gap: 14px !important;
          padding: 13px 0 !important;
          border-bottom: 1px solid rgba(157, 134, 111, 0.16) !important;
          color: rgba(41, 37, 33, 0.82) !important;
          font-size: 12px !important;
          line-height: 1.6 !important;
          text-decoration: none !important;
        }

        .home-journal-item time {
          color: rgba(139, 116, 94, 0.72) !important;
          font-family: var(--serif) !important;
          letter-spacing: 0.04em !important;
          white-space: nowrap !important;
        }

        .home-journal-item span {
          overflow: hidden !important;
          color: #252238 !important;
          font-weight: 700 !important;
          text-overflow: ellipsis !important;
          white-space: nowrap !important;
        }

        .home-journal-more {
          display: inline-flex !important;
          margin-top: 18px !important;
          padding-bottom: 4px !important;
          border-bottom: 1px solid rgba(139, 116, 94, 0.44) !important;
          color: rgba(41, 37, 33, 0.78) !important;
          font-family: var(--serif) !important;
          font-size: 13px !important;
          letter-spacing: 0.12em !important;
          text-decoration: none !important;
        }

        .site-footer .footer-top > div:first-child {
          display: none !important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function forceHeaderScale() {
    if (!window.matchMedia("(max-width: 640px)").matches) return;

    const brand = document.querySelector(".site-header .brand");
    const credit = document.querySelector(".site-header .brand-credit");
    const mark = document.querySelector(".site-header .brand-credit img");

    if (brand) {
      Object.assign(brand.style, {
        maxWidth: "260px",
        color: "#252238",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Hiragino Kaku Gothic ProN", "Yu Gothic", "Noto Sans JP", sans-serif',
        fontSize: "18px",
        fontWeight: "800",
        letterSpacing: "0.14em",
        lineHeight: "1.18",
        whiteSpace: "nowrap",
      });
    }

    if (credit) {
      Object.assign(credit.style, {
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        marginTop: "8px",
        color: "rgba(139, 116, 94, 0.62)",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Hiragino Kaku Gothic ProN", "Yu Gothic", "Noto Sans JP", sans-serif',
        fontSize: "10px",
        fontWeight: "600",
        letterSpacing: "0.16em",
        lineHeight: "1",
        whiteSpace: "nowrap",
      });
    }

    if (mark) {
      Object.assign(mark.style, {
        display: "inline-block",
        width: "14px",
        height: "14px",
        minWidth: "14px",
        maxWidth: "14px",
        objectFit: "contain",
        flex: "0 0 14px",
      });
    }
  }

  function buildMobileLinks() {
    const nav = document.createElement("nav");
    nav.className = "mindlab-injected-links";
    nav.setAttribute("aria-label", "主要リンク");

    const link = document.createElement("a");
    link.href = "/about#mission";
    link.textContent = "めざすこと";
    nav.appendChild(link);

    return nav;
  }

  function buildJournal(post) {
    const section = document.createElement("section");
    section.className = "home-journal mindlab-injected-journal";
    section.setAttribute("aria-label", "ブログ");
    section.innerHTML = `
      <div class="home-journal-inner">
        <div class="home-journal-kicker">JOURNAL</div>
        <div class="home-journal-list">
          <a class="home-journal-item" href="${post.url}">
            <time>${post.date}</time>
            <span>${post.title}</span>
          </a>
        </div>
        <a class="home-journal-more" href="/blog">ブログ一覧</a>
      </div>
    `;
    return section;
  }

  async function getLatestPost() {
    try {
      const response = await fetch(`/posts.json?ts=${Date.now()}`, { cache: "no-store" });
      if (!response.ok) throw new Error("posts unavailable");
      const posts = await response.json();
      const post = Array.isArray(posts) && posts[0];
      if (!post) throw new Error("empty posts");
      return {
        title: post.title || "最新記事を読む",
        date: post.date || "2026/8/5",
        url: post.url || (post.slug ? `/blog/${post.slug}` : "/blog"),
      };
    } catch (_error) {
      return {
        title: "最新記事を読む",
        date: "BLOG",
        url: "/blog",
      };
    }
  }

  async function mount() {
    const hero = document.querySelector(".editorial-hero");
    const heroInner = document.querySelector(".editorial-hero-inner");
    if (!hero || !heroInner) return;

    document.querySelectorAll(".mindlab-injected-links, .home-mobile-primary-link").forEach((node) => node.remove());
    heroInner.appendChild(buildMobileLinks());

    document.querySelectorAll(".mindlab-injected-journal").forEach((node) => node.remove());
    const post = await getLatestPost();
    hero.insertAdjacentElement("afterend", buildJournal(post));

    const mobileNav = document.querySelector(".mobile-nav");
    if (mobileNav && !mobileNav.querySelector('a[href="/diagnosis"]')) {
      const diagnosis = document.createElement("a");
      diagnosis.href = "/diagnosis";
      diagnosis.textContent = "モンスター診断";
      const services = mobileNav.querySelector('a[href="/services"]');
      if (services && services.nextSibling) {
        mobileNav.insertBefore(diagnosis, services.nextSibling);
      } else {
        mobileNav.appendChild(diagnosis);
      }
    }

    forceHeaderScale();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount, { once: true });
  } else {
    mount();
  }

  [100, 300, 800, 1500].forEach((delay) => {
    setTimeout(() => {
      mount();
      forceHeaderScale();
    }, delay);
  });
})();