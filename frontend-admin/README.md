# 管理画面フロントエンド (frontend-admin)

ゲームポータルサイトの管理画面用フロントエンドプロジェクトです。

## 技術スタック

### コア
- **React** 19.2.0
- **TypeScript** 5.9.3
- **Vite** 7.2.5 (rolldown-vite)
- **pnpm** パッケージマネージャー
- **Docker** 開発環境

### UI・フレームワーク
- **React Bootstrap** 2.10.10
- **Bootstrap** 5.3.8
- **Refine** 5.0.6 (管理画面フレームワーク)
- **React Router** 7.10.0

## 開発環境構築

### 前提条件

- Docker および Docker Compose がインストールされていること
- ホストマシンのポート 5173 が空いていること

### 初回セットアップ

1. **依存関係のインストール**（初回のみ）
```bash
docker compose run --rm frontend pnpm install
```

2. **開発サーバー起動**
```bash
docker compose up -d
```

3. **ブラウザでアクセス**
   - http://localhost:5173

### 日常的な開発フロー
```bash
# 開発サーバー起動
docker compose up -d

# ログ確認
docker compose logs -f frontend

# 開発サーバー停止
docker compose down
```

## プロジェクト構成
```
frontend-admin/
├── compose.yaml         # Docker Compose設定
├── frontend/
│   └── Dockerfile       # Node.js 22 + pnpm環境
├── src/                 # Reactソースコード
│   ├── App.tsx          # Refineアプリケーション構成
│   └── main.tsx         # エントリーポイント
├── public/              # 静的ファイル
├── vite.config.ts       # Vite設定
└── package.json         # 依存関係定義
```

## 重要な設定

### vite.config.ts

Docker環境で外部アクセスを許可するため、以下の設定が必須:
```typescript
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Docker環境で必須
    port: 5173,
  },
})
```

### compose.yaml

- **匿名ボリューム** (`/app/node_modules`) により、ホスト側の node_modules 汚染を回避
- **ボリュームマウント** でソースコードのホットリロードを実現

### src/main.tsx

Bootstrap CSSの読み込み:
```typescript
import 'bootstrap/dist/css/bootstrap.min.css'
```

## 構築済み機能

- ✅ Docker開発環境
- ✅ Vite + React 19 + TypeScript
- ✅ Bootstrap CSS統合
- ✅ Refine 4基本セットアップ
- ✅ React Router v7統合
- ✅ 管理画面ダッシュボード(基本構造)

## 次のステップ

- データプロバイダーの設定(Laravel APIとの連携)
- リソース管理機能の追加
- 認証機能の実装
