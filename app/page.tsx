import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Film, Award, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <Navigation />

      {/* Hero Section with Large Cinematic Image */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <Image src="/dramatic-cinematic-film-scene-from-arab-movie--moo.jpg" alt="Arab cinema" fill className="object-cover opacity-40" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />

        <div className="container mx-auto px-4 py-32 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-light mb-8 leading-none text-balance">
              Arab Film Festival of Australia
            </h1>
            <div className="flex items-center justify-center gap-6 mb-10 text-xl md:text-2xl">
              <span className="flex items-center gap-2">
                <Calendar size={24} />
                November 2025
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <MapPin size={24} />
                Sydney & Melbourne
              </span>
            </div>
            <p className="text-2xl md:text-3xl mb-16 leading-relaxed text-balance max-w-4xl mx-auto font-light">
              Celebrating the richness, diversity, and power of Arab storytelling through cinema
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base uppercase tracking-wider px-8 py-6">
                Get Tickets
              </Button>
              <Link href="/program">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base uppercase tracking-wider bg-transparent px-8 py-6"
                >
                  View Program
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Films Grid */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-serif font-light mb-6">Featured Films</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover this year's exceptional selection of Arab cinema
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Film 1 */}
            <div className="group relative aspect-[2/3] overflow-hidden bg-muted">
              <Image
                src="/elegant-arab-film-poster--dramatic-portrait.jpg"
                alt="Featured film"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-serif mb-2">The Last Dance</h3>
                  <p className="text-sm text-muted-foreground mb-4">Drama • Lebanon • 2024</p>
                  <Button size="sm" variant="outline" className="bg-transparent">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>

            {/* Film 2 */}
            <div className="group relative aspect-[2/3] overflow-hidden bg-muted">
              <Image
                src="/cinematic-arab-film-poster--desert-landscape.jpg"
                alt="Featured film"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-serif mb-2">Echoes of Sand</h3>
                  <p className="text-sm text-muted-foreground mb-4">Documentary • Morocco • 2024</p>
                  <Button size="sm" variant="outline" className="bg-transparent">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>

            {/* Film 3 */}
            <div className="group relative aspect-[2/3] overflow-hidden bg-muted">
              <Image
                src="/artistic-arab-film-poster--urban-city-scene.jpg"
                alt="Featured film"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-serif mb-2">Cairo Nights</h3>
                  <p className="text-sm text-muted-foreground mb-4">Thriller • Egypt • 2024</p>
                  <Button size="sm" variant="outline" className="bg-transparent">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/program">
              <Button size="lg" variant="outline" className="uppercase tracking-wider bg-transparent">
                View Full Program
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Festival Highlights with Images */}
      <section className="py-24 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image src="/film-festival-audience-watching-movie-in-theater--.jpg" alt="Festival experience" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-5xl font-serif font-light mb-6">Experience Arab Cinema</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Join us for an unforgettable celebration of Arab storytelling. From thought-provoking documentaries to
                powerful dramas, our carefully curated program showcases the best of contemporary Arab cinema. Meet
                filmmakers, engage in discussions, and immerse yourself in diverse narratives from across the Arab
                world.
              </p>
              <Link href="/about">
                <Button size="lg" variant="outline" className="uppercase tracking-wider bg-transparent">
                  About the Festival
                </Button>
              </Link>
            </div>
          </div>

          {/* Three Column Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative aspect-square mb-6 overflow-hidden">
                <Image src="/film-director-with-camera-on-set--professional-fil.jpg" alt="Filmmakers" fill className="object-cover" />
              </div>
              <div className="flex justify-center mb-4">
                <Film size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-serif mb-3">30+ Films</h3>
              <p className="text-muted-foreground leading-relaxed">
                A diverse selection spanning features, documentaries, and shorts from across the Arab world
              </p>
            </div>

            <div className="text-center">
              <div className="relative aspect-square mb-6 overflow-hidden">
                <Image src="/award-trophy-on-stage--elegant-film-festival-cerem.jpg" alt="Awards" fill className="object-cover" />
              </div>
              <div className="flex justify-center mb-4">
                <Award size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-serif mb-3">Industry Awards</h3>
              <p className="text-muted-foreground leading-relaxed">
                Recognizing excellence in directing, acting, cinematography, and storytelling
              </p>
            </div>

            <div className="text-center">
              <div className="relative aspect-square mb-6 overflow-hidden">
                <Image src="/diverse-group-of-people-at-cultural-event--communi.jpg" alt="Community" fill className="object-cover" />
              </div>
              <div className="flex justify-center mb-4">
                <Users size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-serif mb-3">Cultural Exchange</h3>
              <p className="text-muted-foreground leading-relaxed">
                Connect with filmmakers, industry professionals, and fellow cinema enthusiasts
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-serif font-light mb-8 text-balance">Be Part of the Story</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              Whether you're a filmmaker looking to showcase your work or a cinema lover eager to explore new
              perspectives, the Arab Film Festival of Australia welcomes you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/submissions">
                <Button size="lg" className="uppercase tracking-wider px-8">
                  Submit Your Film
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="uppercase tracking-wider bg-transparent px-8">
                Get Tickets
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
