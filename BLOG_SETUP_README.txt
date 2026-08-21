MINAMI MINDLAB ブログ連携メモ

このZIPは以下を含みます。
- ヘッダー・モバイルメニュー・フッターに「ブログ」導線
- ホームページに最新ブログ3件を表示
- microCMS記事一覧: /blog
- microCMS個別記事: /blog/{記事ID}
- Vercel Function: /api/blogs と /api/blogs?id={記事ID}
- ビルド時の静的HTML生成（SEO用）
- sitemap.xml へのブログURL自動追加

Vercelで必要な環境変数:
MICROCMS_API_KEY

この環境変数はブラウザ公開用の VITE_ 接頭辞を付けず、Sensitive のまま設定してください。

microCMSで記事を公開・更新した直後にもSEO用HTMLを更新したい場合は、VercelのDeploy Hookを作成し、microCMSのWebhookからそのURLを呼ぶ設定を追加します。
