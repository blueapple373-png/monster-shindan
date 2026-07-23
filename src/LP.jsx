import { useState } from "react";
// 創設メンバー募集中は true
// 一般募集へ切り替える時は false
const IS_FOUNDING_MEMBER = true;
const STRIPE_URLS = {
  founding: "https://buy.stripe.com/28E5kE1ftdtL5Ongyd4wM05",
  general: "https://buy.stripe.com/fZubJ2gancpH4Kj1Dj4wM06",
};
const OFFER_CONFIG = {
  founding: {
    badge: "第1期・創設メンバー5名限定",
    priceLabel: "創設メンバー特別価格",
    price: 19800,
    referencePrice: 29800,
    referencePriceLabel: "一般募集予定価格",
    installmentAmount: 9900,
    installmentCount: 2,
    capacityLabel: "先着5名",
    ctaLabel: "創設メンバーとして申し込む",
    stripeUrl: STRIPE_URLS.founding,
    showFoundingExplanation: true,
  },
  general: {
    badge: "第2期・最大6名",
    priceLabel: "参加費",
    price: 29800,
    referencePrice: null,
    referencePriceLabel: null,
    installmentAmount: 14900,
    installmentCount: 2,
    capacityLabel: "最大6名",
    ctaLabel: "4週間プログラムに申し込む",
    stripeUrl: STRIPE_URLS.general,
    showFoundingExplanation: false,
  },
};
const formatYen = (amount) =>
  new Intl.NumberFormat("ja-JP").format(amount);
