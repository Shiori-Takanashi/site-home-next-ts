# 環境変数とは何か - .envファイルの説明

## 📝 環境変数(.env)の基本概念

### 環境変数とは？
**環境変数**は、アプリケーションの設定情報を外部ファイルに保存する仕組みです。
コードに直接書き込むことなく、設定値を管理できます。

### .envファイルとは？
```bash
# .env ファイルの例
DATABASE_URL=https://database.example.com
API_KEY=your-secret-api-key
NEXT_PUBLIC_SITE_URL=https://your-site.com
```

## 🎯 なぜ環境変数が必要なのか？

### 1. **セキュリティの向上**
```javascript
// ❌ 悪い例：APIキーがコードに直接書かれている
const apiKey = "sk-1234567890abcdef"; // 誰でも見える！

// ✅ 良い例：環境変数を使用
const apiKey = process.env.API_KEY; // .envファイルから読み込み
```

### 2. **環境別設定の管理**
```bash
# 開発環境 (.env.local)
NEXT_PUBLIC_API_URL=http://localhost:3001
DEBUG=true

# 本番環境 (Vercel設定)
NEXT_PUBLIC_API_URL=https://api.production.com
DEBUG=false
```

### 3. **設定の柔軟性**
```typescript
// 環境に応じて動作を変更
const isProduction = process.env.NODE_ENV === 'production';
const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
```

## 📁 現在のプロジェクト状況分析

### プロジェクトの環境変数チェック結果
```bash
# site-homeプロジェクトには現在.envファイルは存在しません
$ ls -la .env*
ls: cannot access '.env*': No such file or directory
```

### 現在の依存関係確認
```json
// package.json の主要依存関係
{
  "dependencies": {
    "next": "15.5.6",
    "react": "19.1.0",
    "tailwindcss": "^4.0.0"
  }
}
```

## 🤔 今回のプロジェクトで環境変数は必要か？

### ✅ **現在は不要**

**理由**:
1. **静的サイト**: データベース接続なし
2. **外部API未使用**: 現在は外部サービスとの連携なし
3. **認証機能なし**: ログイン・認証システムなし
4. **シンプルな構成**: HTML+CSS+JSのみ

### 🔮 **将来的に必要になる場面**

#### 1. **Google Analytics追加時**
```bash
# .env.local
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

```typescript
// src/app/layout.tsx
const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
```

#### 2. **コンタクトフォーム実装時**
```bash
# .env.local
EMAIL_SERVICE_API_KEY=your-emailjs-key
EMAIL_SERVICE_ID=your-service-id
EMAIL_TEMPLATE_ID=your-template-id
```

#### 3. **CMSやヘッドレスCMS連携時**
```bash
# .env.local
CONTENTFUL_SPACE_ID=your-space-id
CONTENTFUL_ACCESS_TOKEN=your-access-token
```

#### 4. **GitHub API使用時**
```bash
# .env.local
GITHUB_TOKEN=ghp_xxxxxxxxxxxx
GITHUB_USERNAME=Shiori-Takanashi
```

## 📋 Next.js での環境変数の種類

### 1. **サーバーサイド環境変数**
```bash
# サーバーでのみ利用可能
DATABASE_URL=postgresql://...
API_SECRET_KEY=secret123
```

### 2. **クライアントサイド環境変数**
```bash
# ブラウザでも利用可能（NEXT_PUBLIC_ プレフィックス必須）
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_SITE_NAME=Takanashi Portfolio
```

### 3. **ビルトイン環境変数**
```bash
# Next.jsが自動設定
NODE_ENV=production
VERCEL_URL=your-app.vercel.app
```

## 🔧 環境変数ファイルの優先順位

```bash
1. .env.local           # 最優先（gitignoreに含める）
2. .env.production      # 本番環境用
3. .env.development     # 開発環境用
4. .env                 # デフォルト設定
```

## 📝 基本的な.envファイルの作成方法

### Step 1: ファイル作成
```bash
# プロジェクトルートに作成
touch .env.local
```

### Step 2: 環境変数の記述
```bash
# .env.local
# コメント：サイトの基本設定
NEXT_PUBLIC_SITE_NAME="Takanashi Portfolio"
NEXT_PUBLIC_SITE_URL="https://site-home.vercel.app"

# 開発用設定
NODE_ENV=development
```

### Step 3: .gitignoreへの追加
```bash
# .gitignore（既に設定済み）
.env*
```

### Step 4: TypeScriptでの型定義
```typescript
// types/env.d.ts
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_SITE_NAME: string;
      NEXT_PUBLIC_SITE_URL: string;
    }
  }
}

export {};
```

## 🚀 Vercelでの環境変数設定

### Web UIでの設定
1. Vercel Dashboard → プロジェクト選択
2. **Settings** → **Environment Variables**
3. 変数を追加：
   ```
   Name: NEXT_PUBLIC_SITE_URL
   Value: https://your-site.vercel.app
   Environment: Production, Preview, Development
   ```

### Vercel CLIでの設定
```bash
# Vercel CLIインストール
npm i -g vercel

# 環境変数設定
vercel env add NEXT_PUBLIC_SITE_URL
# 値を入力: https://your-site.vercel.app
```

### vercel.jsonでの設定
```json
{
  "env": {
    "NEXT_PUBLIC_SITE_NAME": "Takanashi Portfolio"
  }
}
```

## ⚠️ セキュリティの注意点

### 1. **機密情報の扱い**
```bash
# ❌ 危険：NEXT_PUBLIC_をつけると誰でも見える
NEXT_PUBLIC_API_SECRET=secret123

# ✅ 安全：サーバーサイドのみ
API_SECRET=secret123
```

### 2. **.envファイルの管理**
```bash
# .gitignore で必ず除外
.env.local
.env*.local
```

### 3. **本番環境での設定**
```bash
# Vercelの環境変数設定で管理
# コードには含めない
```

## 📊 今回のプロジェクトでの結論

### 🎯 **現在の状況**
```yaml
環境変数の必要性: ❌ 不要
理由:
  - 静的サイト
  - 外部API未使用
  - データベース未使用
  - 認証機能なし

Vercelデプロイへの影響: ✅ なし
```

### 🔮 **今後の拡張時**
```yaml
追加予定機能:
  - Google Analytics: NEXT_PUBLIC_GA_ID 必要
  - Contact Form: メール送信API設定
  - CMS連携: API認証情報
  - GitHub API: リポジトリ情報取得
```

## 📋 実際の設定例（将来用）

### Google Analytics追加時の設定例
```bash
# .env.local
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

```typescript
// src/app/layout.tsx に追加
import Script from 'next/script';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="ja">
      <head>
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
      </head>
      <body>{children}</body>
    </html>
  );
}
```

## 📚 参考リンク

- [Next.js 環境変数ドキュメント](https://nextjs.org/docs/basic-features/environment-variables)
- [Vercel 環境変数設定](https://vercel.com/docs/concepts/projects/environment-variables)
- [環境変数のベストプラクティス](https://12factor.net/config)

---

**結論**: 現在の基本的なポートフォリオサイトでは環境変数は不要です。
Vercelデプロイも問題なく進められます。機能拡張時に必要に応じて追加しましょう。
