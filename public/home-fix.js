const siteLinks = {
  about: "/about",
  mission: "/about#mission",
  diagnosis: "/diagnosis",
  services: "/services",
};

function applyMindlabDisplayFix() {
  const styleId = "mindlab-display-fix-style";
  if (!document.getElementById(styleId)) {
    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = `
      .breadcrumb { display: none !important; }
      .hero-rail-link { pointer-events: none; }
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
}

let attempts = 0;
function retryApply() {
  applyMindlabDisplayFix();
  attempts += 1;
  if (attempts < 20) {
    window.requestAnimationFrame(retryApply);
  }
}

retryApply();
