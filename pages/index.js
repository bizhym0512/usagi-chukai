import Link from "next/link";

export default function Home() {
  return (
    <div style={styles.container}>

      <div style={styles.mainArea}>

        {/* 左側：ロゴ・タイトル・ボタン・X */}
        <div style={styles.leftArea}>
          <img src="/usagi-logo.png" alt="usagi logo" style={styles.logo} />

          <h1 style={styles.title}>うさぎで仲介</h1>

          <div style={styles.downloadArea}>
            <button style={styles.downloadBtn}>iOS版（準備中）</button>
            <button style={styles.downloadBtn}>Android版（準備中）</button>
          </div>

          {/* ← iOSとAndroidのちょうど真ん中に来る位置 */}
          <a
            href="https://x.com/usagidechukai"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.xLink}
          >
            公式Xはこちら
          </a>
        </div>

        {/* 右側：特徴・使い方 */}
        <div style={styles.rightArea}>

          <div style={styles.box}>
            <h3 style={styles.boxTitle}>このアプリの特徴</h3>
            <p style={styles.boxText}>・手数料は4%（業界最安値）</p>
            <p style={styles.boxText}>・SNS取引の“お金まわり”だけ安心に</p>
          </div>

          <div style={styles.box}>
            <h3 style={styles.boxTitle}>操作はかんたん！</h3>
            <p style={styles.boxText}>1. アプリでURL作成</p>
            <p style={styles.boxText}>2. SNSのDMで納品</p>
            <p style={styles.boxText}>3. アプリからお金をうけとる</p>
          </div>

        </div>
      </div>

      {/* フッター */}
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
    minHeight: "auto",
    paddingTop: "120px",   // ← 全体をさらに下へ
    paddingBottom: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  mainArea: {
    display: "flex",
    gap: "50px",           // ← 2段組の間隔を広げた
    alignItems: "flex-start",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  /* 左側 */
  leftArea: {
    textAlign: "center",
    maxWidth: "260px",
  },

  logo: {
    width: 160,            // ← 少し大きめに
    marginBottom: 15,
  },

  title: {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: 20,
  },

  downloadArea: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    marginBottom: 5,
  },

  downloadBtn: {
    padding: "10px 20px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    background: "#fafafa",
    fontSize: "15px",
  },

  xLink: {
    marginTop: 8,
    display: "inline-block",
    color: "#1d9bf0",
    fontSize: "16px",
    textDecoration: "underline",
  },

  /* 右側 */
  rightArea: {
    maxWidth: "360px",
    marginTop: "80px",     // ← 右列を少し下へ（ウサギの足の位置）
  },

box: {
  width: "100%",       // ← 横幅いっぱい
  padding: "20px",     // ← 元の適正値
  border: "1px solid #eee",
  borderRadius: "12px",
  background: "#fafafa",
  marginBottom: 25,
},

  boxTitle: {
    margin: 0,
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: 12,
  },

  boxText: {
    margin: "6px 0",
    fontSize: "17px",      // ← 文字をさらに大きく
    lineHeight: 1.5,
  },

  links: {
    marginTop: "30px",
    textAlign: "center",
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





