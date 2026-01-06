import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Award, Calendar, Mail, CheckCircle2 } from "lucide-react"

export default function VolunteersPage() {
  return (
    <>
      <Navigation />

      <main className="pt-24">
        {/* Hero */}
        <section className="relative py-32 border-b border-border overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/film-production-crew-on-set.jpg"
              alt="Volunteers"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-serif font-light mb-6 text-balance">Volunteers & Careers</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Join our team and be part of Australia's premier Arab film festival
              </p>
            </div>
          </div>
        </section>

        {/* Volunteer Roles */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-light mb-12 text-center">Volunteer Roles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {[
                {
                  title: "Event Coordination",
                  description:
                    "Assist with event setup, guest management, and ensuring smooth operations during screenings and events.",
                  time: "4-6 hours per shift",
                },
                {
                  title: "Box Office & Ticketing",
                  description:
                    "Help with ticket sales, will-call, and customer service at festival venues.",
                  time: "3-5 hours per shift",
                },
                {
                  title: "Guest Services",
                  description:
                    "Welcome attendees, provide information, and assist filmmakers and special guests.",
                  time: "4-6 hours per shift",
                },
                {
                  title: "Marketing & Social Media",
                  description:
                    "Support our marketing team with social media coverage, photography, and content creation.",
                  time: "Flexible hours",
                },
                {
                  title: "Technical Support",
                  description:
                    "Assist with AV setup, projection, and technical requirements for screenings and events.",
                  time: "5-7 hours per shift",
                },
                {
                  title: "Hospitality",
                  description:
                    "Help coordinate catering, hospitality suites, and VIP events for filmmakers and guests.",
                  time: "4-6 hours per shift",
                },
              ].map((role, index) => (
                <Card key={index} className="border-border hover:border-primary transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <Users size={24} className="text-primary shrink-0" />
                      <div className="flex-1">
                        <h3 className="text-xl font-serif font-semibold mb-2">{role.title}</h3>
                        <p className="text-muted-foreground mb-3 leading-relaxed">{role.description}</p>
                        <p className="text-sm text-primary font-semibold">{role.time}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-light mb-12 text-center">Volunteer Benefits</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Award,
                    title: "Festival Pass",
                    description: "Complimentary festival pass for all screenings and events",
                  },
                  {
                    icon: Users,
                    title: "Networking",
                    description: "Connect with filmmakers, industry professionals, and fellow volunteers",
                  },
                  {
                    icon: Calendar,
                    title: "Flexible Schedule",
                    description: "Choose shifts that work with your availability",
                  },
                  {
                    icon: Award,
                    title: "Certificate",
                    description: "Receive a volunteer certificate and reference letter",
                  },
                  {
                    icon: Users,
                    title: "Training",
                    description: "Receive training and support from festival staff",
                  },
                  {
                    icon: Award,
                    title: "Exclusive Events",
                    description: "Access to volunteer appreciation events and after-parties",
                  },
                ].map((benefit, index) => {
                  const Icon = benefit.icon
                  return (
                    <Card key={index} className="border-border">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                            <Icon size={24} className="text-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-serif font-semibold mb-2">{benefit.title}</h3>
                            <p className="text-muted-foreground">{benefit.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-light mb-12 text-center">Volunteer Application</h2>
            <div className="max-w-2xl mx-auto">
              <Card className="border-border">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-semibold mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          className="w-full px-4 py-2 border border-border rounded-md bg-background"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-semibold mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          className="w-full px-4 py-2 border border-border rounded-md bg-background"
                        />
                      </div>
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
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-2 border border-border rounded-md bg-background"
                      />
                    </div>
                    <div>
                      <label htmlFor="role" className="block text-sm font-semibold mb-2">
                        Preferred Role
                      </label>
                      <select
                        id="role"
                        className="w-full px-4 py-2 border border-border rounded-md bg-background"
                      >
                        <option>Event Coordination</option>
                        <option>Box Office & Ticketing</option>
                        <option>Guest Services</option>
                        <option>Marketing & Social Media</option>
                        <option>Technical Support</option>
                        <option>Hospitality</option>
                        <option>No Preference</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="availability" className="block text-sm font-semibold mb-2">
                        Availability
                      </label>
                      <textarea
                        id="availability"
                        rows={3}
                        placeholder="Please indicate your availability during the festival dates (November 1-10, 2025)"
                        className="w-full px-4 py-2 border border-border rounded-md bg-background"
                      />
                    </div>
                    <div>
                      <label htmlFor="experience" className="block text-sm font-semibold mb-2">
                        Previous Experience
                      </label>
                      <textarea
                        id="experience"
                        rows={4}
                        placeholder="Tell us about any relevant experience or skills"
                        className="w-full px-4 py-2 border border-border rounded-md bg-background"
                      />
                    </div>
                    <div className="flex items-start gap-2">
                      <input type="checkbox" id="terms" className="mt-1" />
                      <label htmlFor="terms" className="text-sm text-muted-foreground">
                        I agree to commit to at least 3 shifts during the festival period
                      </label>
                    </div>
                    <Button type="submit" className="w-full uppercase tracking-wider">
                      Submit Application
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Careers */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-light mb-12 text-center">Career Opportunities</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground text-center mb-12">
                We're always looking for passionate individuals to join our team. Check back for current openings or
                send us your resume for future opportunities.
              </p>
              <Card className="border-border">
                <CardContent className="p-8">
                  <div className="text-center">
                    <Mail size={48} className="text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-serif font-semibold mb-4">No Current Openings</h3>
                    <p className="text-muted-foreground mb-6">
                      We're not currently hiring, but we'd love to hear from you for future opportunities. Send your
                      resume and cover letter to:
                    </p>
                    <a
                      href="mailto:careers@iaffa.org.au"
                      className="text-primary hover:underline font-semibold"
                    >
                      careers@iaffa.org.au
                    </a>
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

