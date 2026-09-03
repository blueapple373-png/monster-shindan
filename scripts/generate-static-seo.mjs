import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

const SITE_URL = "https://monster-shindan.vercel.app";
const DIST_DIR = path.resolve("dist");

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
  const html = withMeta(baseHtml, {
    ...page,
    url,
  });
  await writeRoute(page.path, html);
}

console.log(`Generated static SEO HTML for home and ${pages.length} fixed route(s).`);
