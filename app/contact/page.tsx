import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone, Facebook, Instagram, Twitter } from "lucide-react"

export default function ContactPage() {
  return (
    <>
      <Navigation />

      <main className="pt-24">
        {/* Hero */}
        <section className="relative py-32 border-b border-border overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/film-festival-audience-watching-movie-in-theater--.jpg"
              alt="Contact"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-serif font-light mb-6 text-balance">Contact Us</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Get in touch with the International Arab Film Festival of Australia
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-light mb-12 text-center">Send Us a Message</h2>
            <div className="max-w-2xl mx-auto">
              <Card className="border-border">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-4 py-2 border border-border rounded-md bg-background"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-2 border border-border rounded-md bg-background"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                        Subject
                      </label>
                      <select
                        id="subject"
                        className="w-full px-4 py-2 border border-border rounded-md bg-background"
                      >
                        <option>General Inquiry</option>
                        <option>Film Submissions</option>
                        <option>Sponsorship</option>
                        <option>Media/Press</option>
                        <option>Volunteering</option>
                        <option>Tickets</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={6}
                        className="w-full px-4 py-2 border border-border rounded-md bg-background"
                      />
                    </div>
                    <Button type="submit" className="w-full uppercase tracking-wider">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-light mb-12 text-center">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="border-border">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-primary/10 rounded-lg">
                      <Mail size={32} className="text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-serif font-semibold mb-3">Email</h3>
                  <p className="text-muted-foreground mb-2">General Inquiries</p>
                  <a href="mailto:info@iaffa.org.au" className="text-primary hover:underline">
                    info@iaffa.org.au
                  </a>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-primary/10 rounded-lg">
                      <MapPin size={32} className="text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-serif font-semibold mb-3">Office Address</h3>
                  <p className="text-muted-foreground">
                    123 Festival Street<br />
                    Sydney NSW 2000<br />
                    Australia
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-primary/10 rounded-lg">
                      <Phone size={32} className="text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-serif font-semibold mb-3">Phone</h3>
                  <p className="text-muted-foreground mb-2">Office Hours</p>
                  <a href="tel:+61234567890" className="text-primary hover:underline">
                    +61 2 3456 7890
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Social Media */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-light mb-12 text-center">Follow Us</h2>
            <div className="max-w-2xl mx-auto">
              <div className="flex justify-center gap-6">
                <a
                  href="#"
                  className="p-4 border border-border rounded-lg hover:border-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={32} className="text-muted-foreground hover:text-primary transition-colors" />
                </a>
                <a
                  href="#"
                  className="p-4 border border-border rounded-lg hover:border-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={32} className="text-muted-foreground hover:text-primary transition-colors" />
                </a>
                <a
                  href="#"
                  className="p-4 border border-border rounded-lg hover:border-primary transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={32} className="text-muted-foreground hover:text-primary transition-colors" />
                </a>
              </div>
              <p className="text-center text-muted-foreground mt-8">
                Stay connected with us on social media for the latest festival updates, behind-the-scenes content, and
                Arab cinema news.
              </p>
            </div>
          </div>
        </section>

        {/* Department Contacts */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-light mb-12 text-center">Department Contacts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { department: "Film Submissions", email: "submissions@iaffa.org.au" },
                { department: "Sponsorship & Partnerships", email: "partners@iaffa.org.au" },
                { department: "Media & Press", email: "press@iaffa.org.au" },
                { department: "Volunteers", email: "volunteers@iaffa.org.au" },
                { department: "Tickets & Box Office", email: "tickets@iaffa.org.au" },
                { department: "General Inquiries", email: "info@iaffa.org.au" },
              ].map((dept, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">{dept.department}</h3>
                    <a href={`mailto:${dept.email}`} className="text-primary hover:underline text-sm">
                      {dept.email}
                    </a>
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

