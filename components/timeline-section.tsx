"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Castle, Shield, Satellite, Rocket, Brain, Globe } from "lucide-react"

export function TimelineSection() {
  const timelineEvents = [
    {
      year: "1431",
      icon: Castle,
      title: "The First Sentinels",
      description:
        "Vlad Dracul establishes the first organized watchtower network across the Carpathian Mountains. Signal fires and mounted messengers create the foundation of early warning systems.",
      achievements: ["50+ Watchtowers Built", "Regional Communication Network", "Threat Detection System"],
    },
    {
      year: "1600s",
      icon: Shield,
      title: "The Great Expansion",
      description:
        "The sentinel network expands across Eastern Europe. Advanced signaling techniques and coded messages enable complex communication across vast distances.",
      achievements: ["Cross-Border Networks", "Encrypted Communications", "Trade Route Protection"],
    },
    {
      year: "2025",
      icon: Brain,
      title: "Digital Renaissance",
      description:
        "AI-powered sentinel networks emerge, combining historical wisdom with modern technology. Real-time global monitoring begins with climate and misinformation detection.",
      achievements: ["AI Integration", "Global Coverage", "Real-time Analysis"],
    },
    {
      year: "2050",
      icon: Satellite,
      title: "Orbital Sentinels",
      description:
        "Satellite constellation deployment creates the first space-based sentinel network. Earth monitoring reaches unprecedented precision and coverage.",
      achievements: ["Satellite Network", "Space-based Monitoring", "Quantum Communications"],
    },
    {
      year: "2075",
      icon: Globe,
      title: "Planetary Defense",
      description:
        "Integration with Mars colonies begins. The network evolves to protect multiple worlds, monitoring asteroid threats and interplanetary communications.",
      achievements: ["Multi-planetary Network", "Asteroid Detection", "Colony Protection"],
    },
    {
      year: "2100",
      icon: Rocket,
      title: "Interstellar Guardians",
      description:
        "The Carpathian Sentinel Network becomes humanity's first interstellar early warning system, protecting our species across multiple star systems.",
      achievements: ["Interstellar Reach", "Species Protection", "Galactic Network"],
    },
  ]

  return (
    <section id="timeline" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            Evolution of Vigilance
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            From medieval watchtowers to interstellar guardians, witness the continuous evolution of humanity's greatest
            early warning network.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-500 via-orange-500 to-red-500 rounded-full" />

          <div className="space-y-16">
            {timelineEvents.map((event, index) => {
              const IconComponent = event.icon
              const isLeft = index % 2 === 0

              return (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`flex items-center ${isLeft ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className={`w-1/2 ${isLeft ? "pr-8" : "pl-8"}`}>
                    <Card className="bg-slate-800/50 border-amber-500/20 hover:border-amber-500/40 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-3 mb-4">
                          <IconComponent className="h-8 w-8 text-amber-500" />
                          <Badge variant="outline" className="border-amber-500 text-amber-400">
                            {event.year}
                          </Badge>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">{event.title}</h3>
                        <p className="text-slate-300 mb-4 leading-relaxed">{event.description}</p>
                        <div className="space-y-2">
                          {event.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-amber-500 rounded-full" />
                              <span className="text-sm text-slate-400">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline Node */}
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center border-4 border-slate-950">
                      <IconComponent className="h-8 w-8 text-black" />
                    </div>
                  </div>

                  <div className="w-1/2" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
