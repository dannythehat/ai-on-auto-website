'use client'

import { Bot, Workflow, BarChart3, Zap, ArrowRight, Clock, DollarSign, Users } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: <Bot className="h-8 w-8" />,
      title: "AI Workflow Automation",
      description: "Custom AI-powered workflows that handle repetitive tasks, data processing, and decision-making automatically.",
      features: ["Smart data processing", "Automated decision trees", "Multi-platform integration", "Real-time monitoring"],
      price: "From $2,997",
      color: "primary"
    },
    {
      icon: <Workflow className="h-8 w-8" />,
      title: "Business Process Optimization",
      description: "Streamline your operations with intelligent process mapping, bottleneck identification, and automated solutions.",
      features: ["Process mapping", "Bottleneck analysis", "Efficiency optimization", "Performance tracking"],
      price: "From $1,997",
      color: "accent"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "AI Analytics & Insights",
      description: "Transform your data into actionable insights with AI-powered analytics, reporting, and predictive modeling.",
      features: ["Predictive analytics", "Custom dashboards", "Automated reporting", "Data visualization"],
      price: "From $1,497",
      color: "purple"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Rapid Deployment Solutions",
      description: "Get up and running fast with our pre-built automation templates and rapid deployment methodology.",
      features: ["Pre-built templates", "Quick setup", "Immediate ROI", "Ongoing support"],
      price: "From $997",
      color: "orange"
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      primary: "text-primary-600 bg-primary-50 border-primary-200 hover:bg-primary-100",
      accent: "text-accent-600 bg-accent-50 border-accent-200 hover:bg-accent-100",
      purple: "text-purple-600 bg-purple-50 border-purple-200 hover:bg-purple-100",
      orange: "text-orange-600 bg-orange-50 border-orange-200 hover:bg-orange-100"
    }
    return colors[color as keyof typeof colors] || colors.primary
  }

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-max">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Automation Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From simple task automation to complex AI-driven workflows, we deliver solutions 
            that transform how your business operates.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="card p-8 group">
              <div className={`inline-flex p-3 rounded-lg mb-6 ${getColorClasses(service.color)}`}>
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-accent-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-gray-900">{service.price}</div>
                <button className="flex items-center text-primary-600 hover:text-primary-700 font-semibold group-hover:translate-x-1 transition-transform">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Value proposition */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Why Choose AI-on-Auto?</h3>
              <p className="text-primary-100 mb-6 text-lg">
                We don't just build automation - we transform your entire business operation 
                with intelligent, scalable solutions that grow with you.
              </p>
              <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
                Schedule Consultation
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <Clock className="h-12 w-12 mx-auto mb-3 text-primary-200" />
                <div className="text-2xl font-bold mb-1">2-5 Days</div>
                <div className="text-primary-200 text-sm">Average Setup</div>
              </div>
              <div className="text-center">
                <DollarSign className="h-12 w-12 mx-auto mb-3 text-primary-200" />
                <div className="text-2xl font-bold mb-1">60%</div>
                <div className="text-primary-200 text-sm">Cost Reduction</div>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 mx-auto mb-3 text-primary-200" />
                <div className="text-2xl font-bold mb-1">100+</div>
                <div className="text-primary-200 text-sm">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}