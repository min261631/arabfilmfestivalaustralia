import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Calendar } from "lucide-react";

export default function SubmissionsPage() {
  return (
    <>
      <Navigation />

      <main className="pt-24">
        {/* Hero */}
        <section className="relative py-32 border-b border-border overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/film-director-with-camera-on-set--professional-fil.jpg"
              alt="Film director on set"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-serif font-light mb-6 text-balance">
                Film Submissions
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Share your story with audiences across Australia
              </p>
              <Button size="lg" className="uppercase tracking-wider">
                Submit Your Film
              </Button>
            </div>
          </div>
        </section>

        {/* Call for Submissions */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
              <div>
                <h2 className="text-4xl font-serif font-light mb-8">
                  Call for Submissions: 2025
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  The International Arab Film Festival of Australia invites
                  filmmakers from around the world to submit their work for
                  consideration in our 2025 edition. We are seeking bold,
                  innovative, and compelling films that showcase the diversity
                  and depth of Arab cinema.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Whether you're an established filmmaker or emerging talent, if
                  your work explores Arab themes, cultures, or perspectives, we
                  want to see it. Join us in celebrating the art of Arab
                  storytelling.
                </p>
              </div>
              <div className="aspect-square overflow-hidden">
                <img
                  src="/film-production-crew-on-set.jpg"
                  alt="Film production"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-light mb-12 text-center">
              Eligibility Requirements
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {[
                "Films must be completed after January 1, 2023",
                "Director must be of Arab heritage OR film must have significant Arab content",
                "Films can be in any language (with English subtitles if not in English or Arabic)",
                "All genres and formats accepted (narrative, documentary, experimental, animation)",
                "Films must not have been commercially released or screened in Australia",
                "Films can be submitted in digital formats (DCP, ProRes, or high-quality MP4)",
              ].map((requirement, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-background p-6 border border-border"
                >
                  <CheckCircle2
                    className="text-primary shrink-0 mt-1"
                    size={20}
                  />
                  <p className="text-muted-foreground leading-relaxed">
                    {requirement}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-light mb-12 text-center">
              Submission Categories
            </h2>
            <div className="max-w-4xl mx-auto mb-12">
              <div className="aspect-21/9 overflow-hidden">
                <img
                  src="/film-camera-equipment-closeup.jpg"
                  alt="Film camera"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: "Feature Narrative",
                  description: "Fiction films over 40 minutes",
                  fee: "$50",
                },
                {
                  title: "Feature Documentary",
                  description: "Non-fiction films over 40 minutes",
                  fee: "$50",
                },
                {
                  title: "Short Film",
                  description: "Fiction or documentary under 40 minutes",
                  fee: "$30",
                },
                {
                  title: "Student Film",
                  description: "Any length, made while enrolled in film school",
                  fee: "$20",
                },
                {
                  title: "Animation",
                  description: "Animated films of any length",
                  fee: "$30",
                },
                {
                  title: "Experimental",
                  description: "Avant-garde and experimental works",
                  fee: "$30",
                },
              ].map((category, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-serif font-semibold">
                        {category.title}
                      </h3>
                      <span className="text-lg font-semibold text-primary">
                        {category.fee}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {category.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Deadlines */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-light mb-12 text-center">
              Important Dates
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  label: "Early Bird Deadline",
                  date: "March 31, 2025",
                  discount: "20% off submission fees",
                },
                {
                  label: "Regular Deadline",
                  date: "May 31, 2025",
                  discount: null,
                },
                {
                  label: "Late Deadline",
                  date: "July 15, 2025",
                  discount: "Additional $20 fee",
                },
                {
                  label: "Notification Date",
                  date: "September 1, 2025",
                  discount: null,
                },
                {
                  label: "Festival Dates",
                  date: "November 1-10, 2025",
                  discount: null,
                },
              ].map((deadline, index) => (
                <Card key={index} className="bg-background border-border">
                  <CardContent className="p-6 flex items-center justify-between gap-4 flex-wrap">
                    <div className="flex items-center gap-4">
                      <Calendar className="text-primary" size={24} />
                      <div>
                        <h3 className="font-semibold mb-1">{deadline.label}</h3>
                        <p className="text-sm text-muted-foreground">
                          {deadline.date}
                        </p>
                      </div>
                    </div>
                    {deadline.discount && (
                      <span className="text-sm bg-primary/10 text-primary px-3 py-1">
                        {deadline.discount}
                      </span>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Selection Process */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-serif font-light mb-8 text-center">
                Selection Process
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                All submissions are carefully reviewed by our programming
                committee, which includes film industry professionals, critics,
                and cultural experts. We evaluate films based on artistic merit,
                storytelling quality, technical excellence, and relevance to the
                festival's mission.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                {[
                  {
                    step: "01",
                    title: "Submit",
                    description: "Upload your film via our submission platform",
                  },
                  {
                    step: "02",
                    title: "Review",
                    description: "Programming committee evaluates all entries",
                  },
                  {
                    step: "03",
                    title: "Selection",
                    description: "Selected filmmakers notified by September 1",
                  },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="text-5xl font-serif font-light text-primary mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Awards */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-light mb-12 text-center">
              Awards & Recognition
            </h2>
            <div className="max-w-md mx-auto mb-12">
              <img
                src="/award-trophy-on-stage--elegant-film-festival-cerem.jpg"
                alt="Film festival awards"
                className="w-full aspect-4/3 object-cover"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                "Best Feature Film",
                "Best Documentary",
                "Best Short Film",
                "Best Director",
                "Audience Choice Award",
              ].map((award, index) => (
                <Card
                  key={index}
                  className="bg-background border-border text-center"
                >
                  <CardContent className="p-8">
                    <h3 className="text-xl font-serif font-semibold">
                      {award}
                    </h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-light mb-12 text-center">
              Filmmaker FAQs
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "What is the submission fee?",
                  answer:
                    "Fees vary by category and deadline. Early bird rates start at $20 for student films and $30 for shorts. See the categories section above for details.",
                },
                {
                  question:
                    "Can I submit a film that has screened at other festivals?",
                  answer:
                    "Yes, films can have screened at other festivals, but they must not have been commercially released or screened in Australia.",
                },
                {
                  question: "Do I need to be of Arab heritage to submit?",
                  answer:
                    "No, but your film must have significant Arab content, themes, or perspectives. Films by Arab filmmakers are also encouraged.",
                },
                {
                  question:
                    "Will you cover travel costs for selected filmmakers?",
                  answer:
                    "We provide travel assistance for select filmmakers based on available funding. Details will be provided upon selection.",
                },
              ].map((faq, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl font-serif font-light mb-6">
                Ready to Submit?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Join us in celebrating Arab cinema. Submit your film today and
                be part of Australia's premier international Arab film festival.
              </p>
              <Button size="lg" className="uppercase tracking-wider">
                Start Your Submission
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
