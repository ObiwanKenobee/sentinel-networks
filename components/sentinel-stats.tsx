"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, AlertTriangle, Thermometer, Satellite, Activity } from "lucide-react"

interface SentinelStatsProps {
  activeThreats: number
  sentinelCount: number
  globalTemp: number
}

export function SentinelStats({ activeThreats, sentinelCount, globalTemp }: SentinelStatsProps) {
  return (
    <div className="space-y-4">
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center space-x-2 text-lg">
            <Shield className="h-5 w-5 text-amber-500" />
            <span>Network Overview</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <motion.div
            key={sentinelCount}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-between"
          >
            <div className="flex items-center space-x-2">
              <Satellite className="h-4 w-4 text-blue-400" />
              <span className="text-sm text-slate-300">Active Sentinels</span>
            </div>
            <span className="text-xl font-bold text-white">{sentinelCount.toLocaleString()}</span>
          </motion.div>

          <motion.div
            key={activeThreats}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-between"
          >
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-4 w-4 text-red-400" />
              <span className="text-sm text-slate-300">Active Threats</span>
            </div>
            <Badge variant={activeThreats > 15 ? "destructive" : activeThreats > 10 ? "secondary" : "default"}>
              {activeThreats}
            </Badge>
          </motion.div>

          <motion.div
            key={globalTemp}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-between"
          >
            <div className="flex items-center space-x-2">
              <Thermometer className="h-4 w-4 text-orange-400" />
              <span className="text-sm text-slate-300">Global Temp</span>
            </div>
            <span className="text-lg font-semibold text-white">{globalTemp.toFixed(1)}°C</span>
          </motion.div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Activity className="h-4 w-4 text-green-400" />
              <span className="text-sm text-slate-300">Network Health</span>
            </div>
            <Badge className="bg-green-500 text-white">98.7%</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
