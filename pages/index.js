import Link from "next/link";

export default function Home() {
  return (
    <div style={styles.container}>

      <div style={styles.mainArea}>

        {/* 左：ロゴ・タイトル・DL・公式X */}
        <div style={styles.leftArea}>
          <img src="/usagi-logo.png" alt="usagi logo" style={styles.logo} />

          <h1 style={styles.title}>うさぎで仲介</h1>

          <div style={styles.downloadArea}>
            <button style={styles.downloadBtn}>iOS版（準備中）</button>
            <button style={styles.downloadBtn}>Android版（準備中）</button>
          </div>

          <a
            href="https://x.com/usagidechukai"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.xLink}
          >
            公式X（最新情報）
          </a>
        </div>

        {/* 右：特徴＋使い方 */}
        <div style={styles.rightArea}>

          <div style={styles.box}>
            <h3 style={styles.boxTitle}>このアプリの特徴</h3>

            <p style={styles.boxText}>・手数料は4%（業界最安値）</p>
            <p style={styles.boxText}>・未払い／納品トラブルを防ぐ</p>
            <p style={styles.boxText}>・匿名でかんたんに取引</p>
          </div>

          <div style={styles.box}>
            <h3 style={styles.boxTitle}>使い方</h3>

            <p style={styles.boxText}>1. 金額とタイトルを書いてURLを作成</p>
            <p style={styles.boxText}>2. 納品</p>
            <p style={styles.boxText}>3. 完了！</p>
          </div>
        </div>

      </div>

      {/* フッターリンク：上に寄せて間隔を狭める */}
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
    padding: "30px 40px",
    display: "flex",
    flexDirection: "column",
  },

  mainArea: {
    display: "flex",
    justifyContent: "center",
    gap: "40px",          // ← 間隔を狭めた
    alignItems: "flex-start",
    flexWrap: "wrap",
    marginBottom: 10,
  },

  /* 左側 */
  leftArea: {
    textAlign: "left",
    maxWidth: "260px",   // ← 少し狭くして左寄せに
  },

  logo: {
    width: 130,
    marginBottom: 5,
  },

  title: {
    fontSize: "30px",
    fontWeight: "bold",
    marginBottom: 15,
  },

  downloadArea: {
    display: "flex",
    gap: "10px",
    marginBottom: 10,
  },

  downloadBtn: {
    padding: "8px 14px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    background: "#fafafa",
  },

  xLink: {
    marginTop: 10,
    display: "inline-block",
    color: "#1d9bf0",
    fontSize: "14px",
    textDecoration: "underline",
  },

  /* 右側 */
  rightArea: {
    maxWidth: "280px",
    marginTop: "60px",     // ← “うさぎの足”あたりに揃える調整
  },

  box: {
    marginBottom: 20,
    padding: "15px",
    borderRadius: "12px",
    border: "1px solid #eee",
    background: "#fafafa",
  },

  boxTitle: {
    margin: 0,
    fontSize: "17px",
    fontWeight: "bold",
    marginBottom: 10,
  },

  boxText: {
    margin: "4px 0",
    fontSize: "14px",
  },

  /* Footer */
  links: {
    textAlign: "center",
    marginBottom: 5,
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },

  link: {
    color: "#555",
    fontSize: "13px",
    textDecoration: "underline",
  },
};
