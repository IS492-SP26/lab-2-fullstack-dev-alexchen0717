import Image from "next/image"
import { ArrowRight, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 px-6 py-20 md:flex-row md:py-28 lg:py-32">
        {/* Text */}
        <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Welcome to my portfolio
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
            {"Hi, I'm Sarah Johnson"}
          </h1>
          <p className="mt-2 font-display text-xl font-medium text-accent sm:text-2xl">
            Web Developer & Designer
          </p>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground lg:text-lg">
            I create beautiful, functional websites that help businesses grow.
            With a passion for clean code and thoughtful design, I bring ideas to life on the web.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="gap-2 rounded-lg">
              <a href="#projects">
                View My Work
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 rounded-lg">
              <a href="#contact">
                <Mail className="h-4 w-4" />
                Get In Touch
              </a>
            </Button>
          </div>
        </div>

        {/* Portrait */}
        <div className="relative flex-shrink-0">
          <div className="relative h-64 w-64 overflow-hidden rounded-2xl border-4 border-card shadow-2xl sm:h-80 sm:w-80 lg:h-96 lg:w-96">
            <Image
              src="/images/hero-portrait.jpg"
              alt="Sarah Johnson, web developer and designer"
              fill
              sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
              className="object-cover"
              priority
            />
          </div>
          {/* Decorative dot */}
          <div className="absolute -bottom-3 -right-3 h-24 w-24 rounded-2xl bg-primary/10" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
