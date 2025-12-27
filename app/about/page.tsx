import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <>
      <Navigation />

      <main className="pt-24">
        {/* Hero */}
        <section className="relative py-32 border-b border-border overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/diverse-group-of-people-at-cultural-event--communi.jpg"
              alt="Festival audience"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-serif font-light mb-6 text-balance">About the Festival</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                A platform for Arab voices, stories, and cinematic excellence
              </p>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div>
                <div className="aspect-[4/3] mb-6 overflow-hidden">
                  <img
                    src="/filmmaker-reviewing-footage-on-monitor.jpg"
                    alt="Filmmaker at work"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-3xl font-serif font-light mb-6">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To be Australia's premier showcase of Arab cinema, fostering cross-cultural understanding and
                  celebrating the artistic achievements of Arab filmmakers. We envision a future where Arab stories are
                  recognized, appreciated, and celebrated as essential contributions to world cinema.
                </p>
              </div>
              <div>
                <div className="aspect-[4/3] mb-6 overflow-hidden">
                  <img
                    src="/audience-at-cultural-cinema-event.jpg"
                    alt="Cinema audience"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-3xl font-serif font-light mb-6">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We connect Australian audiences with the vibrant world of Arab cinema through carefully curated film
                  programs, industry events, and cultural exchanges. Our mission is to provide a platform that elevates
                  Arab voices, supports emerging filmmakers, and builds bridges between cultures through the universal
                  language of cinema.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Arab Cinema */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto items-center">
              <div className="lg:col-span-3">
                <h2 className="text-4xl font-serif font-light mb-8">Why Arab Cinema in Australia</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Arab cinema represents a rich tapestry of cultures, languages, and perspectives from across 22
                  countries. From the bustling streets of Cairo to the ancient cities of Damascus, from the shores of
                  Casablanca to the deserts of the Arabian Peninsula, Arab filmmakers are telling stories that resonate
                  with universal human experiences.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  In Australia, home to a vibrant Arab diaspora, these films provide both a connection to heritage and
                  an opportunity for broader audiences to discover new perspectives. The festival serves as a cultural
                  bridge, fostering dialogue and understanding through the art of cinema.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  By showcasing Arab cinema, we celebrate diversity, challenge stereotypes, and highlight the creativity
                  and resilience of Arab storytellers who continue to push boundaries in one of the world's most dynamic
                  film traditions.
                </p>
              </div>
              <div className="lg:col-span-2">
                <img
                  src="/cinematic-film-reel-and-vintage-camera.jpg"
                  alt="Film equipment"
                  className="w-full aspect-square object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Festival History */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-light mb-12 text-center">Festival History</h2>
            <div className="max-w-3xl mx-auto space-y-8">
              {[
                { year: "2025", description: "Expanding to multiple cities with 50+ films from 15 countries" },
                { year: "2024", description: "Introduced industry panels and networking events" },
                { year: "2023", description: "First awards ceremony recognizing excellence in Arab cinema" },
                { year: "2022", description: "Doubled attendance with 30+ films from 10 countries" },
                { year: "2021", description: "Inaugural festival featuring 15 films from 8 countries" },
              ].map((milestone, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="p-6 flex gap-6 items-start">
                    <div className="text-3xl font-serif font-light text-primary shrink-0">{milestone.year}</div>
                    <p className="text-muted-foreground leading-relaxed pt-1">{milestone.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-light mb-12 text-center">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  name: "Amira El-Sayed",
                  role: "Festival Director",
                  bio: "Film curator with 15 years of experience in international cinema",
                  image: "/professional-woman-portrait-1.jpg",
                },
                {
                  name: "Hassan Mansour",
                  role: "Program Director",
                  bio: "Award-winning filmmaker and programming specialist",
                  image: "/professional-man-portrait-1.jpg",
                },
                {
                  name: "Leila Khoury",
                  role: "Industry Coordinator",
                  bio: "Film industry professional with expertise in Arab cinema",
                  image: "/professional-woman-portrait-2.jpg",
                },
                {
                  name: "Omar Badawi",
                  role: "Marketing Director",
                  bio: "Communications expert passionate about cultural storytelling",
                  image: "/professional-man-portrait-2.jpg",
                },
                {
                  name: "Yasmin Farah",
                  role: "Community Liaison",
                  bio: "Building bridges between communities through film",
                  image: "/professional-woman-portrait-3.jpg",
                },
                {
                  name: "Karim Rashid",
                  role: "Technical Director",
                  bio: "Cinema technology specialist ensuring perfect screenings",
                  image: "/professional-man-portrait-3.jpg",
                },
              ].map((member, index) => (
                <Card key={index} className="bg-background border-border overflow-hidden">
                  <CardContent className="p-0">
                    <div className="aspect-square bg-secondary overflow-hidden">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-serif font-semibold mb-1">{member.name}</h3>
                      <p className="text-sm text-primary mb-3">{member.role}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                    </div>
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
