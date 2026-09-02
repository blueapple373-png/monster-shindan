import { useEffect } from "react";
import "./site.css";
import "./about-editorial.css";
import { SiteHeader, SiteFooter } from "./SiteChrome.jsx";

export default function AboutEditorial() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "MINAMI MINDLABとは｜MINAMI MINDLAB";

    let descriptionTag = document.querySelector('meta[name="description"]');
    if (!descriptionTag) {
      descriptionTag = document.createElement("meta");
      descriptionTag.setAttribute("name", "description");
      document.head.appendChild(descriptionTag);
    }
    descriptionTag.setAttribute(
      "content",
      "感情をなくすのではなく、自分の中で起きている反応を知り、扱うためのMINAMI MINDLABの考え方をご紹介します。"
    );

    let robotsTag = document.querySelector('meta[name="robots"]');
    if (!robotsTag) {
      robotsTag = document.createElement("meta");
      robotsTag.setAttribute("name", "robots");
      document.head.appendChild(robotsTag);
    }
    robotsTag.setAttribute("content", "index, follow");

    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement("link");
      canonicalTag.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute("href", "https://monster-shindan.vercel.app/about");
  }, []);

  return (
    <div className="mindlab-site about-page">
      <SiteHeader />
      <main>
        <section className="page-hero compact about-hero">
          <div className="hero-inner">
            <span className="eyebrow">ABOUT</span>
            <h1>MINAMI MINDLABとは</h1>
            <p className="hero-copy">
              不安や自己否定で、考えることや日常まで止まりそうになる。そんなとき、自分の中で起きている反応を知り、扱う方法をつくっています。
            </p>
          </div>
        </section>

        <section className="about-content-section">
          <div className="container about-content-layout">
            <aside className="about-side-nav" aria-label="ページ内メニュー">
              <a href="#mission">めざすこと</a>
              <a href="#approach">扱うための3つのステップ</a>
              <a href="#scope">取り組み</a>
              <a href="#safety">安全方針</a>
            </aside>

            <article className="about-article">
              <section id="mission">
                <div className="about-kicker">MISSION</div>
                <h2>止まりやすい日も、自分を責めずに扱えるように。</h2>
                <p>
                  不安や自己否定が強くなると、目の前の家事や仕事、勉強、人との関わりまで止まることがあります。MINAMI MINDLABがめざすのは、感情を消したり、揺れない人になることではありません。
                </p>
                <p>
                  自分の中で起きている反応を、自分そのものと切り分けて知る。そのうえで、今の自分に使える小さな対処を選べるようにすることです。
                </p>
              </section>

              <section id="approach">
                <h3>扱うための3つのステップ</h3>
                <ul>
                  <li><strong>知る：</strong>今どの反応が強く出ているのかを整理する</li>
                  <li><strong>Treatする：</strong>感情を消そうとせず、今できる対処を選ぶ</li>
                  <li><strong>再開する：</strong>完璧に落ち着く前でも、できることから日常を再開する</li>
                </ul>
              </section>

              <section id="scope">
                <h3>考え方を、使える形にする</h3>
                <p>
                  この考え方を、モンスター診断、4週間プログラム、Treatアプリなどの形にしています。
                </p>
              </section>

              <section id="safety">
                <h3>安全方針</h3>
                <p>
                  医療・診断・心理療法・危機介入の代替ではありません。緊急性や専門的支援が必要な場合は、医療機関や公的相談窓口などの利用を優先します。
                </p>
              </section>
            </article>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
