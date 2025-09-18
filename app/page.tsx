"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ThemeToggle } from "@/components/theme-toggle"
import { Mail, Phone, Linkedin, Github, Download, User, Brain, Code, BarChart3, FileText, Award } from "lucide-react"

export default function DigitalCV() {
  const [activeTab, setActiveTab] = useState("full-cv")

  const businessSkills = [
    "Requirements Gathering & Analysis",
    "Stakeholder Engagement & Communication",
    "Business Case Development",
    "Long Document Analysis",
    "Business Process Mapping",
  ]

  const aiTools = [
    "ChatGPT",
    "Claude",
    "Gemini (Google AI)",
    "Perplexity AI",
    "Microsoft Copilot (Word, Excel, Teams)",
    "GitHub Copilot",
    "v0.app",
  ]

  const technicalSkills = ["SQL", "Python", "Power BI", "Agile", "R (basic)"]

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 mx-auto max-w-6xl">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold text-primary">Jewel Shaji</h1>
          </div>

          <div className="flex items-center space-x-4">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-auto">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="full-cv" className="text-sm">
                  Full CV
                </TabsTrigger>
                <TabsTrigger value="summary" className="text-sm">
                  1-Page Summary
                </TabsTrigger>
              </TabsList>
            </Tabs>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container mx-auto max-w-6xl px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          {/* Full CV Tab */}
          <TabsContent value="full-cv" className="space-y-8">
            {/* Hero Section */}
            <Card className="animate-fade-in-up">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground text-4xl font-bold shrink-0">
                    JS
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2 text-balance">Jewel Shaji</h1>
                    <p className="text-xl text-muted-foreground mb-4 text-pretty">
                      Business Analyst | AI & Prototyping Enthusiast
                    </p>
                    <p className="text-base leading-relaxed text-muted-foreground max-w-2xl text-pretty">
                      Passionate Business Analyst with a strong interest in AI-driven tools, data storytelling, and
                      rapid prototyping. Skilled at bridging the gap between business needs and tech solutions, I thrive
                      on transforming insights into impact through agile collaboration and innovative thinking.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Section */}
            <Card className="animate-fade-in-up animate-delay-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Button variant="outline" className="justify-start h-auto p-4 bg-transparent" asChild>
                    <a href="mailto:jewelkurian771@gmail.com" className="flex items-center gap-3">
                      <Mail className="h-4 w-4" />
                      <div className="text-left">
                        <div className="font-medium">Email</div>
                        <div className="text-sm text-muted-foreground">jewelkurian771@gmail.com</div>
                      </div>
                    </a>
                  </Button>

                  <Button variant="outline" className="justify-start h-auto p-4 bg-transparent" asChild>
                    <a href="tel:0430029300" className="flex items-center gap-3">
                      <Phone className="h-4 w-4" />
                      <div className="text-left">
                        <div className="font-medium">Phone</div>
                        <div className="text-sm text-muted-foreground">0430 029 300</div>
                      </div>
                    </a>
                  </Button>

                  <Button variant="outline" className="justify-start h-auto p-4 bg-transparent" asChild>
                    <a
                      href="https://www.linkedin.com/in/jewel-shaji-108653307/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3"
                    >
                      <Linkedin className="h-4 w-4" />
                      <div className="text-left">
                        <div className="font-medium">LinkedIn</div>
                        <div className="text-sm text-muted-foreground">Connect with me</div>
                      </div>
                    </a>
                  </Button>

                  <Button variant="outline" className="justify-start h-auto p-4 bg-transparent" asChild>
                    <a
                      href="https://github.com/Jewel233?tab=projects"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3"
                    >
                      <Github className="h-4 w-4" />
                      <div className="text-left">
                        <div className="font-medium">GitHub</div>
                        <div className="text-sm text-muted-foreground">View projects</div>
                      </div>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Skills Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in-up animate-delay-200">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Business Analyst Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {businessSkills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5" />
                    AI Tools
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {aiTools.map((tool, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5" />
                    Technical Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {technicalSkills.map((skill, index) => (
                      <Badge key={index} variant="default" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Academic Projects */}
            <Card className="animate-fade-in-up animate-delay-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Academic Projects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="project-1">
                    <AccordionTrigger className="text-left">
                      <div>
                        <div className="font-semibold">Employee Intranet Development</div>
                        <div className="text-sm text-muted-foreground">
                          Victoria University – EPM5600 Principles of Project Management
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="outline">SharePoint</Badge>
                        <Badge variant="outline">AWS</Badge>
                        <Badge variant="outline">RACI Matrix</Badge>
                        <Badge variant="outline">Agile</Badge>
                        <Badge variant="outline">UX Testing</Badge>
                      </div>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>
                          • Designed a secure cloud-hosted intranet platform to improve employee communication and
                          document access
                        </li>
                        <li>• Used PMBOK 7 + agile sprints + stakeholder feedback loops</li>
                        <li>• Planned procurement for SSO, encryption, UX tools</li>
                        <li>• Used RACI for role clarity and resolved conflict with Thomas-Kilmann</li>
                        <li>• Achieved 85% adoption, reduced email volume by 40%, boosted document retrieval by 50%</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="project-2">
                    <AccordionTrigger className="text-left">
                      <div>
                        <div className="font-semibold">The Phoenix Project – Cybersecurity Remediation</div>
                        <div className="text-sm text-muted-foreground">
                          Victoria University – BCO7005 Data Security & Governance
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="outline">EnCase</Badge>
                        <Badge variant="outline">FTK</Badge>
                        <Badge variant="outline">Nessus</Badge>
                        <Badge variant="outline">Wireshark</Badge>
                        <Badge variant="outline">Snort</Badge>
                        <Badge variant="outline">MFA</Badge>
                        <Badge variant="outline">DLP</Badge>
                      </div>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>
                          • Analysed a real-world breach with forensic tools and designed remediation using NIST
                          Cybersecurity Framework
                        </li>
                        <li>• Proposed incident response protocols, MFA rollout, and vendor collaboration strategy</li>
                        <li>• Focused on communication during system outages and stakeholder coordination</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="project-3">
                    <AccordionTrigger className="text-left">
                      <div>
                        <div className="font-semibold">Recreation and Wellness Intranet Development</div>
                        <div className="text-sm text-muted-foreground">
                          Victoria University – BCO7003 Analytics Project Management
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="outline">Microsoft Project</Badge>
                        <Badge variant="outline">SPC</Badge>
                        <Badge variant="outline">Pareto Charts</Badge>
                        <Badge variant="outline">Control Charts</Badge>
                        <Badge variant="outline">Internal Intranet System</Badge>
                      </div>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>
                          • Designed and managed an internal intranet project to promote employee wellness and reduce
                          healthcare costs at Manage Your Health Inc. (MYH)
                        </li>
                        <li>
                          • Used Microsoft Project to develop a Gantt chart and task dependencies, ensuring timely
                          project execution
                        </li>
                        <li>
                          • Incorporated quality control tools (SPC, Pareto Charts, Cause & Effect Diagrams) to measure
                          system usability, employee engagement, and reliability
                        </li>
                        <li>
                          • Addressed data privacy and employee engagement risks, including proactive stakeholder
                          communication and performance monitoring
                        </li>
                        <li>
                          • Tracked ROI using participation metrics and health indicators, aligning the system with
                          long-term organizational goals
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="project-4">
                    <AccordionTrigger className="text-left">
                      <div>
                        <div className="font-semibold">Retail Turnover Analysis for Strategic Business Planning</div>
                        <div className="text-sm text-muted-foreground">
                          Victoria University – BEO6000 Data Analysis for Business (Sep 2024 – Nov 2024)
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="outline">SPSS</Badge>
                        <Badge variant="outline">Tableau</Badge>
                        <Badge variant="outline">Excel</Badge>
                        <Badge variant="outline">ABS Retail Turnover Datasets</Badge>
                      </div>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>
                          • Conducted a data-driven analysis of retail turnover across Australian states and retail
                          categories using 10+ years of ABS data (2013–2024)
                        </li>
                        <li>
                          • Employed SPSS for inferential statistical tests (t-tests, ANOVA) and Tableau for data
                          visualisation to identify high-performing sectors and locations
                        </li>
                        <li>
                          • Provided insights into state-level performance (NSW &gt; VIC &gt; QLD) and sector-based
                          performance (Food Retail highest turnover), supporting actionable business strategy
                        </li>
                        <li>
                          • Recommended data-backed market expansion strategies, resource optimisation plans, and
                          digital integration for omnichannel retail
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            {/* Education Section */}
            <Card className="animate-fade-in-up animate-delay-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">Victoria University, Sydney</h3>
                  <p className="text-muted-foreground">Masters of Business Analytics</p>
                  <p className="text-sm text-muted-foreground">2024–2026</p>
                </div>
              </CardContent>
            </Card>

            {/* Download CV Section */}
            <Card className="animate-fade-in-up animate-delay-300">
              <CardContent className="pt-6">
                <div className="text-center">
                  <Button size="lg" className="gap-2">
                    <Download className="h-4 w-4" />
                    Download 1-Page CV (PDF)
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 1-Page Summary Tab */}
          <TabsContent value="summary" className="space-y-6">
            <Card className="animate-fade-in-up">
              <CardContent className="pt-6 space-y-6">
                {/* Compact Hero */}
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground text-2xl font-bold mx-auto">
                    JS
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-primary mb-1">Jewel Shaji</h1>
                    <p className="text-lg text-muted-foreground mb-3">Business Analyst | AI & Prototyping Enthusiast</p>
                    <p className="text-sm leading-relaxed text-muted-foreground max-w-2xl mx-auto text-pretty">
                      Passionate Business Analyst bridging business needs and tech solutions through AI-driven tools and
                      agile collaboration.
                    </p>
                  </div>
                </div>

                {/* Compact Contact */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href="mailto:jewelkurian771@gmail.com" className="flex items-center gap-2">
                      <Mail className="h-3 w-3" />
                      Email
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="tel:0430029300" className="flex items-center gap-2">
                      <Phone className="h-3 w-3" />
                      Phone
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href="https://www.linkedin.com/in/jewel-shaji-108653307/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Linkedin className="h-3 w-3" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href="https://github.com/Jewel233?tab=projects"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="h-3 w-3" />
                      GitHub
                    </a>
                  </Button>
                </div>

                {/* Compact Skills */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Key Skills</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Business Analysis</h4>
                      <div className="flex flex-wrap gap-1">
                        {businessSkills.slice(0, 3).map((skill, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-2">AI Tools</h4>
                      <div className="flex flex-wrap gap-1">
                        {aiTools.slice(0, 4).map((tool, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Project */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">Featured Project</h3>
                  <div className="border rounded-lg p-4 space-y-2">
                    <h4 className="font-medium">Employee Intranet Development</h4>
                    <p className="text-sm text-muted-foreground">
                      Designed secure cloud-hosted intranet achieving 85% adoption and 40% email reduction using
                      SharePoint, AWS, and Agile methodologies.
                    </p>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline" className="text-xs">
                        SharePoint
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        AWS
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Agile
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">Education</h3>
                  <div className="text-sm">
                    <div className="font-medium">Masters of Business Analytics</div>
                    <div className="text-muted-foreground">Victoria University, Sydney (2024–2026)</div>
                  </div>
                </div>

                {/* Download Button */}
                <div className="text-center pt-4">
                  <Button className="gap-2">
                    <Download className="h-4 w-4" />
                    Download Full CV (PDF)
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Sticky Footer */}
      <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto max-w-6xl px-4 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">© Jewel Shaji 2025</p>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/Jewel233?tab=projects" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.linkedin.com/in/jewel-shaji-108653307/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
