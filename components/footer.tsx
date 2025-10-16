export default function Footer() {
  return (
    <footer className="relative py-12 px-4 md:px-8 bg-card/30 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold text-glow mb-4">Graphify</h3>
            <p className="text-foreground/80 text-sm leading-relaxed">
              Runtime Object Visualizer - Making the invisible visible through interactive visualization.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-bold text-glow mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {["Documentation", "GitHub Repository", "Report Issues", "Contact Us"].map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="text-foreground/80 hover:text-glow transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-bold text-glow mb-4">Connect</h3>
            <ul className="space-y-2 text-sm">
              {["GitHub", "Twitter", "LinkedIn", "Email"].map((social, idx) => (
                <li key={idx}>
                  <a href="#" className="text-foreground/80 hover:text-glow transition-colors">
                    {social}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="text-center text-sm text-foreground/70">
            <p className="mb-2 font-mono">
              {"<⚡>"} Built by Tushar Bhardwaj and Team | Graphify Project 2025 {"</⚡>"}
            </p>
            <p className="text-xs text-muted-foreground">
              © 2025 Graphify. All rights reserved. | Made with ❤️ for developers
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
