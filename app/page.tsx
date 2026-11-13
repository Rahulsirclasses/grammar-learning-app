import Link from "next/link"
import { redirect } from "next/navigation"
import { createClient } from "@/lib/mongodb/server"
import SimpleHero from "@/components/hero-sections/simple-hero"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  CheckCircle,
  BarChart3,
  Award,
  Clock,
  Users,
  ArrowRight,
  Sparkles,
  Shield,
  Play,
  ChevronRight,
} from "lucide-react"

export default async function Home() {
  const dbClient = await createClient()
  const {
    data: { user },
  } = await dbClient.auth.getUser()

  if (user) {
    redirect("/dashboard")
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b sticky top-0 bg-background/80 backdrop-blur-md z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img
              src="https://i.ibb.co/2042BM6H/R-copy.png"
              alt="Rahulsirclasses Logo"
              className="h-12 w-auto object-contain"
            />
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/theory" className="text-sm font-medium hover:text-primary transition-colors">
              Theory
            </Link>
            <Link href="/practice" className="text-sm font-medium hover:text-primary transition-colors">
              Practice
            </Link>
            <Link href="/mock-tests" className="text-sm font-medium hover:text-primary transition-colors">
              Mock Tests
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="outline" size="sm">
                Log in
              </Button>
            </Link>
            <Link href="/login">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      <main>
        <SimpleHero />

        {/* Enhanced Features Section */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <Badge
                variant="outline"
                className="mb-4 px-4 py-2 border-primary/30 bg-primary/5 text-primary rounded-full"
              >
                <Sparkles className="h-4 w-4 mr-2" />
                Platform Features
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Why Choose Grammar Pro?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Our comprehensive platform is designed by experts to help you excel in competitive exams through
                targeted practice and clear explanations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <EnhancedFeatureCard
                icon={<BookOpen className="h-8 w-8" />}
                title="Comprehensive Theory"
                description="Clear explanations of grammar concepts with examples and common mistakes to avoid."
                color="blue"
              />
              <EnhancedFeatureCard
                icon={<CheckCircle className="h-8 w-8" />}
                title="Practice Exercises"
                description="Thousands of practice questions across multiple formats to reinforce your learning."
                color="green"
              />
              <EnhancedFeatureCard
                icon={<Award className="h-8 w-8" />}
                title="Mock Tests"
                description="Full-length mock tests that simulate the actual exam environment and difficulty."
                color="purple"
              />
              <EnhancedFeatureCard
                icon={<BarChart3 className="h-8 w-8" />}
                title="Performance Tracking"
                description="Detailed analytics to track your progress and identify areas for improvement."
                color="amber"
              />
              <EnhancedFeatureCard
                icon={<Clock className="h-8 w-8" />}
                title="Daily Practice"
                description="Short daily exercises to build consistency and reinforce learning over time."
                color="pink"
              />
              <EnhancedFeatureCard
                icon={<Users className="h-8 w-8" />}
                title="Community Learning"
                description="Compare your progress with peers and participate in the leaderboard challenges."
                color="cyan"
              />
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
          {/* Background effects */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.3),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <Badge variant="outline" className="mb-6 px-4 py-2 border-white/30 bg-white/10 text-white rounded-full">
                <Sparkles className="h-4 w-4 mr-2" />
                Get Started Today
              </Badge>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Ready to Master English Grammar?
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                Join Grammar Pro today and take the first step towards achieving your dream score in competitive exams.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link href="/login">
                  <Button size="lg" variant="secondary" className="font-semibold w-full sm:w-auto group">
                    Get Started for Free
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/theory">
                  <Button
                    size="lg"
                    variant="outline"
                    className="font-semibold border-white/30 text-white hover:bg-white/10 w-full sm:w-auto group bg-transparent"
                  >
                    <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                    Explore Lessons
                  </Button>
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center items-center gap-8 text-white/60">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  <span className="text-sm">Free to start</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  <span className="text-sm">Secure platform</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  <span className="text-sm">10,000+ students</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="h-12 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">R</span>
                </div>
                <span className="font-bold text-xl">Rahulsirclasses</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Helping students master English grammar for competitive exams since 2010. Your success is our mission.
              </p>
              <div className="flex gap-4">{/* Social media icons would go here */}</div>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-lg">Quick Links</h4>
              <div className="flex flex-col gap-3">
                <FooterLink href="/login" text="Dashboard" />
                <FooterLink href="/theory" text="Theory" />
                <FooterLink href="/practice" text="Practice" />
                <FooterLink href="/mock-tests" text="Mock Tests" />
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-lg">Resources</h4>
              <div className="flex flex-col gap-3">
                <FooterLink href="#" text="Blog" />
                <FooterLink href="#" text="Success Stories" />
                <FooterLink href="#" text="FAQ" />
                <FooterLink href="#" text="Support" />
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-lg">Contact</h4>
              <div className="flex flex-col gap-3">
                <p className="text-gray-400">Email: contact@rahulsirclasses.com</p>
                <p className="text-gray-400">Phone: +91 98765 43210</p>
                <p className="text-gray-400">Available: Mon-Sat, 9AM-6PM</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} Rahulsirclasses. All rights reserved.
            </div>

            <div className="flex gap-6">
              <FooterLink href="#" text="Privacy Policy" />
              <FooterLink href="#" text="Terms of Service" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function EnhancedFeatureCard({ icon, title, description, color }) {
  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 text-blue-600",
      green: "from-green-500 to-green-600 text-green-600",
      purple: "from-purple-500 to-purple-600 text-purple-600",
      amber: "from-amber-500 to-amber-600 text-amber-600",
      pink: "from-pink-500 to-pink-600 text-pink-600",
      cyan: "from-cyan-500 to-cyan-600 text-cyan-600",
    }
    return colors[color] || colors.blue
  }

  const colorClasses = getColorClasses(color)

  return (
    <Card className="group border border-border/40 shadow-sm hover:shadow-xl transition-all duration-500 hover:border-primary/20 hover:-translate-y-2">
      <CardContent className="p-8">
        <div
          className={`mb-6 p-4 bg-gradient-to-r ${colorClasses.split(" ")[0]} ${colorClasses.split(" ")[1]} rounded-xl w-fit group-hover:scale-110 transition-transform duration-300`}
        >
          <div className="text-white">{icon}</div>
        </div>
        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
        <div className="mt-4 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Learn more <ChevronRight className="h-4 w-4 ml-1" />
        </div>
      </CardContent>
    </Card>
  )
}

function FooterLink({ href, text }: { href: string; text: string }) {
  return (
    <Link href={href} className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group">
      {text}
      <ChevronRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </Link>
  )
}
