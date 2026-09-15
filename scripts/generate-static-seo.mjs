import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

const SITE_URL = "https://monster-shindan.vercel.app";
const DIST_DIR = path.resolve("dist");

const servicesStaticBody = `
<main class="seo-static-fallback" aria-label="サービス・取り組み">
  <section>
    <p class="seo-static-eyebrow">SERVICES</p>
    <h1>サービス・取り組み</h1>
    <p>無料診断を入口に、個人向けプログラム、Treatアプリ、学習コンテンツ、法人・提携向けの取り組みをご案内します。</p>
  </section>

  <section>
    <h2>知る</h2>
    <p>まずは、自分の反応のくせを知ることから。</p>
    <h3>モンスター診断</h3>
    <p>不安・過去の傷・自己否定・自責のうち、今の自分に強く出やすい反応を整理します。</p>
    <p><a href="/diagnosis">無料で診断を受ける</a></p>
  </section>

  <section>
    <h2>扱う</h2>
    <p>分かった反応を、実生活の中で扱う練習へ。</p>
    <h3>4週間プログラム</h3>
    <p>実生活を材料に、感情に飲み込まれたあとも自分を責め続けないための練習をします。</p>
    <h3>Treatアプリ</h3>
    <p>4週間プログラムの実践を、日常の中で支えるツールです。診断で見えた反応に合わせて、今できる対処を選ぶ手助けをします。</p>
    <p><a href="/app">Treatアプリを見る</a></p>
  </section>

  <section>
    <h2>続ける</h2>
    <p>一度理解して終わらず、日常の中で続けていく。</p>
    <h3>学習コンテンツ</h3>
    <p>感情が強くなる仕組み、境界線、セルフケアなどを、短く学べる形でまとめています。</p>
    <h3>Discordコミュニティ</h3>
    <p>アウトプット、定型チェックイン、雑談、日常の小さな出来事を共有する場です。</p>
  </section>

  <section>
    <h2>法人・団体向け</h2>
    <p>福利厚生、少人数導入、研修、共同検証、掲載・提携などを個別にご相談いただけます。</p>
    <p><a href="/business">法人向けを見る</a></p>
  </section>

  <nav class="seo-static-links" aria-label="関連ページ">
    <a href="/">ホーム</a>
    <a href="/about">MINAMI MINDLABとは</a>
    <a href="/monsters">ネガティブモンスター</a>
  </nav>
</main>`;

const diagnosisStaticBody = `
<main class="seo-static-fallback" aria-label="モンスター診断">
  <section>
    <p class="seo-static-eyebrow">MONSTER DIAGNOSIS</p>
    <h1>あなたの脳の住人はどのモンスター？</h1>
    <p>16問の質問に答えると、今いちばん前に出ているモンスターが分かります。</p>
    <p>最近1か月の生活を振り返って、それぞれの反応がどのくらいあったかを選んでください。</p>
  </section>

  <section>
    <h2>この診断で整理する4つの反応</h2>
    <h3>フアンダー｜不安モンスター</h3>
    <p>まだ起きていない未来を心配し、今ここにいることを難しくさせる反応を整理します。</p>
    <h3>カコノキズ｜過去の傷モンスター</h3>
    <p>過去の痛みと今の出来事が重なり、身構えやすくなる反応を整理します。</p>
    <h3>ジコヒテイ｜自己否定モンスター</h3>
    <p>うまくいかないことを、自分自身の価値の否定につなげやすい反応を整理します。</p>
    <h3>ジセキン｜自責モンスター</h3>
    <p>本来自分だけの責任ではないことまで、自分のせいとして抱え込みやすい反応を整理します。</p>
  </section>

  <nav class="seo-static-links" aria-label="関連ページ">
    <a href="/">MINAMI MINDLAB公式サイト</a>
    <a href="/services">サービス・取り組み</a>
    <a href="/monsters">ネガティブモンスター</a>
    <a href="/app">Treatアプリ</a>
  </nav>
</main>`;

const pages = [
  {
    path: "/about",
    title: "MINAMI MINDLABとは｜MINAMI MINDLAB",
    description:
      "感情をなくすのではなく、自分の中で起きている反応を知り、扱うためのMINAMI MINDLABの考え方をご紹介します。",
    robots: "index, follow",
  },
  {
    path: "/services",
    title: "サービス・取り組み｜MINAMI MINDLAB",
    description:
      "モンスター診断、4週間プログラム、Treatアプリなど、MINAMI MINDLABのサービスをご案内します。",
    robots: "index, follow",
    staticBody: servicesStaticBody,
  },
  {
    path: "/monsters",
    title: "ネガティブモンスター｜MINAMI MINDLAB",
    description:
      "不安・過去の傷・自己否定・自責という4つの反応を、ネガティブモンスターとして整理するMINAMI MINDLABの考え方をご紹介します。",
    robots: "index, follow",
  },
  {
    path: "/app",
    title: "Treatアプリ｜MINAMI MINDLAB",
    description:
      "感情が大きく動いたときに、今の反応を整理し、次にできる小さな対処を選ぶためのTreatアプリをご紹介します。",
    robots: "index, follow",
  },
  {
    path: "/business",
    title: "法人・団体・提携事業者の方へ｜MINAMI MINDLAB",
    description:
      "福利厚生、試験導入、研修、共同検証、掲載・提携など、法人・団体向けの取り組みをご案内します。",
    robots: "index, follow",
  },
  {
    path: "/profile",
    title: "運営者 岡本南美について｜MINAMI MINDLAB",
    description:
      "MINAMI MINDLAB運営者・岡本南美の活動背景と、止まったあとに立て直す方法を仕組みにする理由をご紹介します。",
    robots: "index, follow",
  },
  {
    path: "/news",
    title: "お知らせ・開発状況｜MINAMI MINDLAB",
    description:
      "サービス募集、アプリ開発、ネガティブモンスターの設計など、MINAMI MINDLABの更新情報を掲載しています。",
    robots: "index, follow",
  },
  {
    path: "/contact",
    title: "お問い合わせ｜MINAMI MINDLAB",
    description:
      "個人向けサービス、法人・福利厚生、提携、共同検証、取材などに関するお問い合わせはこちらから。",
    robots: "index, follow",
  },
  {
    path: "/privacy",
    title: "プライバシーポリシー｜MINAMI MINDLAB",
    description:
      "MINAMI MINDLABにおける個人情報の取得、利用目的、管理方法についてご案内します。",
    robots: "index, follow",
  },
  {
    path: "/tokushoho",
    title: "特定商取引法に基づく表記｜MINAMI MINDLAB",
    description:
      "MINAMI MINDLABおよびCACHE-CACHEの特定商取引法に基づく表記です。",
    robots: "index, follow",
  },
  {
    path: "/diagnosis",
    title: "モンスター診断｜MINAMI MINDLAB",
    description:
      "16問の質問から、不安・過去の傷・自己否定・自責のうち、今の自分に強く出やすいネガティブパターンを整理する無料診断です。",
    robots: "index, follow",
    staticBody: diagnosisStaticBody,
  },
];

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function replaceOrInsert(html, pattern, tag) {
  if (pattern.test(html)) {
    return html.replace(pattern, tag);
  }

  return html.replace("</head>", `    ${tag}\n  </head>`);
}

