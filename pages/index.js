import Link from "next/link";

export default function Home() {
  return (
    <div style={styles.container}>
      {/* ロゴ */}
      <img src="/usagi-logo.png" alt="usagi logo" style={styles.logo} />

      {/* タイトル */}
      <h1 style={styles.title}>うさぎで仲介</h1>

      {/* キャッチコピー */}
      <p style={styles.catch}>
        手数料は業界最安の4%<br />
        SNS依頼の“お金トラブル”をゼロに！
      </p>

      {/* サブコピー */}
      <p style={styles.subtitle}>
        支払い・納品のすれ違いを防ぐ、クリエイター向け安全決済アプリ
      </p>

      {/* ダウンロードボタン */}
      <div style={styles.downloadArea}>
        <button style={styles.downloadBtn}>iOS版（準備中）</button>
        <button style={styles.downloadBtn}>Android版（準備中）</button>
      </div>

      {/* 使い方 */}
      <div style={styles.steps}>
        <h3 style={styles.stepsTitle}>使い方はかんたん3ステップ</h3>
        <p style={styles.step}>1. クリエイターが金額を入力してURLを生成</p>
        <p style={styles.step}>2. 購入者がURLから支払い</p>
        <p style={styles.step}>3. 納品後に「受け取り確認」を押すだけ</p>
      </div>

      {/* フッターリンク */}
      <div style={styles.links}>
        <Link href="/terms" style={styles.link}>利用規約</Link>
        <Link href="/privacy" style={styles.link}>プライバシーポリシー</Link>
        <Link href="/tokushoho" style={styles.link}>特商法</Link>
        <Link href="/contact" style={styles.link}>お問い合わせ</Link>
        <a
          href="https://x.com/usagidechukai"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          公式X
        </a>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    padding: "40px 20px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  logo: {
    width: 140,
    marginBottom: 15
  },
  title: {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: 10
  },
  catch: {
    fontSize: "20px",
    fontWeight: "bold",
    lineHeight: 1.6,
    marginBottom: 20
  },
  subtitle: {
    fontSize: "16px",
    color: "#555",
    marginBottom: 25,
    lineHeight: 1.6
  },
  downloadArea: {
    display: "flex",
    gap: "12px",
    marginBottom: 35
  },
  downloadBtn: {
    padding: "10px 18px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    background: "#fafafa",
    cursor: "default"
  },
   steps: {
    marginTop: 20,
    marginBottom: 20,   // ← 間隔を狭めました
    maxWidth: "320px",  // ← 左寄せでも綺麗に見せるため追加
    textAlign: "left",  // ← 左寄せ
    marginLeft: "auto",
    marginRight: "auto"
  },
  stepsTitle: {
    fontSize: "20px",
    marginBottom: 12,
    fontWeight: "bold",
    textAlign: "center"  // ← タイトルは中央のまま
  },
  step: {
    fontSize: "15px",
    marginBottom: 6,
    color: "#444",
    lineHeight: 1.5
  },
  links: {
    marginTop: "auto",
    marginBottom: 20,
    display: "flex",
    flexDirection: "column",
    gap: "6px"
  },
  link: {
    color: "#666",
    fontSize: "14px",
    textDecoration: "underline"
  }
};

