import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock } from "lucide-react";

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
            <div className="absolute inset-0 bg-linear-to-b from-background/50 via-background/80 to-background" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-serif font-light mb-6 text-balance">
                Festival Program
              </h1>
            </div>
          </div>
        </section>

        {/* Program Notes */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              {/* Workshops */}
              <Card id="workshops" className="border-border scroll-mt-24">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-serif font-semibold mb-4">
                    Workshops
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our workshops are designed to nurture creativity, technical
                    skills, and storytelling abilities in filmmakers at all
                    stages of their careers. From screenwriting and directing to
                    cinematography and post-production, participants gain
                    hands-on experience led by seasoned industry professionals.
                    Each session is crafted to inspire innovation, spark
                    collaboration, and equip emerging Arab filmmakers with the
                    practical tools they need to bring their visions to life.
                  </p>
                </CardContent>
              </Card>

              {/* Mentorship and Training Programs */}
              <Card
                id="mentorship-training"
                className="border-border scroll-mt-24"
              >
                <CardContent className="p-8">
                  <h3 className="text-2xl font-serif font-semibold mb-4">
                    Mentorship and Training Programs
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    IAFFA mentorship programs pair emerging talent with
                    established filmmakers, producers, and industry experts.
                    These one on one or small group sessions provide guidance on
                    career development, project strategy, and navigating the
                    global film industry. Our structured training programs
                    ensure participants build both artistic and professional
                    skills, fostering the next generation of Arab filmmakers
                    with confidence and industry insight.
                  </p>
                </CardContent>
              </Card>

              {/* Talent Exchange */}
              <Card id="talent-exchange" className="border-border scroll-mt-24">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-serif font-semibold mb-4">
                    Talent Exchange
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Through our talent exchange initiatives, the festival
                    facilitates collaboration between Arab filmmakers and
                    Australian cinema professionals. Participants gain
                    opportunities to work on cross-cultural projects, share
                    creative perspectives, and expand their professional
                    networks internationally. This exchange enriches
                    storytelling, promotes cultural dialogue, and opens pathways
                    for global co-productions and partnerships.
                  </p>
                </CardContent>
              </Card>

              {/* Industry Networking */}
              <Card
                id="industry-networking"
                className="border-border scroll-mt-24"
              >
                <CardContent className="p-8">
                  <h3 className="text-2xl font-serif font-semibold mb-4">
                    Industry Networking
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The festival offers curated networking events, panel
                    discussions, and industry meet-ups designed to connect
                    filmmakers, producers, distributors, and festival
                    programmers. These sessions create invaluable opportunities
                    to pitch projects, explore collaborations, and discover
                    investment possibilities. By bridging local and
                    international cinema communities, we ensure participants
                    leave with meaningful connections that advance their
                    careers.
                  </p>
                </CardContent>
              </Card>

              {/* Curated Film Screenings */}
              <Card
                id="curated-film-screenings"
                className="border-border scroll-mt-24"
              >
                <CardContent className="p-8">
                  <h3 className="text-2xl font-serif font-semibold mb-4">
                    Curated Film Screenings
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our curated screenings celebrate the richness and diversity
                    of Arab cinema. Each selection highlights compelling
                    narratives, innovative storytelling, and exceptional
                    filmmaking from the Arab world. Screenings are complemented
                    by Q&A sessions, panel discussions, and audience
                    interactions, creating an immersive experience that connects
                    filmmakers with audiences and fosters dialogue on cultural,
                    social, and artistic themes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Sample Schedule */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-light mb-12 text-center">
              Sample Schedule
            </h2>
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
                    {
                      time: "2:00 PM",
                      title: "Desert Roads",
                      venue: "Dendy Cinema, Sydney",
                      director: "Omar Khalil",
                    },
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
                  <h3 className="text-2xl font-serif font-light mb-4 text-primary">
                    {day.date}
                  </h3>
                  <div className="space-y-4">
                    {day.screenings.map((screening, screeningIndex) => (
                      <Card
                        key={screeningIndex}
                        className="bg-background border-border"
                      >
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row md:items-center gap-4">
                            <div className="flex items-center gap-2 text-foreground font-semibold min-w-[100px]">
                              <Clock size={16} />
                              {screening.time}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-serif text-lg font-semibold mb-1">
                                {screening.title}
                              </h4>
                              <p className="text-sm text-muted-foreground mb-2">
                                {screening.director}
                              </p>
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
              <p className="text-muted-foreground mb-6">
                Full schedule released October 2025
              </p>
              <Button size="lg" className="uppercase tracking-wider">
                Download Program Guide
              </Button>
            </div>
          </div>
        </section>

        {/* Venues */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-light mb-12 text-center">
              Venues
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  name: "Palace Cinema Central",
                  city: "Sydney",
                  address: "123 George Street, Sydney NSW 2000",
                  description:
                    "Premium cinema with state-of-the-art projection and sound",
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
                  <div className="aspect-16/9 overflow-hidden">
                    <img
                      src={venue.image || "/placeholder.svg"}
                      alt={venue.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-serif font-semibold mb-2">
                      {venue.name}
                    </h3>
                    <p className="text-sm text-primary mb-3">{venue.city}</p>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                      {venue.description}
                    </p>
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
  );
}
