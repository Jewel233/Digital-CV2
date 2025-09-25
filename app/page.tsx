// app/page.tsx
import ChatBox from "@/components/ChatBox"; // file is ChatBox.tsx

export default function Page() {
  return <h1 style={{ padding: 24 }}>Hello from Jewel’s Digital CV</h1>;
}
export default function Home() {
  const technicalSkills = ["SQL", "Python", "Power BI", "Agile", "R (basic)"];

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container h-16 mx-auto px-4 flex items-center justify-between">
          <span className="font-semibold">Jewel Shaji — Digital CV</span>
          <nav className="text-sm text-muted-foreground">Full CV • 1-Page Summary</nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Business Analyst | AI & Prototyping Enthusiast</h1>
          <p className="text-muted-foreground">
            Passionate BA focused on AI-driven tools, data storytelling, and rapid prototyping.
          </p>
          <div className="mt-4 text-sm">
            <span className="font-medium">Technical skills: </span>
            {technicalSkills.join(" • ")}
          </div>
        </section>

        {/* AI Chat Section */}
        <section id="ai-chat" className="py-8">
          <h2 className="text-2xl font-semibold mb-3">💬 Chat with Jewel’s AI</h2>
          <ChatBox />
        </section>
      </main>

      <footer className="py-6 text-center text-sm text-muted-foreground">
        © Jewel Shaji 2025
      </footer>
    </div>
  );
}
{/* About Section */}
<section id="about" className="py-16">
  <h2 className="text-2xl font-bold mb-4">About Me</h2>
  <p>
    I’m Jewel Shaji, a Business Analyst & AI Enthusiast passionate about 
    prototyping, AI-driven workflows, and delivering business impact.
  </p>
</section>

{/* Experience Section */}
<section id="experience" className="py-16">
  <h2 className="text-2xl font-bold mb-4">Experience</h2>
  <ul className="list-disc pl-6 space-y-2">
    <li>Business Analyst Bootcamp – Ausbiz Consulting (2025)</li>
    <li>AWS DevOps Engineer – Hands-on projects (Netflix Clone, Serverless apps)</li>
    <li>Customer Service Manager – Retail sector (Woolworths, Myer, David Jones)</li>
  </ul>
</section>

{/* Skills Section */}
<section id="skills" className="py-16">
  <h2 className="text-2xl font-bold mb-4">Skills</h2>
  <p>SQL, Python, Power BI, Agile, AWS, DevOps, AI Tools (ChatGPT, Copilot, v0.dev)</p>
</section>

{/* Projects Section */}
<section id="projects" className="py-16">
  <h2 className="text-2xl font-bold mb-4">Projects</h2>
  <ul className="list-disc pl-6 space-y-2">
    <li>Digital CV with AI Chat</li>
    <li>AI-Powered Mask Detection System</li>
    <li>Wine Data Analytics Dashboard</li>
    <li>Serverless Risk Management Plugin</li>
  </ul>
</section>

{/* Tools Section */}
<section id="tools" className="py-16">
  <h2 className="text-2xl font-bold mb-4">Tools & Tech</h2>
  <p>Next.js, TailwindCSS, ShadCN/UI, GitHub, Vercel, Copilot</p>
</section>

{/* AI Chat Section */}
<section id="ai-chat" className="py-16">
  <h2 className="text-2xl font-bold mb-4">Chat with my AI</h2>
  <ChatBox />
</section>

{/* Contact Section */}
<section id="contact" className="py-16">
  <h2 className="text-2xl font-bold mb-4">Contact</h2>
  <p>Email: jewelkurian771@gmail.com</p>
  <p>LinkedIn: <a href="https://linkedin.com/in/jewelshaji">linkedin.com/in/jewelshaji</a></p>
</section>