"use client"

import { useState } from "react"
import { Send, Mail, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const socials = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
]

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          {"Let's talk"}
        </p>
        <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
          Feedback
        </h2>

        <div className="mt-12 grid gap-12 md:grid-cols-5">
          {/* Form */}
          <div className="md:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-12 text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Send className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-semibold text-card-foreground">Message Sent!</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {"Thank you for reaching out. I'll get back to you soon."}
                </p>
              </div>
            ) : (
              <form
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" required className="rounded-lg" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="you@example.com" required className="rounded-lg" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project or say hello..."
                    rows={5}
                    required
                    className="rounded-lg resize-none"
                  />
                </div>
                <Button type="submit" size="lg" className="gap-2 rounded-lg">
                  Send Message
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            )}
          </div>

          {/* Info sidebar */}
          <div className="space-y-8 md:col-span-2">
            <div>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground">Email</h3>
              <a
                href="mailto:sarah@example.com"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4 text-primary" />
                sarah@example.com
              </a>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-muted-foreground">Socials</h3>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    <s.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
