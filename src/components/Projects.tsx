const projects = [
    {
        title: "eコマースWebサイト",
        description: "Next.js、TailwindCSS、Stripeを使用したモダンなeコマースプラットフォーム。レスポンシブデザイン、ショッピングカート機能、決済システムを実装。",
        technologies: ["Next.js", "TypeScript", "TailwindCSS", "Stripe", "PostgreSQL"],
        image: "/api/placeholder/400/250",
        githubUrl: "https://github.com",
        liveUrl: "https://example.com",
        status: "completed"
    },
    {
        title: "タスク管理アプリ",
        description: "React、Node.js、MongoDBを使用したリアルタイムタスク管理アプリケーション。ドラッグ&ドロップ、チーム協作機能を搭載。",
        technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
        image: "/api/placeholder/400/250",
        githubUrl: "https://github.com",
        liveUrl: "https://example.com",
        status: "completed"
    },
    {
        title: "ポートフォリオサイト",
        description: "このサイト自体も一つのプロジェクトです。Next.js 15、TailwindCSS v4、TypeScriptを使用して構築しました。",
        technologies: ["Next.js", "TypeScript", "TailwindCSS", "Vercel"],
        image: "/api/placeholder/400/250",
        githubUrl: "https://github.com",
        liveUrl: "/",
        status: "in-progress"
    }
];

export default function Projects() {
    return (
        <section className="py-20 bg-foreground/5">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* セクションヘッダー */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                        プロジェクト
                    </h2>
                    <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                        これまでに開発したWebアプリケーションやサイトの一部をご紹介します。
                        各プロジェクトでは異なる技術スタックや手法にチャレンジしています。
                    </p>
                </div>

                {/* プロジェクトグリッド */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-background rounded-xl overflow-hidden border border-foreground/10 hover:border-foreground/20 transition-all duration-300 hover:shadow-lg"
                        >
                            {/* プロジェクト画像 */}
                            <div className="relative h-48 bg-gradient-to-br from-blue-600/20 to-purple-600/20">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-foreground/40 text-6xl">🚀</div>
                                </div>
                                {project.status === "in-progress" && (
                                    <div className="absolute top-4 right-4">
                                        <span className="px-3 py-1 text-xs font-medium bg-yellow-500/20 text-yellow-700 rounded-full border border-yellow-500/30">
                                            開発中
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* プロジェクト内容 */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-foreground mb-3">
                                    {project.title}
                                </h3>

                                <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                                    {project.description}
                                </p>

                                {/* 技術スタック */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-2 py-1 text-xs font-medium bg-foreground/10 text-foreground/80 rounded"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* アクションボタン */}
                                <div className="flex gap-3">
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 text-center py-2 px-4 text-sm font-medium text-foreground/80 bg-foreground/10 hover:bg-foreground/20 rounded-lg transition-colors"
                                    >
                                        GitHub
                                    </a>
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 text-center py-2 px-4 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg transition-all"
                                    >
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* もっと見るボタン */}
                <div className="text-center mt-12">
                    <a
                        href="/projects"
                        className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-foreground bg-background border border-foreground/20 hover:bg-foreground/5 transition-all duration-200"
                    >
                        すべてのプロジェクトを見る →
                    </a>
                </div>
            </div>
        </section>
    );
}
