import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, MapPin, Info } from "lucide-react"

export default function TicketsPage() {
  return (
    <>
      <Navigation />

      <main className="pt-24">
        {/* Hero */}
        <section className="relative py-32 border-b border-border overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/audience-at-cultural-cinema-event.jpg"
              alt="Festival audience"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-serif font-light mb-6 text-balance">Tickets & Passes</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Choose the perfect pass to experience the full festival
              </p>
            </div>
          </div>
        </section>

        {/* Ticket Types */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-light mb-12 text-center">Ticket Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Single Screening",
                  description: "One film screening of your choice",
                  price: "$18",
                  features: ["Access to one screening", "Q&A session included", "Valid for selected date/time"],
                },
                {
                  title: "Day Pass",
                  description: "All screenings on a single day",
                  price: "$45",
                  features: ["All screenings on selected day", "Priority seating", "Access to day's events"],
                },
                {
                  title: "Festival Pass",
                  description: "Full access to entire festival",
                  price: "$180",
                  features: ["All screenings", "Opening & closing galas", "Industry events", "Priority booking"],
                },
              ].map((ticket, index) => (
                <Card key={index} className="border-border hover:border-primary transition-colors">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-serif font-semibold mb-2">{ticket.title}</h3>
                    <p className="text-muted-foreground mb-6">{ticket.description}</p>
                    <div className="text-4xl font-serif font-light mb-6 text-primary">{ticket.price}</div>
                    <ul className="space-y-3 mb-8">
                      {ticket.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 size={20} className="text-primary shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full uppercase tracking-wider">Purchase</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-light mb-12 text-center">Pricing</h2>
            <div className="max-w-4xl mx-auto">
              <Card className="border-border">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex justify-between items-center pb-4 border-b border-border">
                      <div>
                        <h3 className="text-xl font-serif font-semibold">Student Discount</h3>
                        <p className="text-sm text-muted-foreground">Valid student ID required</p>
                      </div>
                      <span className="text-2xl font-semibold text-primary">20% OFF</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-border">
                      <div>
                        <h3 className="text-xl font-serif font-semibold">Senior Discount</h3>
                        <p className="text-sm text-muted-foreground">65+ years</p>
                      </div>
                      <span className="text-2xl font-semibold text-primary">15% OFF</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-border">
                      <div>
                        <h3 className="text-xl font-serif font-semibold">Group Bookings</h3>
                        <p className="text-sm text-muted-foreground">10+ tickets</p>
                      </div>
                      <span className="text-2xl font-semibold text-primary">10% OFF</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-xl font-serif font-semibold">Early Bird</h3>
                        <p className="text-sm text-muted-foreground">Before September 1, 2025</p>
                      </div>
                      <span className="text-2xl font-semibold text-primary">15% OFF</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pass Inclusions */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-light mb-12 text-center">Pass Inclusions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: "Festival Pass Includes",
                  items: [
                    "Access to all film screenings",
                    "Opening and closing night galas",
                    "Q&A sessions with filmmakers",
                    "Industry networking events",
                    "Panel discussions",
                    "Workshop access (limited seats)",
                    "Priority booking window",
                    "Festival program guide",
                    "Commemorative festival badge",
                  ],
                },
                {
                  title: "Day Pass Includes",
                  items: [
                    "All screenings on selected day",
                    "Q&A sessions",
                    "Day's panel discussions",
                    "Priority seating",
                    "Festival program guide",
                  ],
                },
              ].map((pass, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-serif font-semibold mb-6">{pass.title}</h3>
                    <ul className="space-y-3">
                      {pass.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 size={20} className="text-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Venue Details */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-light mb-12 text-center">Venue Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "Palace Cinema Central",
                  city: "Sydney",
                  address: "123 George Street, Sydney NSW 2000",
                  capacity: "450 seats",
                  amenities: ["Wheelchair accessible", "Hearing loop", "Comfortable seating", "Bar & concessions"],
                },
                {
                  name: "Dendy Opera Quays",
                  city: "Sydney",
                  address: "2 East Circular Quay, Sydney NSW 2000",
                  capacity: "320 seats",
                  amenities: ["Wheelchair accessible", "Harbour views", "Premium seating", "Café"],
                },
                {
                  name: "ACMI Cinema",
                  city: "Melbourne",
                  address: "Fed Square, Melbourne VIC 3000",
                  capacity: "500 seats",
                  amenities: ["Wheelchair accessible", "State-of-the-art projection", "Bar", "Museum access"],
                },
                {
                  name: "Classic Cinemas",
                  city: "Melbourne",
                  address: "9 Gordon Street, Elsternwick VIC 3185",
                  capacity: "280 seats",
                  amenities: ["Wheelchair accessible", "Historic venue", "Art house atmosphere", "Café"],
                },
              ].map((venue, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-serif font-semibold mb-2">{venue.name}</h3>
                    <p className="text-sm text-primary mb-3">{venue.city}</p>
                    <div className="flex items-start gap-2 mb-4">
                      <MapPin size={16} className="text-muted-foreground shrink-0 mt-1" />
                      <p className="text-sm text-muted-foreground">{venue.address}</p>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">Capacity: {venue.capacity}</p>
                    <div className="space-y-2">
                      {venue.amenities.map((amenity, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-primary shrink-0" />
                          <span className="text-sm text-muted-foreground">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Accessibility Info */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-light mb-12 text-center">Accessibility Information</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  title: "Wheelchair Access",
                  description: "All venues are fully wheelchair accessible with dedicated seating areas and accessible restrooms.",
                },
                {
                  title: "Hearing Assistance",
                  description: "Hearing loops available at all venues. Please request when booking your tickets.",
                },
                {
                  title: "Visual Assistance",
                  description: "Audio description available for select screenings. Please check program guide for details.",
                },
                {
                  title: "Companion Cards",
                  description: "Companion card holders receive complimentary companion tickets. Please contact us when booking.",
                },
                {
                  title: "Parking",
                  description: "Accessible parking available at all venues. Please book in advance.",
                },
              ].map((item, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-serif font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Terms & Conditions */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-light mb-12 text-center">Terms & Conditions</h2>
            <div className="max-w-4xl mx-auto">
              <Card className="border-border">
                <CardContent className="p-8">
                  <div className="space-y-6 text-muted-foreground">
                    <div>
                      <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">Ticket Purchase</h3>
                      <p className="leading-relaxed">
                        All tickets are non-refundable except in cases of event cancellation. Tickets may be transferred
                        to another person up to 24 hours before the screening.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">Entry Policy</h3>
                      <p className="leading-relaxed">
                        Latecomers will be admitted at the discretion of venue staff. Seats cannot be guaranteed for
                        late arrivals. All attendees must present valid tickets and ID for student/senior discounts.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">Pass Usage</h3>
                      <p className="leading-relaxed">
                        Festival passes are non-transferable and valid only for the 2025 festival dates. Passes must be
                        presented at each event. Lost passes may be replaced with proof of purchase.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">Cancellation Policy</h3>
                      <p className="leading-relaxed">
                        In the event of cancellation, full refunds will be issued. For rescheduled events, tickets
                        remain valid for the new date or refunds can be requested.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">Code of Conduct</h3>
                      <p className="leading-relaxed">
                        All attendees must respect other audience members and filmmakers. Disruptive behavior may result
                        in removal from the venue without refund.
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

