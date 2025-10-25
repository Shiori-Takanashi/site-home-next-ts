# 個人サイト作成手順 - Version 01

## 概要
Next.js + TailwindCSS + TypeScriptを使用した個人サイトの段階的作成プロセスです。
まずは最小構成から始めて、徐々に機能を拡張していきます。

## 現在の状況分析

### ✅ 既に準備済み
- Next.js 15.5.6 + React 19.1.0
- TailwindCSS v4
- TypeScript設定
- VS Code開発環境設定
- Geistフォント設定済み

### 📁 現在のファイル構造
```
src/app/
├── layout.tsx          # ルートレイアウト（Geistフォント設定済み）
├── page.tsx           # メインページ（Next.jsデフォルト）
└── globals.css        # グローバルCSS（TailwindCSS + CSS変数）
```

## Phase 1: 基本的な個人サイト構造の作成

### Step 1: メタデータの更新
**対象ファイル**: `src/app/layout.tsx`

**変更内容**:
- タイトルとディスクリプションを個人サイト用に変更
- 日本語対応（`lang="ja"`）
- Open Graphメタデータの追加

```
- Open Graphメタデータの追加
  - ソーシャルメディア（Facebook、Twitter、LinkedIn等）でページがシェアされた際の表示内容を制御
  - 主要なOGタグ：
    - `og:title`: シェア時のタイトル
    - `og:description`: シェア時の説明文
    - `og:image`: シェア時に表示される画像
    - `og:url`: ページのURL
    - `og:type`: コンテンツの種類（website、article等）
  - Reactプロジェクトでは`react-helmet`や`Next.js`の`Head`コンポーネントで実装
  - SEO向上とソーシャルシェア時のクリック率向上が目的
```

```
import { Helmet } from 'react-helmet';

const MyComponent = () => {
  return (
    <>
      <Helmet>
        <meta property="og:title" content="ページタイトル" />
        <meta property="og:description" content="ページの説明文" />
        <meta property="og:image" content="https://example.com/image.jpg" />
        <meta property="og:url" content="https://example.com/page" />
        <meta property="og:type" content="website" />
      </Helmet>
      {/* ページコンテンツ */}
    </>
  );
};

```

### Step 2: ホームページの刷新
**対象ファイル**: `src/app/page.tsx`

**作成内容**:
- ヒーローセクション（自己紹介）
- スキル・技術スタック
- プロジェクト紹介（簡易版）
- コンタクト情報

### Step 3: 基本コンポーネントの作成
**新規作成**: `src/components/`

**作成予定コンポーネント**:
```
src/components/
├── Header.tsx         # ナビゲーションヘッダー
├── Footer.tsx         # フッター
├── Hero.tsx           # ヒーローセクション
├── Skills.tsx         # スキルセクション
├── Projects.tsx       # プロジェクト一覧
└── Contact.tsx        # コンタクトフォーム
```

### Step 4: レスポンシブデザインの実装
- モバイルファーストアプローチ
- TailwindCSSのブレークポイント活用
- ダークモード対応（既存CSS変数活用）

## Phase 2: コンテンツとスタイリング

### Step 5: カラーパレットとテーマの定義
**対象ファイル**: `tailwind.config.js`, `src/app/globals.css`

**追加予定**:
- プライマリ・セカンダリカラー
- アクセントカラー
- グラデーション定義

### Step 6: タイポグラフィの強化
- 見出しスタイル統一
- 本文テキストの最適化
- Geistフォントの活用

### Step 7: アニメーションの追加
- CSS Transitionsの活用
- Framer Motionの検討（必要に応じて）

## Phase 3: 機能拡張

### Step 8: ページルーティング
**新規ページ作成**:
```
src/app/
├── about/
│   └── page.tsx       # 詳細な自己紹介
├── projects/
│   └── page.tsx       # プロジェクト詳細
└── contact/
    └── page.tsx       # コンタクトページ
```

### Step 9: プロジェクト詳細ページ
- 個別プロジェクトページ
- 画像ギャラリー
- 技術スタック表示

### Step 10: ブログ機能の検討
- MDXの導入検討
- 記事一覧・詳細ページ

## 実装優先順位

### 🚀 最優先（今すぐ実装）
1. **メタデータ更新** - 5分
2. **基本ホームページ作成** - 30分
3. **Header/Footerコンポーネント** - 20分

### 📋 次段階（今週中）
4. **ヒーローセクション** - 45分
5. **スキル・プロジェクトセクション** - 1時間
6. **レスポンシブ対応** - 30分

### 🎨 最終段階（来週以降）
7. **テーマ・カラー最適化** - 1時間
8. **追加ページ作成** - 2時間
9. **アニメーション・最終調整** - 1時間

## 技術選択の理由

### TailwindCSS v4 を選ぶ理由
- 最新機能（CSS変数統合）
- クラス名の簡潔性
- レスポンシブ対応の容易さ

### コンポーネント設計方針
- 単一責任原則
- 再利用可能性
- TypeScript完全対応

### フォルダ構造方針
- Next.js App Router活用
- コンポーネントとページの分離
- 将来拡張に配慮した設計

## 次のアクション

### 即座に開始すべき作業
1. `src/app/layout.tsx`のメタデータ更新
2. `src/components/`ディレクトリ作成
3. 基本的なHeaderコンポーネント作成

### 準備すべき素材
- プロフィール画像
- プロジェクト画像・説明文
- スキルリスト
- コンタクト情報

## 想定開発時間
- **Phase 1**: 約2時間
- **Phase 2**: 約2時間
- **Phase 3**: 約3時間
- **合計**: 約7時間（段階的実装可能）

---

**作成者**: GitHub Copilot
**作成日**: 2025年10月17日
**プロジェクト**: site-home
**バージョン**: 01
