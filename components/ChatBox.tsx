// app/page.tsx
import ChatBox from "@/components/ChatBox"; // <-- change to "@/components/chat-box" if your file name uses hyphen
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export default function Home() {
  const baSkills = [
    "Requirements Analysis",
    "Stakeholder Engagement",
    "Process Mapping",
    "User Stories",
    "Business Case Development",
    "Long Document Analysis",
  ];

  const aiTools = [
    "ChatGPT",
    "Claude",
    "Gemini",
    "Perplexity",
    "MS Copilot",
    "GitHub Copilot",
    "v0.app",
  ];

  const techSkills = ["SQL", "Python", "Power BI", "Agile", "R (basic)"];

  const projects = [
    {
      title: "Employee Intranet (VU – EPM5600)",
      bullets: [
        "SharePoint, AWS, Agile, RACI, UX testing",
        "Outcomes: 85% adoption, –40% emails, +50% doc retrieval",
      ],
    },
    {
      title: "The Phoenix Project – Cybersecurity Remediation (VU – BCO7005)",
      bullets: [
        "EnCase, FTK, Nessus, Wireshark, Snort; NIST CSF",
        "Designed IR protocols, MFA rollout, vendor collaboration",
      ],
    },
    {
      title: "Digital CV with AI Chat",
      bullets: [
        "Next.js + Tailwind + shadcn/ui",
        "OpenAI chat assistant trained on my CV context",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-semibold">Jewel Shaji</div>
          <nav className="hidden sm:flex items-center gap-5 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground">About</a>
            <a href="#experience" className="hover:text-foreground">Experience</a>
            <a href="#skills" className="hover:text-foreground">Skills</a>
            <a href="#projects" className="hover:text-foreground">Projects</a>
            <a href="#tools" className="hover:text-foreground">Tools</a>
            <a href="#ai-chat" className="hover:text-foreground">AI Chat</a>
            <a href="#contact" className="hover:text-foreground">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4">
        {/* Hero */}
        <section className="py-12 sm:py-16">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                Hi, I’m <span className="text-primary">Jewel Shaji</span>
              </h1>
              <p className="mt-3 text-lg text-muted-foreground">
                Business Analyst & AI/Prototyping Enthusiast. I turn business needs into tested,
                visualised solutions using AI tools, rapid prototyping and agile collaboration.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Badge variant="secondary">Business Analysis</Badge>
                <Badge variant="secondary">AI Tools</Badge>
                <Badge variant="secondary">Rapid Prototyping</Badge>
              </div>
              <div className="mt-6 flex gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent"
                >
                  Get in Touch
                </a>
                <a
                  href="#ai-chat"
                  className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
                >
                  Chat with my AI
                </a>
              </div>
            </div>
            <Card className="p-6">
              <p className="text-sm text-muted-foreground">
                Masters of Business Analytics (Victoria University, Sydney • 2024–2026)
              </p>
              <div className="mt-3 text-sm">
                <div>Email: <a className="underline" href="mailto:jewelkurian771@gmail.com">jewelkurian771@gmail.com</a></div>
                <div>Phone: <a className="underline" href="tel:+61430029300">+61 430 029 300</a></div>
                <div>LinkedIn:{" "}
                  <a className="underline" href="https://www.linkedin.com/in/jewel-shaji-108653307/" target="_blank">
                    /in/jewel-shaji-108653307
                  </a>
                </div>
                <div>GitHub:{" "}
                  <a className="underline" href="https://github.com/Jewel233?tab=projects" target="_blank">
                    @Jewel233
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16 border-t">
          <h2 className="text-2xl font-semibold mb-3">About</h2>
          <p className="text-muted-foreground">
            Passionate about AI-driven tools, data storytelling and delivering prototypes that accelerate
            stakeholder alignment. I bridge business requirements and technical delivery with clear documentation,
            user stories, and measurable outcomes.
          </p>
        </section>

        {/* Experience */}
        <section id="experience" className="py-16 border-t">
          <h2 className="text-2xl font-semibold mb-6">Experience</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="p-5">
              <h3 className="font-semibold">Business Analyst Bootcamp – Ausbiz Consulting (2025)</h3>
              <ul className="mt-2 text-sm list-disc pl-5 text-muted-foreground">
                <li>Built a Digital CV with AI assistant, deployed on Vercel.</li>
                <li>Practiced spec-driven documentation with GitHub Copilot.</li>
              </ul>
            </Card>
            <Card className="p-5">
              <h3 className="font-semibold">Customer Service / Team Lead (Retail)</h3>
              <ul className="mt-2 text-sm list-disc pl-5 text-muted-foreground">
                <li>Stakeholder communication, incident handling, process improvement.</li>
                <li>Coordinated cross-team tasks and prioritised workloads.</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-16 border-t">
          <h2 className="text-2xl font-semibold mb-6">Skills</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="p-5">
              <h3 className="font-semibold mb-3">Business Analyst</h3>
              <div className="flex flex-wrap gap-2">
                {baSkills.map((s) => <Badge key={s} variant="outline">{s}</Badge>)}
              </div>
            </Card>
            <Card className="p-5">
              <h3 className="font-semibold mb-3">AI Tools</h3>
              <div className="flex flex-wrap gap-2">
                {aiTools.map((s) => <Badge key={s} variant="outline">{s}</Badge>)}
              </div>
            </Card>
            <Card className="p-5">
              <h3 className="font-semibold mb-3">Technical</h3>
              <div className="flex flex-wrap gap-2">
                {techSkills.map((s) => <Badge key={s} variant="outline">{s}</Badge>)}
              </div>
            </Card>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-16 border-t">
          <h2 className="text-2xl font-semibold mb-6">Projects</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {projects.map((p) => (
              <Card key={p.title} className="p-5">
                <h3 className="font-semibold">{p.title}</h3>
                <ul className="mt-2 text-sm list-disc pl-5 text-muted-foreground">
                  {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        {/* Tools */}
        <section id="tools" className="py-16 border-t">
          <h2 className="text-2xl font-semibold mb-3">Tools & Stack</h2>
          <div className="flex flex-wrap gap-2">
            {["Next.js", "TailwindCSS", "shadcn/ui", "Lucide Icons", "GitHub", "Vercel", "Copilot"].map((t) => (
              <Badge key={t} variant="secondary">{t}</Badge>
            ))}
          </div>
        </section>

        {/* AI Chat */}
        <section id="ai-chat" className="py-16 border-t">
          <h2 className="text-2xl font-semibold mb-4">Chat with my AI</h2>
          <p className="text-sm text-muted-foreground mb-3">
            Ask about my experience, skills, or projects—this assistant answers using my CV only.
          </p>
          <ChatBox />
        </section>

        {/* Contact */}
        <section id="contact" className="py-16 border-t">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <Card className="p-5">
            <div className="text-sm">
              <div className="mb-1">Email:{" "}
                <a className="underline" href="mailto:jewelkurian771@gmail.com">
                  jewelkurian771@gmail.com
                </a>
              </div>
              <div className="mb-1">Phone:{" "}
                <a className="underline" href="tel:+61430029300">
                  +61 430 029 300
                </a>
              </div>
              <div className="mb-1">LinkedIn:{" "}
                <a className="underline" target="_blank"
                   href="https://www.linkedin.com/in/jewel-shaji-108653307/">
                  /in/jewel-shaji-108653307
                </a>
              </div>
              <div>GitHub:{" "}
                <a className="underline" target="_blank"
                   href="https://github.com/Jewel233?tab=projects">
                  @Jewel233
                </a>
              </div>
            </div>
          </Card>
        </section>
      </main>

      <footer className="py-8 border-t text-center text-xs text-muted-foreground">
        © Jewel Shaji 2025
      </footer>
    </div>
  );
}