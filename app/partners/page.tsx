import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Mail, Building2, Users, Target, TrendingUp } from "lucide-react"

export default function PartnersPage() {
  return (
    <>
      <Navigation />

      <main className="pt-24">
        {/* Hero */}
        <section className="relative py-32 border-b border-border overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/film-production-crew-on-set.jpg"
              alt="Partners"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-serif font-light mb-6 text-balance">Partners & Sponsors</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Join us in celebrating Arab cinema
              </p>
            </div>
          </div>
        </section>

        {/* Partner Logos */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-light mb-12 text-center">Our Partners</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto items-center">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((partner) => (
                <div
                  key={partner}
                  className="aspect-square bg-muted flex items-center justify-center border border-border rounded-lg"
                >
                  <span className="text-muted-foreground text-sm">Partner Logo</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Partner With Us */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-light mb-12 text-center">Why Partner With Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: Users,
                  title: "Diverse Audience",
                  description: "Connect with engaged audiences passionate about cinema and cultural exchange",
                },
                {
                  icon: Target,
                  title: "Cultural Impact",
                  description: "Support meaningful cultural dialogue and representation in Australian media",
                },
                {
                  icon: TrendingUp,
                  title: "Growing Festival",
                  description: "Be part of Australia's premier Arab film festival with increasing reach each year",
                },
                {
                  icon: Building2,
                  title: "Media Exposure",
                  description: "Gain visibility through festival marketing, press coverage, and social media",
                },
                {
                  icon: Mail,
                  title: "Networking Opportunities",
                  description: "Access exclusive events and connect with filmmakers, industry leaders, and influencers",
                },
                {
                  icon: Target,
                  title: "Brand Alignment",
                  description: "Associate your brand with excellence in arts, culture, and diversity",
                },
              ].map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <Card key={index} className="border-border">
                    <CardContent className="p-8 text-center">
                      <div className="flex justify-center mb-4">
                        <div className="p-4 bg-primary/10 rounded-lg">
                          <Icon size={32} className="text-primary" />
                        </div>
                      </div>
                      <h3 className="text-xl font-serif font-semibold mb-3">{benefit.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Sponsorship Opportunities */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-light mb-12 text-center">Sponsorship Opportunities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  tier: "Platinum",
                  amount: "$25,000+",
                  benefits: [
                    "Premier logo placement on all materials",
                    "Opening night gala sponsorship",
                    "VIP reception hosting",
                    "10 festival passes",
                    "Dedicated social media campaign",
                    "Speaking opportunity at opening ceremony",
                  ],
                },
                {
                  tier: "Gold",
                  amount: "$15,000+",
                  benefits: [
                    "Prominent logo placement",
                    "Awards ceremony sponsorship",
                    "VIP event access",
                    "6 festival passes",
                    "Social media recognition",
                    "Program guide advertisement",
                  ],
                },
                {
                  tier: "Silver",
                  amount: "$8,000+",
                  benefits: [
                    "Logo placement on materials",
                    "Event sponsorship options",
                    "4 festival passes",
                    "Social media mentions",
                    "Program guide listing",
                  ],
                },
                {
                  tier: "Bronze",
                  amount: "$3,000+",
                  benefits: [
                    "Logo on website",
                    "2 festival passes",
                    "Social media acknowledgment",
                    "Program guide listing",
                  ],
                },
              ].map((tier, index) => (
                <Card key={index} className="border-border hover:border-primary transition-colors">
                  <CardContent className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-serif font-semibold">{tier.tier}</h3>
                      <span className="text-xl font-semibold text-primary">{tier.amount}</span>
                    </div>
                    <ul className="space-y-3">
                      {tier.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Download Sponsorship Deck */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-serif font-light mb-6">Download Sponsorship Deck</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Get detailed information about sponsorship opportunities, audience demographics, and partnership benefits
                in our comprehensive sponsorship deck.
              </p>
              <Button size="lg" className="uppercase tracking-wider">
                <Download size={20} className="mr-2" />
                Download PDF
              </Button>
            </div>
          </div>
        </section>

        {/* Partner Enquiry Form */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-light mb-12 text-center">Partner Enquiry</h2>
            <div className="max-w-2xl mx-auto">
              <Card className="border-border">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        className="w-full px-4 py-2 border border-border rounded-md bg-background"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact" className="block text-sm font-semibold mb-2">
                        Contact Name
                      </label>
                      <input
                        type="text"
                        id="contact"
                        className="w-full px-4 py-2 border border-border rounded-md bg-background"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-border rounded-md bg-background"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-2 border border-border rounded-md bg-background"
                      />
                    </div>
                    <div>
                      <label htmlFor="interest" className="block text-sm font-semibold mb-2">
                        Sponsorship Interest Level
                      </label>
                      <select
                        id="interest"
                        className="w-full px-4 py-2 border border-border rounded-md bg-background"
                      >
                        <option>Platinum ($25,000+)</option>
                        <option>Gold ($15,000+)</option>
                        <option>Silver ($8,000+)</option>
                        <option>Bronze ($3,000+)</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full px-4 py-2 border border-border rounded-md bg-background"
                      />
                    </div>
                    <Button type="submit" className="w-full uppercase tracking-wider">
                      Submit Enquiry
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