function withMeta(baseHtml, { title, description, robots, url }) {
  let html = baseHtml;

  html = html.replace(
    /<title>[\s\S]*?<\/title>/i,
    `<title>${escapeHtml(title)}</title>`
  );

  html = replaceOrInsert(
    html,
    /<meta\s+name=["']description["'][^>]*>/i,
    `<meta name="description" content="${escapeHtml(description)}" />`
  );

  html = replaceOrInsert(
    html,
    /<meta\s+name=["']robots["'][^>]*>/i,
    `<meta name="robots" content="${escapeHtml(robots)}" />`
  );

  html = replaceOrInsert(
    html,
    /<meta\s+property=["']og:type["'][^>]*>/i,
    `<meta property="og:type" content="website" />`
  );

  html = replaceOrInsert(
    html,
    /<meta\s+property=["']og:title["'][^>]*>/i,
    `<meta property="og:title" content="${escapeHtml(title)}" />`
  );

  html = replaceOrInsert(
    html,
    /<meta\s+property=["']og:description["'][^>]*>/i,
    `<meta property="og:description" content="${escapeHtml(description)}" />`
  );

  html = replaceOrInsert(
    html,
    /<meta\s+property=["']og:url["'][^>]*>/i,
    `<meta property="og:url" content="${escapeHtml(url)}" />`
  );

  html = html.replace(/<link\s+rel=["']canonical["'][^>]*>\s*/gi, "");
  html = html.replace(
    "</head>",
    `    <link rel="canonical" href="${escapeHtml(url)}" />\n  </head>`
  );

  return html;
}

function withStaticBody(html, staticBody) {
  if (!staticBody) return html;

  const fallbackStyle = `
    <style id="seo-static-fallback-style">
      .seo-static-fallback { max-width: 920px; margin: 0 auto; padding: 96px 24px 72px; color: #2d2d3a; font-family: "Hiragino Kaku Gothic ProN", "Yu Gothic", sans-serif; line-height: 1.9; }
      .seo-static-fallback section { margin: 0 0 44px; }
      .seo-static-fallback h1 { margin: 8px 0 20px; font-size: clamp(30px, 5vw, 48px); line-height: 1.45; }
      .seo-static-fallback h2 { margin: 0 0 12px; font-size: 24px; }
      .seo-static-fallback h3 { margin: 24px 0 8px; font-size: 18px; }
      .seo-static-fallback p { margin: 0 0 12px; }
      .seo-static-eyebrow { font-size: 12px; letter-spacing: .18em; color: #8f7d6d; }
      .seo-static-fallback a { color: #6652a3; text-underline-offset: 3px; }
      .seo-static-links { display: flex; flex-wrap: wrap; gap: 12px 24px; padding-top: 24px; border-top: 1px solid rgba(45,45,58,.12); }
    </style>`;

  let output = html.replace("</head>", `${fallbackStyle}\n  </head>`);
  output = output.replace(
    /<div\s+id=["']root["']\s*><\/div>/i,
    `<div id="root">${staticBody}</div>`
  );
  return output;
}

async function writeRoute(routePath, html) {
  const relative = routePath.replace(/^\//, "");
  const directory = path.join(DIST_DIR, relative);
  await mkdir(directory, { recursive: true });
  await writeFile(path.join(directory, "index.html"), html, "utf8");
}

const baseHtml = await readFile(path.join(DIST_DIR, "index.html"), "utf8");

const homeHtml = withMeta(baseHtml, {
  title: "MINAMI MINDLAB｜止まりやすい日を、扱える形にする",
  description:
    "MINAMI MINDLABは、不安、自己否定、自責などで日常が止まりそうなとき、自分を責めずに次の小さな行動を選ぶための仕組みを開発しています。",
  robots: "index, follow",
  url: `${SITE_URL}/`,
});

await writeFile(path.join(DIST_DIR, "index.html"), homeHtml, "utf8");

for (const page of pages) {
  const url = `${SITE_URL}${page.path}`;
  let html = withMeta(baseHtml, {
    ...page,
    url,
  });
  html = withStaticBody(html, page.staticBody);
  await writeRoute(page.path, html);
}

console.log(`Generated static SEO HTML for home and ${pages.length} fixed route(s).`);
