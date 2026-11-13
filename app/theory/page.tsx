import { redirect } from "next/navigation"

// Redirect from /theory to /theory/parts-of-speech as the default topic
export default function TheoryPage() {
  redirect("/theory/parts-of-speech")
}
