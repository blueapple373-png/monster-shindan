import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

const SITE_URL = "https://monster-shindan.vercel.app";
const MICROCMS_URL =
  "https://minami-mindlab-blog.microcms.io/api/v1/blogs?limit=100&orders=-publishedAt";
const DIST_DIR = path.resolve("dist");

const apiKey = process.env.MICROCMS_API_KEY;

if (!apiKey) {
  throw new Error("MICROCMS_API_KEY is not configured.");
}

const response = await fetch(MICROCMS_URL, {
  headers: {
    "X-MICROCMS-API-KEY": apiKey,
  },
});

if (!response.ok) {
  throw new Error(
    `Failed to fetch microCMS contents: ${response.status}`
  );
}

const data = await response.json();
const posts = data.contents || [];

const baseHtml = await readFile(
  path.join(DIST_DIR, "index.html"),
  "utf8"
);

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeXml(value = "") {
  return escapeHtml(value);
}

function stripHtml(value = "") {
  return String(value)
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function formatDate(value) {
  if (!value) return "";

  return new Date(value).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}

function replaceOrInsert(html, pattern, tag) {
  if (pattern.test(html)) {
    return html.replace(pattern, tag);
  }

  return html.replace("</head>", `    ${tag}\n  </head>`);
}

function createHtml({
  title,
  description,
  url,
  body,
  image = "",
  type = "article",
}) {
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
    `<meta name="robots" content="index, follow" />`
  );

  html = replaceOrInsert(
    html,
    /<meta\s+property=["']og:type["'][^>]*>/i,
    `<meta property="og:type" content="${type}" />`
  );

  html = replaceOrInsert(
    html,
    /<meta\s+property=["']og:title["'][^>]*>/i,
    `<meta property="og:title" content="${escapeHtml(title)}" />`
  );

  html = replaceOrInsert(
    html,
    /<meta\s+property=["']og:description["'][^>]*>/i,
    `<meta property="og:description" content="${escapeHtml(
      description
    )}" />`
  );

  html = replaceOrInsert(
    html,
    /<meta\s+property=["']og:url["'][^>]*>/i,
    `<meta property="og:url" content="${escapeHtml(url)}" />`
  );

  if (image) {
    html = replaceOrInsert(
      html,
      /<meta\s+property=["']og:image["'][^>]*>/i,
      `<meta property="og:image" content="${escapeHtml(image)}" />`
    );
  }

  html = html.replace(
    /<link\s+rel=["']canonical["'][^>]*>/i,
    ""
  );

  html = html.replace(
    "</head>",
    `    <link rel="canonical" href="${escapeHtml(url)}" />\n  </head>`
  );

  const rootPattern =
    /<div\s+id=["']root["']\s*><\/div>/i;

  if (!rootPattern.test(html)) {
    throw new Error('Could not find <div id="root"></div>.');
  }

  html = html.replace(
    rootPattern,
    `<div id="root">${body}</div>`
  );

  return html;
}

function createArticleBody(post) {
  const title = escapeHtml(post.title || "ブログ記事");
  const category = escapeHtml(post.category?.name || "");
  const date = formatDate(post.publishedAt);
  const eyecatch = post.eyecatch?.url || "";

  return `
    <main>
      <section class="page-hero compact">
        <div class="hero-inner">
          <span class="eyebrow">BLOG</span>
          <h1>${title}</h1>
          <p class="hero-copy">
            ${date}${category ? `　${category}` : ""}
          </p>
        </div>
      </section>

      <section class="section white">
        <div class="container">
          <article class="article-card standalone">
            ${
              eyecatch
                ? `<img
                    src="${escapeHtml(eyecatch)}"
                    alt="${title}"
                    style="width:100%;height:auto;margin-bottom:2rem;"
                  />`
                : ""
            }

            <div class="blog-content">
              ${post.content || ""}
            </div>
          </article>
        </div>
      </section>
    </main>
  `;
}

function createBlogIndexBody() {
  const items = posts
    .map((post) => {
      const id = String(post.id);

      if (!/^[A-Za-z0-9_-]+$/.test(id)) {
        throw new Error(`Invalid microCMS content ID: ${id}`);
      }

      return `
        <article class="news-item">
          <div class="news-date">
            ${formatDate(post.publishedAt)}
          </div>

          ${
            post.category?.name
              ? `<div class="news-category">${escapeHtml(
                  post.category.name
                )}</div>`
              : ""
          }

          <div>
            <strong>
              <a href="/blog/${id}">
                ${escapeHtml(post.title || "ブログ記事")}
              </a>
            </strong>
          </div>
        </article>
      `;
    })
    .join("");

  return `
    <main>
      <section class="page-hero compact">
        <div class="hero-inner">
          <span class="eyebrow">BLOG</span>
          <h1>ブログ</h1>
          <p class="hero-copy">
            感情が大きく動いたあとに、日常へ戻るための考え方やヒントをお届けします。
          </p>
        </div>
      </section>

      <section class="section white">
        <div class="container">
          <div class="news-list">
            ${items || "<p>まだ記事はありません。</p>"}
          </div>
        </div>
      </section>
    </main>
  `;
}

async function writePage(relativePath, html) {
  const directory = path.join(DIST_DIR, relativePath);

  await mkdir(directory, {
    recursive: true,
  });

  await writeFile(
    path.join(directory, "index.html"),
    html,
    "utf8"
  );
}

/* ブログ一覧ページ */
const blogDescription =
  "不安や自己否定などで日常が止まりそうなときに、自分を責めず、少しずつ戻るための考え方やヒントを掲載しています。";

const blogIndexHtml = createHtml({
  title: "ブログ｜MINAMI MINDLAB",
  description: blogDescription,
  url: `${SITE_URL}/blog`,
  body: createBlogIndexBody(),
  type: "website",
});

await writePage("blog", blogIndexHtml);

/* 個別記事ページ */
for (const post of posts) {
  const id = String(post.id);

  if (!/^[A-Za-z0-9_-]+$/.test(id)) {
    throw new Error(`Invalid microCMS content ID: ${id}`);
  }

  const fallbackDescription = stripHtml(post.content).slice(
    0,
    140
  );

  const description =
    post.seoDescription?.trim() ||
    fallbackDescription ||
    blogDescription;

  const url = `${SITE_URL}/blog/${id}`;

  const articleHtml = createHtml({
    title: `${post.title || "ブログ記事"}｜MINAMI MINDLAB`,
    description,
    url,
    body: createArticleBody(post),
    image: post.eyecatch?.url || "",
    type: "article",
  });

  await writePage(
    path.join("blog", id),
    articleHtml
  );
}

/* sitemap.xml にブログURLを自動追加 */
const sitemapPath = path.join(
  DIST_DIR,
  "sitemap.xml"
);

let sitemap = await readFile(
  sitemapPath,
  "utf8"
);

const sitemapEntries = [
  {
    loc: `${SITE_URL}/blog`,
    lastmod: "",
  },
  ...posts.map((post) => ({
    loc: `${SITE_URL}/blog/${post.id}`,
    lastmod: post.updatedAt
      ? new Date(post.updatedAt)
          .toISOString()
          .slice(0, 10)
      : "",
  })),
];

let additions = "";

for (const entry of sitemapEntries) {
  const locTag = `<loc>${escapeXml(entry.loc)}</loc>`;

  if (sitemap.includes(locTag)) {
    continue;
  }

  additions += `
  <url>
    <loc>${escapeXml(entry.loc)}</loc>
    ${
      entry.lastmod
        ? `<lastmod>${entry.lastmod}</lastmod>`
        : ""
    }
  </url>
`;
}

sitemap = sitemap.replace(
  "</urlset>",
  `${additions}</urlset>`
);

await writeFile(
  sitemapPath,
  sitemap,
  "utf8"
);

console.log(
  `Generated blog index and ${posts.length} blog article page(s).`
);
