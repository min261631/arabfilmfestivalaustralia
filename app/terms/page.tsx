import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <>
      <Navigation />

      <main className="pt-24">
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-serif font-light mb-8">Terms of Use</h1>
              <p className="text-muted-foreground mb-12">Last updated: January 2025</p>

              <Card className="border-border">
                <CardContent className="p-8">
                  <div className="space-y-8 text-muted-foreground">
                    <div>
                      <h2 className="text-2xl font-serif font-semibold mb-4 text-foreground">
                        1. Acceptance of Terms
                      </h2>
                      <p className="leading-relaxed">
                        By accessing and using the International Arab Film Festival of Australia website, you accept and
                        agree to be bound by these Terms of Use. If you do not agree, please do not use our website.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-serif font-semibold mb-4 text-foreground">2. Use of Website</h2>
                      <p className="leading-relaxed mb-4">You agree to use our website only for lawful purposes:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>You will not violate any applicable laws or regulations</li>
                        <li>You will not infringe on the rights of others</li>
                        <li>You will not transmit harmful or malicious code</li>
                        <li>You will not attempt to gain unauthorized access to our systems</li>
                        <li>You will not use the website for commercial purposes without permission</li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-2xl font-serif font-semibold mb-4 text-foreground">
                        3. Intellectual Property
                      </h2>
                      <p className="leading-relaxed">
                        All content on this website, including text, graphics, logos, images, and software, is the
                        property of IAFFA or its content suppliers and is protected by copyright and other intellectual
                        property laws. You may not reproduce, distribute, or create derivative works without our written
                        permission.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-serif font-semibold mb-4 text-foreground">4. Ticket Purchases</h2>
                      <p className="leading-relaxed">
                        All ticket sales are final unless otherwise stated. Tickets are non-refundable except in cases of
                        event cancellation. Tickets may be transferred to another person up to 24 hours before the
                        screening. Latecomers will be admitted at the discretion of venue staff.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-serif font-semibold mb-4 text-foreground">
                        5. Film Submissions
                      </h2>
                      <p className="leading-relaxed">
                        By submitting a film, you represent that you have the right to submit the film and that it does
                        not infringe on any third-party rights. You grant IAFFA the right to screen your film if
                        selected and to use excerpts for promotional purposes.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-serif font-semibold mb-4 text-foreground">
                        6. User Content
                      </h2>
                      <p className="leading-relaxed">
                        If you submit content to our website (comments, reviews, etc.), you grant us a non-exclusive,
                        royalty-free license to use, reproduce, and distribute that content. You are responsible for
                        ensuring your content does not violate any laws or infringe on any rights.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-serif font-semibold mb-4 text-foreground">
                        7. Disclaimer of Warranties
                      </h2>
                      <p className="leading-relaxed">
                        Our website is provided "as is" without warranties of any kind. We do not guarantee that the
                        website will be uninterrupted, secure, or error-free. We are not responsible for any damages
                        resulting from your use of the website.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-serif font-semibold mb-4 text-foreground">
                        8. Limitation of Liability
                      </h2>
                      <p className="leading-relaxed">
                        To the maximum extent permitted by law, IAFFA shall not be liable for any indirect, incidental,
                        special, or consequential damages arising from your use of the website or attendance at
                        festival events.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-serif font-semibold mb-4 text-foreground">
                        9. Links to Third-Party Sites
                      </h2>
                      <p className="leading-relaxed">
                        Our website may contain links to third-party websites. We are not responsible for the content
                        or practices of these external sites. Your use of third-party sites is at your own risk.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-serif font-semibold mb-4 text-foreground">
                        10. Changes to Terms
                      </h2>
                      <p className="leading-relaxed">
                        We reserve the right to modify these Terms of Use at any time. Changes will be effective
                        immediately upon posting. Your continued use of the website constitutes acceptance of the
                        modified terms.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-serif font-semibold mb-4 text-foreground">11. Governing Law</h2>
                      <p className="leading-relaxed">
                        These Terms of Use are governed by the laws of New South Wales, Australia. Any disputes will be
                        subject to the exclusive jurisdiction of the courts of New South Wales.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-serif font-semibold mb-4 text-foreground">12. Contact</h2>
                      <p className="leading-relaxed">
                        For questions about these Terms of Use, contact us at{" "}
                        <a href="mailto:legal@iaffa.org.au" className="text-primary hover:underline">
                          legal@iaffa.org.au
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

