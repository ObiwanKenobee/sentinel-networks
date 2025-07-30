"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cloud, Database, Cpu, Shield, Zap, Globe, Layers, Network } from "lucide-react"

export function TechStackSection() {
  const techCategories = [
    {
      icon: Layers,
      title: "Frontend & UI",
      description: "Modern, responsive interfaces built for global accessibility",
      technologies: [
        { name: "React + TypeScript", status: "Primary" },
        { name: "Vite", status: "Build Tool" },
        { name: "Tailwind CSS", status: "Styling" },
        { name: "Three.js / R3F", status: "3D Graphics" },
        { name: "Framer Motion", status: "Animations" },
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Scalable, globally distributed cloud architecture",
      technologies: [
        { name: "AWS Lambda", status: "Serverless" },
        { name: "Vercel", status: "Deployment" },
        { name: "CloudFlare", status: "CDN" },
        { name: "Google Cloud Run", status: "Containers" },
        { name: "Kubernetes", status: "Orchestration" },
      ],
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: Database,
      title: "Data & Storage",
      description: "Distributed data systems for real-time global operations",
      technologies: [
        { name: "DynamoDB", status: "NoSQL" },
        { name: "BigQuery", status: "Analytics" },
        { name: "S3", status: "Object Storage" },
        { name: "Redis", status: "Caching" },
        { name: "IPFS", status: "Distributed" },
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Cpu,
      title: "AI & Machine Learning",
      description: "Advanced AI systems for prediction and analysis",
      technologies: [
        { name: "OpenAI GPT", status: "Language Models" },
        { name: "Vertex AI", status: "ML Platform" },
        { name: "TensorFlow", status: "Deep Learning" },
        { name: "Hugging Face", status: "Model Hub" },
        { name: "LangChain", status: "AI Orchestration" },
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Shield,
      title: "Blockchain & Security",
      description: "Decentralized systems for trust and verification",
      technologies: [
        { name: "Ethereum", status: "Smart Contracts" },
        { name: "Polygon", status: "Layer 2" },
        { name: "Ceramic", status: "Decentralized Data" },
        { name: "Web3Auth", status: "Authentication" },
        { name: "Filecoin", status: "Storage" },
      ],
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: Network,
      title: "Real-time & Communication",
      description: "Global real-time communication and collaboration",
      technologies: [
        { name: "WebRTC", status: "P2P Communication" },
        { name: "Socket.io", status: "Real-time" },
        { name: "Liveblocks", status: "Collaboration" },
        { name: "Agora", status: "Voice/Video" },
        { name: "GraphQL", status: "API Layer" },
      ],
      color: "from-red-500 to-orange-500",
    },
  ]

  return (
    <section className="py-20 bg-slate-900/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            Technology Stack
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Built on cutting-edge technologies that scale from Earth to Mars and beyond. Every component chosen for
            reliability, performance, and future expansion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => {
            const IconComponent = category.icon

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full bg-slate-800/50 border-slate-700 hover:border-amber-500/40 transition-all duration-300 group">
                  <CardHeader>
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color} bg-opacity-20 w-fit mb-4`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-white group-hover:text-amber-400 transition-colors">
                      {category.title}
                    </CardTitle>
                    <p className="text-slate-300 text-sm">{category.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {category.technologies.map((tech, i) => (
                        <div key={i} className="flex items-center justify-between">
                          <span className="text-slate-300 text-sm font-medium">{tech.name}</span>
                          <Badge variant="outline" className="border-slate-600 text-slate-400 text-xs">
                            {tech.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Future Tech Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-amber-900/20 to-orange-900/20 border-amber-500/30">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-amber-400 mb-4">Future Technologies (2100-Ready)</CardTitle>
              <p className="text-slate-300">Preparing for the next frontier of human expansion</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <Zap className="h-8 w-8 text-amber-500 mx-auto" />
                  <h4 className="font-semibold text-white">Quantum Computing</h4>
                  <p className="text-sm text-slate-400">
                    Advanced simulation capabilities for complex scenario modeling
                  </p>
                </div>
                <div className="space-y-2">
                  <Network className="h-8 w-8 text-amber-500 mx-auto" />
                  <h4 className="font-semibold text-white">Interplanetary Mesh</h4>
                  <p className="text-sm text-slate-400">Earth-Mars data routing protocols for multi-world operations</p>
                </div>
                <div className="space-y-2">
                  <Globe className="h-8 w-8 text-amber-500 mx-auto" />
                  <h4 className="font-semibold text-white">Autonomous Drones</h4>
                  <p className="text-sm text-slate-400">
                    Self-organizing sentinel drone networks with 5G/6G integration
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
