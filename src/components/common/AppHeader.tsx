function AppHeader() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                {/* 로고 */}
                <a href="/" className="flex items-center space-x-2 font-semibold text-lg cursor-pointer">
                    Entvy-News
                </a>
            </div>
        </header>
    );
}

export { AppHeader }