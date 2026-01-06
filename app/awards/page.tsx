import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Calendar } from "lucide-react"
import Image from "next/image"

export default function AwardsPage() {
  return (
    <>
      <Navigation />

      <main className="pt-24">
        {/* Hero */}
        <section className="relative py-32 border-b border-border overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/elegant-arab-film-poster--dramatic-portrait.jpg"
              alt="Awards ceremony"
              fill
              className="object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-serif font-light mb-6 text-balance">Awards</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Celebrating excellence in Arab cinema
              </p>
            </div>
          </div>
        </section>

        {/* Awards Overview */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-serif font-light mb-8 text-center">Awards Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-12 text-center">
                The International Arab Film Festival of Australia recognizes outstanding achievements in filmmaking
                through our annual awards ceremony. Our awards celebrate the artistry, innovation, and cultural
                significance of Arab cinema, honoring filmmakers who push boundaries and tell compelling stories that
                resonate with audiences worldwide.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { number: "6", label: "Award Categories" },
                  { number: "15+", label: "Films Recognized" },
                  { number: "1", label: "Grand Prize Winner" },
                ].map((stat, index) => (
                  <Card key={index} className="border-border text-center">
                    <CardContent className="p-8">
                      <div className="text-5xl font-serif font-light text-primary mb-2">{stat.number}</div>
                      <div className="text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Award Categories */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-light mb-12 text-center">Award Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {[
                {
                  title: "Best Feature Film",
                  description: "Outstanding narrative feature film",
                  prize: "$5,000",
                  icon: Award,
                },
                {
                  title: "Best Documentary",
                  description: "Excellence in non-fiction filmmaking",
                  prize: "$3,000",
                  icon: Award,
                },
                {
                  title: "Best Short Film",
                  description: "Exceptional short-form storytelling",
                  prize: "$2,000",
                  icon: Award,
                },
                {
                  title: "Best Director",
                  description: "Outstanding directorial achievement",
                  prize: "$2,000",
                  icon: Award,
                },
                {
                  title: "Best Cinematography",
                  description: "Excellence in visual storytelling",
                  prize: "$1,500",
                  icon: Award,
                },
                {
                  title: "Audience Choice Award",
                  description: "Selected by festival attendees",
                  prize: "$1,000",
                  icon: Award,
                },
              ].map((category, index) => {
                const Icon = category.icon
                return (
                  <Card key={index} className="border-border hover:border-primary transition-colors">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Icon size={24} className="text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-serif font-semibold mb-2">{category.title}</h3>
                          <p className="text-muted-foreground mb-4">{category.description}</p>
                          <div className="text-lg font-semibold text-primary">{category.prize}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Jury Panel */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-light mb-12 text-center">Jury Panel</h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              Our distinguished jury panel consists of renowned filmmakers, critics, and industry professionals who bring
              decades of experience and expertise to the selection process.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  name: "Amira El-Sayed",
                  role: "Festival Director & Jury Chair",
                  bio: "Film curator with 15 years of experience in international cinema",
                  image: "/professional-woman-portrait-1.jpg",
                },
                {
                  name: "Hassan Mansour",
                  role: "Award-Winning Filmmaker",
                  bio: "Director of multiple acclaimed Arab films",
                  image: "/professional-man-portrait-1.jpg",
                },
                {
                  name: "Leila Khoury",
                  role: "Film Critic & Scholar",
                  bio: "Expert in Arab cinema and cultural studies",
                  image: "/professional-woman-portrait-2.jpg",
                },
              ].map((member, index) => (
                <Card key={index} className="border-border overflow-hidden">
                  <div className="aspect-square bg-secondary overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-serif font-semibold mb-1">{member.name}</h3>
                    <p className="text-sm text-primary mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Winners Archive */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-light mb-12 text-center">Winners Archive</h2>
            <div className="max-w-4xl mx-auto space-y-8">
              {[
                {
                  year: "2024",
                  winners: [
                    { category: "Best Feature Film", winner: "The Last Dance", director: "Layla Hassan" },
                    { category: "Best Documentary", winner: "Echoes of Sand", director: "Omar Khalil" },
                    { category: "Best Short Film", winner: "Cairo Nights", director: "Sara Mansour" },
                  ],
                },
                {
                  year: "2023",
                  winners: [
                    { category: "Best Feature Film", winner: "Desert Roads", director: "Ahmed Nasser" },
                    { category: "Best Documentary", winner: "Threads of Memory", director: "Fatima Al-Qasimi" },
                    { category: "Best Short Film", winner: "Between Two Shores", director: "Karim Rashid" },
                  ],
                },
                {
                  year: "2022",
                  winners: [
                    { category: "Best Feature Film", winner: "Voices of the City", director: "Yasmin Farah" },
                    { category: "Best Documentary", winner: "Heritage", director: "Mohamed Al-Ahmad" },
                    { category: "Best Short Film", winner: "The Journey", director: "Nour El-Din" },
                  ],
                },
              ].map((yearData, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <Calendar size={24} className="text-primary" />
                      <h3 className="text-3xl font-serif font-light">{yearData.year}</h3>
                    </div>
                    <div className="space-y-4">
                      {yearData.winners.map((winner, idx) => (
                        <div key={idx} className="pb-4 border-b border-border last:border-0 last:pb-0">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <div>
                              <h4 className="font-semibold text-foreground">{winner.category}</h4>
                              <p className="text-muted-foreground">{winner.winner}</p>
                            </div>
                            <p className="text-sm text-muted-foreground">Dir. {winner.director}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Ceremony Photos/Videos */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-light mb-12 text-center">Ceremony Photos & Videos</h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              Relive the magic of our awards ceremonies through photos and videos from past festivals.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                "/award-trophy-on-stage--elegant-film-festival-cerem.jpg",
                "/dramatic-cinematic-film-scene-from-arab-movie--moo.jpg",
                "/elegant-arab-film-poster--dramatic-portrait.jpg",
                "/artistic-arab-film-poster--urban-city-scene.jpg",
                "/cinematic-arab-film-poster--desert-landscape.jpg",
                "/film-festival-audience-watching-movie-in-theater--.jpg",
              ].map((imageSrc, item) => (
                <Card key={item} className="border-border overflow-hidden">
                  <div className="aspect-[4/3] bg-muted relative">
                    <Image
                      src={imageSrc}
                      alt={`Awards ceremony ${item + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground text-center">2024 Awards Ceremony</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-6">More media coming soon</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

