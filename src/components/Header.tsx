import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-background/80 backdrop-blur-sm border-b border-foreground/10 sticky top-0 z-50">
            <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* ロゴ・サイト名 */}
                    <Link href="/" className="font-bold text-xl text-foreground hover:opacity-80 transition-opacity">
                        Takanashi
                    </Link>

                    {/* ナビゲーションメニュー */}
                    <div className="hidden md:flex space-x-8">
                        <Link
                            href="/"
                            className="text-foreground/80 hover:text-foreground transition-colors font-medium"
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className="text-foreground/80 hover:text-foreground transition-colors font-medium"
                        >
                            About
                        </Link>
                        <Link
                            href="/projects"
                            className="text-foreground/80 hover:text-foreground transition-colors font-medium"
                        >
                            Projects
                        </Link>
                        <Link
                            href="/contact"
                            className="text-foreground/80 hover:text-foreground transition-colors font-medium"
                        >
                            Contact
                        </Link>
                    </div>

                    {/* モバイルメニュー（簡易版） */}
                    <div className="md:hidden">
                        <button className="text-foreground/80 hover:text-foreground transition-colors">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
}
