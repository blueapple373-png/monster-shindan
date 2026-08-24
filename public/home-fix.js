(() => {
  const isHome = location.pathname === "/" || location.pathname === "";

  const globalStyleId = "mindlab-page-rail-fix";
  if (!document.getElementById(globalStyleId)) {
    const globalStyle = document.createElement("style");
    globalStyle.id = globalStyleId;
    globalStyle.textContent = `
      .footer-top {
        grid-template-columns: 1fr !important;
      }

      .footer-top > div:not(.footer-nav) {
        display: none !important;
      }

      .footer-nav {
        width: 100% !important;
      }

      body:not(:has(.editorial-hero)) .page-hero.compact .page-home-rail {
        top: 36px !important;
        right: max(32px, calc((100vw - var(--max)) / 2 + 24px)) !important;
        gap: 8px !important;
      }

      body:not(:has(.editorial-hero)) .page-hero.compact .page-home-rail i {
        height: 92px !important;
        margin-top: 10px !important;
      }

      @media (max-width: 960px) {
        body:not(:has(.editorial-hero)) .page-hero.compact .page-home-rail {
          top: 34px !important;
          right: 24px !important;
        }
      }

      @media (max-width: 640px) {
        body:not(:has(.editorial-hero)) .page-hero.compact .page-home-rail {
          display: none !important;
        }
      }
    `;
    document.head.appendChild(globalStyle);
  }

  function normalizeMissionCopy() {
    document.querySelectorAll("a, h1, h2, h3, p, li").forEach((node) => {
      if (node.childElementCount === 0) {
        const next = node.textContent
          .replaceAll("目指すこと", "めざすこと")
          .replaceAll("目指すのは", "めざすのは");
        if (next !== node.textContent) node.textContent = next;
      }
    });
  }

  function ensureHomeRail() {
    const rail = document.querySelector(".editorial-hero .hero-rail-link");
    if (!rail) return false;

    if (rail.getAttribute("href") !== "/about#mission") rail.href = "/about#mission";
    if (rail.getAttribute("aria-label") !== "めざすことへ") {
      rail.setAttribute("aria-label", "めざすことへ");
    }

    const number = rail.querySelector("span");
    if (number && number.textContent !== "01") number.textContent = "01";

    const label = rail.querySelector("strong");
    if (label && label.textContent.toLowerCase() !== "mission") {
      label.textContent = "Mission";
    }

    return true;
  }

  function ensurePageHomeRails() {
    const heroes = document.querySelectorAll(".page-hero.compact");
    if (!heroes.length) return false;

    heroes.forEach((hero) => {
      let rail = hero.querySelector(".hero-rail-link");

      if (!rail) {
        rail = document.createElement("a");
        rail.className = "hero-rail-link page-home-rail";
        rail.href = "/";
        rail.setAttribute("aria-label", "ホームへ戻る");
        rail.innerHTML = `
          <span>00</span>
          <i aria-hidden="true"></i>
          <strong>Home</strong>
        `;
        hero.appendChild(rail);
        return;
      }

      if (!hero.classList.contains("editorial-hero")) {
        rail.classList.add("page-home-rail");
        if (rail.getAttribute("href") !== "/") rail.href = "/";
        if (rail.getAttribute("aria-label") !== "ホームへ戻る") {
          rail.setAttribute("aria-label", "ホームへ戻る");
        }
        const number = rail.querySelector("span");
        if (number && number.textContent !== "00") number.textContent = "00";
        const label = rail.querySelector("strong");
        if (label && label.textContent !== "Home") label.textContent = "Home";
      }
    });

    return true;
  }

  function installGlobalPageFixes() {
    normalizeMissionCopy();
    return isHome ? ensureHomeRail() : ensurePageHomeRails();
  }

  if (!isHome) {
    let pageAttempts = 0;
    function waitForPageRender() {
      const ready = installGlobalPageFixes();
      if (ready || pageAttempts > 120) return;
      pageAttempts += 1;
      requestAnimationFrame(waitForPageRender);
    }
    waitForPageRender();
    return;
  }

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
          gap: 22px !important;
          width: fit-content !important;
          max-width: 100% !important;
          margin-top: 42px !important;
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
          justify-content: flex-start !important;
          min-height: 28px !important;
          padding: 0 !important;
          border-bottom: 0 !important;
          color: rgba(41, 37, 33, 0.76) !important;
          font-family: var(--serif) !important;
          font-size: 14px !important;
          font-weight: 500 !important;
          letter-spacing: 0.12em !important;
        }

        .hero-mobile-links a::after,
        .mindlab-injected-links a::after {
          content: none !important;
          display: none !important;
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

  function formatDate(value) {
    if (!value) return "";
    return new Date(value).toLocaleDateString("ja-JP");
  }

  function installHome() {
    installGlobalPageFixes();

    const hero = document.querySelector(".editorial-hero");
    const side = document.querySelector(".editorial-hero-side") || document.querySelector(".editorial-hero-copy");
    if (!hero || !side) return false;

    const subcopy = document.querySelector(".editorial-hero-side .hero-copy");
    if (
      subcopy &&
      subcopy.textContent.trim() !== "感情をなくすのではなく、起きている反応を知る。"
    ) {
      subcopy.textContent = "感情をなくすのではなく、起きている反応を知る。";
    }

    const mainLink = document.querySelector(".hero-text-link");
    if (mainLink) {
      if (mainLink.getAttribute("href") !== "/about#mission") mainLink.href = "/about#mission";
      if (mainLink.textContent.trim() !== "めざすこと") {
        mainLink.textContent = "めざすこと";
      }
    }

    let mobileLinks = document.querySelector(".hero-mobile-links, .mindlab-injected-links");
    if (!mobileLinks) {
      mobileLinks = buildMobileLinks();
      side.appendChild(mobileLinks);
    } else {
      const links = mobileLinks.querySelectorAll("a");
      if (
        links.length !== 1 ||
        links[0].textContent.trim() !== "めざすこと" ||
        !links[0].getAttribute("href")?.endsWith("/about#mission")
      ) {
        mobileLinks.innerHTML = '<a href="/about#mission">めざすこと</a>';
      }
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

  installHome();

  const observer = new MutationObserver(() => {
    installHome();
  });
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();
