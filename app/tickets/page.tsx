"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, MapPin } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { CountryDropdown } from "@/components/ui/country-dropdown";

export default function TicketsPage() {
  const [step, setStep] = useState(1);
  const [paid, setPaid] = useState(false);
  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      country: "",
      city: "",
      profession: "",
      company: "",
      website: "",
      instagram: "",
      linkedin: "",
      twitter: "",
      interests: [] as string[],
      heardAbout: "",
      accessibility: "",
      paymentMethod: "card",
      billingAddress: "",
      subscribeNewsletter: false,
      receiveUpdates: false,
      agreeTerms: false,
      consentStoreInfo: false,
    },
  });

  function nextStep() {
    if (step === 1) {
      const values = form.getValues();
      let valid = true;
      if (!values.fullName) {
        form.setError("fullName", { message: "Full name is required" });
        valid = false;
      }
      if (!values.email) {
        form.setError("email", { message: "Email is required" });
        valid = false;
      }
      if (!values.country) {
        form.setError("country", { message: "Country is required" });
        valid = false;
      }
      if (!valid) return;
    }
    if (step === 4) {
      const values = form.getValues();
      let valid = true;
      if (!values.agreeTerms) {
        form.setError("agreeTerms", {
          message: "You must agree to the Terms & Privacy",
        });
        valid = false;
      }
      if (!values.consentStoreInfo) {
        form.setError("consentStoreInfo", { message: "Consent is required" });
        valid = false;
      }
      if (!valid) return;
    }
    setStep((s) => Math.min(s + 1, 5));
  }

  function prevStep() {
    setStep((s) => Math.max(s - 1, 1));
  }

  function submitPayment() {
    setPaid(true);
    setStep(5);
  }
  return (
    <>
      <Navigation />

      <main className="pt-24">
        {/* Hero */}
        <section className="relative py-32 border-b border-border overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/audience-at-cultural-cinema-event.jpg"
              alt="Festival audience"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-linear-to-b from-background/50 via-background/80 to-background" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-serif font-light mb-6 text-balance">
                Become a Member
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Complete the membership form to join IAFFA
              </p>
            </div>
          </div>
        </section>

        {/* Membership Form */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-light mb-12 text-center">
              IAFFA Membership
            </h2>
            <div className="max-w-3xl mx-auto">
              <Card className="border-border">
                <CardContent className="p-8">
                  <Form {...form}>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        const values = form.getValues();
                        let valid = true;
                        if (!values.fullName) {
                          form.setError("fullName", {
                            message: "Full name is required",
                          });
                          valid = false;
                        }
                        if (!values.email) {
                          form.setError("email", {
                            message: "Email is required",
                          });
                          valid = false;
                        }
                        if (!values.country) {
                          form.setError("country", {
                            message: "Country is required",
                          });
                          valid = false;
                        }
                        if (!values.agreeTerms) {
                          form.setError("agreeTerms", {
                            message: "You must agree to the Terms & Privacy",
                          });
                          valid = false;
                        }
                        if (!values.consentStoreInfo) {
                          form.setError("consentStoreInfo", {
                            message: "Consent is required",
                          });
                          valid = false;
                        }
                        if (!valid) return;
                        submitPayment();
                      }}
                      className="space-y-8"
                    >
                      {/* Combined single large form with sections */}

                      <div className="space-y-6">
                        <h3 className="text-2xl font-serif font-semibold">
                          Step 1 — Personal Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Full Name *</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Your full name"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email Address *</FormLabel>
                                <FormControl>
                                  <Input
                                    type="email"
                                    placeholder="name@example.com"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                  <Input placeholder="+61 ..." {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="country"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Country *</FormLabel>
                                <CountryDropdown
                                  placeholder="Select country"
                                  defaultValue={field.value}
                                  onChange={(c) => field.onChange(c.alpha3)}
                                  slim={false}
                                />

                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="city"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>City</FormLabel>
                                <FormControl>
                                  <Input placeholder="City" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="profession"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Profession / Role</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="e.g. Filmmaker, Producer"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="company"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Company / Institution</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Company name"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="website"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>
                                  Website / Portfolio / IMDb
                                </FormLabel>
                                <FormControl>
                                  <Input placeholder="https://..." {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>

                      <div className="space-y-6">
                        <h3 className="text-2xl font-serif font-semibold">
                          Step 2 — Optional Profile
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="instagram"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Instagram</FormLabel>
                                <FormControl>
                                  <Input placeholder="@username" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="linkedin"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>LinkedIn</FormLabel>
                                <FormControl>
                                  <Input placeholder="Profile URL" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="twitter"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Twitter/X</FormLabel>
                                <FormControl>
                                  <Input placeholder="@username" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="space-y-3">
                          <FormLabel>Areas of Interest</FormLabel>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {[
                              "Documentary",
                              "Short Film",
                              "Feature Film",
                              "Workshops",
                              "Panels",
                            ].map((label) => (
                              <FormField
                                key={label}
                                control={form.control}
                                name="interests"
                                render={({ field }) => {
                                  const interests = new Set(
                                    field.value as string[]
                                  );
                                  const checked = interests.has(label);
                                  return (
                                    <FormItem className="flex flex-row items-center gap-3">
                                      <FormControl>
                                        <Checkbox
                                          checked={checked}
                                          onCheckedChange={(v) => {
                                            const next = new Set(interests);
                                            if (v) next.add(label);
                                            else next.delete(label);
                                            field.onChange(Array.from(next));
                                          }}
                                        />
                                      </FormControl>
                                      <FormLabel className="mb-0 text-sm">
                                        {label}
                                      </FormLabel>
                                    </FormItem>
                                  );
                                }}
                              />
                            ))}
                          </div>
                        </div>
                        <FormField
                          control={form.control}
                          name="heardAbout"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>
                                How did you hear about IAFFA?
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Friend, Social Media, Newsletter, etc."
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="accessibility"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>
                                Accessibility / Special Requirements
                              </FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Let us know how we can help"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="space-y-6">
                        <h3 className="text-2xl font-serif font-semibold">
                          Step 3 — Payment
                        </h3>
                        <div className="rounded-md border border-border p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm text-muted-foreground">
                                Membership Fee
                              </p>
                              <p className="text-2xl font-serif font-light">
                                AUD $50 / year
                              </p>
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Secure payment
                            </div>
                          </div>
                        </div>
                        <FormField
                          control={form.control}
                          name="paymentMethod"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Payment Method</FormLabel>
                              <FormControl>
                                <RadioGroup
                                  value={field.value}
                                  onValueChange={field.onChange}
                                  className="grid grid-cols-1 md:grid-cols-2 gap-3"
                                >
                                  {[
                                    {
                                      value: "card",
                                      label: "Credit/Debit Card",
                                    },
                                    { value: "paypal", label: "PayPal" },
                                    { value: "stripe", label: "Stripe" },
                                    { value: "apple", label: "Apple Pay" },
                                  ].map((opt) => (
                                    <label
                                      key={opt.value}
                                      className="flex items-center gap-3 rounded-md border border-border p-3 cursor-pointer"
                                    >
                                      <RadioGroupItem value={opt.value} />
                                      <span className="text-sm">
                                        {opt.label}
                                      </span>
                                    </label>
                                  ))}
                                </RadioGroup>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="billingAddress"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Billing Address (optional)</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Street, City, Postcode, Country"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span className="inline-flex items-center gap-1">
                            <span className="size-2 rounded-full bg-green-500" />
                            SSL
                          </span>
                          <span>Stripe</span>
                          <span>PayPal</span>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <h3 className="text-2xl font-serif font-semibold">
                          Step 4 — Communication Preferences & Consent
                        </h3>
                        <div className="space-y-4">
                          <FormField
                            control={form.control}
                            name="subscribeNewsletter"
                            render={({ field }) => (
                              <FormItem className="flex flex-row items-center gap-3">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                  />
                                </FormControl>
                                <FormLabel className="mb-0">
                                  Subscribe to IAFFA newsletter
                                </FormLabel>
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="receiveUpdates"
                            render={({ field }) => (
                              <FormItem className="flex flex-row items-center gap-3">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                  />
                                </FormControl>
                                <FormLabel className="mb-0">
                                  Receive updates on events and programs
                                </FormLabel>
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="agreeTerms"
                            render={({ field }) => (
                              <FormItem className="flex flex-row items-start gap-3">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                  />
                                </FormControl>
                                <div>
                                  <FormLabel className="mb-0">
                                    I agree to IAFFA’s{" "}
                                    <a href="/terms" className="underline">
                                      Terms & Conditions
                                    </a>{" "}
                                    and{" "}
                                    <a href="/privacy" className="underline">
                                      Privacy Policy
                                    </a>
                                    .
                                  </FormLabel>
                                  <FormMessage />
                                </div>
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="consentStoreInfo"
                            render={({ field }) => (
                              <FormItem className="flex flex-row items-center gap-3">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                  />
                                </FormControl>
                                <FormLabel className="mb-0">
                                  I consent to my information being stored for
                                  membership purposes
                                </FormLabel>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>

                      {step === 5 && paid && (
                        <div className="space-y-6">
                          <div className="flex items-center gap-3">
                            <CheckCircle2 className="text-primary" size={28} />
                            <h3 className="text-2xl font-serif font-semibold">
                              Thank you! You are now an IAFFA Member.
                            </h3>
                          </div>
                          <p className="text-muted-foreground">
                            A confirmation email with your receipt and digital
                            membership badge has been sent to{" "}
                            {form.getValues().email}.
                          </p>
                          <div className="rounded-md border border-border p-4 text-sm text-muted-foreground">
                            Keep an eye on your inbox for upcoming events and
                            programs.
                          </div>
                        </div>
                      )}

                      {!paid && (
                        <div className="flex items-center justify-end">
                          <Button
                            type="submit"
                            className="uppercase tracking-wider"
                          >
                            Proceed to Payment
                          </Button>
                        </div>
                      )}
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pass Inclusions */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-light mb-12 text-center">
              Pass Inclusions
            </h2>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"> */}
            <div className="grid grid-cols-1 gap-8 max-w-xl mx-auto">
              {[
                {
                  title: "Member Benefits",
                  items: [
                    "Access to all film screenings",
                    "Opening and closing night galas",
                    "Q&A sessions with filmmakers",
                    "Industry networking events",
                    "Panel discussions",
                    "Workshop access (limited seats)",
                    "Priority booking window",
                    "Festival program guide",
                    "Commemorative festival badge",
                  ],
                },
              ].map((pass, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-serif font-semibold mb-6">
                      {pass.title}
                    </h3>
                    <ul className="space-y-3">
                      {pass.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2
                            size={20}
                            className="text-primary shrink-0 mt-0.5"
                          />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Venue Details */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-light mb-12 text-center">
              Venue Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "Palace Cinema Central",
                  city: "Sydney",
                  address: "123 George Street, Sydney NSW 2000",
                  capacity: "450 seats",
                  amenities: [
                    "Wheelchair accessible",
                    "Hearing loop",
                    "Comfortable seating",
                    "Bar & concessions",
                  ],
                },
                {
                  name: "Dendy Opera Quays",
                  city: "Sydney",
                  address: "2 East Circular Quay, Sydney NSW 2000",
                  capacity: "320 seats",
                  amenities: [
                    "Wheelchair accessible",
                    "Harbour views",
                    "Premium seating",
                    "Café",
                  ],
                },
                {
                  name: "ACMI Cinema",
                  city: "Melbourne",
                  address: "Fed Square, Melbourne VIC 3000",
                  capacity: "500 seats",
                  amenities: [
                    "Wheelchair accessible",
                    "State-of-the-art projection",
                    "Bar",
                    "Museum access",
                  ],
                },
                {
                  name: "Classic Cinemas",
                  city: "Melbourne",
                  address: "9 Gordon Street, Elsternwick VIC 3185",
                  capacity: "280 seats",
                  amenities: [
                    "Wheelchair accessible",
                    "Historic venue",
                    "Art house atmosphere",
                    "Café",
                  ],
                },
              ].map((venue, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-serif font-semibold mb-2">
                      {venue.name}
                    </h3>
                    <p className="text-sm text-primary mb-3">{venue.city}</p>
                    <div className="flex items-start gap-2 mb-4">
                      <MapPin
                        size={16}
                        className="text-muted-foreground shrink-0 mt-1"
                      />
                      <p className="text-sm text-muted-foreground">
                        {venue.address}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Capacity: {venue.capacity}
                    </p>
                    <div className="space-y-2">
                      {venue.amenities.map((amenity, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle2
                            size={16}
                            className="text-primary shrink-0"
                          />
                          <span className="text-sm text-muted-foreground">
                            {amenity}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Accessibility Info */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-light mb-12 text-center">
              Accessibility Information
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  title: "Wheelchair Access",
                  description:
                    "All venues are fully wheelchair accessible with dedicated seating areas and accessible restrooms.",
                },
                {
                  title: "Hearing Assistance",
                  description:
                    "Hearing loops available at all venues. Please request when booking your tickets.",
                },
                {
                  title: "Visual Assistance",
                  description:
                    "Audio description available for select screenings. Please check program guide for details.",
                },
                {
                  title: "Companion Cards",
                  description:
                    "Companion card holders receive complimentary companion tickets. Please contact us when booking.",
                },
                {
                  title: "Parking",
                  description:
                    "Accessible parking available at all venues. Please book in advance.",
                },
              ].map((item, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-serif font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Terms & Conditions */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-light mb-12 text-center">
              Terms & Conditions
            </h2>
            <div className="max-w-4xl mx-auto">
              <Card className="border-border">
                <CardContent className="p-8">
                  <div className="space-y-6 text-muted-foreground">
                    <div>
                      <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">
                        Ticket Purchase
                      </h3>
                      <p className="leading-relaxed">
                        All tickets are non-refundable except in cases of event
                        cancellation. Tickets may be transferred to another
                        person up to 24 hours before the screening.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">
                        Entry Policy
                      </h3>
                      <p className="leading-relaxed">
                        Latecomers will be admitted at the discretion of venue
                        staff. Seats cannot be guaranteed for late arrivals. All
                        attendees must present valid tickets and ID for
                        student/senior discounts.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">
                        Pass Usage
                      </h3>
                      <p className="leading-relaxed">
                        Festival passes are non-transferable and valid only for
                        the 2025 festival dates. Passes must be presented at
                        each event. Lost passes may be replaced with proof of
                        purchase.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">
                        Cancellation Policy
                      </h3>
                      <p className="leading-relaxed">
                        In the event of cancellation, full refunds will be
                        issued. For rescheduled events, tickets remain valid for
                        the new date or refunds can be requested.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">
                        Code of Conduct
                      </h3>
                      <p className="leading-relaxed">
                        All attendees must respect other audience members and
                        filmmakers. Disruptive behavior may result in removal
                        from the venue without refund.
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
  );
}
