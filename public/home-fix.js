const siteLinks = {
  about: "/about",
  mission: "/about#mission",
  diagnosis: "/diagnosis",
  services: "/services",
  blog: "/blog",
};

function escapeHtml(value) {
  return String(value || "").replace(/[&<>"']/g, (char) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };
    return entities[char];
  });
}

function applyMindlabDisplayFix() {
  const styleId = "mindlab-display-fix-style-v2";
  document.querySelectorAll("#mindlab-display-fix-style").forEach((node) => node.remove());
  if (!document.getElementById(styleId)) {
    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = `
      .breadcrumb { display: none !important; }
      .hero-rail-link { pointer-events: none; }
      .home-journal { display: none; }
      @media (max-width: 640px) {
        .editorial-hero {
          min-height: auto !important;
          padding-bottom: 34px !important;
        }
        .hero-mobile-links {
          margin-top: 36px !important;
          gap: 10px !important;
        }
        .hero-mobile-links::after {
          content: "" !important;
          display: block !important;
          width: min(304px, 100%) !important;
          height: 104px !important;
          margin-top: 76px !important;
          background:
            linear-gradient(rgba(139, 116, 94, 0.24), rgba(139, 116, 94, 0.24)) left top / 100% 1px no-repeat,
            linear-gradient(rgba(139, 116, 94, 0.22), rgba(139, 116, 94, 0.22)) left 48px / 100% 1px no-repeat,
            linear-gradient(rgba(139, 116, 94, 0.2), rgba(139, 116, 94, 0.2)) left 96px / 38% 1px no-repeat !important;
        }
        .hero-mobile-links a {
          min-height: 32px !important;
          padding: 0 !important;
          border-bottom: 0 !important;
          color: rgba(41, 37, 33, 0.76) !important;
          font-size: 14px !important;
        }
        .hero-mobile-links a::after {
          content: "→" !important;
          width: auto !important;
          height: auto !important;
          background: transparent !important;
          color: rgba(139, 116, 94, 0.62) !important;
          font-size: 13px !important;
        }
        .home-journal {
          display: block;
          margin-top: -1px;
          padding: 8px 28px 50px;
          background:
            radial-gradient(ellipse at 84% -18%, rgba(190, 222, 209, 0.1), transparent 44%),
            radial-gradient(ellipse at 78% 10%, rgba(216, 117, 130, 0.08), transparent 48%),
            #fffefa;
        }
        .home-journal-kicker {
          color: rgba(157, 134, 111, 0.78);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.18em;
        }
        .home-journal-list {
          margin-top: 18px;
          border-top: 1px solid rgba(157, 134, 111, 0.2);
        }
        .home-journal-item {
          display: grid;
          grid-template-columns: 88px 1fr;
          gap: 14px;
          padding: 13px 0;
          border-bottom: 1px solid rgba(157, 134, 111, 0.16);
          color: rgba(41, 37, 33, 0.82);
          font-size: 12px;
          line-height: 1.6;
          text-decoration: none;
        }
        .home-journal-item time {
          color: rgba(139, 116, 94, 0.72);
          font-family: var(--serif);
          letter-spacing: 0.04em;
        }
        .home-journal-item span {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .home-journal-more {
          display: inline-flex;
          margin-top: 18px;
          padding-bottom: 4px;
          border-bottom: 1px solid rgba(139, 116, 94, 0.44);
          color: rgba(41, 37, 33, 0.78);
          font-family: var(--serif);
          font-size: 13px;
          letter-spacing: 0.12em;
          text-decoration: none;
        }
      }
    `;
    document.head.appendChild(style);
  }

  const brandCredit = document.querySelector(".brand small");
  if (brandCredit && !brandCredit.classList.contains("brand-credit")) {
    brandCredit.classList.add("brand-credit");
    brandCredit.innerHTML = '<span>operated by</span><img src="/cache-cache-mark.svg" alt="" aria-hidden="true"><span>CACHE-CACHE</span>';
  }

  const mobileNav = document.querySelector(".mobile-nav");
  if (mobileNav && !mobileNav.querySelector('a[href="/diagnosis"]')) {
    const diagnosisLink = document.createElement("a");
    diagnosisLink.href = siteLinks.diagnosis;
    diagnosisLink.textContent = "モンスター診断";
    const firstLink = mobileNav.querySelector("a");
    if (firstLink?.nextSibling) {
      mobileNav.insertBefore(diagnosisLink, firstLink.nextSibling);
    } else {
      mobileNav.appendChild(diagnosisLink);
    }
  }

  document.querySelectorAll("a, h1, h2, h3, p, li").forEach((node) => {
    if (node.childElementCount === 0) {
      node.textContent = node.textContent
        .replaceAll("目指すこと", "めざすこと")
        .replaceAll("目指すのは", "めざすのは");
    }
  });

  const rail = document.querySelector(".hero-rail-link");
  if (rail) {
    rail.removeAttribute("href");
    rail.setAttribute("aria-hidden", "true");
    const label = rail.querySelector("strong");
    if (label) label.textContent = "mission";
  }

  const mainLink = document.querySelector(".hero-text-link");
  if (mainLink) {
    mainLink.href = siteLinks.mission;
    mainLink.textContent = "めざすこと";
  }

  const side = document.querySelector(".editorial-hero-side");
  if (side && !side.querySelector(".hero-mobile-links")) {
    const nav = document.createElement("nav");
    nav.className = "hero-mobile-links";
    nav.setAttribute("aria-label", "主要リンク");
    nav.innerHTML = `
      <a href="${siteLinks.mission}">めざすこと</a>
      <a href="${siteLinks.diagnosis}">診断する</a>
      <a href="${siteLinks.services}">サービス</a>
    `;
    side.appendChild(nav);
  }

  const heroMobileLinks = document.querySelector(".hero-mobile-links");
  if (heroMobileLinks) {
    heroMobileLinks
      .querySelectorAll(`a[href="${siteLinks.blog}"]`)
      .forEach((blogLink) => blogLink.remove());
    heroMobileLinks
      .querySelectorAll("a")
      .forEach((link) => {
        if (link.textContent.trim() === "ブログ") link.remove();
      });
  }

  const main = document.querySelector(".editorial-hero")?.parentElement;
  if (main && !main.querySelector(".home-journal")) {
    const journal = document.createElement("section");
    journal.className = "home-journal";
    journal.setAttribute("aria-label", "ブログ");
    journal.innerHTML = `
      <div class="home-journal-inner">
        <div class="home-journal-kicker">JOURNAL</div>
        <div class="home-journal-list">
          <a class="home-journal-item" href="${siteLinks.blog || "/blog"}">
            <time>BLOG</time>
            <span>ブログを見る</span>
          </a>
        </div>
        <a class="home-journal-more" href="${siteLinks.blog || "/blog"}">ブログ一覧</a>
      </div>
    `;
    main.appendChild(journal);
    fetch("/api/blogs")
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => {
        const posts = (data?.contents || []).slice(0, 3);
        if (!posts.length) return;
        const list = journal.querySelector(".home-journal-list");
        list.innerHTML = posts
          .map((post) => {
            const date = post.publishedAt
              ? new Date(post.publishedAt).toLocaleDateString("ja-JP")
              : "";
            return `<a class="home-journal-item" href="/blog/${escapeHtml(post.id)}"><time>${escapeHtml(date)}</time><span>${escapeHtml(post.title)}</span></a>`;
          })
          .join("");
      })
      .catch(() => {});
  }
}

let attempts = 0;
function retryApply() {
  try {
    applyMindlabDisplayFix();
  } catch (err) {
    console.warn("MINAMI MINDLAB display fix skipped", err);
  }
  attempts += 1;
  if (attempts < 60) {
    window.requestAnimationFrame(retryApply);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", retryApply, { once: true });
} else {
  retryApply();
}
