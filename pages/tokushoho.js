export const metadata = {
  title: "特定商取引法に基づく表記 | dmpay",
};

export default function TokushoPage() {
  const baseFont =
    'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';

  const colors = {
    bg: "#F5F7FB",
    white: "#FFFFFF",
    navy: "#020617",
    black: "#111827",
    grayText: "#4B5563",
    grayLight: "#E5E7EB",
    grayBorderStrong: "#CBD5E1",
    green: "#166534",
  };

  const Row = ({ label, children }) => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "220px 1fr",
        gap: 14,
        padding: "14px 0",
        borderBottom: `1px solid ${colors.grayLight}`,
      }}
    >
      <div style={{ fontWeight: 700, color: colors.navy }}>{label}</div>
      <div style={{ color: colors.black, lineHeight: 1.8 }}>{children}</div>
    </div>
  );

  return (
    <main
      style={{
        minHeight: "100vh",
        background: colors.bg,
        fontFamily: baseFont,
        color: colors.black,
        padding: "32px 16px 60px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 920,
          background: colors.white,
          borderRadius: 18,
          border: `1px solid ${colors.grayBorderStrong}`,
          boxShadow: "0 18px 40px rgba(15,23,42,0.10)",
          padding: "26px 22px",
        }}
      >
        <h1 style={{ margin: 0, marginBottom: 10, color: colors.navy }}>
          特定商取引法に基づく表記
        </h1>
        <p style={{ margin: 0, marginBottom: 18, color: colors.grayText, lineHeight: 1.8 }}>
          本ページは、dmpay（ディーエムペイ）の運営者情報・販売条件等を掲載しています。
        </p>

        <div style={{ borderTop: `1px solid ${colors.grayLight}` }}>
          <Row label="販売事業者">
            dmpay（個人運営）
          </Row>

          <Row label="運営責任者">
            速水悠
          </Row>

          <Row label="所在地">
            ※ご請求があった場合、遅滞なく開示いたします
          </Row>

          <Row label="お問い合わせ">
            メール：{" "}
            <a
              href="mailto:dmpay0001@gmail.com"
              style={{ color: colors.green, textDecoration: "none", fontWeight: 700 }}
            >
              dmpay0001@gmail.com
            </a>
            <div style={{ marginTop: 6, color: colors.grayText, fontSize: 12 }}>
              ※お問い合わせはメールにてお願いいたします。
            </div>
          </Row>

          <Row label="販売価格">
            各決済ページ（購入ページ）に表示された金額（税込）とします。
          </Row>

          <Row label="商品代金以外の必要料金">
            インターネット接続料金、通信料金等はお客様のご負担となります。<br />
            銀行振込をご利用の場合、振込手数料は原則としてお客様のご負担となります。
          </Row>

          <Row label="お支払い方法">
            クレジットカード決済、銀行振込（案件により対応）
          </Row>

          <Row label="お支払い時期">
            クレジットカード：ご注文時にお支払いが確定します。<br />
            銀行振込：所定期限までにお振込みください。
          </Row>

          <Row label="商品の引渡し時期">
            デジタルコンテンツ・制作物等の特性上、決済完了後に提供されます（取引内容により異なります）。
          </Row>

          <Row label="返品・キャンセル・返金">
            デジタル商品・役務の性質上、提供開始後の返品は原則としてお受けできません。<br />
            ただし、未提供・重大な不備等が認められる場合は個別にご相談を承ります。
          </Row>

          <Row label="動作環境">
            最新の Google Chrome / Safari 等のブラウザでのご利用を推奨します。
          </Row>
        </div>

        <div style={{ marginTop: 18, color: colors.grayText, fontSize: 12, lineHeight: 1.8 }}>
          ※本ページの記載は、サービス内容の変更等に応じて更新される場合があります。
        </div>
      </div>
    </main>
  );
}
