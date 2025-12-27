import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Clock } from "lucide-react"

export default function ProgramPage() {
  return (
    <>
      <Navigation />

      <main className="pt-24">
        {/* Hero */}
        <section className="relative py-32 border-b border-border overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/award-trophy-on-stage--elegant-film-festival-cerem.jpg"
              alt="Film festival ceremony"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-serif font-light mb-6 text-balance">Festival Program</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Ten days of exceptional Arab cinema across Sydney and Melbourne
              </p>
            </div>
          </div>
        </section>

        {/* Program Overview */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center mb-24">
              <div>
                <h2 className="text-4xl font-serif font-light mb-6">2025 Theme: Horizons</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  This year's festival explores the theme of "Horizons" - the boundaries we cross, the perspectives we
                  gain, and the futures we imagine. Through diverse narratives spanning genres and generations, we
                  present films that expand our understanding of the Arab world and its place in global cinema.
                </p>
              </div>
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/cinematic-arab-film-poster--desert-landscape.jpg"
                  alt="Desert landscape from Arab cinema"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Film Categories */}
            <h2 className="text-4xl font-serif font-light mb-12 text-center">Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-24">
              {[
                {
                  title: "Opening Night Gala",
                  description: "Prestigious world premieres and landmark films",
                  count: "1 film",
                },
                {
                  title: "Feature Competition",
                  description: "Outstanding narrative features competing for awards",
                  count: "12 films",
                },
                {
                  title: "Documentary Features",
                  description: "Non-fiction explorations of Arab life and culture",
                  count: "10 films",
                },
                {
                  title: "Short Films",
                  description: "Bold and innovative shorts under 40 minutes",
                  count: "20 films",
                },
                {
                  title: "Student Showcase",
                  description: "Emerging talent from film schools across the region",
                  count: "8 films",
                },
                {
                  title: "Retrospective Series",
                  description: "Classic Arab films that shaped cinema history",
                  count: "5 films",
                },
              ].map((category, index) => (
                <Card key={index} className="border-border hover:border-primary transition-colors">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-serif font-semibold">{category.title}</h3>
                      <span className="text-sm text-primary">{category.count}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{category.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Sample Schedule */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-light mb-12 text-center">Sample Schedule</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  date: "Friday, November 1",
                  screenings: [
                    {
                      time: "7:00 PM",
                      title: "Opening Night Gala: The Last Night",
                      venue: "Palace Cinema, Sydney",
                      director: "Layla Hassan",
                    },
                  ],
                },
                {
                  date: "Saturday, November 2",
                  screenings: [
                    { time: "2:00 PM", title: "Desert Roads", venue: "Dendy Cinema, Sydney", director: "Omar Khalil" },
                    {
                      time: "5:00 PM",
                      title: "Short Film Program 1",
                      venue: "Palace Cinema, Sydney",
                      director: "Various",
                    },
                    {
                      time: "8:00 PM",
                      title: "Voices of the City",
                      venue: "Dendy Cinema, Sydney",
                      director: "Sara Mansour",
                    },
                  ],
                },
                {
                  date: "Sunday, November 3",
                  screenings: [
                    {
                      time: "1:00 PM",
                      title: "Documentary: Threads of Memory",
                      venue: "Palace Cinema, Sydney",
                      director: "Fatima Al-Qasimi",
                    },
                    {
                      time: "4:00 PM",
                      title: "Between Two Shores",
                      venue: "Dendy Cinema, Sydney",
                      director: "Ahmed Nasser",
                    },
                    {
                      time: "7:00 PM",
                      title: "Industry Panel: The Future of Arab Cinema",
                      venue: "Palace Cinema, Sydney",
                      director: "Panel Discussion",
                    },
                  ],
                },
              ].map((day, dayIndex) => (
                <div key={dayIndex}>
                  <h3 className="text-2xl font-serif font-light mb-4 text-primary">{day.date}</h3>
                  <div className="space-y-4">
                    {day.screenings.map((screening, screeningIndex) => (
                      <Card key={screeningIndex} className="bg-background border-border">
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row md:items-center gap-4">
                            <div className="flex items-center gap-2 text-foreground font-semibold min-w-[100px]">
                              <Clock size={16} />
                              {screening.time}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-serif text-lg font-semibold mb-1">{screening.title}</h4>
                              <p className="text-sm text-muted-foreground mb-2">{screening.director}</p>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <MapPin size={14} className="mt-1 shrink-0" />
                                {screening.venue}
                              </div>
                            </div>
                            <Button
                              size="sm"
                              variant="outline"
                              className="uppercase text-xs tracking-wider bg-transparent"
                            >
                              Book
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-6">Full schedule released October 2025</p>
              <Button size="lg" className="uppercase tracking-wider">
                Download Program Guide
              </Button>
            </div>
          </div>
        </section>

        {/* Venues */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-light mb-12 text-center">Venues</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  name: "Palace Cinema Central",
                  city: "Sydney",
                  address: "123 George Street, Sydney NSW 2000",
                  description: "Premium cinema with state-of-the-art projection and sound",
                  image: "/modern-cinema-interior-1.jpg",
                },
                {
                  name: "Dendy Opera Quays",
                  city: "Sydney",
                  address: "2 East Circular Quay, Sydney NSW 2000",
                  description: "Boutique cinema with stunning harbour views",
                  image: "/luxury-cinema-interior-2.jpg",
                },
                {
                  name: "ACMI Cinema",
                  city: "Melbourne",
                  address: "Fed Square, Melbourne VIC 3000",
                  description: "Australia's national museum of screen culture",
                  image: "/contemporary-cinema-interior-3.jpg",
                },
                {
                  name: "Classic Cinemas",
                  city: "Melbourne",
                  address: "9 Gordon Street, Elsternwick VIC 3185",
                  description: "Historic art house cinema since 1910",
                  image: "/vintage-cinema-interior-4.jpg",
                },
              ].map((venue, index) => (
                <Card key={index} className="border-border overflow-hidden">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={venue.image || "/placeholder.svg"}
                      alt={venue.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-serif font-semibold mb-2">{venue.name}</h3>
                    <p className="text-sm text-primary mb-3">{venue.city}</p>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{venue.description}</p>
                    <p className="text-sm text-muted-foreground flex items-start gap-2">
                      <MapPin size={14} className="mt-1 shrink-0" />
                      {venue.address}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
