"use client"

import { useState, useEffect, useCallback } from "react"
import { Send, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { createClient } from "@/lib/supabase/client"

interface Feedback {
  id: string
  name: string
  message: string
  rating: number
  created_at: string
}

function StarRating({
  value,
  onChange,
}: {
  value: number
  onChange: (v: number) => void
}) {
  const [hovered, setHovered] = useState(0)

  return (
    <div className="flex gap-1" role="radiogroup" aria-label="Rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          role="radio"
          aria-checked={value === star}
          aria-label={`${star} star${star > 1 ? "s" : ""}`}
          className="rounded p-0.5 transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
          onClick={() => onChange(star)}
        >
          <Star
            className={`h-7 w-7 transition-colors ${
              star <= (hovered || value)
                ? "fill-amber-400 text-amber-400"
                : "fill-transparent text-muted-foreground/40"
            }`}
          />
        </button>
      ))}
    </div>
  )
}

export function FeedbackSection() {
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [rating, setRating] = useState(0)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [feedbackList, setFeedbackList] = useState<Feedback[]>([])

  const supabase = createClient()

  const fetchFeedback = useCallback(async () => {
    const { data } = await supabase
      .from("feedback")
      .select("*")
      .order("created_at", { ascending: false })

    if (data) {
      setFeedbackList(data as Feedback[])
    }
  }, [supabase])

  useEffect(() => {
    fetchFeedback()

    const channel = supabase
      .channel("feedback-realtime")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "feedback" },
        (payload) => {
          setFeedbackList((prev) => [payload.new as Feedback, ...prev])
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [fetchFeedback, supabase])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (rating === 0) return
    setSubmitting(true)

    const { error } = await supabase
      .from("feedback")
      .insert([{ name, message, rating }])

    setSubmitting(false)

    if (!error) {
      setSubmitted(true)
      setName("")
      setMessage("")
      setRating(0)
      setTimeout(() => setSubmitted(false), 4000)
    }
  }

  return (
    <section id="feedback" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Share your thoughts
        </p>
        <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
          Feedback
        </h2>

        {/* Form */}
        <div className="mt-12 max-w-2xl">
          {submitted ? (
            <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-12 text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Send className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-semibold text-card-foreground">
                Thanks for your feedback!
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Your response has been recorded.
              </p>
            </div>
          ) : (
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="fb-name">Name</Label>
                <Input
                  id="fb-name"
                  placeholder="Your name"
                  required
                  className="rounded-lg"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="fb-message">Message</Label>
                <Textarea
                  id="fb-message"
                  placeholder="Share your feedback..."
                  rows={4}
                  required
                  className="resize-none rounded-lg"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Rating</Label>
                <StarRating value={rating} onChange={setRating} />
                {rating === 0 && (
                  <p className="text-xs text-muted-foreground">
                    Please select a rating
                  </p>
                )}
              </div>
              <Button
                type="submit"
                size="lg"
                className="gap-2 rounded-lg"
                disabled={submitting || rating === 0}
              >
                {submitting ? "Submitting..." : "Submit Feedback"}
                <Send className="h-4 w-4" />
              </Button>
            </form>
          )}
        </div>

        {/* Feedback list */}
        <div className="mt-16">
          <h3 className="font-display text-xl font-semibold text-foreground">
            What others are saying
          </h3>

          {feedbackList.length === 0 ? (
            <p className="mt-4 text-sm text-muted-foreground">
              No feedback yet. Be the first to share your thoughts!
            </p>
          ) : (
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {feedbackList.map((fb) => (
                <div
                  key={fb.id}
                  className="rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-card-foreground">
                      {fb.name}
                    </span>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-4 w-4 ${
                            star <= fb.rating
                              ? "fill-amber-400 text-amber-400"
                              : "fill-transparent text-muted-foreground/30"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {fb.message}
                  </p>
                  <p className="mt-3 text-xs text-muted-foreground/60">
                    {new Date(fb.created_at).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
