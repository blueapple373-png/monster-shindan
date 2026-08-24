(function () {
  var style = document.createElement("style");
  style.textContent = `
    @media (max-width: 640px) {
      .site-header {
        background: rgba(255, 254, 250, 0.72) !important;
        backdrop-filter: none !important;
      }
      .site-header .header-inner {
        min-height: 92px !important;
        padding: 0 26px !important;
      }
      .site-header .brand {
        color: #252238 !important;
        font-family: -apple-system, BlinkMacSystemFont, "Hiragino Kaku Gothic ProN", "Yu Gothic", "Noto Sans JP", sans-serif !important;
        font-size: 18px !important;
        font-weight: 800 !important;
        letter-spacing: 0.14em !important;
        line-height: 1.18 !important;
      }
      .site-header .brand-credit {
        display: inline-flex !important;
        align-items: center !important;
        gap: 6px !important;
        margin-top: 8px !important;
        color: rgba(139, 116, 94, 0.62) !important;
        font-family: -apple-system, BlinkMacSystemFont, "Hiragino Kaku Gothic ProN", "Yu Gothic", "Noto Sans JP", sans-serif !important;
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
        overflow: hidden !important;
        background:
          radial-gradient(ellipse at 72% 32%, rgba(139, 188, 214, 0.19), transparent 42%),
          radial-gradient(ellipse at 76% 57%, rgba(220, 122, 130, 0.16), transparent 45%),
          radial-gradient(ellipse at 42% 68%, rgba(135, 190, 158, 0.10), transparent 42%),
          radial-gradient(ellipse at 40% 82%, rgba(232, 195, 135, 0.10), transparent 42%),
          #fffefa !important;
      }
      .editorial-hero {
        position: relative !important;
        min-height: auto !important;
        padding: 42px 20px 48px !important;
        background: transparent !important;
      }
      .editorial-hero::before,
      .editorial-hero::after,
      .hero-visual-stage,
      .hero-geometry-stage,
      .root-lines,
      .hero-rail-link,
      .hero-text-link,
      .editorial-hero .eyebrow {
        display: none !important;
      }
      .editorial-hero-inner,
      .editorial-hero-copy,
      .editorial-hero-side {
        display: block !important;
        min-height: 0 !important;
        max-width: none !important;
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
      .home-mobile-primary-link {
        display: flex !important;
        justify-content: flex-end !important;
        margin: -4px -72px 34px 0 !important;
      }
      .home-mobile-primary-link a {
        position: relative !important;
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        width: 156px !important;
        height: 156px !important;
        border: 1px solid rgba(139, 116, 94, 0.20) !important;
        border-radius: 50% !important;
        color: rgba(41, 37, 33, 0.72) !important;
        background: rgba(255, 254, 250, 0.10) !important;
        font-family: var(--serif) !important;
        font-size: 13px !important;
        font-weight: 500 !important;
        letter-spacing: 0.12em !important;
        text-decoration: none !important;
      }
      .home-mobile-primary-link a::after {
        content: "";
        position: absolute;
        right: 26px;
        bottom: 48px;
        width: 76px;
        height: 1px;
        background: rgba(139, 116, 94, 0.40);
      }
      .home-journal {
        display: block !important;
        padding: 0 28px 54px !important;
        background: transparent !important;
      }
      .home-journal-kicker {
        margin-bottom: 24px !important;
        color: rgba(139, 116, 94, 0.70) !important;
        font-size: 13px !important;
        font-weight: 800 !important;
        letter-spacing: 0.26em !important;
      }
      .home-journal-list {
        border-top: 1px solid rgba(139, 116, 94, 0.14) !important;
      }
      .home-journal-item {
        display: grid !important;
        grid-template-columns: 104px minmax(0, 1fr) !important;
        gap: 16px !important;
        padding: 17px 0 !important;
        border-bottom: 1px solid rgba(139, 116, 94, 0.12) !important;
        color: rgba(41, 37, 33, 0.92) !important;
        text-decoration: none !important;
      }
      .home-journal-item time {
        color: rgba(139, 116, 94, 0.58) !important;
        font-family: var(--serif) !important;
        font-size: 18px !important;
        white-space: nowrap !important;
      }
      .home-journal-item span {
        overflow: hidden !important;
        color: #252238 !important;
        font-size: 14px !important;
        font-weight: 700 !important;
        text-overflow: ellipsis !important;
        white-space: nowrap !important;
      }
      .home-journal-more {
        position: relative !important;
        display: inline-flex !important;
        margin-top: 28px !important;
        padding-bottom: 9px !important;
        color: rgba(41, 37, 33, 0.86) !important;
        font-family: var(--serif) !important;
        font-size: 15px !important;
        letter-spacing: 0.08em !important;
        text-decoration: none !important;
      }
      .home-journal-more::after {
        content: "" !important;
        position: absolute !important;
        right: 0 !important;
        bottom: 0 !important;
        left: 0 !important;
        height: 1px !important;
        background: rgba(139, 116, 94, 0.45) !important;
      }
      .site-footer .footer-top > div:first-child {
        display: none !important;
      }
    }
  `;
  document.head.appendChild(style);

  function ensureMobileHomeParts() {
    var hero = document.querySelector(".home-hero");
    if (!hero) return;

    hero.querySelectorAll(".hero-mobile-links, .home-mobile-primary-link").forEach(function (node) {
      node.remove();
    });

    var side = hero.querySelector(".editorial-hero-side") || hero.querySelector(".editorial-hero-copy") || hero;
    var linkWrap = document.createElement("div");
    linkWrap.className = "home-mobile-primary-link";
    linkWrap.innerHTML = '<a href="/about#mission">めざすこと</a>';
    side.appendChild(linkWrap);

    if (!document.querySelector(".home-journal")) {
      var journal = document.createElement("section");
      journal.className = "home-journal";
      journal.setAttribute("aria-label", "ブログ");
      journal.innerHTML = [
        '<div class="home-journal-inner">',
        '<div class="home-journal-kicker">JOURNAL</div>',
        '<div class="home-journal-list">',
        '<a class="home-journal-item" href="/blog">',
        '<time>BLOG</time>',
        '<span>ブログを見る</span>',
        '</a>',
        '</div>',
        '<a class="home-journal-more" href="/blog">ブログ一覧</a>',
        '</div>',
      ].join("");
      hero.insertAdjacentElement("afterend", journal);

      fetch("/api/blogs")
        .then(function (response) {
          if (!response.ok) throw new Error("blog fetch failed");
          return response.json();
        })
        .then(function (data) {
          var post = data && data.contents && data.contents[0];
          if (!post) return;
          var item = journal.querySelector(".home-journal-item");
          var time = item.querySelector("time");
          var title = item.querySelector("span");
          item.href = post.href || "/blog/" + post.id;
          time.textContent = post.publishedAt
            ? new Date(post.publishedAt).toLocaleDateString("ja-JP")
            : "BLOG";
          title.textContent = post.title || "ブログを見る";
        })
        .catch(function () {});
    }

    var mobileNav = document.querySelector(".mobile-nav");
    if (mobileNav && !mobileNav.querySelector('a[href="/diagnosis"]')) {
      var diagnosis = document.createElement("a");
      diagnosis.href = "/diagnosis";
      diagnosis.textContent = "モンスター診断";
      var services = mobileNav.querySelector('a[href="/services"]');
      if (services && services.nextSibling) {
        mobileNav.insertBefore(diagnosis, services.nextSibling);
      } else {
        mobileNav.appendChild(diagnosis);
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", ensureMobileHomeParts);
  } else {
    ensureMobileHomeParts();
  }
  setTimeout(ensureMobileHomeParts, 300);
  setTimeout(ensureMobileHomeParts, 1000);
})();
