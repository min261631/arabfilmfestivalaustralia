import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-serif font-semibold mb-4">IAFFA</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Celebrating the richness and diversity of Arab cinema in Australia.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Festival</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/program" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Program
                </Link>
              </li>
              <li>
                <Link href="/tickets" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Tickets
                </Link>
              </li>
              <li>
                <Link href="/awards" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Awards
                </Link>
              </li>
              <li>
                <Link
                  href="/submissions"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Submissions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/news" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  News & Blog
                </Link>
              </li>
              <li>
                <Link href="/archive" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Archive
                </Link>
              </li>
              <li>
                <Link href="/media" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Media & Press
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/volunteers" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Volunteers
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Connect</h4>
            <ul className="space-y-2 mb-4">
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Newsletter
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2025 International Arab Film Festival of Australia. All rights reserved.</p>
          <div className="flex gap-6 flex-wrap">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Use
            </Link>
            <Link href="/accessibility" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
