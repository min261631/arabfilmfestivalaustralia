import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Film, Award, Camera } from "lucide-react"
import Image from "next/image"

export default function ArchivePage() {
  return (
    <>
      <Navigation />

      <main className="pt-24">
        {/* Hero */}
        <section className="relative py-32 border-b border-border overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/film-camera-equipment-closeup.jpg"
              alt="Archive"
              className="object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-serif font-light mb-6 text-balance">Archive</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Explore our festival history and past editions
              </p>
            </div>
          </div>
        </section>

        {/* Past Editions */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-light mb-12 text-center">Past Editions</h2>
            <div className="max-w-4xl mx-auto space-y-8">
              {[
                {
                  year: "2024",
                  theme: "Horizons",
                  films: "50+ films",
                  countries: "15 countries",
                  attendance: "8,500+ attendees",
                  description:
                    "Our most successful edition yet, featuring groundbreaking films and expanded programming across Sydney and Melbourne.",
                },
                {
                  year: "2023",
                  theme: "Voices",
                  films: "35+ films",
                  countries: "12 countries",
                  attendance: "6,200+ attendees",
                  description:
                    "Celebrating diverse voices and perspectives in Arab cinema with our first awards ceremony.",
                },
                {
                  year: "2022",
                  theme: "Connections",
                  films: "30+ films",
                  countries: "10 countries",
                  attendance: "4,800+ attendees",
                  description:
                    "Building connections between Arab filmmakers and Australian audiences through powerful storytelling.",
                },
                {
                  year: "2021",
                  theme: "Inaugural",
                  films: "15+ films",
                  countries: "8 countries",
                  attendance: "2,500+ attendees",
                  description:
                    "The first edition of the festival, establishing our mission to celebrate Arab cinema in Australia.",
                },
              ].map((edition, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="shrink-0">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar size={24} className="text-primary" />
                          <h3 className="text-3xl font-serif font-light">{edition.year}</h3>
                        </div>
                        <p className="text-sm text-primary font-semibold">{edition.theme}</p>
                      </div>
                      <div className="flex-1">
                        <p className="text-muted-foreground mb-4 leading-relaxed">{edition.description}</p>
                        <div className="grid grid-cols-3 gap-4 text-sm">
                          <div>
                            <Film size={16} className="text-primary mb-1" />
                            <p className="text-muted-foreground">{edition.films}</p>
                          </div>
                          <div>
                            <Award size={16} className="text-primary mb-1" />
                            <p className="text-muted-foreground">{edition.countries}</p>
                          </div>
                          <div>
                            <Calendar size={16} className="text-primary mb-1" />
                            <p className="text-muted-foreground">{edition.attendance}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Films Screened */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-light mb-12 text-center">Films Screened</h2>
            <div className="max-w-6xl mx-auto">
              <div className="mb-8">
                <h3 className="text-2xl font-serif font-light mb-6">2024 Selection</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { title: "The Last Dance", image: "/elegant-arab-film-poster--dramatic-portrait.jpg" },
                    { title: "Echoes of Sand", image: "/cinematic-arab-film-poster--desert-landscape.jpg" },
                    { title: "Cairo Nights", image: "/artistic-arab-film-poster--urban-city-scene.jpg" },
                    { title: "Desert Roads", image: "/dramatic-cinematic-film-scene-from-arab-movie--moo.jpg" },
                    { title: "Voices of the City", image: "/elegant-arab-film-poster--dramatic-portrait.jpg" },
                    { title: "Threads of Memory", image: "/cinematic-arab-film-poster--desert-landscape.jpg" },
                    { title: "Between Two Shores", image: "/artistic-arab-film-poster--urban-city-scene.jpg" },
                    { title: "Heritage", image: "/dramatic-cinematic-film-scene-from-arab-movie--moo.jpg" },
                  ].map((film, index) => (
                    <Card key={index} className="border-border">
                      <div className="aspect-[2/3] bg-muted relative">
                        <Image
                          src={film.image}
                          alt={film.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-3">
                        <p className="text-sm font-semibold text-center">{film.title}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <p className="text-muted-foreground mb-4">Browse films from other years</p>
                <select className="px-4 py-2 border border-border rounded-md bg-background">
                  <option>2024</option>
                  <option>2023</option>
                  <option>2022</option>
                  <option>2021</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Winners */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-light mb-12 text-center">Winners</h2>
            <div className="max-w-4xl mx-auto space-y-8">
              {[
                {
                  year: "2024",
                  winners: [
                    { category: "Best Feature Film", film: "The Last Dance", director: "Layla Hassan" },
                    { category: "Best Documentary", film: "Echoes of Sand", director: "Omar Khalil" },
                    { category: "Best Short Film", film: "Cairo Nights", director: "Sara Mansour" },
                    { category: "Best Director", film: "The Last Dance", director: "Layla Hassan" },
                    { category: "Audience Choice", film: "Desert Roads", director: "Ahmed Nasser" },
                  ],
                },
                {
                  year: "2023",
                  winners: [
                    { category: "Best Feature Film", film: "Desert Roads", director: "Ahmed Nasser" },
                    { category: "Best Documentary", film: "Threads of Memory", director: "Fatima Al-Qasimi" },
                    { category: "Best Short Film", film: "Between Two Shores", director: "Karim Rashid" },
                    { category: "Best Director", film: "Desert Roads", director: "Ahmed Nasser" },
                    { category: "Audience Choice", film: "Voices of the City", director: "Yasmin Farah" },
                  ],
                },
              ].map((yearData, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="p-8">
                    <h3 className="text-3xl font-serif font-light mb-6">{yearData.year}</h3>
                    <div className="space-y-4">
                      {yearData.winners.map((winner, idx) => (
                        <div key={idx} className="pb-4 border-b border-border last:border-0 last:pb-0">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <div>
                              <h4 className="font-semibold text-foreground">{winner.category}</h4>
                              <p className="text-muted-foreground">{winner.film}</p>
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

        {/* Photos & Media Coverage */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-light mb-12 text-center">Photos & Media Coverage</h2>
            <div className="max-w-6xl mx-auto">
              <div className="mb-8">
                <h3 className="text-2xl font-serif font-light mb-6">2024 Festival Gallery</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    "/audience-at-cultural-cinema-event.jpg",
                    "/film-festival-audience-watching-movie-in-theater--.jpg",
                    "/diverse-group-of-people-at-cultural-event--communi.jpg",
                    "/film-production-crew-on-set.jpg",
                    "/filmmaker-reviewing-footage-on-monitor.jpg",
                    "/film-director-with-camera-on-set--professional-fil.jpg",
                    "/award-trophy-on-stage--elegant-film-festival-cerem.jpg",
                    "/cinematic-film-reel-and-vintage-camera.jpg",
                  ].map((imageSrc, item) => (
                    <Card key={item} className="border-border overflow-hidden">
                      <div className="aspect-square relative">
                        <Image
                          src={imageSrc}
                          alt={`Festival photo ${item + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-serif font-light mb-6">Media Coverage</h3>
                <div className="space-y-4">
                  {[
                    {
                      outlet: "The Guardian",
                      title: "Arab Film Festival Showcases Diverse Voices",
                      date: "November 5, 2024",
                    },
                    {
                      outlet: "SBS",
                      title: "Celebrating Arab Cinema in Australia",
                      date: "November 3, 2024",
                    },
                    {
                      outlet: "ABC Arts",
                      title: "Festival Brings Arab Stories to Australian Screens",
                      date: "October 28, 2024",
                    },
                  ].map((article, index) => (
                    <Card key={index} className="border-border">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-sm text-primary font-semibold mb-1">{article.outlet}</p>
                            <h4 className="font-semibold mb-2">{article.title}</h4>
                            <p className="text-sm text-muted-foreground">{article.date}</p>
                          </div>
                          <Camera size={20} className="text-muted-foreground shrink-0" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

