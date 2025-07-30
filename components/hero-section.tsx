"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Castle, Rocket, Shield, ArrowRight } from "lucide-react"
import Link from "next/link"

interface HeroSectionProps {
  currentYear: number
}

export function HeroSection({ currentYear }: HeroSectionProps) {
  const getYearContent = (year: number) => {
    switch (year) {
      case 1431:
        return {
          icon: Castle,
          title: "The First Watchtowers",
          subtitle: "Carpathian Sentinels Guard the Realm",
          description:
            "From the peaks of Transylvania, brave sentinels lit signal fires to warn of approaching threats. Their vigilance protected entire kingdoms.",
          image: "/placeholder.svg?height=400&width=600",
        }
      case 2025:
        return {
          icon: Shield,
          title: "Digital Sentinel Network",
          subtitle: "AI-Powered Global Monitoring",
          description:
            "Modern technology meets ancient wisdom. Real-time threat detection, climate monitoring, and truth verification across the globe.",
          image: "/placeholder.svg?height=400&width=600",
        }
      default:
        return {
          icon: Rocket,
          title: "Interplanetary Sentinels",
          subtitle: "Guardians of Multiple Worlds",
          description:
            "The network expands beyond Earth. Quantum-powered sentinels monitor Mars colonies and deep space, ensuring humanity's survival among the stars.",
          image: "/placeholder.svg?height=400&width=600",
        }
    }
  }

  const content = getYearContent(currentYear)
  const IconComponent = content.icon

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-10">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 via-transparent to-orange-900/10" />
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Content */}
        <motion.div
          key={currentYear}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="flex items-center space-x-3">
            <IconComponent className="h-8 w-8 text-amber-500" />
            <Badge variant="outline" className="border-amber-500 text-amber-400 text-lg px-4 py-1">
              {currentYear}
            </Badge>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                {content.title}
              </span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-slate-300 font-light">{content.subtitle}</h2>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">{content.description}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold">
              <Link href="/dashboard" className="flex items-center">
                Launch Dashboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-black bg-transparent"
            >
              Explore Timeline
            </Button>
          </div>

          <div className="flex items-center space-x-8 text-sm text-slate-400">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Live Monitoring</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span>Global Network</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
              <span>AI-Powered</span>
            </div>
          </div>
        </motion.div>

        {/* Visual */}
        <motion.div
          key={`image-${currentYear}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden border border-amber-500/20 shadow-2xl">
            <img src={content.image || "/placeholder.svg"} alt={content.title} className="w-full h-96 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center justify-between text-white">
                <span className="text-sm font-medium">Sentinel Network Status</span>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm">Active</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <motion.div
            className="absolute -top-4 -right-4 bg-amber-500/10 backdrop-blur-sm border border-amber-500/20 rounded-lg p-3"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <IconComponent className="h-6 w-6 text-amber-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
