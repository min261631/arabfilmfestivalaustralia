import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQPage() {
  return (
    <>
      <Navigation />

      <main className="pt-24">
        {/* Hero */}
        <section className="relative py-32 border-b border-border overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/audience-at-cultural-cinema-event.jpg"
              alt="FAQ"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-serif font-light mb-6 text-balance">Frequently Asked Questions</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Find answers to common questions about the festival
              </p>
            </div>
          </div>
        </section>

        {/* Filmmaker FAQs */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-light mb-12 text-center">Filmmaker FAQs</h2>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="film-submission-fee">
                  <AccordionTrigger>What is the submission fee?</AccordionTrigger>
                  <AccordionContent>
                    Fees vary by category and deadline. Early bird rates start at $20 for student films and $30 for
                    shorts. Feature films are $50. See the submissions page for detailed pricing.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="film-screened-elsewhere">
                  <AccordionTrigger>Can I submit a film that has screened at other festivals?</AccordionTrigger>
                  <AccordionContent>
                    Yes, films can have screened at other festivals, but they must not have been commercially released
                    or screened in Australia.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="arab-heritage-requirement">
                  <AccordionTrigger>Do I need to be of Arab heritage to submit?</AccordionTrigger>
                  <AccordionContent>
                    No, but your film must have significant Arab content, themes, or perspectives. Films by Arab
                    filmmakers are also encouraged.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="travel-costs">
                  <AccordionTrigger>Will you cover travel costs for selected filmmakers?</AccordionTrigger>
                  <AccordionContent>
                    We provide travel assistance for select filmmakers based on available funding. Details will be
                    provided upon selection.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="submission-format">
                  <AccordionTrigger>What format should I submit my film in?</AccordionTrigger>
                  <AccordionContent>
                    Films can be submitted in digital formats (DCP, ProRes, or high-quality MP4). We'll provide specific
                    technical requirements upon selection.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Attendee FAQs */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-light mb-12 text-center">Attendee FAQs</h2>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="ticket-purchase">
                  <AccordionTrigger>How do I purchase tickets?</AccordionTrigger>
                  <AccordionContent>
                    Tickets can be purchased online through our website, at venue box offices, or at the door (subject
                    to availability). Festival passes are available for advance purchase.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="ticket-refund">
                  <AccordionTrigger>Can I get a refund if I can't attend?</AccordionTrigger>
                  <AccordionContent>
                    Tickets are non-refundable except in cases of event cancellation. However, tickets can be
                    transferred to another person up to 24 hours before the screening.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="student-discount">
                  <AccordionTrigger>Do you offer student discounts?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we offer a 20% discount for students with valid student ID. This applies to single tickets and
                    festival passes.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="accessibility">
                  <AccordionTrigger>Are venues wheelchair accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes, all venues are fully wheelchair accessible with dedicated seating areas and accessible restrooms.
                    Please indicate accessibility needs when booking.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="parking">
                  <AccordionTrigger>Is parking available at venues?</AccordionTrigger>
                  <AccordionContent>
                    Parking availability varies by venue. We recommend checking venue websites or using public
                    transport. Accessible parking is available at all venues with advance booking.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="age-restrictions">
                  <AccordionTrigger>Are there age restrictions for screenings?</AccordionTrigger>
                  <AccordionContent>
                    Age restrictions follow Australian film classification ratings. Some films may be rated M, MA15+, or
                    R18+. Please check individual film ratings before booking.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Sponsor FAQs */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-light mb-12 text-center">Sponsor FAQs</h2>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="sponsorship-levels">
                  <AccordionTrigger>What sponsorship levels are available?</AccordionTrigger>
                  <AccordionContent>
                    We offer four sponsorship tiers: Platinum ($25,000+), Gold ($15,000+), Silver ($8,000+), and Bronze
                    ($3,000+). Each tier includes different benefits and recognition opportunities.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="sponsorship-benefits">
                  <AccordionTrigger>What benefits do sponsors receive?</AccordionTrigger>
                  <AccordionContent>
                    Benefits vary by tier and include logo placement, festival passes, VIP event access, social media
                    recognition, and networking opportunities. See our partners page for detailed information.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="sponsorship-process">
                  <AccordionTrigger>How do I become a sponsor?</AccordionTrigger>
                  <AccordionContent>
                    Contact our partnerships team at partners@iaffa.org.au or fill out the partner enquiry form on our
                    website. We'll send you a sponsorship deck and discuss opportunities.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="custom-sponsorship">
                  <AccordionTrigger>Can we create a custom sponsorship package?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we're happy to work with sponsors to create custom packages that align with your marketing
                    objectives and budget. Contact us to discuss your needs.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Media FAQs */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-light mb-12 text-center">Media FAQs</h2>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="media-accreditation">
                  <AccordionTrigger>How do I get media accreditation?</AccordionTrigger>
                  <AccordionContent>
                    Media professionals can apply for accreditation by contacting press@iaffa.org.au at least 2 weeks
                    before the festival. Please include your media outlet, role, and coverage plans.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="press-materials">
                  <AccordionTrigger>Where can I find press materials?</AccordionTrigger>
                  <AccordionContent>
                    Press releases, logos, posters, and trailers are available on our media page. You can also download
                    our complete press kit or contact us for specific materials.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="interview-requests">
                  <AccordionTrigger>How do I request interviews?</AccordionTrigger>
                  <AccordionContent>
                    To request interviews with filmmakers, jury members, or festival directors, please contact
                    press@iaffa.org.au at least one week in advance with your interview request and preferred dates.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="photo-video-access">
                  <AccordionTrigger>Can I take photos or videos at screenings?</AccordionTrigger>
                  <AccordionContent>
                    Photography and videography during screenings is not permitted. However, accredited media can
                    photograph events, red carpets, and Q&A sessions. Please coordinate with our press team.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

