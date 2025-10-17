export default function Footer() {
    return (
        <footer className="bg-background border-t border-foreground/10 mt-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* サイト情報 */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Takanashi</h3>
                        <p className="text-foreground/70 text-sm leading-relaxed">
                            Web開発とテクノロジーに情熱を注ぐ開発者です。
                            新しい技術を学び、創造的なソリューションを構築することを楽しんでいます。
                        </p>
                    </div>

                    {/* クイックリンク */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                        <div className="space-y-2">
                            <a href="/" className="block text-foreground/70 hover:text-foreground transition-colors text-sm">
                                Home
                            </a>
                            <a href="/about" className="block text-foreground/70 hover:text-foreground transition-colors text-sm">
                                About
                            </a>
                            <a href="/projects" className="block text-foreground/70 hover:text-foreground transition-colors text-sm">
                                Projects
                            </a>
                            <a href="/contact" className="block text-foreground/70 hover:text-foreground transition-colors text-sm">
                                Contact
                            </a>
                        </div>
                    </div>

                    {/* ソーシャルリンク */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Connect</h3>
                        <div className="space-y-2">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-foreground/70 hover:text-foreground transition-colors text-sm"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-foreground/70 hover:text-foreground transition-colors text-sm"
                            >
                                Twitter
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-foreground/70 hover:text-foreground transition-colors text-sm"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>

                {/* コピーライト */}
                <div className="border-t border-foreground/10 mt-8 pt-8 text-center">
                    <p className="text-foreground/50 text-sm">
                        © {new Date().getFullYear()} Takanashi. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
