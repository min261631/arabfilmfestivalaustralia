import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

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
            </div>
          </div>
        </section>

        {/* Program Notes */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              {/* Workshops */}
              <Card className="border-border">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-serif font-semibold mb-4">Workshops</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our workshops are designed to nurture creativity, technical skills, and storytelling abilities in filmmakers at all stages of their careers. From screenwriting and directing to cinematography and post-production, participants gain hands-on experience led by seasoned industry professionals. Each session is crafted to inspire innovation, spark collaboration, and equip emerging Arab filmmakers with the practical tools they need to bring their visions to life.
                  </p>
                </CardContent>
              </Card>

              {/* Mentorship and Training Programs */}
              <Card className="border-border">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-serif font-semibold mb-4">Mentorship and Training Programs</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    IAFFA mentorship programs pair emerging talent with established filmmakers, producers, and industry experts. These one on one or small group sessions provide guidance on career development, project strategy, and navigating the global film industry. Our structured training programs ensure participants build both artistic and professional skills, fostering the next generation of Arab filmmakers with confidence and industry insight.
                  </p>
                </CardContent>
              </Card>

              {/* Talent Exchange */}
              <Card className="border-border">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-serif font-semibold mb-4">Talent Exchange</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Through our talent exchange initiatives, the festival facilitates collaboration between Arab filmmakers and Australian cinema professionals. Participants gain opportunities to work on cross-cultural projects, share creative perspectives, and expand their professional networks internationally. This exchange enriches storytelling, promotes cultural dialogue, and opens pathways for global co-productions and partnerships.
                  </p>
                </CardContent>
              </Card>

              {/* Industry Networking */}
              <Card className="border-border">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-serif font-semibold mb-4">Industry Networking</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The festival offers curated networking events, panel discussions, and industry meet-ups designed to connect filmmakers, producers, distributors, and festival programmers. These sessions create invaluable opportunities to pitch projects, explore collaborations, and discover investment possibilities. By bridging local and international cinema communities, we ensure participants leave with meaningful connections that advance their careers.
                  </p>
                </CardContent>
              </Card>

              {/* Curated Film Screenings */}
              <Card className="border-border">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-serif font-semibold mb-4">Curated Film Screenings</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our curated screenings celebrate the richness and diversity of Arab cinema. Each selection highlights compelling narratives, innovative storytelling, and exceptional filmmaking from the Arab world. Screenings are complemented by Q&A sessions, panel discussions, and audience interactions, creating an immersive experience that connects filmmakers with audiences and fosters dialogue on cultural, social, and artistic themes.
                  </p>
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
