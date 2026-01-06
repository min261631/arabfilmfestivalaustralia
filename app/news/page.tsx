import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function NewsPage() {
  return (
    <>
      <Navigation />

      <main className="pt-24">
        {/* Hero */}
        <section className="relative py-32 border-b border-border overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/filmmaker-reviewing-footage-on-monitor.jpg"
              alt="News"
              fill
              className="object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-serif font-light mb-6 text-balance">News & Blog</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Stay updated with festival news, filmmaker stories, and Arab cinema insights
              </p>
            </div>
          </div>
        </section>

        {/* Festival Announcements */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-light mb-12">Festival Announcements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "2025 Festival Dates Announced",
                  date: "March 15, 2025",
                  excerpt:
                    "The International Arab Film Festival of Australia returns November 1-10, 2025 across Sydney and Melbourne venues.",
                  image: "/artistic-arab-film-poster--urban-city-scene.jpg",
                  category: "Announcement",
                },
                {
                  title: "Call for Submissions Now Open",
                  date: "February 1, 2025",
                  excerpt:
                    "Filmmakers are invited to submit their work for consideration. Early bird deadline: March 31, 2025.",
                  image: "/film-camera-equipment-closeup.jpg",
                  category: "Announcement",
                },
                {
                  title: "New Venue Partnership",
                  date: "January 20, 2025",
                  excerpt:
                    "We're excited to announce new venue partnerships in Melbourne, expanding our festival footprint.",
                  image: "/contemporary-cinema-interior-3.jpg",
                  category: "Announcement",
                },
              ].map((post, index) => (
                <Card key={index} className="border-border overflow-hidden hover:border-primary transition-colors">
                  <div className="aspect-[16/9] relative">
                    <Image src={post.image} alt={post.title} fill className="object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs uppercase tracking-wider text-primary">{post.category}</span>
                      <span className="text-muted-foreground">•</span>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar size={14} />
                        {post.date}
                      </div>
                    </div>
                    <h3 className="text-xl font-serif font-semibold mb-3">{post.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>
                    <Button variant="ghost" size="sm" className="p-0">
                      Read More <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Filmmaker Interviews */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-light mb-12">Filmmaker Interviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  title: "In Conversation with Layla Hassan",
                  excerpt: "The award-winning director discusses her latest film and the future of Arab cinema.",
                  image: "/professional-woman-portrait-3.jpg",
                  date: "April 10, 2025",
                },
                {
                  title: "Omar Khalil on Documentary Filmmaking",
                  excerpt: "Exploring the art of storytelling through real-life narratives.",
                  image: "/professional-man-portrait-2.jpg",
                  date: "March 28, 2025",
                },
                {
                  title: "Emerging Voices: Sara Mansour",
                  excerpt: "A rising talent shares her journey into filmmaking and creative process.",
                  image: "/professional-man-portrait-3.jpg",
                  date: "March 15, 2025",
                },
              ].map((interview, index) => (
                <Card key={index} className="border-border overflow-hidden">
                  <div className="aspect-[4/3] relative">
                    <Image src={interview.image} alt={interview.title} fill className="object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                      <Calendar size={14} />
                      {interview.date}
                    </div>
                    <h3 className="text-lg font-serif font-semibold mb-2">{interview.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{interview.excerpt}</p>
                    <Button variant="ghost" size="sm" className="p-0">
                      Read Interview <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Arab Cinema Articles */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-light mb-12">Arab Cinema Articles</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  title: "The Evolution of Arab Cinema: A Historical Perspective",
                  excerpt:
                    "Tracing the rich history of Arab cinema from its early beginnings to contemporary masterpieces.",
                  date: "April 5, 2025",
                },
                {
                  title: "Women in Arab Cinema: Breaking Barriers",
                  excerpt:
                    "Celebrating the contributions of women filmmakers who are reshaping Arab cinema narratives.",
                  date: "March 22, 2025",
                },
                {
                  title: "Arab Cinema at International Festivals",
                  excerpt:
                    "How Arab films are gaining recognition and acclaim on the global festival circuit.",
                  date: "March 8, 2025",
                },
              ].map((article, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                      <Calendar size={14} />
                      {article.date}
                    </div>
                    <h3 className="text-xl font-serif font-semibold mb-3">{article.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{article.excerpt}</p>
                    <Button variant="ghost" size="sm" className="p-0">
                      Read Article <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Festival Recaps */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-light mb-12">Festival Recaps</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: "2024 Festival Highlights",
                  excerpt:
                    "Relive the best moments from last year's festival, including award winners, memorable screenings, and special events.",
                  image: "/luxury-cinema-interior-2.jpg",
                  date: "December 15, 2024",
                },
                {
                  title: "Opening Night Gala Recap",
                  excerpt:
                    "A look back at the spectacular opening night celebration that kicked off the 2024 festival.",
                  image: "/vintage-cinema-interior-4.jpg",
                  date: "November 5, 2024",
                },
              ].map((recap, index) => (
                <Card key={index} className="border-border overflow-hidden">
                  <div className="aspect-[16/9] relative">
                    <Image src={recap.image} alt={recap.title} fill className="object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                      <Calendar size={14} />
                      {recap.date}
                    </div>
                    <h3 className="text-xl font-serif font-semibold mb-3">{recap.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{recap.excerpt}</p>
                    <Button variant="ghost" size="sm" className="p-0">
                      Read Recap <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Cultural Stories */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-light mb-12">Cultural Stories</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  title: "The Power of Storytelling in Arab Culture",
                  excerpt:
                    "Exploring how storytelling traditions in Arab culture have influenced contemporary cinema.",
                  date: "February 20, 2025",
                },
                {
                  title: "Bridging Cultures Through Film",
                  excerpt:
                    "How Arab films in Australia create understanding and dialogue between communities.",
                  date: "February 10, 2025",
                },
                {
                  title: "Preserving Heritage Through Cinema",
                  excerpt:
                    "The role of film in documenting and preserving Arab cultural heritage for future generations.",
                  date: "January 30, 2025",
                },
              ].map((story, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                      <Calendar size={14} />
                      {story.date}
                    </div>
                    <h3 className="text-xl font-serif font-semibold mb-3">{story.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{story.excerpt}</p>
                    <Button variant="ghost" size="sm" className="p-0">
                      Read Story <ArrowRight size={16} className="ml-2" />
                    </Button>
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

