# コンポーネント組み込み手順 - Ver01 Step01

## 概要
作成したコンポーネントを`src/app/page.tsx`に組み込んで、個人サイトとして機能させる手順を説明します。

## 現在の状況

### ✅ 作成済みコンポーネント
```
src/components/
├── Header.tsx         # ナビゲーションヘッダー
├── Footer.tsx         # フッター
├── Hero.tsx           # ヒーローセクション
├── Skills.tsx         # スキルセクション
├── Projects.tsx       # プロジェクト一覧
└── Contact.tsx        # コンタクトフォーム
```

### 📝 現在の`page.tsx`の状態
- Next.jsのデフォルトコンテンツ
- デモ用のリンクとボタン
- 104行のテンプレートコード

## Step 1: レイアウト構造の変更

### 1-1. レイアウトファイルの修正

**対象ファイル**: `src/app/layout.tsx`

**追加する内容**:
- Header と Footer をレイアウトに統合
- 全ページ共通のコンポーネント配置

**修正後のlayout.tsx**:
```tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Takanashi's Website",
  description: "高梨の個人ウェブサイト。高梨はハンドルネーム。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
```

### 1-2. page.tsx の完全書き換え

**対象ファイル**: `src/app/page.tsx`

**変更内容**:
- デフォルトコンテンツを削除
- 作成したコンポーネントをインポート・配置

**新しいpage.tsx**:
```tsx
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
```

## Step 2: TypeScript パスエイリアス設定の確認

### 2-1. tsconfig.json の確認

`@/components/` 形式でインポートできるように、パスエイリアスが設定されているか確認：

```json
{
  "compilerOptions": {
    // ... 他の設定
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

**状態**: ✅ 既に設定済み

## Step 3: 実装の手順

### 3-1. 段階的実装アプローチ

**推奨順序**:
1. **layout.tsx の修正** (5分)
2. **page.tsx の書き換え** (5分)
3. **開発サーバーでの確認** (5分)
4. **エラー修正・調整** (10分)

### 3-2. 実装コマンド

```bash
# 開発サーバー起動
npm run dev

# エラーチェック
npm run lint

# 型チェック
npx tsc --noEmit
```

## Step 4: 期待される結果

### 4-1. 表示されるセクション

1. **Header**: 固定ナビゲーション
2. **Hero**: メインビジュアル・自己紹介
3. **Skills**: スキル・技術スタック
4. **Projects**: プロジェクト一覧
5. **Contact**: お問い合わせフォーム
6. **Footer**: サイト情報・リンク

### 4-2. 機能

- **レスポンシブデザイン**: モバイル・タブレット・デスクトップ対応
- **ナビゲーション**: スムーズスクロール（今後実装）
- **フォーム**: 基本的な入力・バリデーション
- **アニメーション**: ホバーエフェクト・トランジション

## Step 5: 潜在的な問題と解決策

### 5-1. インポートエラー

**問題**: `@/components/` でインポートできない
**解決**:
- tsconfig.json のパス設定確認
- 相対パス `../components/` を使用

**例**:
```tsx
// エイリアス使用
import Header from '@/components/Header';

// 相対パス使用（代替）
import Header from '../components/Header';
```

### 5-2. CSS クラスの競合

**問題**: TailwindCSS クラスが期待通りに動作しない
**解決**:
- globals.css の @import "tailwindcss"; 確認
- 開発ツールでクラス適用状況をチェック

### 5-3. Next.js リンクエラー

**問題**: 存在しないページへのリンク（/about, /projects, /contact）
**一時的解決**:
- Header.tsx の Link を `<a>` タグに変更
- または該当ページを作成

## Step 6: 次の作業

### 6-1. 即座に必要な作業

1. **画像の準備**: プロジェクト画像、プロフィール画像
2. **コンテンツの修正**: 実際の情報に更新
3. **リンクの修正**: 実在するURL・SNSアカウントに変更

### 6-2. 今後の拡張

1. **個別ページ作成**: about, projects, contact ページ
2. **アニメーション強化**: Framer Motion 導入
3. **SEO最適化**: メタデータ・構造化データ
4. **パフォーマンス最適化**: 画像最適化・コード分割

## 実装時間見積もり

- **基本実装**: 15分
- **調整・デバッグ**: 15分
- **コンテンツ更新**: 30分
- **合計**: 約1時間

## チェックリスト

### 実装前
- [ ] コンポーネントファイルの存在確認
- [ ] tsconfig.json のパス設定確認
- [ ] 開発サーバーが起動可能か確認

### 実装中
- [ ] layout.tsx にHeader/Footer追加
- [ ] page.tsx の完全書き換え
- [ ] インポートエラーの解決
- [ ] 開発サーバーでの動作確認

### 実装後
- [ ] 全セクションの表示確認
- [ ] レスポンシブデザインの確認
- [ ] コンソールエラーの確認
- [ ] リンクの動作確認

---

**作成者**: GitHub Copilot
**作成日**: 2025年10月17日
**プロジェクト**: site-home
**フェーズ**: Ver01 Step01
**想定時間**: 1時間
