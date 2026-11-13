import { PWAInstallPrompt } from "@/components/pwa-install";
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { BookmarkProvider } from "@/contexts/bookmark-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "CAT Grammar",
  },
  title: "Grammar Pro - by Rahul Sir Classes",
  description: "Learn English grammar for competitive exams like CAT and GMAT",
  generator: 'v0.app'
}

import { Toaster } from "@/components/ui/sonner"

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <BookmarkProvider>
          {children}
        </BookmarkProvider>
        <Toaster closeButton position="top-right" richColors />
        <PWAInstallPrompt appName="CAT Grammar" themeGradient="from-violet-500 to-purple-600" />
      </body>
    </html>
  )
}

