import Link from "next/link";

export default function Home() {
  return (
    <div style={styles.container}>
      <img src="/usagi-logo.png" alt="usagi logo" style={styles.logo} />

      <h1 style={styles.title}>うさぎで仲介</h1>
      <p style={styles.subtitle}>
        クリエイターと依頼者のための、安全・匿名・かんたん決済アプリ
      </p>

      <div style={styles.downloadArea}>
        <button style={styles.downloadBtn}>iOS版（準備中）</button>
        <button style={styles.downloadBtn}>Android版（準備中）</button>
      </div>

      <p style={styles.desc}>
        支払い・納品のトラブルを防ぐ決済アプリ
      </p>

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
    padding: "40px 20px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  logo: {
    width: 140,
    height: "auto",
    marginBottom: 20
  },
  title: {
    fontSize: "32px",
    fontWeight: "bold",
    margin: "10px 0"
  },
  subtitle: {
    fontSize: "18px",
    marginBottom: 30,
    lineHeight: 1.6
  },
  downloadArea: {
    display: "flex",
    gap: "12px",
    marginBottom: 25
  },
  downloadBtn: {
    padding: "10px 18px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    background: "#fafafa",
    cursor: "default"
  },
  desc: {
    fontSize: "16px",
    marginBottom: 30,
    lineHeight: 1.6
  },
  links: {
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },
  link: {
    color: "#0070f3",
    textDecoration: "underline",
    fontSize: "16px"
  }
};

