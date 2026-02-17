import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "E-commerce Store",
    description:
      "A full-featured online store with product filtering, cart management, and a seamless checkout experience built with React and Stripe.",
    image: "/images/project-ecommerce.jpg",
    tags: ["React", "Stripe", "Tailwind CSS"],
  },
  {
    title: "Restaurant Website",
    description:
      "An elegant, responsive website for a fine-dining restaurant featuring online reservations, an interactive menu, and a photo gallery.",
    image: "/images/project-restaurant.jpg",
    tags: ["Next.js", "Framer Motion", "Sanity"],
  },
  {
    title: "Portfolio Blog",
    description:
      "A minimalist blog and portfolio site with markdown support, dark mode, and lightning-fast page transitions powered by Next.js.",
    image: "/images/project-blog.jpg",
    tags: ["Next.js", "MDX", "Vercel"],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Selected work
        </p>
        <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
          My Projects
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-semibold text-card-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="mt-5 gap-2 self-start rounded-lg">
                  View Project
                  <ExternalLink className="h-3.5 w-3.5" />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
