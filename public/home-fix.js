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
        main {
          position: relative !important;
          overflow: hidden !important;
          background:
            radial-gradient(ellipse at 84% 34%, rgba(171, 202, 227, 0.22), transparent 54%),
            radial-gradient(ellipse at 82% 55%, rgba(222, 135, 154, 0.18), transparent 54%),
            radial-gradient(ellipse at 62% 45%, rgba(190, 222, 209, 0.16), transparent 48%),
            radial-gradient(ellipse at 54% 68%, rgba(228, 196, 154, 0.12), transparent 48%),
            #fffefa !important;
        }

        main::before {
          content: "" !important;
          position: absolute !important;
          inset: 0 !important;
          z-index: 0 !important;
          pointer-events: none !important;
          background:
            conic-gradient(from 214deg at 76% 45%, transparent 0deg, rgba(171, 202, 227, 0.10) 34deg, transparent 74deg, rgba(222, 135, 154, 0.09) 126deg, transparent 168deg, rgba(190, 222, 209, 0.08) 228deg, transparent 288deg, rgba(228, 196, 154, 0.07) 328deg, transparent 360deg),
            radial-gradient(ellipse at 72% 38%, rgba(255, 254, 250, 0) 0 34%, rgba(255, 254, 250, 0.62) 47%, rgba(255, 254, 250, 0) 66%),
            radial-gradient(ellipse at 78% 58%, rgba(255, 254, 250, 0) 0 30%, rgba(255, 254, 250, 0.5) 46%, rgba(255, 254, 250, 0) 64%) !important;
          filter: blur(18px) !important;
          opacity: 0.95 !important;
        }

        main > * {
          position: relative !important;
          z-index: 1 !important;
        }

        .editorial-hero {
          min-height: auto !important;
          padding-bottom: 42px !important;
          background: transparent !important;
        }

        .editorial-hero::before,
        .editorial-hero::after {
          content: none !important;
          display: none !important;
        }

        .editorial-hero-inner {
          min-height: auto !important;
          padding-bottom: 0 !important;
        }

        .hero-text-link {
          display: none !important;
        }

        .hero-mobile-links,
        .mindlab-injected-links {
          display: grid !important;
          gap: 24px !important;
          width: min(304px, 100%) !important;
          margin-top: 44px !important;
          position: relative !important;
          isolation: isolate !important;
        }

        .hero-mobile-links::after,
        .mindlab-injected-links::after {
          content: none !important;
          display: none !important;
        }

        .hero-mobile-links a[href="/blog"],
        .hero-mobile-links a[href="https://monster-shindan.vercel.app/blog"] {
          display: none !important;
        }

        .hero-mobile-links a,
        .mindlab-injected-links a {
          display: flex !important;
          align-items: center !important;
          justify-content: space-between !important;
          min-height: 28px !important;
          padding: 0 !important;
          border-bottom: 0 !important;
          color: rgba(41, 37, 33, 0.76) !important;
          font-family: var(--serif) !important;
          font-size: 14px !important;
          font-weight: 500 !important;
          letter-spacing: 0.12em !important;
          position: relative !important;
          isolation: isolate !important;
        }

        .hero-mobile-links a::before,
        .mindlab-injected-links a::before {
          content: "" !important;
          position: absolute !important;
          left: -22px !important;
          top: 50% !important;
          z-index: -1 !important;
          width: 128px !important;
          height: 128px !important;
          border-radius: 50% !important;
          transform: translateY(-50%) !important;
          background: radial-gradient(circle, rgba(139, 116, 94, 0.075) 0%, rgba(139, 116, 94, 0.035) 44%, transparent 72%) !important;
          filter: blur(1px) !important;
          pointer-events: none !important;
        }

        .hero-mobile-links a:nth-child(2)::before,
        .mindlab-injected-links a:nth-child(2)::before {
          left: 58px !important;
          background: radial-gradient(circle, rgba(171, 202, 227, 0.10) 0%, rgba(171, 202, 227, 0.04) 44%, transparent 72%) !important;
        }

        .hero-mobile-links a:nth-child(3)::before,
        .mindlab-injected-links a:nth-child(3)::before {
          left: 118px !important;
          background: radial-gradient(circle, rgba(222, 135, 154, 0.095) 0%, rgba(222, 135, 154, 0.038) 44%, transparent 72%) !important;
        }

        .hero-mobile-links a::after,
        .mindlab-injected-links a::after {
          content: "→" !important;
          width: auto !important;
          height: auto !important;
          background: transparent !important;
          color: rgba(139, 116, 94, 0.62) !important;
          font-size: 13px !important;
        }

        .home-journal,
        .mindlab-injected-journal {
          display: block !important;
          margin-top: 0 !important;
          position: relative !important;
          padding: 42px 28px 54px !important;
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
        }

        .home-journal-item time {
          color: rgba(139, 116, 94, 0.72) !important;
          font-family: var(--serif) !important;
          letter-spacing: 0.04em !important;
        }

        .home-journal-item span {
          overflow: hidden !important;
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
        }
      }
    `;
    document.head.appendChild(style);
  }

  function buildMobileLinks() {
    const nav = document.createElement("nav");
    nav.className = "mindlab-injected-links";
    nav.setAttribute("aria-label", "主要リンク");
    [
      ["めざすこと", "/about"],
      ["診断する", "/diagnosis"],
      ["サービス", "/services"],
    ].forEach(([label, href]) => {
      const link = document.createElement("a");
      link.href = href;
      link.textContent = label;
      nav.appendChild(link);
    });
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

  function formatDate(value) {
    if (!value) return "";
    return new Date(value).toLocaleDateString("ja-JP");
  }

  function install() {
    const hero = document.querySelector(".editorial-hero");
    const side = document.querySelector(".editorial-hero-side") || document.querySelector(".editorial-hero-copy");
    if (!hero || !side) return false;

    if (!document.querySelector(".hero-mobile-links") && !document.querySelector(".mindlab-injected-links")) {
      side.appendChild(buildMobileLinks());
    }

    if (!document.querySelector(".home-journal")) {
      const fallback = { date: "BLOG", title: "ブログを見る", url: "/blog" };
      hero.insertAdjacentElement("afterend", buildJournal(fallback));

      fetch("/api/blogs")
        .then((response) => (response.ok ? response.json() : null))
        .then((data) => {
          const post = data && data.contents && data.contents[0];
          if (!post) return;
          const item = document.querySelector(".mindlab-injected-journal .home-journal-item");
          if (!item) return;
          item.href = `/blog/${post.id}`;
          item.querySelector("time").textContent = formatDate(post.publishedAt);
          item.querySelector("span").textContent = post.title;
        })
        .catch(() => {});
    }

    return true;
  }

  let attempts = 0;
  function waitForRender() {
    if (install() || attempts > 120) return;
    attempts += 1;
    requestAnimationFrame(waitForRender);
  }

  waitForRender();
})();
