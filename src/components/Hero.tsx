export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-background/90">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* メインメッセージ */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                    こんにちは、
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Takanashi
                    </span>
                    です
                </h1>

                {/* サブタイトル */}
                <p className="text-xl sm:text-2xl text-foreground/80 mb-8 leading-relaxed">
                    Web開発者 / フロントエンドエンジニア
                </p>

                {/* 説明文 */}
                <p className="text-lg text-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed">
                    モダンなWeb技術を使用して、ユーザー体験を重視したアプリケーションを開発しています。
                    React、Next.js、TypeScriptを中心とした技術スタックで、
                    美しく機能的なWebサイトを創り上げることに情熱を注いでいます。
                </p>

                {/* CTAボタン */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="/projects"
                        className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                        プロジェクトを見る
                    </a>
                    <a
                        href="/contact"
                        className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-foreground bg-background border border-foreground/20 hover:bg-foreground/5 transition-all duration-200"
                    >
                        お問い合わせ
                    </a>
                </div>

                {/* スクロールインジケーター */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <svg
                        className="w-6 h-6 text-foreground/40"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </div>
            </div>
        </section>
    );
}
