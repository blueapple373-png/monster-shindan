(function () {
  var style = document.createElement("style");
  style.textContent = `
    @media (max-width: 640px) {
      .site-header .brand-credit {
        display: inline-flex !important;
        align-items: center !important;
        gap: 6px !important;
        margin-top: 6px !important;
        line-height: 1 !important;
        white-space: nowrap !important;
      }
      .site-header .brand-credit span {
        display: inline !important;
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
      .mindlab-site main {
        overflow: hidden !important;
        background:
          radial-gradient(ellipse at 74% 35%, rgba(139, 188, 214, 0.18), transparent 42%),
          radial-gradient(ellipse at 75% 58%, rgba(220, 122, 130, 0.15), transparent 44%),
          radial-gradient(ellipse at 50% 63%, rgba(135, 190, 158, 0.10), transparent 40%),
          radial-gradient(ellipse at 44% 80%, rgba(232, 195, 135, 0.10), transparent 40%),
          #fffefa !important;
      }
      .editorial-hero {
        min-height: auto !important;
        padding: 38px 20px 74px !important;
        background: transparent !important;
      }
      .editorial-hero::before,
      .editorial-hero::after,
      .hero-visual-stage,
      .hero-geometry-stage::before,
      .hero-geometry-stage::after,
      .root-lines,
      .hero-rail-link,
      .hero-text-link {
        display: none !important;
      }
      .editorial-hero-inner {
        position: relative !important;
      }
      .hero-mobile-links {
        position: absolute;
        top: 256px;
        right: -62px;
        z-index: 2;
        display: block;
        width: 158px;
        height: 158px;
      }
      .hero-mobile-links a {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 158px;
        height: 158px;
        border: 1px solid rgba(139, 116, 94, 0.20);
        border-radius: 50%;
        background: rgba(255, 254, 250, 0.16);
        color: rgba(41, 37, 33, 0.76);
        font-family: var(--serif);
        font-size: 13px;
        font-weight: 500;
        letter-spacing: 0.12em;
        text-decoration: none;
      }
      .hero-mobile-links a::after {
        content: "";
        position: absolute;
        right: 30px;
        bottom: 48px;
        width: 78px;
        height: 1px;
        background: rgba(139, 116, 94, 0.40);
      }
      .home-journal {
        display: block;
        padding: 0 28px 54px;
        background: transparent;
      }
      .home-journal-kicker {
        margin-bottom: 24px;
        color: rgba(139, 116, 94, 0.70);
        font-size: 13px;
        font-weight: 800;
        letter-spacing: 0.26em;
      }
      .home-journal-list {
        border-top: 1px solid rgba(139, 116, 94, 0.16);
      }
      .home-journal-item {
        display: grid;
        grid-template-columns: 104px minmax(0, 1fr);
        gap: 16px;
        padding: 17px 0;
        border-bottom: 1px solid rgba(139, 116, 94, 0.14);
        color: rgba(41, 37, 33, 0.92);
        text-decoration: none;
      }
      .home-journal-item time {
        color: rgba(139, 116, 94, 0.58);
        font-family: var(--serif);
        font-size: 18px;
        white-space: nowrap;
      }
      .home-journal-item span {
        overflow: hidden;
        font-size: 14px;
        font-weight: 700;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .home-journal-more {
        position: relative;
        display: inline-flex;
        margin-top: 28px;
        padding-bottom: 9px;
        color: rgba(41, 37, 33, 0.86);
        font-family: var(--serif);
        font-size: 15px;
        letter-spacing: 0.08em;
        text-decoration: none;
      }
      .home-journal-more::after {
        content: "";
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        height: 1px;
        background: rgba(139, 116, 94, 0.45);
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

    var copy = hero.querySelector(".editorial-hero-copy");
    if (copy && !copy.querySelector(".hero-mobile-links")) {
      var links = document.createElement("div");
      links.className = "hero-mobile-links";
      links.setAttribute("aria-label", "主要リンク");
      links.innerHTML = '<a href="/about#mission">めざすこと</a>';
      copy.appendChild(links);
    }

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
