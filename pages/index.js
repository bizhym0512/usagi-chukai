// frontend/app/page.js
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function HomePage() {
  const [isNarrow, setIsNarrow] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window === "undefined") return;
      setIsNarrow(window.innerWidth < 900);
    };
    handleResize();
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

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

  return (
    <div
      style={{
        minHeight: "100vh",
        background: colors.bg,
        fontFamily: baseFont,
        color: colors.black,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ヘッダー */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 20,
          backdropFilter: "blur(10px)",
          background: "rgba(245,247,251,0.96)",
          borderBottom: `1px solid ${colors.grayLight}`,
        }}
      >
        <div
          style={{
            maxWidth: 1040,
            margin: "0 auto",
            padding: "14px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          {/* ロゴ */}
          <Link
            href="/"
            style={{
              textDecoration: "none",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: 4,
              }}
            >
              <div
                style={{
                  fontSize: 24,
                  fontWeight: 800,
                  letterSpacing: 0.4,
                }}
              >
                <span style={{ color: colors.navy }}>dm</span>
                <span style={{ color: colors.green }}>pay</span>
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: colors.grayText,
                }}
              >
              </div>
            </div>
          </Link>

          {/* 右側ボタン */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Link
              href="/login"
              style={{
                fontSize: 13,
                fontWeight: 500,
                color: colors.navy,
                textDecoration: "none",
                padding: "7px 20px",
                borderRadius: 999,
                border: `1px solid ${colors.navy}`,
                background: colors.white,
                boxShadow: "0 2px 6px rgba(15,23,42,0.08)",
              }}
            >
              ログイン
            </Link>
            <Link
              href="/signup"
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: colors.white,
                textDecoration: "none",
                padding: "8px 20px",
                borderRadius: 999,
                background: colors.green,
              }}
            >
              新規登録
            </Link>
          </div>
        </div>
      </header>

      {/* メイン */}
      <main
        style={{
          flex: 1,
          maxWidth: 1040,
          margin: "0 auto",
          padding: isNarrow ? "32px 20px 40px" : "40px 24px 56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* ヒーロー */}
        <section
          style={{
            width: "100%",
            transform: isNarrow ? "translateY(-20px)" : "translateY(-40px)",
          }}
        >
          <div
            style={{
              maxWidth: 640,
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <h1
              style={{
                margin: 0,
                marginBottom: 12,
                fontSize: isNarrow ? 30 : 36,
                lineHeight: 1.3,
                fontWeight: 800,
                letterSpacing: 0.2,
                color: colors.navy,
              }}
            >
             
            </h1>

            <p
              style={{
                margin: 0,
                marginBottom: 26,
                fontSize: 14,
                lineHeight: 1.8,
                color: colors.grayText,
              }}
            >
              dmpayは、SNSの安全なデジタル取引を成立させるサービスです。
            </p>

            {/* 2つの選択ボタン */}
            <div
              style={{
                display: "flex",
                flexDirection: isNarrow ? "column" : "row",
                gap: 24,
                justifyContent: "center",
              }}
            >
              {/* 購入者向け（白） */}
              <Link
                href="/lp/buyer"
                className="top-cta-card-secondary"
                style={{
                  flex: 1,
                  minWidth: isNarrow ? "100%" : 0,
                  textDecoration: "none",
                  background: colors.white,
                  borderRadius: 999,
                  border: `1px solid ${colors.grayBorderStrong}`,
                  padding: "10px 26px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 4,
                  textAlign: "center",
                  boxShadow: "0 8px 20px rgba(15,23,42,0.09)",
                }}
              >
                <div
                  style={{
                    fontSize: 16,
                    fontWeight: 800,
                    color: colors.navy,
                    letterSpacing: 0.2,
                  }}
                >
                  購入者の方へ
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: colors.grayText,
                    whiteSpace: "nowrap",
                  }}
                >
                  安心の仕組み
                </div>
              </Link>

              {/* サービスの紹介（緑） */}
              <Link
                href="/lp/creator"
                className="top-cta-card-primary"
                style={{
                  flex: 1,
                  minWidth: isNarrow ? "100%" : 0,
                  textDecoration: "none",
                  background: colors.green,
                  borderRadius: 999,
                  border: `1px solid ${colors.green}`,
                  padding: "10px 26px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 4,
                  textAlign: "center",
                  boxShadow: "0 10px 22px rgba(22, 101, 52, 0.18)",
                }}
              >
                <div
                  style={{
                    fontSize: 16,
                    fontWeight: 800,
                    color: "#FFFFFF",
                    letterSpacing: 0.2,
                  }}
                >
                  クリエイターの方へ
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: "rgba(255,255,255,0.92)",
                    whiteSpace: "nowrap",
                  }}
                >
                  シンプルな決済サービス
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* フッター（全幅の横線） */}
      <footer>
        <div
          style={{
            borderTop: `1px solid ${colors.grayLight}`,
          }}
        >
          <div
            style={{
              maxWidth: 1040,
              margin: "0 auto",
              padding: "14px 24px 18px",
              display: "flex",
              flexDirection: isNarrow ? "column" : "row",
              justifyContent: "space-between",
              gap: 10,
              fontSize: 12,
              color: colors.grayText,
            }}
          >
           <div>© {new Date().getFullYear()} dmpay / build-20251217-1</div>


            {/* ★ここに「特商法リンク」を追加（最小変更） */}
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link
                href="/tokusho"
                style={{ color: colors.grayText, textDecoration: "none" }}
              >
                特定商取引法に基づく表記
              </Link>

              <span style={{ color: colors.grayLight }}>｜</span>

              <span>
                お問い合わせ:{" "}
                <a
                  href="mailto:dmpay0001@gmail.com"
                  style={{ color: colors.grayText, textDecoration: "none" }}
                >
                  dmpay0001@gmail.com
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        .top-cta-card-secondary,
        .top-cta-card-primary {
          transition: box-shadow 0.18s ease, transform 0.18s ease,
            background-color 0.18s ease, border-color 0.18s ease;
          will-change: transform;
        }

        .top-cta-card-secondary:hover {
          box-shadow: 0 14px 30px rgba(15, 23, 42, 0.16);
          transform: translateY(-2px);
          border-color: #94a3b8;
        }

        .top-cta-card-primary:hover {
          box-shadow: 0 14px 30px rgba(22, 101, 52, 0.5);
          transform: translateY(-2px);
          background-color: #14532d;
          border-color: #14532d;
        }

        .top-cta-card-secondary:active,
        .top-cta-card-primary:active {
          transform: translateY(0px) scale(0.99);
        }
      `}</style>
    </div>
  );
}


