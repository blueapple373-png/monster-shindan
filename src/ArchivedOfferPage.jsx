export default function ArchivedOfferPage() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#FFFEFA",
      color: "#2D2D3A",
      fontFamily: "'Hiragino Kaku Gothic ProN','Noto Sans JP',sans-serif",
      padding: "30px 24px 80px",
      boxSizing: "border-box",
    }}>
      <a href="/" style={{ color: "#655D6B", textDecoration: "none", fontSize: 13 }}>
        MINAMI MINDLAB
      </a>
      <section style={{ maxWidth: 640, margin: "16vh auto 0", lineHeight: 1.9 }}>
        <p style={{ fontSize: 12, letterSpacing: "0.14em", color: "#9A7E90" }}>
          APPLICATIONS PAUSED
        </p>
        <h1 style={{ fontSize: "clamp(24px, 5vw, 36px)", lineHeight: 1.6 }}>
          現在、このページからの
          <br />
          お申し込みは受け付けていません。
        </h1>
        <p style={{ fontSize: 15, color: "#625B66", marginTop: 24 }}>
          以前ご案内していたプログラムの内容・価格・募集条件は、
          現在の募集条件ではありません。内容を見直しているため、
          このページからの購入受付は停止しています。
        </p>
        <a href="/diagnosis" style={{
          display: "inline-block", marginTop: 28,
          padding: "14px 22px", borderRadius: 30,
          background: "#735D84", color: "#FFFFFF",
          fontSize: 14, fontWeight: 700, textDecoration: "none",
        }}>無料モンスター診断へ</a>
      </section>
    </main>
  );
}
