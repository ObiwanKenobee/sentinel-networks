"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Shield, Play, ArrowRight } from "lucide-react"
import Link from "next/link"
import { HeroSection } from "@/components/hero-section"
import { TimelineSection } from "@/components/timeline-section"
import { ModulesSection } from "@/components/modules-section"
import { TechStackSection } from "@/components/tech-stack-section"

export default function HomePage() {
  const [currentYear, setCurrentYear] = useState(2025)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentYear((prev) => {
        if (prev >= 2100) return 1431
        if (prev === 1431) return 2025
        return prev + 25
      })
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-amber-500/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-amber-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Carpathian Sentinel
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="#modules" className="hover:text-amber-400 transition-colors">
              Modules
            </Link>
            <Link href="#timeline" className="hover:text-amber-400 transition-colors">
              Timeline
            </Link>
            <Link href="/dashboard" className="hover:text-amber-400 transition-colors">
              Dashboard
            </Link>
            <Button
              variant="outline"
              className="border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-black bg-transparent"
            >
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection currentYear={currentYear} />

      {/* Timeline Section */}
      <TimelineSection />

      {/* Modules Section */}
      <ModulesSection />

      {/* Tech Stack Section */}
      <TechStackSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-900/20 to-orange-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Join the Sentinel Network
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              From watchtowers to satellites, from signal fires to AI truth-beacons. Be part of humanity's greatest
              foresight network.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black">
                <Play className="mr-2 h-5 w-5" />
                Start Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-black bg-transparent"
              >
                <Link href="/dashboard" className="flex items-center">
                  View Live Dashboard
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-6 w-6 text-amber-500" />
                <span className="font-bold text-amber-400">Carpathian Sentinel</span>
              </div>
              <p className="text-slate-400 text-sm">
                Planetary foresight through centuries of wisdom and cutting-edge technology.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-amber-400">Platform</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <Link href="#" className="hover:text-amber-400">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-400">
                    Signal Lab
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-400">
                    Knowledge Vault
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-400">
                    API Hub
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-amber-400">Resources</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <Link href="#" className="hover:text-amber-400">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-400">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-400">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-400">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-amber-400">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <Link href="#" className="hover:text-amber-400">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-400">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-400">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-400">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-400 text-sm">
            <p>&copy; 2025 Carpathian Sentinel Network. Bridging centuries of foresight.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
