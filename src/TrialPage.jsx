import "./trial.css";

const sourceOptions = [
  "無料診断",
  "公式サイト",
  "Threads",
  "直接案内",
  "その他",
];

export default function TrialPage() {
  return (
    <div className="trial-page">
      <header className="trial-topbar">
        <a className="trial-brand" href="/">MINAMI MINDLAB</a>
        <a className="trial-back" href="/diagnosis">無料診断へ戻る</a>
      </header>

      <main>
        <section className="trial-hero">
          <div className="trial-hero-inner">
            <p className="trial-eyebrow">TREAT PILOT</p>
            <h1>
              実際の生活の中で、
              <br />
              Treatは思い出して使えるのか。
            </h1>
            <p className="trial-lead">
              Treatが、実際に気持ちが動いた場面で思い出して使えるものになるかを確かめるため、
              少人数の無料体験に協力してくれる方を募集しています。
            </p>
            <a className="trial-primary-link" href="#apply">無料体験に応募する</a>
            <p className="trial-hero-note">正式提供前の検証です。料金は発生しません。</p>
          </div>
          <div className="trial-glow" aria-hidden="true" />
        </section>

        <section className="trial-section">
          <div className="trial-content trial-narrow">
            <p className="trial-section-label">ABOUT</p>
            <h2>その瞬間に、使えるものを作るために。</h2>
            <p>
              不安になったとき、傷ついたとき、自分を責めてしまうとき。
              頭では分かっていても、その瞬間に対処できないことがあります。
            </p>
            <p>
              MINAMI MINDLABは、そうした瞬間に実際に使える「Treat」という仕組みを作っています。
              この体験は、Treatが実際の生活の中で使われるものになるかを確認するためのものです。
            </p>
          </div>
        </section>

        <section className="trial-section trial-soft">
          <div className="trial-content">
            <p className="trial-section-label">HOW IT WORKS</p>
            <h2>体験中にお願いすること</h2>
            <div className="trial-steps">
              <article>
                <span>01</span>
                <h3>まず14日間</h3>
                <p>
                  期間はまず14日間です。対象となる場面がほとんどなかった場合は、
                  最長28日まで延長をお願いすることがあります。
                </p>
              </article>
              <article>
                <span>02</span>
                <h3>思い出したらTreat</h3>
                <p>
                  不安や傷つき、自分を責めるなどの反応が起きたとき、
                  Treatを思い出したらアプリで使ってみてもらいます。
                </p>
              </article>
              <article>
                <span>03</span>
                <h3>使わなくても大丈夫</h3>
                <p>
                  使わなかった場合も問題ありません。「なぜ使わなかったか」も、
                  今回確認したい大切な情報です。
                </p>
              </article>
              <article>
                <span>04</span>
                <h3>週1回の短い振り返り</h3>
                <p>週に1回程度、数問の簡単な振り返りにお答えいただきます。</p>
              </article>
            </div>
            <p className="trial-inline-note">
              今回の検証では、観察への影響を避けるため、一部の機能は利用できない状態になっています。
            </p>
          </div>
        </section>

        <section className="trial-section">
          <div className="trial-content trial-narrow">
            <p className="trial-section-label">BEFORE YOU JOIN</p>
            <h2>現在は、正式サービス提供前の検証段階です。</h2>
            <div className="trial-note-list">
              <p>利用状況や週次振り返り、感想を運営者が確認します。</p>
              <p>今後、仕様や内容が変わる可能性があります。</p>
              <p>料金は発生しません。</p>
            </div>
          </div>
        </section>

        <section className="trial-section trial-caution">
          <div className="trial-content trial-narrow">
            <p className="trial-section-label">SCOPE</p>
            <h2>この体験でできないこと</h2>
            <p>
              医療・心理療法・危機対応の代わりとなるサービスではありません。
              治療や専門的支援を受けている場合は、その支援を中断せずにご参加ください。
            </p>
            <p>
              今回は効果を保証したり、症状の改善を確認したりする試験ではありません。
              「実際の生活の中でTreatを思い出して使えるか」を確認する段階です。
            </p>
          </div>
        </section>

        <section className="trial-section trial-apply" id="apply">
          <div className="trial-content trial-form-wrap">
            <div className="trial-form-copy">
              <p className="trial-section-label">APPLY</p>
              <h2>無料体験に応募する</h2>
              <p>
                少人数での実施を予定しています。応募内容を確認したうえで、
                参加方法をご連絡します。
              </p>
            </div>

            <form
              className="trial-form"
              action="https://formsubmit.co/blueapple373@gmail.com"
              method="POST"
            >
              <input type="hidden" name="_subject" value="MINAMI MINDLAB Treat無料体験への応募" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value="https://monster-shindan.vercel.app/trial-thanks" />
              <input
                type="hidden"
                name="_autoresponse"
                value="MINAMI MINDLAB Treat無料体験へのご応募ありがとうございます。内容を確認のうえ、参加方法についてご連絡します。"
              />
              <input type="text" name="_honey" tabIndex="-1" autoComplete="off" className="trial-honey" />

              <label>
                <span>お名前 <small>ニックネーム可</small></span>
                <input type="text" name="お名前" required autoComplete="name" />
              </label>

              <label>
                <span>連絡先 <small>メールアドレスなど</small></span>
                <input type="text" name="連絡先" required />
              </label>

              <label>
                <span>簡単な自己紹介</span>
                <textarea
                  name="簡単な自己紹介"
                  rows="5"
                  required
                  placeholder="普段どんなときに気持ちが大きく動きやすいかなど、書ける範囲で大丈夫です。"
                />
              </label>

              <label>
                <span>どこでこの募集を知りましたか</span>
                <select name="流入元" required defaultValue="">
                  <option value="" disabled>選択してください</option>
                  {sourceOptions.map((source) => (
                    <option value={source} key={source}>{source}</option>
                  ))}
                </select>
              </label>

              <button type="submit">応募内容を送信する</button>
              <p className="trial-form-footnote">
                送信をもって有料サービスへの申込みになることはありません。
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="trial-footer">
        <a href="/">MINAMI MINDLAB</a>
        <p>© CACHE-CACHE / MINAMI MINDLAB</p>
      </footer>
    </div>
  );
}
