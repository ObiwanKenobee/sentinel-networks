"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Shield, Zap, Eye } from "lucide-react"

export function ThreatMap() {
  const threats = [
    {
      id: 1,
      type: "Climate",
      location: "Arctic Ocean",
      severity: "High",
      description: "Unusual ice melting patterns detected",
      time: "2 minutes ago",
      icon: AlertTriangle,
      color: "text-red-500",
    },
    {
      id: 2,
      type: "Cyber",
      location: "Eastern Europe",
      severity: "Medium",
      description: "Increased network intrusion attempts",
      time: "15 minutes ago",
      icon: Shield,
      color: "text-yellow-500",
    },
    {
      id: 3,
      type: "Misinformation",
      location: "Global",
      severity: "High",
      description: "Coordinated disinformation campaign",
      time: "1 hour ago",
      icon: Eye,
      color: "text-red-500",
    },
    {
      id: 4,
      type: "Environmental",
      location: "Amazon Basin",
      severity: "Medium",
      description: "Deforestation rate spike detected",
      time: "3 hours ago",
      icon: Zap,
      color: "text-orange-500",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {threats.map((threat) => {
        const IconComponent = threat.icon
        return (
          <Card key={threat.id} className="bg-slate-800/50 border-slate-700">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <IconComponent className={`h-5 w-5 ${threat.color}`} />
                  <CardTitle className="text-lg">{threat.type} Threat</CardTitle>
                </div>
                <Badge variant={threat.severity === "High" ? "destructive" : "secondary"}>{threat.severity}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm text-slate-300">{threat.description}</p>
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>{threat.location}</span>
                  <span>{threat.time}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
