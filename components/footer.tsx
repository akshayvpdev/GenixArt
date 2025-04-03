export function Footer() {
    return (
      <footer className="border-t border-white/5 bg-black backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container flex h-14 items-center justify-between py-6">
        <p className="text-sm text-gray-400">
          Built with Next.js and OpenAI
        </p>
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:bg-clip-text transition-all duration-300"
          >
            GitHub
          </a>
          <a
            href="/privacy"
            className="text-sm text-gray-400 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:bg-clip-text transition-all duration-300"
          >
            Privacy
          </a>
          <a
            href="/terms"
            className="text-sm text-gray-400 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:bg-clip-text transition-all duration-300"
          >
            Terms
          </a>
        </div>
      </div>
    </footer>
    
    );
  }