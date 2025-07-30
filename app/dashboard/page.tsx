"use client"

import { useState, useEffect, Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, Html } from "@react-three/drei"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, Globe, Activity, AlertTriangle, Thermometer, Wind, Droplets, Zap, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { EarthGlobe } from "@/components/earth-globe"
import { SentinelStats } from "@/components/sentinel-stats"
import { ThreatMap } from "@/components/threat-map"

export default function DashboardPage() {
  const [activeThreats, setActiveThreats] = useState(12)
  const [sentinelCount, setSentinelCount] = useState(1247)
  const [globalTemp, setGlobalTemp] = useState(15.2)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveThreats((prev) => prev + Math.floor(Math.random() * 3) - 1)
      setSentinelCount((prev) => prev + Math.floor(Math.random() * 5) - 2)
      setGlobalTemp((prev) => prev + (Math.random() - 0.5) * 0.1)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2 text-amber-400 hover:text-amber-300">
                <ArrowLeft className="h-5 w-5" />
                <span>Back to Home</span>
              </Link>
              <div className="h-6 w-px bg-slate-700" />
              <div className="flex items-center space-x-2">
                <Shield className="h-8 w-8 text-amber-500" />
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                    Sentinel Dashboard
                  </h1>
                  <p className="text-xs text-slate-400">Global Monitoring Network</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-green-500 text-white">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse mr-2" />
                Live
              </Badge>
              <Button variant="outline" className="border-amber-500 text-amber-400 bg-transparent">
                Settings
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Globe View */}
          <div className="lg:col-span-2">
            <Card className="bg-slate-800/50 border-slate-700 h-[600px]">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="h-6 w-6 text-amber-500" />
                  <span>Global Sentinel Network</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="h-full p-0">
                <div className="h-full w-full">
                  <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                    <Suspense
                      fallback={
                        <Html center>
                          <div className="text-white">Loading Earth...</div>
                        </Html>
                      }
                    >
                      <Environment preset="space" />
                      <EarthGlobe />
                      <OrbitControls
                        enablePan={false}
                        enableZoom={true}
                        enableRotate={true}
                        minDistance={3}
                        maxDistance={10}
                      />
                    </Suspense>
                  </Canvas>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats Panel */}
          <div className="space-y-6">
            <SentinelStats activeThreats={activeThreats} sentinelCount={sentinelCount} globalTemp={globalTemp} />

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Activity className="h-5 w-5 text-amber-500" />
                  <span>System Status</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-300">Network Health</span>
                  <Badge className="bg-green-500 text-white">Optimal</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-300">AI Processing</span>
                  <Badge className="bg-blue-500 text-white">Active</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-300">Data Sync</span>
                  <Badge className="bg-green-500 text-white">Real-time</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-300">Blockchain</span>
                  <Badge className="bg-purple-500 text-white">Synced</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5 text-amber-500" />
                  <span>Recent Alerts</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2" />
                  <div>
                    <p className="text-sm text-white">Climate anomaly detected</p>
                    <p className="text-xs text-slate-400">Pacific Ocean - 2 min ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2" />
                  <div>
                    <p className="text-sm text-white">Misinformation spike</p>
                    <p className="text-xs text-slate-400">Social networks - 15 min ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                  <div>
                    <p className="text-sm text-white">New sentinel online</p>
                    <p className="text-xs text-slate-400">Northern Canada - 1 hour ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Detailed Analytics */}
        <div className="mt-8">
          <Tabs defaultValue="climate" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-slate-800">
              <TabsTrigger value="climate">Climate</TabsTrigger>
              <TabsTrigger value="threats">Threats</TabsTrigger>
              <TabsTrigger value="network">Network</TabsTrigger>
              <TabsTrigger value="predictions">Predictions</TabsTrigger>
            </TabsList>

            <TabsContent value="climate" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3">
                      <Thermometer className="h-8 w-8 text-red-500" />
                      <div>
                        <p className="text-2xl font-bold text-white">{globalTemp.toFixed(1)}°C</p>
                        <p className="text-sm text-slate-400">Global Average</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3">
                      <Wind className="h-8 w-8 text-blue-500" />
                      <div>
                        <p className="text-2xl font-bold text-white">12.4 m/s</p>
                        <p className="text-sm text-slate-400">Wind Speed</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3">
                      <Droplets className="h-8 w-8 text-cyan-500" />
                      <div>
                        <p className="text-2xl font-bold text-white">68%</p>
                        <p className="text-sm text-slate-400">Humidity</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3">
                      <Zap className="h-8 w-8 text-yellow-500" />
                      <div>
                        <p className="text-2xl font-bold text-white">1,247</p>
                        <p className="text-sm text-slate-400">Lightning Strikes</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="threats" className="mt-6">
              <ThreatMap />
            </TabsContent>

            <TabsContent value="network" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle>Network Coverage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">North America</span>
                        <span className="text-green-400">98.7%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">Europe</span>
                        <span className="text-green-400">97.2%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">Asia</span>
                        <span className="text-yellow-400">89.4%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">Africa</span>
                        <span className="text-orange-400">76.8%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle>Active Sentinels</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">Ground Stations</span>
                        <span className="text-white">847</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">Satellites</span>
                        <span className="text-white">234</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">Drones</span>
                        <span className="text-white">166</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">Total Active</span>
                        <span className="text-amber-400 font-bold">{sentinelCount}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="predictions" className="mt-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle>AI Predictions & Forecasts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-amber-400">Climate Forecasts</h4>
                      <div className="space-y-3">
                        <div className="p-3 bg-slate-700/50 rounded-lg">
                          <p className="text-sm text-white">Temperature increase likely in Arctic regions</p>
                          <p className="text-xs text-slate-400">Confidence: 87% • Next 30 days</p>
                        </div>
                        <div className="p-3 bg-slate-700/50 rounded-lg">
                          <p className="text-sm text-white">Unusual precipitation patterns detected</p>
                          <p className="text-xs text-slate-400">Confidence: 92% • Next 14 days</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-amber-400">Threat Analysis</h4>
                      <div className="space-y-3">
                        <div className="p-3 bg-slate-700/50 rounded-lg">
                          <p className="text-sm text-white">Misinformation campaign detected</p>
                          <p className="text-xs text-slate-400">Confidence: 94% • Active now</p>
                        </div>
                        <div className="p-3 bg-slate-700/50 rounded-lg">
                          <p className="text-sm text-white">Cyber threat level elevated</p>
                          <p className="text-xs text-slate-400">Confidence: 78% • Next 7 days</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
