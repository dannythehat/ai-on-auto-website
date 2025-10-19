'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, Bot, Zap, TrendingUp, CheckCircle } from 'lucide-react'

export default function Hero() {
  const [currentText, setCurrentText] = useState(0)
  
  const heroTexts = [
    "AI Automation Experts",
    "Workflow Optimization",
    "Business Intelligence",
    "Process Automation"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const benefits = [
    "Save 40+ hours per week",
    "Reduce operational costs by 60%",
    "Scale without hiring",
    "24/7 automated workflows"
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main headline */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Transform Your Business with{' '}
              <span className="text-gradient block mt-2">
                {heroTexts[currentText]}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We build intelligent automation systems that scale your business, 
              eliminate repetitive tasks, and unlock exponential growth through AI-powered workflows.
            </p>
          </div>

          {/* Benefits grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center justify-center space-x-2 bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <CheckCircle className="h-5 w-5 text-accent-500 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="btn-primary group">
              Start Your Automation Journey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-secondary">
              View Case Studies
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <Bot className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
                <div className="text-gray-600">Workflows Automated</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <TrendingUp className="h-12 w-12 text-accent-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">10x</div>
                <div className="text-gray-600">Productivity Increase</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <Zap className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
                <div className="text-gray-600">Automated Operations</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}