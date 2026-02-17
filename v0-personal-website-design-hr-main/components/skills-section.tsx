const skillGroups = [
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript"],
  },
  {
    category: "Design Tools",
    skills: ["Figma", "Photoshop", "Illustrator"],
  },
  {
    category: "Other",
    skills: ["WordPress", "Git", "REST APIs", "Tailwind CSS"],
  },
]

const categoryColors: Record<string, string> = {
  Frontend:
    "bg-primary/10 text-primary border-primary/20",
  "Design Tools":
    "bg-accent/10 text-accent border-accent/20",
  Other:
    "bg-secondary text-secondary-foreground border-border",
}

export function SkillsSection() {
  return (
    <section id="skills" className="bg-card py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          What I work with
        </p>
        <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-card-foreground text-balance sm:text-4xl">
          {"Skills & Technologies"}
        </h2>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`inline-flex items-center rounded-lg border px-4 py-2 text-sm font-medium transition-shadow hover:shadow-md ${
                      categoryColors[group.category] ?? ""
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
