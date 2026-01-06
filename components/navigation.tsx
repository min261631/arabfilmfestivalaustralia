"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-lg md:text-xl font-serif font-semibold tracking-wider">
            International Arab Film Festival of Australia
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/about" className="text-sm uppercase tracking-wider hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/program" className="text-sm uppercase tracking-wider hover:text-primary transition-colors">
              Program
            </Link>
            <Link href="/submissions" className="text-sm uppercase tracking-wider hover:text-primary transition-colors">
              Submissions
            </Link>
            <Button size="sm" className="uppercase tracking-wider">
              Become Member
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                href="/about"
                className="text-sm uppercase tracking-wider hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/program"
                className="text-sm uppercase tracking-wider hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Program
              </Link>
              <Link
                href="/submissions"
                className="text-sm uppercase tracking-wider hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Submissions
              </Link>
              <Button size="sm" className="uppercase tracking-wider w-full">
                Become Member
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
