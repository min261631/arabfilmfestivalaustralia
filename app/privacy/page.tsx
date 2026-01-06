import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <>
      <Navigation />

      <main className="pt-24">
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-serif font-light mb-8">Privacy Policy</h1>
              <p className="text-muted-foreground mb-12">Last updated: January 2025</p>

              <Card className="border-border">
                <CardContent className="p-8">
                  <div className="space-y-8 text-muted-foreground">
                    <div>
                      <h2 className="text-2xl font-serif font-semibold mb-4 text-foreground">
                        1. Introduction
                      </h2>
                      <p className="leading-relaxed">
                        The International Arab Film Festival of Australia ("IAFFA", "we", "us", or "our") is committed
                        to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and
                        safeguard your information when you visit our website and use our services.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-serif font-semibold mb-4 text-foreground">
                        2. Information We Collect
                      </h2>
                      <p className="leading-relaxed mb-4">We may collect information about you in various ways:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Personal information (name, email, phone number) when you register or contact us</li>
                        <li>Payment information when you purchase tickets or passes</li>
                        <li>Usage data including IP address, browser type, and pages visited</li>
                        <li>Information you provide when submitting films or applying for volunteer positions</li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-2xl font-serif font-semibold mb-4 text-foreground">
                        3. How We Use Your Information
                      </h2>
                      <p className="leading-relaxed mb-4">We use collected information for:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Processing ticket purchases and festival registrations</li>
                        <li>Communicating about festival events and updates</li>
                        <li>Improving our website and services</li>
                        <li>Complying with legal obligations</li>
                        <li>Sending marketing communications (with your consent)</li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-2xl font-serif font-semibold mb-4 text-foreground">
                        4. Information Sharing
                      </h2>
                      <p className="leading-relaxed">
                        We do not sell your personal information. We may share information with service providers who
                        assist us in operating our website and conducting our business, subject to confidentiality
                        agreements. We may also disclose information if required by law or to protect our rights.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-serif font-semibold mb-4 text-foreground">5. Data Security</h2>
                      <p className="leading-relaxed">
                        We implement appropriate technical and organizational measures to protect your personal
                        information. However, no method of transmission over the internet is 100% secure, and we cannot
                        guarantee absolute security.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-serif font-semibold mb-4 text-foreground">6. Your Rights</h2>
                      <p className="leading-relaxed mb-4">You have the right to:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Access your personal information</li>
                        <li>Correct inaccurate information</li>
                        <li>Request deletion of your information</li>
                        <li>Opt-out of marketing communications</li>
                        <li>Object to processing of your information</li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-2xl font-serif font-semibold mb-4 text-foreground">7. Cookies</h2>
                      <p className="leading-relaxed">
                        Our website uses cookies to enhance user experience. You can control cookie preferences through
                        your browser settings.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-serif font-semibold mb-4 text-foreground">
                        8. Changes to This Policy
                      </h2>
                      <p className="leading-relaxed">
                        We may update this Privacy Policy from time to time. We will notify you of any changes by posting
                        the new policy on this page and updating the "Last updated" date.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-serif font-semibold mb-4 text-foreground">9. Contact Us</h2>
                      <p className="leading-relaxed">
                        If you have questions about this Privacy Policy, please contact us at{" "}
                        <a href="mailto:privacy@iaffa.org.au" className="text-primary hover:underline">
                          privacy@iaffa.org.au
                        </a>
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

