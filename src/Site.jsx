import { useEffect, useState } from "react";
import "./site.css";
import "./business.css";
import { SiteHeader, SiteFooter, siteLinks } from "./SiteChrome.jsx";

function Layout({ children }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mindlab-site">
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}

function Hero({ eyebrow, title, children, compact = true }) {
  return (
    <section className={`page-hero ${compact ? "compact" : ""}`}>
      <div className="hero-inner">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        {children}
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <Layout>
      <main>
        <section className="page-hero home-hero editorial-hero">
          <a className="hero-rail-link" href={siteLinks.diagnosis}>
            <span>01</span>
            <i aria-hidden="true" />
            <strong>Observe</strong>
          </a>
          <div className="hero-inner editorial-hero-inner">
            <div className="editorial-hero-copy">
              <div>
                <span className="eyebrow">MINAMI MINDLAB</span>
                <h1>
                  止まりやすい日を、
                  <br />
                  <span className="hero-accent">扱える形にする。</span>
                </h1>
              </div>
              <div className="editorial-hero-side">
                <p className="hero-copy">
                  感情をなくすのではなく、扱える形にする。
                </p>
                <a className="hero-text-link" href={siteLinks.diagnosis}>
                  診断をはじめる
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            <div className="hero-visual-stage hero-geometry-stage" aria-hidden="true">
              <div className="root-lines">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

function AboutPage() {
  return (
    <Layout>
      <main>
        <Hero eyebrow="ABOUT" title="MINAMI MINDLABとは">
          <p className="hero-copy">
            感情をなくすのではなく、反応を理解し、Treatし、日常を止めすぎないための活動です。
          </p>
        </Hero>
        <section className="section white">
          <div className="container content-layout">
            <aside className="side-nav">
              <a href="#mission">目指すこと</a>
              <a href="#approach">3つの考え方</a>
              <a href="#scope">現在の取り組み</a>
              <a href="#safety">安全方針</a>
            </aside>
            <article className="article-card">
              <section id="mission">
                <div className="section-kicker">MISSION</div>
                <h2>止まりやすい日も、自分を責めずに扱えるように。</h2>
                <p>
                  不安や自己否定が強くなると、目の前の家事、仕事、勉強、
                  人との関わりまで止まることがあります。
                  MINAMI MINDLABが目指すのは、感情を消すことではありません。
                </p>
                <p>
                  自分の中で起きている反応を、自分全体と切り分けて理解し、
                  その場で使える小さな対処を増やすことです。
                </p>
              </section>
              <section id="approach">
                <h3>3つの考え方</h3>
                <ul>
                  <li><strong>知る：</strong>今どの反応が強く出ているのかを整理する</li>
                  <li><strong>Treatする：</strong>感情を消そうとせず、今できる対処を選ぶ</li>
                  <li><strong>再開する：</strong>完璧に元気になる前でも、最小の行動を選ぶ</li>
                </ul>
              </section>
              <section id="scope">
                <h3>現在取り組んでいること</h3>
                <p>
                  モンスター診断、4週間プログラム、Treatアプリ、短い学習コンテンツ、
                  Discordコミュニティの設計を進めています。
                </p>
              </section>
              <section id="safety">
                <h3>安全方針</h3>
                <p>
                  医療・診断・心理療法・危機介入の代替ではありません。
                  緊急性や専門的支援が必要な場合は、医療機関や公的相談窓口などの利用を優先します。
                </p>
              </section>
            </article>
          </div>
        </section>
      </main>
    </Layout>
  );
}

function BusinessChapterHeader({ number, label, title, children }) {
  return (
    <div className="business-chapter-head">
      <div className="business-chapter-number" aria-hidden="true">{number}</div>
      <div className="business-chapter-intro">
        <span>{label}</span>
        <h2>{title}</h2>
      </div>
      <div className="business-chapter-copy">{children}</div>
    </div>
  );
}

function BusinessPage() {
  return (
    <Layout>
      <main className="business-page">
        <Hero eyebrow="FOR ORGANIZATIONS" title="法人・団体・提携事業者の皆さまへ">
          <p className="hero-copy">
            福利厚生、試験導入、共同検証、研修、取材、掲載・提携について個別にご相談いただけます。
          </p>
        </Hero>

        <section className="business-system-section">
          <div className="container business-container">
            <section className="business-chapter">
              <BusinessChapterHeader number="01" label="OPTIONS" title="相談できること">
                <p>
                  導入目的や対象に合わせて、現在提供できる範囲を個別に整理します。
                </p>
              </BusinessChapterHeader>

              <div className="business-options">
                <article className="business-option">
                  <span className="business-option-label">A</span>
                  <h3>福利厚生・試験導入</h3>
                  <p>対象人数、実施期間、利用方法を伺い、現在提供できる範囲を整理します。</p>
                </article>
                <article className="business-option">
                  <span className="business-option-label">B</span>
                  <h3>研修・ワークショップ</h3>
                  <p>自動反応の外在化、止まったあとの立て直し方などを扱うオンライン形式を検討します。</p>
                </article>
                <article className="business-option">
                  <span className="business-option-label">C</span>
                  <h3>共同検証・事業連携</h3>
                  <p>アプリ、学習プログラム、コミュニティの試験運用や共同検証について相談できます。</p>
                </article>
              </div>
            </section>

            <section className="business-chapter">
              <BusinessChapterHeader number="02" label="APPROACH" title="目的に合わせて、提供範囲を整理します">
                <p>
                  法人向けサービスを一律の完成パッケージとして販売しているわけではありません。
                  目的、対象者、人数、実施時期を伺い、現在提供できる内容と、追加開発が必要な内容を区別してお伝えします。
                </p>
              </BusinessChapterHeader>

              <div className="business-detail">
                <div className="business-detail-facts" aria-label="ご相談時に確認する内容">
                  <span>目的</span>
                  <span>対象者・人数</span>
                  <span>実施時期</span>
                  <span>必要な提供範囲</span>
                </div>
              </div>
            </section>

            <section className="business-chapter">
              <BusinessChapterHeader number="03" label="PRIVACY" title="個人情報について">
                <p>
                  利用者個人の相談内容、診断結果、選択したモンスター、Treat記録などを、
                  所属企業へ個人単位で提供することは想定していません。
                </p>
              </BusinessChapterHeader>

              <div className="business-detail">
                <a className="business-contact-link" href={siteLinks.contact}>
                  法人・提携について問い合わせる <span aria-hidden="true">→</span>
                </a>
              </div>
            </section>
          </div>
        </section>
      </main>
    </Layout>
  );
}

function ProfilePage() {
  return (
    <Layout>
      <main>
        <Hero eyebrow="FOUNDER" title="運営者について">
          <p className="hero-copy">
            完璧に克服した人としてではなく、止まったあとに立て直す方法を言葉と仕組みに変える立場から活動しています。
          </p>
        </Hero>
        <section className="section white">
          <div className="container profile-detail">
            <div className="profile-placeholder">PROFILE IMAGE</div>
            <article className="article-card">
              <h2>岡本 南美</h2>
              <p><strong>MINAMI MINDLAB運営／CACHE-CACHE</strong></p>
              <p>
                私は、感情に振り回されない強い人になったわけではありません。
                不安や自己否定が強くなり、頭では分かっていても、
                家事や仕事、勉強まで止まってしまう経験を繰り返してきました。
              </p>
              <p>
                心理学や脳の仕組みを学び、自分の反応や行動を観察する中で、
                感情をなくすことより、感情に飲み込まれたあとに立て直す方法が必要だと考えるようになりました。
              </p>
              <p>
                MINAMI MINDLABでは、自分自身の経験から見つけた仕組みを、
                同じように止まってしまう人が使える言葉、キャラクター、アプリ、学習方法へ翻訳しています。
              </p>
              <p>
                医療・心理職ではありません。そのため、診断や治療ではなく、
                日常で使う理解と対処の仕組みとして提供します。
              </p>
            </article>
          </div>
        </section>
      </main>
    </Layout>
  );
}

const newsItems = [
  {
    date: "2026.06.25",
    category: "開発情報",
    title: "公式ホームページを再構成しています",
    body: "個人向けLPとは別に、事業全体を案内する複数ページ型サイトを制作しています。",
  },
  {
    date: "2026.06.23",
    category: "キャラクター",
    title: "ネガティブモンスター4体の設計方針を確定しました",
    body: "不安・過去の傷・自己否定・自責の4体で構成します。",
  },
  {
    date: "2026.06.10",
    category: "プログラム",
    title: "4週間プログラムの募集ページを公開しました",
    body: "創設メンバー向けの内容を専用LPで案内しています。",
  },
];

function NewsList({ compact = false }) {
  return (
    <div className="news-list">
      {newsItems.map((item) => (
        <article className="news-item" key={`${item.date}-${item.title}`}>
          <div className="news-date">{item.date}</div>
          <div className="news-category">{item.category}</div>
          <div>
            <strong>{item.title}</strong>
            {!compact && <p>{item.body}</p>}
          </div>
        </article>
      ))}
    </div>
  );
}

function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadPosts() {
      try {
        const response = await fetch("/api/blogs");

        if (!response.ok) {
          throw new Error("ブログ記事を取得できませんでした。");
        }

        const data = await response.json();
        setPosts(data.contents || []);
      } catch (err) {
        console.error(err);
        setError("ブログ記事を読み込めませんでした。");
      } finally {
        setLoading(false);
      }
    }

    loadPosts();
  }, []);

  return (
    <Layout>
      <main>
        <Hero eyebrow="BLOG" title="ブログ">
          <p className="hero-copy">
            感情が大きく動いたあとに、次の小さな行動を選ぶための考え方やヒントをお届けします。
          </p>
        </Hero>

        <section className="section white">
          <div className="container">
            {loading && <p>記事を読み込んでいます...</p>}
            {error && <p>{error}</p>}
            {!loading && !error && posts.length === 0 && (
              <p>まだ記事はありません。</p>
            )}

            <div className="news-list">
              {posts.map((post) => (
                <article className="news-item" key={post.id}>
                  <div className="news-date">
                    {post.publishedAt
                      ? new Date(post.publishedAt).toLocaleDateString("ja-JP")
                      : ""}
                  </div>

                  {post.category?.name && (
                    <div className="news-category">
                      {post.category.name}
                    </div>
                  )}

                  <div>
                    <strong>
                      <a href={`/blog/${post.id}`}>
                        {post.title}
                      </a>
                    </strong>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

function BlogArticlePage({ id }) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadPost() {
      try {
        const response = await fetch(
          `/api/blogs?id=${encodeURIComponent(id)}`
        );

        if (response.status === 404) {
          throw new Error("NOT_FOUND");
        }

        if (!response.ok) {
          throw new Error("FETCH_ERROR");
        }

        const data = await response.json();
        setPost(data);
      } catch (err) {
        console.error(err);

        if (err.message === "NOT_FOUND") {
          setError("記事が見つかりませんでした。");
        } else {
          setError("記事を読み込めませんでした。");
        }
      } finally {
        setLoading(false);
      }
    }

    loadPost();
  }, [id]);

  useEffect(() => {
    if (!post) return;

    document.title = `${post.title}｜MINAMI MINDLAB`;

    const temp = document.createElement("div");
    temp.innerHTML = post.content || "";

    const fallbackDescription = (temp.textContent || "")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 140);

    const description =
      post.seoDescription?.trim() ||
      fallbackDescription ||
      "MINAMI MINDLABのブログ記事です。";

    const descriptionTag =
      document.querySelector('meta[name="description"]');

    if (descriptionTag) {
      descriptionTag.setAttribute("content", description);
    }
  }, [post]);

  if (loading) {
    return (
      <Layout>
        <main>
          <section className="section white">
            <div className="container">
              <p>記事を読み込んでいます...</p>
            </div>
          </section>
        </main>
      </Layout>
    );
  }

  if (error || !post) {
    return (
      <Layout>
        <main>
          <section className="section white">
            <div className="container article-card standalone">
              <h1>記事を表示できませんでした</h1>
              <p>{error}</p>
              <a className="text-link" href="/blog">
                ブログ一覧へ戻る →
              </a>
            </div>
          </section>
        </main>
      </Layout>
    );
  }

  const publishedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("ja-JP")
    : "";

  return (
    <Layout>
      <main>
        <Hero eyebrow="BLOG" title={post.title}>
          <p className="hero-copy">
            {publishedDate}
            {post.category?.name
              ? `　${post.category.name}`
              : ""}
          </p>
        </Hero>

        <section className="section white">
          <div className="container">
            <article className="article-card standalone">
              {post.eyecatch?.url && (
                <img
                  src={post.eyecatch.url}
                  alt={post.title}
                  style={{
                    width: "100%",
                    height: "auto",
                    marginBottom: "2rem",
                  }}
                />
              )}

              <div
                className="blog-content"
                dangerouslySetInnerHTML={{
                  __html: post.content || "",
                }}
              />
            </article>

            <p style={{ marginTop: "2rem" }}>
              <a className="text-link" href="/blog">
                ← ブログ一覧へ戻る
              </a>
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}

function NewsPage() {
  return (
    <Layout>
      <main>
        <Hero eyebrow="NEWS" title="お知らせ・開発状況">
          <p className="hero-copy">
            サービスの募集、アプリ開発、キャラクター設計などの更新情報を掲載します。
          </p>
        </Hero>
        <section className="section white">
          <div className="container">
            <NewsList />
          </div>
        </section>
      </main>
    </Layout>
  );
}

function ContactPage() {
  return (
    <Layout>
      <main>
        <Hero eyebrow="CONTACT" title="お問い合わせ">
          <p className="hero-copy">
            内容に応じて項目を選択し、必要事項をご入力ください。
          </p>
        </Hero>
        <section className="section white">
          <div className="container article-card standalone">
            <form
              className="contact-form"
              action="https://formsubmit.co/blueapple373@gmail.com"
              method="POST"
            >
              <input type="hidden" name="_subject" value="MINAMI MINDLAB公式サイトからのお問い合わせ" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value="https://monster-shindan.vercel.app/thanks" />
              <input type="hidden" name="_autoresponse" value="お問い合わせありがとうございます。内容を確認のうえ、必要に応じてご連絡いたします。" />
              <input type="text" name="_honey" tabIndex="-1" autoComplete="off" style={{ display: "none" }} />

              <label>
                <span>お問い合わせ種別</span>
                <select name="お問い合わせ種別" defaultValue="個人向けサービスについて" required>
                  <option>個人向けサービスについて</option>
                  <option>法人・福利厚生について</option>
                  <option>提携・共同検証について</option>
                  <option>取材・掲載について</option>
                  <option>その他</option>
                </select>
              </label>
              <label>
                <span>お名前</span>
                <input name="お名前" type="text" placeholder="例：山田 花子" required />
              </label>
              <label>
                <span>会社・団体名</span>
                <input name="会社・団体名" type="text" placeholder="法人・団体の場合" />
              </label>
              <label>
                <span>メールアドレス</span>
                <input name="email" type="email" placeholder="example@example.com" required />
              </label>
              <label>
                <span>お問い合わせ内容</span>
                <textarea
                  name="お問い合わせ内容"
                  placeholder="目的、対象人数、実施時期、料金・契約条件などをご記入ください。"
                  required
                />
              </label>
              <div className="form-notice">
                営業・掲載サービスのご案内は、正式な会社名、サービス名、料金、
                契約期間、解約条件、実績資料を添えてください。
              </div>
              <button className="button primary" type="submit">
                送信する
              </button>
            </form>
          </div>
        </section>
      </main>
    </Layout>
  );
}

function ThanksPage() {
  return (
    <Layout>
      <main>
        <Hero eyebrow="THANK YOU" title="お問い合わせを受け付けました">
          <p className="hero-copy">
            送信ありがとうございます。内容を確認のうえ、必要に応じてご連絡します。
          </p>
        </Hero>
        <section className="section white">
          <div className="container article-card standalone">
            <h2>送信が完了しました</h2>
            <p>
              ご入力いただいたメールアドレスにも受付確認メールが届きます。
              届かない場合は、迷惑メールフォルダもご確認ください。
            </p>
            <div className="hero-actions">
              <a className="button primary" href={siteLinks.home}>公式ホームへ戻る</a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

function PrivacyPage() {
  return (
    <Layout>
      <main>
        <Hero eyebrow="PRIVACY" title="プライバシーポリシー" />

        <section className="section white">
          <article className="container article-card standalone">
            <p>制定日：2026年7月23日</p>

            <h2>1．事業者情報</h2>
            <p>
              岡本 南美（屋号：CACHE-CACHE）は、本ウェブサイトおよび
              MINAMI MINDLABのサービスにおける個人情報を、
              本プライバシーポリシーに従って取り扱います。
            </p>

            <h2>2．取得する情報</h2>
            <p>当方は、次の情報を取得する場合があります。</p>
            <ul>
              <li>
                お問い合わせ時に入力された氏名、メールアドレス、
                会社・団体名、お問い合わせ種別およびお問い合わせ内容
              </li>
              <li>
                サービスへの申込み時に提供された氏名、メールアドレス、
                購入したサービス、決済状況その他の取引情報
              </li>
              <li>
                サイトへのアクセスに伴い、ホスティング事業者が処理する
                IPアドレス、端末・ブラウザ情報、アクセス日時等のログ情報
              </li>
            </ul>

            <h2>3．モンスター診断の回答について</h2>
            <p>
              モンスター診断で入力された回答、MBTIタイプおよび診断結果は、
              利用者のブラウザ上で一時的に処理されます。
              当方のサーバーへの送信または保存は行いません。
              ページを再読み込みした場合、入力内容は消去されます。
            </p>

            <h2>4．利用目的</h2>
            <p>取得した情報は、次の目的で利用します。</p>
            <ul>
              <li>お問い合わせへの回答および必要な連絡のため</li>
              <li>サービスの申込み受付、本人確認、決済および提供のため</li>
              <li>サービスに関する重要なお知らせを送信するため</li>
              <li>不正利用、迷惑送信その他の問題を防止するため</li>
              <li>サービスの品質改善および安全な運営のため</li>
              <li>法令または行政機関等からの適法な要請に対応するため</li>
            </ul>

            <h2>5．外部サービスの利用</h2>

            <h3>お問い合わせフォーム</h3>
            <p>
              お問い合わせフォームの送信にはFormSubmitを利用します。
              入力された情報は、メール送信、迷惑送信対策および
              サービス提供に必要な処理のため、FormSubmitを経由します。
              同サービスの仕様により、送信内容が一定期間保存される場合があります。
            </p>

            <h3>決済サービス</h3>
            <p>
              クレジットカード決済にはStripeを利用します。
              クレジットカード情報および決済に必要な情報は、
              Stripeのシステムにより処理されます。
              当方は、サービス提供および取引管理に必要な範囲で、
              決済状況や取引情報を確認します。
            </p>

            <h3>ホスティングサービス</h3>
            <p>
              本ウェブサイトの配信にはVercelを利用します。
              Vercelは、サイトの配信、セキュリティ、不正利用防止、
              障害対応等のため、IPアドレスやアクセスログ等を
              処理する場合があります。
            </p>

            <h2>6．第三者提供および委託</h2>
            <p>
              当方は、法令に基づく場合、本人の同意がある場合、
              または生命・身体・財産の保護のために必要な場合を除き、
              個人情報を第三者に提供しません。
            </p>
            <p>
              ただし、本ポリシーに記載した利用目的の達成に必要な範囲で、
              FormSubmit、Stripe、Vercel等の外部事業者に
              個人情報の取扱いを委託する場合があります。
            </p>

            <h2>7．情報の管理</h2>
            <p>
              当方は、個人情報の漏えい、紛失、改ざん、
              不正アクセス等を防止するため、
              必要かつ適切な安全管理措置を講じます。
              取得した情報は、利用目的に必要な期間保管し、
              不要となった後は適切な方法で削除します。
            </p>

            <h2>8．開示・訂正・削除等の請求</h2>
            <p>
              当方が保有する本人の個人情報について、
              開示、訂正、利用停止または削除を希望される場合は、
              下記のお問い合わせ窓口までご連絡ください。
              本人確認を行ったうえで、法令に従って対応します。
            </p>

            <h2>9．Cookieおよびアクセス解析</h2>
            <p>
              現時点では、本ウェブサイトにGoogle Analyticsや
              Vercel Web Analytics等のアクセス解析サービスを
              導入しておらず、アクセス解析を目的としたCookieを
              当方が設定する処理は実装していません。
            </p>
            <p>
              将来、アクセス解析等を導入する場合は、
              本プライバシーポリシーを更新し、必要な情報を表示します。
            </p>

            <h2>10．プライバシーポリシーの変更</h2>
            <p>
              サービス内容、取得する情報または利用する外部サービスを
              変更した場合、本プライバシーポリシーを改定することがあります。
              重要な変更がある場合は、本ウェブサイト上でお知らせします。
            </p>

            <h2>11．お問い合わせ窓口</h2>
            <p>
              事業者：岡本 南美（屋号：CACHE-CACHE）
              <br />
              メールアドレス：blueapple373@gmail.com
            </p>
          </article>
        </section>
      </main>
    </Layout>
  );
}

function TokushohoPage() {
  return (
    <Layout>
      <main>
        <Hero eyebrow="LEGAL" title="特定商取引法に基づく表記" />
        <section className="section white">
          <div className="container">
            <div className="table-wrap">
              <table className="legal-table">
                <tbody>
                  <tr>
                    <th>販売事業者</th>
                    <td>岡本 南美（屋号：CACHE-CACHE）</td>
                  </tr>
                  <tr>
                    <th>運営責任者</th>
                    <td>岡本 南美</td>
                  </tr>
                  <tr>
                    <th>所在地・電話番号</th>
                    <td>
                      お客様からご請求があった場合、申込みの意思決定前に遅滞なく
                      電子メールで開示いたします。お問い合わせフォームよりご請求ください。
                    </td>
                  </tr>
                  <tr>
                    <th>連絡先</th>
                    <td>blueapple373@gmail.com</td>
                  </tr>
                  <tr>
                    <th>販売価格</th>
                    <td>
                      各サービス紹介ページまたは申込ページに、消費税込みの価格を表示します。
                    </td>
                  </tr>
                  <tr>
                    <th>販売価格以外の必要料金</th>
                    <td>
                      商品代金以外に、当方へお支払いいただく追加料金はありません。
                      インターネット接続料金、通信料金等はお客様のご負担となります。
                    </td>
                  </tr>
                  <tr>
                    <th>支払方法</th>
                    <td>Stripeによるクレジットカード決済</td>
                  </tr>
                  <tr>
                    <th>支払時期</th>
                    <td>
                      お申込み時に決済されます。
                      定期購入サービスは、各申込ページに表示された周期で決済されます。
                    </td>
                  </tr>
                  <tr>
                    <th>サービスの提供時期</th>
                    <td>
                      原則として決済完了後、直ちに提供を開始します。
                      開始日が定められているサービスは、各サービス紹介ページまたは
                      申込ページに表示します。
                    </td>
                  </tr>
                  <tr>
                    <th>キャンセル・返金</th>
                    <td>
                      サービスの性質上、提供開始後のお客様都合によるキャンセル・返金は
                      お受けしておりません。当方の責めに帰すべき事由がある場合を除きます。
                      定期購入サービスの解約方法、申出期限、更新条件は、
                      各サービス紹介ページおよび申込時の最終確認画面に表示します。
                    </td>
                  </tr>
                  <tr>
                    <th>申込期間</th>
                    <td>
                      申込期間を設ける場合は、各サービス紹介ページまたは申込ページに表示します。
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

const pageMeta = {
  "/": {
    title: "MINAMI MINDLAB｜止まりやすい日を、扱える形にする",
    description:
      "MINAMI MINDLABは、不安、自己否定、自責などで日常が止まりそうなとき、自分を責めずに次の小さな行動を選ぶための場所です。",
    robots: "index, follow",
  },
  "/about": {
    title: "MINAMI MINDLABとは｜MINAMI MINDLAB",
    description:
      "感情をなくすのではなく、反応を理解し、Treatし、日常を止めすぎないMINAMI MINDLABの活動方針をご紹介します。",
    robots: "index, follow",
  },
  "/business": {
    title: "法人・団体・提携事業者の方へ｜MINAMI MINDLAB",
    description:
      "福利厚生、試験導入、研修、共同検証、掲載・提携など、法人・団体向けの取り組みをご案内します。",
    robots: "index, follow",
  },
  "/profile": {
    title: "運営者 岡本南美について｜MINAMI MINDLAB",
    description:
      "MINAMI MINDLAB運営者・岡本南美の活動背景と、止まったあとに立て直す方法を仕組みにする理由をご紹介します。",
    robots: "index, follow",
  },
  "/news": {
    title: "お知らせ・開発状況｜MINAMI MINDLAB",
    description:
      "サービス募集、アプリ開発、ネガティブモンスターの設計など、MINAMI MINDLABの更新情報を掲載しています。",
    robots: "index, follow",
  },
  "/blog": {
    title: "ブログ｜MINAMI MINDLAB",
    description:
      "不安や自己否定などで日常が止まりそうなときに、自分を責めず、次の小さな行動を選ぶための考え方やヒントを掲載しています。",
    robots: "index, follow",
  },
  "/contact": {
    title: "お問い合わせ｜MINAMI MINDLAB",
    description:
      "個人向けサービス、法人・福利厚生、提携、共同検証、取材などに関するお問い合わせはこちらから。",
    robots: "index, follow",
  },
  "/thanks": {
    title: "送信完了｜MINAMI MINDLAB",
    description: "お問い合わせの送信が完了しました。",
    robots: "noindex, follow",
  },
  "/privacy": {
    title: "プライバシーポリシー｜MINAMI MINDLAB",
    description:
      "MINAMI MINDLABにおける個人情報の取得、利用目的、管理方法についてご案内します。",
    robots: "index, follow",
  },
  "/tokushoho": {
    title: "特定商取引法に基づく表記｜MINAMI MINDLAB",
    description:
      "MINAMI MINDLABおよびCACHE-CACHEの特定商取引法に基づく表記です。",
    robots: "index, follow",
  },
};

export default function Site({ path }) {
  const normalized = path.replace(/\/$/, "") || "/";

  const routes = {
    "/": HomePage,
    "/about": AboutPage,
    "/business": BusinessPage,
    "/profile": ProfilePage,
    "/news": NewsPage,
    "/blog": BlogPage,
    "/contact": ContactPage,
    "/thanks": ThanksPage,
    "/privacy": PrivacyPage,
    "/tokushoho": TokushohoPage,
  };

  const blogArticleMatch = normalized.match(
    /^\/blog\/([A-Za-z0-9_-]+)$/
  );

  const Page = routes[normalized] || HomePage;

  const meta = blogArticleMatch
    ? pageMeta["/blog"]
    : pageMeta[normalized] || pageMeta["/"];

  useEffect(() => {
    document.title = meta.title;

    let descriptionTag = document.querySelector('meta[name="description"]');
    if (!descriptionTag) {
      descriptionTag = document.createElement("meta");
      descriptionTag.setAttribute("name", "description");
      document.head.appendChild(descriptionTag);
    }
    descriptionTag.setAttribute("content", meta.description);

    let robotsTag = document.querySelector('meta[name="robots"]');
    if (!robotsTag) {
      robotsTag = document.createElement("meta");
      robotsTag.setAttribute("name", "robots");
      document.head.appendChild(robotsTag);
    }
    robotsTag.setAttribute("content", meta.robots);

    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement("link");
      canonicalTag.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalTag);
    }

    const canonicalPath = normalized === "/" ? "/" : normalized;
    canonicalTag.setAttribute(
      "href",
      `https://monster-shindan.vercel.app${canonicalPath}`
    );
  }, [normalized, meta.title, meta.description, meta.robots]);

  if (blogArticleMatch) {
    return <BlogArticlePage id={blogArticleMatch[1]} />;
  }

  return <Page />;
}
