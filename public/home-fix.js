(() => {
  const styleId = "mindlab-mobile-home-fix";
  if (document.getElementById(styleId)) return;

  const style = document.createElement("style");
  style.id = styleId;
  style.textContent = `
    @media (max-width: 640px) {
      .editorial-hero {
        min-height: auto !important;
        padding-bottom: 34px !important;
      }

      .editorial-hero-inner {
        min-height: auto !important;
        padding-bottom: 0 !important;
      }

      .hero-mobile-links {
        display: grid !important;
        gap: 20px !important;
        width: min(304px, 100%) !important;
        margin-top: 42px !important;
      }

      .hero-mobile-links::after {
        content: none !important;
        display: none !important;
      }

      .hero-mobile-links a[href="/blog"],
      .hero-mobile-links a[href="https://monster-shindan.vercel.app/blog"] {
        display: none !important;
      }

      .hero-mobile-links a {
        min-height: 28px !important;
        padding: 0 !important;
        border-bottom: 0 !important;
        color: rgba(41, 37, 33, 0.76) !important;
        font-family: var(--serif) !important;
        font-size: 14px !important;
        font-weight: 500 !important;
        letter-spacing: 0.12em !important;
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
        display: block !important;
        margin-top: 0 !important;
        padding: 8px 28px 50px !important;
        background:
          radial-gradient(ellipse at 74% -18%, rgba(171, 202, 227, 0.13), transparent 48%),
          radial-gradient(ellipse at 82% 22%, rgba(222, 135, 154, 0.11), transparent 52%),
          radial-gradient(ellipse at 58% 6%, rgba(190, 222, 209, 0.09), transparent 42%),
          #fffefa !important;
      }
    }
  `;
  document.head.appendChild(style);
})();
