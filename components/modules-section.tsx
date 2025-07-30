"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Globe, Brain, Database, Users, Code, Lock, ArrowRight } from "lucide-react"

export function ModulesSection() {
  const modules = [
    {
      icon: Lock,
      title: "Authentication & Identity Layer",
      description: "Decentralized identity management with biometric login and Web3 wallet integration.",
      features: ["Decentralized ID (DID)", "Biometric Authentication", "Web3 Wallet Support", "Multi-factor Security"],
      tech: ["AWS Cognito", "Ceramic", "Polygon ID"],
      status: "Live",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Globe,
      title: "Global Sentinel Dashboard",
      description: "Real-time 3D globe visualization showing sentinel drone data and threat detection heatmaps.",
      features: ["3D Earth Visualization", "Real-time Data Streams", "Threat Heatmaps", "Predictive Analytics"],
      tech: ["CesiumJS", "AWS Lambda", "DynamoDB"],
      status: "Live",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: Brain,
      title: "Signal Lab",
      description: "AI-driven insights running simulations based on historic and modern data patterns.",
      features: ["Scenario Forecasting", "Truth Verification", "Pattern Recognition", "Predictive Modeling"],
      tech: ["OpenAI", "Vertex AI", "BigQuery"],
      status: "Beta",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Database,
      title: "Knowledge Vault",
      description: "Distributed blockchain ledger storing cultural blueprints and counter-misinformation narratives.",
      features: ["Immutable Storage", "Cultural Archives", "Truth Verification", "Decentralized Access"],
      tech: ["IPFS", "Filecoin", "Ethereum"],
      status: "Development",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Users,
      title: "Community Workspace",
      description: "Collaborative workspaces with multilingual chat and VR-ready planning boards.",
      features: ["Real-time Collaboration", "Multilingual Support", "VR Integration", "Global Teams"],
      tech: ["Liveblocks", "Supabase", "WebRTC"],
      status: "Beta",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: Code,
      title: "API & Developer Hub",
      description: "Comprehensive API access to sentinel data streams and predictive modeling tools.",
      features: ["Data Stream APIs", "Predictive Models", "Sensor Protocols", "Tiered Pricing"],
      tech: ["GraphQL", "REST APIs", "WebSocket"],
      status: "Live",
      color: "from-red-500 to-orange-500",
    },
  ]

  return (
    <section id="modules" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            Platform Modules
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Six interconnected modules that form the backbone of the Carpathian Sentinel Network, each designed to scale
            from Earth to the stars.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => {
            const IconComponent = module.icon

            return (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full bg-slate-800/50 border-slate-700 hover:border-amber-500/40 transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${module.color} bg-opacity-20`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <Badge
                        variant={
                          module.status === "Live" ? "default" : module.status === "Beta" ? "secondary" : "outline"
                        }
                        className={
                          module.status === "Live"
                            ? "bg-green-500 text-white"
                            : module.status === "Beta"
                              ? "bg-amber-500 text-black"
                              : "border-slate-500 text-slate-400"
                        }
                      >
                        {module.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-white group-hover:text-amber-400 transition-colors">
                      {module.title}
                    </CardTitle>
                    <CardDescription className="text-slate-300">{module.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold text-amber-400 mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {module.features.map((feature, i) => (
                          <li key={i} className="flex items-center space-x-2 text-sm text-slate-300">
                            <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-amber-400 mb-3">Technology Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {module.tech.map((tech, i) => (
                          <Badge key={i} variant="outline" className="border-slate-600 text-slate-400 text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      className="w-full border-amber-500/20 text-amber-400 hover:bg-amber-500 hover:text-black group-hover:border-amber-500 bg-transparent"
                    >
                      Explore Module
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
