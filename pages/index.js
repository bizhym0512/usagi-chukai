import Link from "next/link";

export default function Home() {
  return (
    <div style={styles.container}>

      <div style={styles.centerArea}>

        {/* ロゴ */}
        <img src="/usagi-logo.png" alt="usagi logo" style={styles.logo} />

        {/* タイトル */}
        <h1 style={styles.title}>うさぎで仲介</h1>

        {/* ダウンロードボタン */}
        <div style={styles.downloadArea}>
          <button style={styles.downloadBtn}>iOS版（準備中）</button>
          <button style={styles.downloadBtn}>Android版（準備中）</button>
        </div>

        {/* Xリンクを中央に */}
        <a
          href="https://x.com/usagidechukai"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.xLink}
        >
          公式X（最新情報）
        </a>

        {/* 特徴 */}
        <div style={styles.box}>
          <h3 style={styles.boxTitle}>このアプリの特徴</h3>
          <p style={styles.boxText}>・手数料は4%（業界最安値）</p>
          <p style={styles.boxText}>・未払い／納品トラブルを防ぐ</p>
          <p style={styles.boxText}>・匿名でかんたんに取引</p>
        </div>

        {/* 使い方 */}
        <div style={styles.box}>
          <h3 style={styles.boxTitle}>使い方</h3>
          <p style={styles.boxText}>1. 金額とタイトルを書いてURLを作成</p>
          <p style={styles.boxText}>2. 納品</p>
          <p style={styles.boxText}>3. 完了！</p>
        </div>

      </div>

      {/* フッターリンク */}
      <div style={styles.links}>
        <Link href="/terms" style={styles.link}>利用規約</Link>
        <Link href="/privacy" style={styles.link}>プライバシーポリシー</Link>
        <Link href="/tokushoho" style={styles.link}>特商法</Link>
        <Link href="/contact" style={styles.link}>お問い合わせ</Link>
      </div>

    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    paddingTop: "80px",       // ← 全体を下に
    paddingBottom: "40px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  centerArea: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    maxWidth: "420px",       // ← 中央寄せの幅
    gap: "20px",
  },

  logo: {
    width: 160,              // ← 大きく
    marginBottom: 5,
  },

  title: {
    fontSize: "36px",        // ← 大きく
    fontWeight: "bold",
    marginBottom: 10,
  },

  downloadArea: {
    display: "flex",
    gap: "12px",
    marginBottom: 4,
  },

  downloadBtn: {
    padding: "10px 20px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    background: "#fafafa",
    fontSize: "15px",
  },

  xLink: {
    fontSize: "15px",
    color: "#1d9bf0",
    textDecoration: "underline",
    marginBottom: 10,
  },

  box: {
    width: "100%",
    padding: "15px 20px",
    background: "#fafafa",
    border: "1px solid #eee",
    borderRadius: "12px",
  },

  boxTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    margin: "0 0 10px 0",
  },

  boxText: {
    margin: "4px 0",
    fontSize: "15px",
  },

  links: {
    textAlign: "center",
    marginTop: "40px",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },

  link: {
    fontSize: "13px",
    color: "#555",
    textDecoration: "underline",
  },
};
