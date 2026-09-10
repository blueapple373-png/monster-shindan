import "./trial.css";

export default function TrialThanksPage() {
  return (
    <div className="trial-page">
      <header className="trial-topbar">
        <a className="trial-brand" href="/">MINAMI MINDLAB</a>
      </header>

      <main>
        <section className="trial-hero">
          <div className="trial-hero-inner">
            <p className="trial-eyebrow">APPLICATION SENT</p>
            <h1>応募を受け付けました。</h1>
            <p className="trial-lead">
              Treat無料体験へのご応募ありがとうございます。内容を確認のうえ、参加方法についてご連絡します。
            </p>
            <a className="trial-primary-link" href="/">公式サイトへ戻る</a>
          </div>
          <div className="trial-glow" aria-hidden="true" />
        </section>
      </main>

      <footer className="trial-footer">
        <a href="/">MINAMI MINDLAB</a>
        <p>© CACHE-CACHE / MINAMI MINDLAB</p>
      </footer>
    </div>
  );
}
