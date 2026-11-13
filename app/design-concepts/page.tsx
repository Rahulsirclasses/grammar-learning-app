import HeroConcept1 from "@/components/hero-concepts/hero-concept-1"
import HeroConcept2 from "@/components/hero-concepts/hero-concept-2"
import HeroConcept3 from "@/components/hero-concepts/hero-concept-3"
import HeroConcept4 from "@/components/hero-concepts/hero-concept-4"
import HeroConcept5 from "@/components/hero-concepts/hero-concept-5"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function DesignConceptsPage() {
  return (
    <div>
      <div className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b">
        <div className="container mx-auto flex items-center justify-between p-4">
          <Link
            href="/"
            className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to home
          </Link>
          <h1 className="text-lg font-semibold">Alternative Hero Design Concepts</h1>
        </div>
      </div>

      <div className="space-y-8 pb-20">
        <div className="pt-10 pb-4 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-2">Concept 1: Immersive Video Background</h2>
            <p className="text-muted-foreground mb-4">
              Full-screen video background with parallax floating elements and centered content layout.
            </p>
          </div>
        </div>
        <HeroConcept1 />

        <div className="pt-10 pb-4 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-2">Concept 2: Split Screen with 3D Elements</h2>
            <p className="text-muted-foreground mb-4">
              Two-column layout with interactive 3D elements and feature tabs in a clean, minimal design.
            </p>
          </div>
        </div>
        <HeroConcept2 />

        <div className="pt-10 pb-4 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-2">Concept 3: Interactive Quiz Showcase</h2>
            <p className="text-muted-foreground mb-4">
              Demonstrates the product's functionality with an interactive grammar quiz directly in the hero section.
            </p>
          </div>
        </div>
        <HeroConcept3 />

        <div className="pt-10 pb-4 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-2">Concept 4: Parallax Scrolling Experience</h2>
            <p className="text-muted-foreground mb-4">
              Scroll-based parallax effects that reveal content as the user scrolls down the page.
            </p>
          </div>
        </div>
        <HeroConcept4 />

        <div className="pt-10 pb-4 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-2">Concept 5: Morphing 3D Feature Cards</h2>
            <p className="text-muted-foreground mb-4">
              3D card interface that rotates to showcase different features with smooth animations.
            </p>
          </div>
        </div>
        <HeroConcept5 />
      </div>
    </div>
  )
}
