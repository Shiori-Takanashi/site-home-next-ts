const skills = [
    {
        category: "フロントエンド",
        technologies: [
            { name: "React", level: 90 },
            { name: "Next.js", level: 85 },
            { name: "TypeScript", level: 80 },
            { name: "TailwindCSS", level: 85 },
        ]
    },
    {
        category: "バックエンド",
        technologies: [
            { name: "Node.js", level: 75 },
            { name: "Express", level: 70 },
            { name: "PostgreSQL", level: 65 },
            { name: "MongoDB", level: 60 },
        ]
    },
    {
        category: "ツール & その他",
        technologies: [
            { name: "Git", level: 85 },
            { name: "Docker", level: 70 },
            { name: "AWS", level: 60 },
            { name: "Figma", level: 75 },
        ]
    }
];

export default function Skills() {
    return (
        <section className="py-20 bg-background">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* セクションヘッダー */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                        スキル & 技術スタック
                    </h2>
                    <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                        これまでに習得した技術と、現在のスキルレベルをご紹介します。
                        常に新しい技術を学び続け、スキルの向上に努めています。
                    </p>
                </div>

                {/* スキルグリッド */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skillCategory, categoryIndex) => (
                        <div
                            key={categoryIndex}
                            className="bg-foreground/5 rounded-xl p-6 border border-foreground/10 hover:border-foreground/20 transition-colors"
                        >
                            <h3 className="text-xl font-semibold text-foreground mb-6">
                                {skillCategory.category}
                            </h3>

                            <div className="space-y-4">
                                {skillCategory.technologies.map((tech, techIndex) => (
                                    <div key={techIndex}>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-foreground/80 font-medium">
                                                {tech.name}
                                            </span>
                                            <span className="text-foreground/60 text-sm">
                                                {tech.level}%
                                            </span>
                                        </div>

                                        {/* プログレスバー */}
                                        <div className="w-full bg-foreground/10 rounded-full h-2">
                                            <div
                                                className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                                                style={{ width: `${tech.level}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* 学習中の技術 */}
                <div className="mt-16 text-center">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                        現在学習中
                    </h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {["Rust", "WebAssembly", "Three.js", "GraphQL"].map((tech, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-600/20 text-foreground/80 rounded-full text-sm font-medium"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
