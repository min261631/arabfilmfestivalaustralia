import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export default function AccessibilityPage() {
  return (
    <>
      <Navigation />

      <main className="pt-24">
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-serif font-light mb-8">Accessibility Statement</h1>
              <p className="text-muted-foreground mb-12">Last updated: January 2025</p>

              <Card className="border-border">
                <CardContent className="p-8">
                  <div className="space-y-8 text-muted-foreground">
                    <div>
                      <h2 className="text-2xl font-serif font-semibold mb-4 text-foreground">Our Commitment</h2>
                      <p className="leading-relaxed">
                        The International Arab Film Festival of Australia is committed to ensuring accessibility for all
                        attendees, regardless of ability. We strive to provide an inclusive and welcoming environment for
                        everyone.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-serif font-semibold mb-4 text-foreground">Website Accessibility</h2>
                      <p className="leading-relaxed mb-4">
                        We are working to make our website accessible to all users. Our website aims to conform to WCAG
                        2.1 Level AA standards. We are continuously improving accessibility and welcome feedback.
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Alternative text for images</li>
                        <li>Keyboard navigation support</li>
                        <li>Screen reader compatibility</li>
                        <li>Clear heading structure</li>
                        <li>Sufficient color contrast</li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-2xl font-serif font-semibold mb-4 text-foreground">Venue Accessibility</h2>
                      <p className="leading-relaxed mb-4">All festival venues are wheelchair accessible:</p>
                      <ul className="space-y-3">
                        {[
                          "Wheelchair accessible entrances and restrooms",
                          "Dedicated accessible seating areas",
                          "Accessible parking available (advance booking required)",
                          "Hearing loops available at all venues",
                          "Audio description for select screenings",
                          "Companion card holders receive complimentary companion tickets",
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle2 size={20} className="text-primary shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-2xl font-serif font-semibold mb-4 text-foreground">Requesting Accommodations</h2>
                      <p className="leading-relaxed">
                        If you require specific accommodations, please contact us at least 2 weeks before the festival
                        dates. We will work with you to ensure your needs are met. Contact{" "}
                        <a href="mailto:accessibility@iaffa.org.au" className="text-primary hover:underline">
                          accessibility@iaffa.org.au
                        </a>{" "}
                        or call +61 2 3456 7890.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-serif font-semibold mb-4 text-foreground">Feedback</h2>
                      <p className="leading-relaxed">
                        We welcome feedback on how we can improve accessibility. If you encounter any barriers or have
                        suggestions, please contact us at{" "}
                        <a href="mailto:accessibility@iaffa.org.au" className="text-primary hover:underline">
                          accessibility@iaffa.org.au
                        </a>
                        .
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-serif font-semibold mb-4 text-foreground">Service Animals</h2>
                      <p className="leading-relaxed">
                        Service animals are welcome at all festival venues and events. Please inform us in advance if you
                        will be accompanied by a service animal.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-serif font-semibold mb-4 text-foreground">Future Improvements</h2>
                      <p className="leading-relaxed">
                        We are committed to continuously improving accessibility. Planned improvements include expanded
                        audio description services, sign language interpretation for select events, and enhanced website
                        accessibility features.
                      </p>
                    </div>
                  </div>
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

