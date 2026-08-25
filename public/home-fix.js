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

      .footer-nav > div:first-child strong::after {
        content: "止まりやすい日を、扱える形にする。";
        display: block;
        margin-top: 10px;
        margin-bottom: 18px;
        color: rgba(255, 250, 241, 0.56);
        font-size: 12px;
        font-weight: 400;
        line-height: 1.7;
        letter-spacing: 0.08em;
        white-space: nowrap;
      }

      body:not(:has(.editorial-hero)) .page-hero.compact .page-home-rail {
        top: 128px !important;
        right: 92px !important;
        gap: 8px !important;
      }

      body:not(:has(.editorial-hero)) .page-hero.compact .page-home-rail i {
        height: 245px !important;
        margin-top: 16px !important;
      }

      @media (min-width: 961px) {
        body:not(:has(.editorial-hero)) main:has(.content-layout .side-nav) .section {
          padding-top: 58px !important;
          padding-bottom: 110px !important;
        }

        body:not(:has(.editorial-hero)) main:has(.content-layout .side-nav) .content-layout {
          max-width: 1120px !important;
          grid-template-columns: 180px minmax(0, 760px) !important;
          gap: 72px !important;
          align-items: start !important;
          justify-content: start !important;
        }

        body:not(:has(.editorial-hero)) main:has(.content-layout .side-nav) .side-nav {
          position: sticky !important;
          top: 150px !important;
          padding: 0 !important;
          border: 0 !important;
          border-radius: 0 !important;
          background: transparent !important;
          box-shadow: none !important;
        }

        body:not(:has(.editorial-hero)) main:has(.content-layout .side-nav) .side-nav a {
          padding: 14px 0 !important;
          border-bottom: 1px solid rgba(157, 134, 111, 0.20) !important;
          color: rgba(61, 49, 41, 0.72) !important;
          font-family: var(--serif) !important;
          font-size: 13px !important;
          line-height: 1.7 !important;
          letter-spacing: 0.07em !important;
        }

        body:not(:has(.editorial-hero)) main:has(.content-layout .side-nav) .side-nav a:first-child {
          border-top: 1px solid rgba(157, 134, 111, 0.20) !important;
        }

        body:not(:has(.editorial-hero)) main:has(.content-layout .side-nav) .article-card {
          max-width: 760px !important;
          padding: 0 !important;
          border: 0 !important;
          border-radius: 0 !important;
          background: transparent !important;
          box-shadow: none !important;
        }

        body:not(:has(.editorial-hero)) main:has(.content-layout .side-nav) .article-card > section {
          margin: 0 0 54px !important;
          padding: 0 0 54px !important;
          border-bottom: 1px solid rgba(157, 134, 111, 0.18) !important;
          scroll-margin-top: 150px;
        }

        body:not(:has(.editorial-hero)) main:has(.content-layout .side-nav) .article-card > section:last-child {
          margin-bottom: 0 !important;
          padding-bottom: 0 !important;
          border-bottom: 0 !important;
        }

        body:not(:has(.editorial-hero)) main:has(.content-layout .side-nav) .article-card .section-kicker {
          margin-bottom: 15px !important;
          color: rgba(117, 93, 150, 0.82) !important;
          font-size: 11px !important;
          font-weight: 700 !important;
          letter-spacing: 0.18em !important;
        }

        body:not(:has(.editorial-hero)) main:has(.content-layout .side-nav) .article-card h2 {
          max-width: 700px !important;
          margin: 0 0 28px !important;
          color: rgba(41, 37, 33, 0.94) !important;
          font-family: "Yu Mincho Light", "YuMincho", "Hiragino Mincho ProN", "Yu Mincho", serif !important;
          font-size: clamp(30px, 2.3vw, 36px) !important;
          font-weight: 400 !important;
          line-height: 1.62 !important;
          letter-spacing: 0.035em !important;
        }

        body:not(:has(.editorial-hero)) main:has(.content-layout .side-nav) .article-card h3 {
          margin: 0 0 18px !important;
          color: rgba(41, 37, 33, 0.90) !important;
          font-family: "Yu Mincho Light", "YuMincho", "Hiragino Mincho ProN", "Yu Mincho", serif !important;
          font-size: 22px !important;
          font-weight: 500 !important;
          line-height: 1.6 !important;
          letter-spacing: 0.04em !important;
        }

        body:not(:has(.editorial-hero)) main:has(.content-layout .side-nav) .article-card p,
        body:not(:has(.editorial-hero)) main:has(.content-layout .side-nav) .article-card li {
          color: rgba(52, 49, 46, 0.82) !important;
          font-size: 15px !important;
          line-height: 2 !important;
          letter-spacing: 0.035em !important;
        }

        body:not(:has(.editorial-hero)) main:has(.content-layout .side-nav) .article-card p + p {
          margin-top: 18px !important;
        }

        body:not(:has(.editorial-hero)) main:has(.content-layout .side-nav) .article-card ul {
          margin: 8px 0 0 !important;
          padding-left: 1.25em !important;
        }

        body:not(:has(.editorial-hero)) main:has(.content-layout .side-nav) .article-card li {
          margin-bottom: 12px !important;
        }

        body:not(:has(.editorial-hero)) main:has(.content-layout .side-nav) .article-card strong {
          font-weight: 600 !important;
        }
      }

      @media (max-width: 960px) {
        body:not(:has(.editorial-hero)) .page-hero.compact .page-home-rail {
          top: 34px !important;
          right: 24px !important;
        }
      }

      @media (max-width: 640px) {
        .footer-nav > div:first-child strong::after {
          display: none !important;
        }

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

  function normalizeAboutPage() {
    if (location.pathname !== "/about") return;

    const heroCopy = document.querySelector(".page-hero.compact .hero-copy");
    if (heroCopy) {
      heroCopy.textContent =
        "不安や自己否定で、考えることや日常まで止まりそうになる。そんなとき、自分の中で起きている反応を知り、扱う方法をつくっています。";
    }

    const navLinks = document.querySelectorAll(".content-layout .side-nav a");
    const navLabels = ["めざすこと", "扱うための3つのステップ", "取り組み", "安全方針"];
    navLinks.forEach((link, index) => {
      if (navLabels[index]) link.textContent = navLabels[index];
    });

    const mission = document.querySelector("#mission");
    if (mission) {
      const heading = mission.querySelector("h2");
      const paragraphs = mission.querySelectorAll("p");
      if (heading) heading.textContent = "止まりやすい日も、自分を責めずに扱えるように。";
      if (paragraphs[0]) {
        paragraphs[0].textContent =
          "不安や自己否定が強くなると、目の前の家事や仕事、勉強、人との関わりまで止まることがあります。MINAMI MINDLABがめざすのは、感情を消したり、揺れない人になることではありません。";
      }
      if (paragraphs[1]) {
        paragraphs[1].textContent =
          "自分の中で起きている反応を、自分そのものと切り分けて知る。そのうえで、今の自分に使える小さな対処を選べるようにすることです。";
      }
    }

    const approach = document.querySelector("#approach");
    if (approach) {
      const heading = approach.querySelector("h3");
      if (heading) heading.textContent = "扱うための3つのステップ";
      const items = approach.querySelectorAll("li");
      const labels = [
        ["知る：", "今どの反応が強く出ているのかを整理する"],
        ["Treatする：", "感情を消そうとせず、今できる対処を選ぶ"],
        ["再開する：", "完璧に落ち着く前でも、できることから日常を再開する"],
      ];
      items.forEach((item, index) => {
        if (!labels[index]) return;
        item.innerHTML = `<strong>${labels[index][0]}</strong>${labels[index][1]}`;
      });
    }

    const scope = document.querySelector("#scope");
    if (scope) {
      const heading = scope.querySelector("h3");
      const paragraph = scope.querySelector("p");
      if (heading) heading.textContent = "考え方を、使える形にする";
      if (paragraph) {
        paragraph.textContent =
          "この考え方を、モンスター診断、4週間プログラム、Treatアプリなどの形にしています。";
      }
    }
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
    normalizeAboutPage();
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
          padding: 0 0 5px !important;
          border-bottom: 1px solid rgba(139, 116, 94, 0.44) !important;
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