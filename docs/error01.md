# エラー解決記録: CSS インポートの型宣言エラー

## 発生したエラー

```
Cannot find module or type declarations for side-effect import of './globals.css'.
```

## エラーの詳細

- **ファイル**: `/src/app/layout.tsx`
- **問題**: `import "./globals.css"` でTypeScriptがCSSファイルのインポートを認識できない
- **発生日時**: 2025年10月18日

## 原因

1. TypeScriptはデフォルトでCSSファイルのインポートの型宣言を持たない
2. Next.jsプロジェクトではCSSファイルのside-effect importが頻繁に使用されるが、TypeScriptがこれを認識するための型宣言が不足していた

## 解決方法

`/src/globals.d.ts` ファイルを作成し、以下の内容を追加：

```typescript
declare module "*.css" {
    const content: any;
    export default content;
}
```

## 解決後の効果

- CSS ファイルのインポートエラーが解消
- TypeScriptがCSSファイルのインポートを正常に認識
- `import "./globals.css"` などのside-effect importが正常に動作

## 関連ファイル

- `/src/app/layout.tsx` - エラーが発生していたファイル
- `/src/globals.d.ts` - 型宣言ファイル（新規作成）
- `/src/app/globals.css` - インポート対象のCSSファイル

## 補足

この型宣言により、プロジェクト内のすべての `.css` ファイルのインポートがTypeScriptで認識されるようになる。今後同様のエラーが発生する可能性は低い。

## 追加エラー: ESLint no-explicit-any エラー

### 発生したエラー

Vercelデプロイ時に以下のESLintエラーが発生：

```
./src/globals.d.ts
2:20  Error: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
```

### 原因

- ESLintの設定で `any` 型の使用が禁止されている
- 初期の型宣言で `any` を使用していたため

### 解決方法

`/src/globals.d.ts` を以下のように修正：

```typescript
declare module "*.css";
```

### 理由

- 通常のCSS ファイル（CSS Modules以外）は副作用のためのインポートなので、型定義は不要
- シンプルな宣言で十分にTypeScriptがインポートを認識する
- ESLintの `no-explicit-any` ルールに違反しない

### 確認済み

- `npm run build` が正常に完了
- Vercelデプロイが成功
