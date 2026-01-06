import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Mail, FileText, Image as ImageIcon, Video, Mail as MailIcon } from "lucide-react"

export default function MediaPage() {
  return (
    <>
      <Navigation />

      <main className="pt-24">
        {/* Hero */}
        <section className="relative py-32 border-b border-border overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/film-camera-equipment-closeup.jpg"
              alt="Media"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-serif font-light mb-6 text-balance">Media & Press</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Resources for media professionals and press
              </p>
            </div>
          </div>
        </section>

        {/* Press Releases */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-light mb-12 text-center">Press Releases</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  title: "2025 Festival Dates and Program Announcement",
                  date: "March 15, 2025",
                  excerpt:
                    "The International Arab Film Festival of Australia announces its 2025 program featuring 50+ films from 15 countries.",
                },
                {
                  title: "Call for Submissions Opens",
                  date: "February 1, 2025",
                  excerpt:
                    "Filmmakers worldwide invited to submit their work for the 2025 festival. Early bird deadline: March 31.",
                },
                {
                  title: "Awards Ceremony Highlights",
                  date: "November 10, 2024",
                  excerpt:
                    "Festival concludes with awards ceremony recognizing excellence in Arab cinema across six categories.",
                },
                {
                  title: "Partnership Announcements",
                  date: "January 20, 2025",
                  excerpt:
                    "New venue partnerships and sponsor collaborations announced for the 2025 festival edition.",
                },
              ].map((release, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <FileText size={16} className="text-primary" />
                          <span className="text-sm text-muted-foreground">{release.date}</span>
                        </div>
                        <h3 className="text-xl font-serif font-semibold mb-2">{release.title}</h3>
                        <p className="text-muted-foreground mb-4">{release.excerpt}</p>
                        <Button variant="ghost" size="sm" className="p-0">
                          <Download size={16} className="mr-2" />
                          Download PDF
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Logos */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-light mb-12 text-center">Logos</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-muted-foreground text-center mb-8">
                Download official festival logos for media use. Please follow our brand guidelines.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { name: "Primary Logo", format: "PNG", size: "High Resolution" },
                  { name: "Horizontal Logo", format: "PNG", size: "High Resolution" },
                  { name: "Icon", format: "SVG", size: "Vector" },
                ].map((logo, index) => (
                  <Card key={index} className="border-border">
                    <CardContent className="p-6 text-center">
                      <div className="aspect-square bg-muted mb-4 flex items-center justify-center border border-border rounded-lg">
                        <ImageIcon size={32} className="text-muted-foreground" />
                      </div>
                      <h3 className="font-semibold mb-2">{logo.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{logo.format} • {logo.size}</p>
                      <Button size="sm" variant="outline" className="w-full">
                        <Download size={16} className="mr-2" />
                        Download
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Posters */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-light mb-12 text-center">Posters</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-muted-foreground text-center mb-8">
                Download official festival posters in various formats and sizes.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { name: "2025 Festival Poster", size: "A3 (300 DPI)" },
                  { name: "2025 Festival Poster", size: "A4 (300 DPI)" },
                  { name: "2025 Festival Poster", size: "Digital (Web)" },
                  { name: "2025 Festival Poster", size: "Social Media" },
                ].map((poster, index) => (
                  <Card key={index} className="border-border">
                    <CardContent className="p-6">
                      <div className="aspect-[2/3] bg-muted mb-4 flex items-center justify-center border border-border rounded-lg">
                        <ImageIcon size={32} className="text-muted-foreground" />
                      </div>
                      <h3 className="font-semibold mb-2">{poster.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{poster.size}</p>
                      <Button size="sm" variant="outline" className="w-full">
                        <Download size={16} className="mr-2" />
                        Download
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Trailers */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-light mb-12 text-center">Trailers</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-muted-foreground text-center mb-8">
                Watch and download official festival trailers and promotional videos.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "2025 Festival Trailer", duration: "2:30", format: "MP4 (1080p)" },
                  { title: "2025 Festival Teaser", duration: "0:45", format: "MP4 (1080p)" },
                  { title: "2025 Festival Highlights", duration: "1:15", format: "MP4 (1080p)" },
                  { title: "2025 Festival Social Media", duration: "0:30", format: "MP4 (Square)" },
                ].map((trailer, index) => (
                  <Card key={index} className="border-border">
                    <CardContent className="p-6">
                      <div className="aspect-video bg-muted mb-4 flex items-center justify-center border border-border rounded-lg">
                        <Video size={32} className="text-muted-foreground" />
                      </div>
                      <h3 className="font-semibold mb-2">{trailer.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {trailer.duration} • {trailer.format}
                      </p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex-1">
                          Watch
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          <Download size={16} className="mr-2" />
                          Download
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Media Contact */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-light mb-12 text-center">Media Contact</h2>
            <div className="max-w-3xl mx-auto">
              <Card className="border-border">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-serif font-semibold mb-2">Press Inquiries</h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MailIcon size={16} />
                        <a href="mailto:press@iaffa.org.au" className="hover:text-foreground transition-colors">
                          press@iaffa.org.au
                        </a>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-semibold mb-2">Media Accreditation</h3>
                      <p className="text-muted-foreground mb-4">
                        Media professionals can apply for accreditation to cover the festival. Please contact us at least
                        2 weeks before the festival dates.
                      </p>
                      <Button variant="outline">
                        <MailIcon size={16} className="mr-2" />
                        Request Accreditation
                      </Button>
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-semibold mb-2">Press Kit</h3>
                      <p className="text-muted-foreground mb-4">
                        Download our complete press kit including festival information, images, and media resources.
                      </p>
                      <Button variant="outline">
                        <Download size={16} className="mr-2" />
                        Download Press Kit
                      </Button>
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-semibold mb-2">Interview Requests</h3>
                      <p className="text-muted-foreground">
                        To request interviews with filmmakers, jury members, or festival directors, please contact our
                        press team at least one week in advance.
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