export default function LP() {
  const offer = IS_FOUNDING_MEMBER
    ? OFFER_CONFIG.founding
    : OFFER_CONFIG.general;
  const [open, setOpen] = useState(null);
  const [bioOpen, setBioOpen] = useState(false);
  const faqs = [
    {
      q: "毎日課題をこなせるか不安です",
      a: "この4週間は、毎日続けられる人のためのプログラムではありません。止まってしまうことも、参加できなかった週も、復帰ルートを作るための材料として扱います。",
    },
    {
      q: "心理士や医師ではないですか？",
      a: "MINAMI MINDLABは医療機関ではありません。本プログラムは心理療法や医療の代替ではなく、実生活で使える復帰方法を一緒に探す場です。現在、危機状態や強い希死念慮がある場合は、まず医療機関や専門窓口にご相談ください。",
    },
    {
      q: "オンラインで完結しますか？",
      a: "はい。個別面談・グループ会はZoom、日常のやりとりはDiscordで行います。",
    },
    {
      q: "途中で継続が難しくなった場合は？",
      a: "参加できなかった週や、連絡を返せなかった時期も、止まり方の観察材料として扱います。脱落とは考えません。戻れる状態になった時点から再接続します。",
    },
    {
      q: "4週間で終了してもいいですか？",
      a: "問題ありません。4週間だけでも、停止構造の仮説と最初の復帰ルートを持ち帰れる設計です。継続プログラムは希望する方にのみご案内します。",
    },
  ];
  const weeks = [
    {
      week: "1週目",
      title: "自分の止まり方を知る",
      desc: "モンスター診断と実際の出来事を照らし合わせ、何が起きた時に、どこで、何ができなくなるのかを整理します。",
    },
    {
      week: "2週目",
      title: "小さな戻り方を試す",
      desc: "身体を落ち着ける方法、自分への声のかけ方、最初の行動を小さくする方法などから、今の自分に使えそうなものを一つ試します。",
    },
    {
      week: "3週目",
      title: "合わなかった方法を見直す",
      desc: "試せなかったことや、試しても戻れなかったことも失敗にはしません。別の方法や、介入するタイミングを一緒に考えます。",
    },
    {
      week: "4週目",
      title: "自分の復帰ルートをまとめる",
      desc: "4週間で分かったことと、実際に試したことを整理し、今後も修正していける「復帰ルート仮説」にまとめます。",
    },
  ];
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#FDFCFF",
        fontFamily:
          "'Hiragino Kaku Gothic ProN', 'Noto Sans JP', sans-serif",
        color: "#2D2D3A",
      }}
    >
      <div style={{ maxWidth: 1040, margin: "0 auto", padding: "18px 20px 0" }}>
        <a href="/" style={{ color: "#6B6B80", fontSize: 13, textDecoration: "none" }}>← MINAMI MINDLAB公式サイトへ</a>
      </div>
      {/* ヒーロー */}
      <section
        style={{
          background:
            "linear-gradient(160deg, #F0EDFB 0%, #FDF0F0 50%, #EDF7F2 100%)",
          padding: "80px 24px 64px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <div
            style={{
              display: "inline-block",
              background: "#9B8EC4",
              color: "white",
              fontSize: 12,
              fontWeight: 700,
              padding: "6px 16px",
              borderRadius: 99,
              marginBottom: 24,
              letterSpacing: 1,
            }}
          >
            {offer.badge}
          </div>
          <h1
            style={{
              fontSize: "clamp(22px, 5vw, 32px)",
              fontWeight: 900,
              lineHeight: 1.5,
              marginBottom: 24,
              color: "#2D2D3A",
            }}
          >
            また続かなかった、で終わらせない。
            <br />
            <span style={{ color: "#9B8EC4" }}>
              止まることを前提に、
            </span>
            <br />
            自分専用の「戻り方」を作る4週間
          </h1>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.9,
              color: "#4A4A5A",
              marginBottom: 40,
            }}
          >
            モンスター診断で分かるのは、
            <br />
            あなたが止まる時に出やすい反応の入口です。
            <br />
            <br />
            この4週間では、診断結果と実際の生活を照らし合わせながら、
            <br />
            自分の止まり方と戻り方を一緒に探します。
            <br />
            <br />
            不安や落ち込みをなくす講座ではありません。
            <br />
            感情が動いても、人生のすべてを止めたままにしないための
            <br />
            少人数プログラムです。
          </p>
          <PriceBlock offer={offer} />
          <BuyButton offer={offer} />
        </div>
      </section>
      {/* 共感 */}
      <section
        style={{
          padding: "64px 24px",
          maxWidth: 600,
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: 20,
            fontWeight: 800,
            marginBottom: 32,
            textAlign: "center",
          }}
        >
          何度も「今度こそ」と思った
        </h2>
        {[
          "本を買った。動画講座にも申し込んだ。手帳や習慣化アプリも試した。",
          "最初の数日はできる。でも、不安なことが起きたり、誰かの一言で落ち込んだり、少し疲れたりすると、また全部止まってしまう。",
          "見なくなった動画。書かなくなったノート。始められない家事や勉強。そして最後には、「結局、私は何をやっても続かない」と自分を責める。",
        ].map((text, index) => (
          <p
            key={index}
            style={{
              fontSize: 15,
              lineHeight: 1.9,
              color: "#4A4A5A",
              marginBottom: 20,
            }}
          >
            {text}
          </p>
        ))}
        <div
          style={{
            background: "#F0EDFB",
            borderLeft: "4px solid #9B8EC4",
            borderRadius: "0 12px 12px 0",
            padding: "20px 24px",
            marginTop: 32,
          }}
        >
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.9,
              color: "#2D2D3A",
              margin: 0,
              fontWeight: 500,
            }}
          >
            このプログラムは、毎日きちんと課題をこなせる人のための講座ではありません。
            <br />
            止まってしまう人が、止まったことを失敗にせず、
            <br />
            自分の止まり方と戻り方を知るための4週間です。
          </p>
        </div>
      </section>
      {/* できなかったこと */}
      <section style={{ background: "#FFF9F9", padding: "64px 24px" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: 20,
              fontWeight: 800,
              marginBottom: 28,
              textAlign: "center",
            }}
          >
            できなかったことも、分析材料にします
          </h2>
          <p
            style={{
              fontSize: 15,
              color: "#4A4A5A",
              lineHeight: 1.9,
              marginBottom: 20,
            }}
          >
            課題ができなかった日。
            <br />
            参加できなかった週。
            <br />
            連絡を返せなかった時。
          </p>
          <p
            style={{
              fontSize: 15,
              color: "#4A4A5A",
              lineHeight: 1.9,
            }}
          >
            それを「遅れ」や「脱落」とは扱いません。
            <br />
            その時に何が起きていたのかを一緒に観察します。
            <br />
            <br />
            できなかった出来事そのものが、
            <br />
            あなた専用の復帰ルートを作るための材料になります。
          </p>
        </div>
      </section>
      {/* 4週間の流れ */}
      <section style={{ background: "#F8F7FF", padding: "64px 24px" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: 20,
              fontWeight: 800,
              marginBottom: 16,
              textAlign: "center",
            }}
          >
            4週間の基本の流れ
          </h2>
          <p
            style={{
              fontSize: 14,
              color: "#6B6B80",
              textAlign: "center",
              lineHeight: 1.8,
              marginBottom: 40,
            }}
          >
            最初に、現在もっとも止まりやすい生活領域を一つ選びます。
            <br />
            状態に合わせて前後しても、予定どおり進められなくても問題ありません。
          </p>
          {weeks.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                gap: 20,
                marginBottom: 28,
                background: "white",
                borderRadius: 16,
                padding: "20px 24px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
              }}
            >
              <div
                style={{
                  flexShrink: 0,
                  width: 48,
                  height: 48,
                  background: "#9B8EC4",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: 11,
                  fontWeight: 800,
                  textAlign: "center",
                  lineHeight: 1.2,
                }}
              >
                {item.week}
              </div>
              <div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: 15,
                    marginBottom: 6,
                  }}
                >
                  {item.title}
                </div>
                <div
                  style={{
                    fontSize: 14,
                    color: "#4A4A5A",
                    lineHeight: 1.7,
                  }}
                >
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* 持ち帰るもの */}
      <section style={{ padding: "64px 24px" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: 20,
              fontWeight: 800,
              marginBottom: 8,
              textAlign: "center",
            }}
          >
            4週間後に持ち帰るもの
          </h2>
          <p
            style={{
              fontSize: 14,
              color: "#6B6B80",
              textAlign: "center",
              marginBottom: 32,
            }}
          >
            完成された自分になることではありません
          </p>
          {[
            "自分が止まりやすい状況や兆候",
            "逆効果になりやすい対応",
            "自分に合いそうな小さな復帰方法",
            "自分専用の「復帰ルート仮説」",
          ].map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "14px 0",
                borderBottom: "1px solid #F0F0F5",
              }}
            >
              <span style={{ color: "#9B8EC4", fontSize: 18 }}>✓</span>
              <span style={{ fontSize: 15, color: "#2D2D3A" }}>
                {item}
              </span>
            </div>
          ))}
          <p
            style={{
              fontSize: 14,
              color: "#6B6B80",
              lineHeight: 1.8,
              marginTop: 24,
            }}
          >
            一度で正解を完成させるのではなく、
            実生活で試しながら更新できる最初の地図を作ります。
          </p>
        </div>
      </section>
      {/* 提供内容 */}
      <section style={{ background: "#F0EDFB", padding: "64px 24px" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: 20,
              fontWeight: 800,
              marginBottom: 32,
              textAlign: "center",
            }}
          >
            提供内容
          </h2>
          {[
            "初回個別面談60〜75分：1回",
            "少人数グループ会75分：全4回",
            "短い解説動画",
            "Discordで週2回程度の定型チェックイン",
            "停止場面の簡易記録",
            "終了時の個別フィードバック",
            "「私の復帰ルート仮説」1枚",
          ].map((item, index) => (
            <div
              key={index}
              style={{
                background: "white",
                borderRadius: 12,
                padding: "14px 20px",
                marginBottom: 10,
                fontSize: 14,
                color: "#2D2D3A",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <span style={{ color: "#9B8EC4" }}>●</span>
              {item}
            </div>
          ))}
          <p
            style={{
              fontSize: 13,
              color: "#6B6B80",
              lineHeight: 1.8,
              marginTop: 20,
            }}
          >
            毎日の長い日記や、大量の動画視聴は求めません。
          </p>
        </div>
      </section>
      {/* このような方へ */}
      <section style={{ padding: "64px 24px" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: 20,
              fontWeight: 800,
              marginBottom: 32,
              textAlign: "center",
            }}
          >
            このような方へ
          </h2>
          {[
            "心理学や自己理解を学んでも、生活が止まってしまう",
            "講座や習慣化が続かず、自分を責めてきた",
            "不安や落ち込みのたびに、家事や勉強、仕事が止まる",
            "完全に元気になるまで何も始められない",
            "一人では、自分がなぜ止まるのか分からない",
            "止まっても戻れる方法を持ちたい",
            "完璧に続けることより、戻れることを身につけたい",
          ].map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 12,
                marginBottom: 16,
              }}
            >
              <span
                style={{
                  color: "#E07070",
                  fontSize: 16,
                  flexShrink: 0,
                  marginTop: 2,
                }}
              >
                ◆
              </span>
              <span style={{ fontSize: 15, lineHeight: 1.7 }}>
                {item}
              </span>
            </div>
          ))}
        </div>
      </section>
      {/* 自己紹介 */}
      <section style={{ background: "#FDFCFF", padding: "64px 24px" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: "#9B8EC4",
              letterSpacing: 2,
              textAlign: "center",
              marginBottom: 12,
            }}
          >
            ABOUT
          </p>
          <h2
            style={{
              fontSize: 20,
              fontWeight: 800,
              marginBottom: 32,
              textAlign: "center",
            }}
          >
            私について
          </h2>
          <div
            style={{
              background: "#F8F7FF",
              borderRadius: 16,
              padding: "28px 28px",
              marginBottom: 20,
            }}
          >
            <p style={{ fontSize: 15, lineHeight: 2, color: "#2D2D3A", margin: "0 0 16px" }}>
              私は、感情に振り回されない強い人になったわけではありません。
              <br />
              不安や自己否定があっても、人生を完全には止めず、
              少しずつ戻る方法を探してきた人です。
            </p>
            <p style={{ fontSize: 15, lineHeight: 2, color: "#4A4A5A", margin: "0 0 16px" }}>
              離婚、子育て、転職、夢の挫折、人間関係の悩みを経験しながら、
              自分の感情と行動を観察し、心理学や脳の仕組みを学んできました。
            </p>
            <p style={{ fontSize: 15, lineHeight: 2, color: "#4A4A5A", margin: 0 }}>
              MINAMI MINDLABでは、苦しみを完全に克服する方法ではなく、
              止まってしまった後に日常へ戻るための考え方と実践方法を届けています。
            </p>
          </div>
          {bioOpen && (
            <div
              style={{
                fontSize: 15,
                lineHeight: 2,
                color: "#4A4A5A",
                marginBottom: 20,
              }}
            >
              {[
                "はじめまして。MINAMIです。",
                "私は現在、会社員として働きながら、感情に振り回されて日常が止まってしまう人のための講座とコミュニティを準備しています。",
                "42歳、離婚経験があり、年子の娘と息子を育ててきました。これまで、百貨店、菓子製造、カフェ、保険営業、派遣社員など、さまざまな仕事を経験しました。現在は仕事を続けながら、COBOLやJavaなどのIT分野も学んでいます。",
                "一つの道をまっすぐ進んできた人生ではありません。夢を諦めたこともあります。仕事を何度も変えました。結婚生活も終わりました。",
                "周囲が経験や実績を積み重ねているように見える中で、私は長い間、「自分には何もない」「今から始めても遅い」と感じていました。",
                "人間関係や恋愛でも、不安や自己否定に強く影響されてきました。相手の言葉や態度が気になって、頭の中がそのことでいっぱいになる。何も手につかなくなり、家事や勉強、仕事まで止まってしまう。",
                "頭では「考えても仕方がない」と分かっているのに、感情が追いつかない。心理学の知識を得ても、自分の反応を理解しても、同じことでまた苦しくなる。そんな経験を何度も繰り返してきました。",
                "私は、つらい時に「考えすぎだよ」「気にしなければいい」と言われても、あまり納得できませんでした。なぜ、こんなに反応してしまうのか。何が引き金になっているのか。理解しているのに、なぜ行動を変えられないのか。止まってしまった後、どうすれば日常に戻れるのか。",
                "私は、自分の感情や行動を観察し、心理学や脳の仕組みを調べながら、長い間こうした問いを考えてきました。",
                "その中で気づいたのは、苦しくならない人になることを目指すほど、苦しくなった自分を責めてしまうということでした。不安を完全になくす。自己否定を克服する。過去の傷をすべて癒やす。それができるまで人生を始められないとしたら、私はいつまでも動けません。",
                "だから今は、感情をなくす方法ではなく、感情に飲み込まれた後に戻る方法を考えています。不安になってもいい。自己否定してもいい。何もできない日があってもいい。ただ、そのまま何日も人生が止まり続けるのではなく、少しだけ生活に戻る。何もできない自分を責め続けるのではなく、今できる小さな行動を選ぶ。",
                "私は、感情に振り回されない強い人になったわけではありません。今でも揺れることはあります。理解していても、うまくできない日があります。それでも以前より、何が起きているのかを整理し、止まった後に戻るための方法を持てるようになりました。",
                "私は、人生の正解を教える人でも、すべてを克服した成功者でもありません。自分自身の体験を観察し、そこで見つけた仕組みを、同じように止まってしまう人が使える言葉や方法に翻訳する人でありたいと思っています。",
              ].map((para, i) => (
                <p key={i} style={{ marginBottom: 16 }}>
                  {para}
                </p>
              ))}
            </div>
          )}
          <button
            type="button"
            onClick={() => setBioOpen(!bioOpen)}
            style={{
              display: "block",
              width: "100%",
              background: "none",
              border: "1px solid #D0C8E8",
              borderRadius: 50,
              padding: "12px 24px",
              fontSize: 14,
              color: "#9B8EC4",
              fontWeight: 700,
              cursor: "pointer",
              textAlign: "center",
            }}
          >
            {bioOpen ? "閉じる ▲" : "もっと読む ▼"}
          </button>
        </div>
      </section>
      {/* 創設メンバー説明 */}
      {offer.showFoundingExplanation && <FoundingExplanation />}
      {/* 約束しないこと */}
      <section style={{ background: "#FFF9F9", padding: "64px 24px" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: 20,
              fontWeight: 800,
              marginBottom: 28,
              textAlign: "center",
            }}
          >
            このプログラムで約束しないこと
          </h2>
          {[
            "不安や自己否定がなくなること",
            "二度と落ち込まなくなること",
            "必ず人生が変わること",
            "医療や心理療法と同じ効果",
            "すべての方法を4週間で完成させること",
          ].map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                gap: 10,
                marginBottom: 12,
                fontSize: 14,
                color: "#4A4A5A",
                lineHeight: 1.7,
              }}
            >
              <span>・</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>
      {/* FAQ */}
      <section style={{ background: "#F8F7FF", padding: "64px 24px" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: 20,
              fontWeight: 800,
              marginBottom: 32,
              textAlign: "center",
            }}
          >
            よくある質問
          </h2>
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={{
                background: "white",
                borderRadius: 16,
                marginBottom: 12,
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}
            >
              <button
                type="button"
                onClick={() => setOpen(open === index ? null : index)}
                style={{
                  width: "100%",
                  background: "none",
                  border: "none",
                  padding: "18px 24px",
                  textAlign: "left",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: 14,
                  fontWeight: 700,
                  color: "#2D2D3A",
                }}
              >
                {faq.q}
                <span style={{ color: "#9B8EC4", fontSize: 18 }}>
                  {open === index ? "−" : "+"}
                </span>
              </button>
              {open === index && (
                <div
                  style={{
                    padding: "0 24px 18px",
                    fontSize: 14,
                    color: "#4A4A5A",
                    lineHeight: 1.8,
                  }}
                >
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      {/* 免責 */}
      <section style={{ padding: "40px 24px" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <div
            style={{
              background: "#F5F5F5",
              borderRadius: 12,
              padding: "20px 24px",
              fontSize: 13,
              color: "#6B6B80",
              lineHeight: 1.8,
            }}
          >
            本プログラムは医療・診断・心理療法・危機介入の代替ではありません。
            現在、進行中のDVや虐待、強い希死念慮、重い精神症状など、
            緊急性の高い支援が必要な場合は、医療機関や専門窓口の利用を優先してください。
          </div>
        </div>
      </section>
      {/* 最終CTA */}
      <section
        style={{
          background:
            "linear-gradient(160deg, #2D2D3A 0%, #4A3A6A 100%)",
          padding: "64px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 520, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: 22,
              fontWeight: 800,
              color: "white",
              marginBottom: 16,
              lineHeight: 1.5,
            }}
          >
            「また続かなかった」で終わらせたくない。
            <br />
            でも、今度こそ完璧に頑張るとも約束できない。
          </h2>
          <p
            style={{
              fontSize: 14,
              color: "#C0B8D8",
              marginBottom: 40,
              lineHeight: 1.8,
            }}
          >
            そんな方と、止まった場所から戻る道を探したいと思っています。
          </p>
          <PriceBlock offer={offer} dark />
          <BuyButton offer={offer} />
          <p
            style={{
              fontSize: 12,
              color: "#B7B0CA",
              marginTop: 20,
              lineHeight: 1.8,
            }}
          >
            募集人数：{offer.capacityLabel}
            <br />
            開催期間：［　年　月　日〜　月　日］
            <br />
            開催方法：Zoom・Discord
          </p>
          <p
            style={{
              fontSize: 12,
              color: "#9090A8",
              marginTop: 18,
              lineHeight: 1.8,
            }}
          >
            4週間終了後の継続プログラムは任意です。
            <br />
            自動的に継続されたり、同意なく追加料金が発生したりすることはありません。
          </p>
        </div>
      </section>
    </div>
  );
}
function FoundingExplanation() {
  return (
    <section style={{ background: "#F0EDFB", padding: "64px 24px" }}>
      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        <h2
          style={{
            fontSize: 20,
            fontWeight: 800,
            marginBottom: 28,
            textAlign: "center",
          }}
        >
          今回、最初の5名を
          <br />
          「創設メンバー」として募集します
        </h2>
        <p style={{ fontSize: 15, lineHeight: 1.9, color: "#4A4A5A" }}>
          「揺れても戻れる4週間」は、今後も一般向けに提供していく予定のプログラムです。
          今回は、その最初の第1期に参加してくださる5名を募集します。
        </p>
        <p style={{ fontSize: 15, lineHeight: 1.9, color: "#4A4A5A" }}>
          プログラムの目的と、4週間で行う基本的な流れはすでに決まっています。
          一方で、止まった時にも参加しやすい連絡方法、負担の少ない記録、
          グループ会の進め方、復帰ルート仮説のまとめ方は、
          実際の反応を確認しながら改善します。
        </p>
        <p style={{ fontSize: 15, lineHeight: 1.9, color: "#4A4A5A" }}>
          終了後のアンケートや振り返りで、
          役立ったこと、分かりにくかったこと、参加しづらかった場面、
          必要だった支援について、率直なご意見をお願いします。
        </p>
        <p
          style={{
            fontSize: 15,
            lineHeight: 1.9,
            color: "#2D2D3A",
            fontWeight: 700,
          }}
        >
          内容を一から考えていただく募集ではありません。
          プログラムをより参加しやすい形へ整えるための最初のメンバーとして、
          ご協力をお願いする募集です。
        </p>
      </div>
    </section>
  );
}
function PriceBlock({ offer, dark = false }) {
  return (
    <div style={{ marginBottom: 24, textAlign: "center" }}>
      {offer.referencePrice !== null && (
        <div style={{ marginBottom: 6 }}>
          <span
            style={{
              fontSize: 14,
              color: dark ? "#C0B8D8" : "#8A8A98",
            }}
          >
            {offer.referencePriceLabel}
          </span>
          <span
            style={{
              fontSize: 14,
              color: dark ? "#C0B8D8" : "#8A8A98",
              textDecoration: "line-through",
              marginLeft: 8,
            }}
          >
            {formatYen(offer.referencePrice)}円（税込）
          </span>
        </div>
      )}
      <div
        style={{
          fontSize: 13,
          color: dark ? "#C0B8D8" : "#9B8EC4",
          fontWeight: 700,
          marginBottom: 4,
        }}
      >
        {offer.priceLabel}
      </div>
      <div
        style={{
          fontSize: 36,
          fontWeight: 900,
          color: dark ? "white" : "#2D2D3A",
        }}
      >
        {formatYen(offer.price)}円
        <span
          style={{
            fontSize: 14,
            fontWeight: 400,
            marginLeft: 4,
          }}
        >
          （税込）
        </span>
      </div>
<div
  style={{
    fontSize: 13,
    color: dark ? "#C0B8D8" : "#8A8A98",
    marginTop: 6,
  }}
>
  一括払い
</div>
    </div>
  );
}
function BuyButton({ offer }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12,
        maxWidth: 400,
        margin: "0 auto",
      }}
    >
      <a
        href={offer.stripeUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "block",
          background: "linear-gradient(135deg, #9B8EC4, #E07070)",
          color: "white",
          borderRadius: 50,
          padding: "18px 32px",
          fontSize: 16,
          fontWeight: 700,
          textDecoration: "none",
          textAlign: "center",
          boxShadow: "0 4px 20px rgba(155,142,196,0.4)",
        }}
      >
        {offer.ctaLabel} →
      </a>
    </div>
  );
}
