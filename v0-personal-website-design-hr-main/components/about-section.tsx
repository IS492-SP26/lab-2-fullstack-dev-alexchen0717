import { Coffee, Camera, Plane, Code2 } from "lucide-react"

const interests = [
  { icon: Coffee, label: "Coffee", emoji: "Lover" },
  { icon: Camera, label: "Photography", emoji: "Enthusiast" },
  { icon: Plane, label: "Travel", emoji: "Explorer" },
  { icon: Code2, label: "Coding", emoji: "Nerd" },
]

export function AboutSection() {
  return (
    <section id="about" className="bg-card py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Get to know me
        </p>
        <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-card-foreground text-balance sm:text-4xl">
          About Me
        </h2>

        <div className="mt-12 grid gap-12 md:grid-cols-5">
          {/* Bio */}
          <div className="space-y-5 md:col-span-3">
            <p className="leading-relaxed text-muted-foreground">
              {"I'm a web developer and designer with over 5 years of experience crafting digital experiences. I graduated from the University of Washington with a degree in Computer Science and have been building for the web ever since."}
            </p>
            <p className="leading-relaxed text-muted-foreground">
              {"My approach blends strong technical skills with a keen eye for design. I believe that great websites aren't just functional \u2014 they tell a story and create meaningful connections between brands and their audiences."}
            </p>
            <p className="leading-relaxed text-muted-foreground">
              {"When I'm not coding, you'll find me exploring coffee shops, capturing moments through my camera lens, or planning my next travel adventure. I'm always looking for new inspiration to fuel my creative work."}
            </p>
          </div>

          {/* Interests */}
          <div className="md:col-span-2">
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Things I enjoy
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {interests.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-3 rounded-xl bg-background p-5 text-center shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-card-foreground">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.emoji}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
