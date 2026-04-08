'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function MomentsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const moments = [
    {
      title: 'Birthday Celebrations',
      description: 'Create unforgettable birthday memories in our luxurious villa',
      image: '/images/birthday.jpeg',
      icon: '🎂',
      gradient: 'from-pink-400 to-rose-500'
    },
    {
      title: 'Corporate Events',
      description: 'Professional gatherings with stunning poolside views',
      image: '/images/PoolLaw.jpeg',
      icon: '💼',
      gradient: 'from-blue-400 to-indigo-500'
    },
    {
      title: 'Bachelorette Party',
      description: 'Celebrate your special day with friends in style',
      image: '/images/Bachelo.jpeg',
      icon: '👰',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      title: 'Family Gatherings',
      description: 'Perfect space for family reunions and celebrations',
      image: '/images/noida1.jpg',
      icon: '👨‍👩‍👧‍👦',
      gradient: 'from-green-400 to-emerald-500'
    },
    {
      title: 'Pool Parties',
      description: 'Dive into fun with our beautiful pool area',
      image: '/images/noida2.jpg',
      icon: '🏊‍♀️',
      gradient: 'from-cyan-400 to-blue-500'
    },
    {
      title: 'Romantic Getaways',
      description: 'Intimate moments in our elegant villa setting',
      image: '/images/noida3.jpg',
      icon: '💕',
      gradient: 'from-red-400 to-pink-500'
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-purple-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-6xl mb-4 block">✨</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent">
            Villa Made for Every Moment
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From intimate celebrations to grand gatherings, our luxury villa provides the perfect backdrop for your most precious memories
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Moments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {moments.map((moment, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 ease-out border border-gray-100 overflow-hidden transform group-hover:-translate-y-2">
                {/* Image Container */}
                <div className="relative overflow-hidden h-64">
                  <Image
                    src={moment.image}
                    alt={moment.title}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${moment.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  
                  {/* Icon */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">{moment.icon}</span>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 font-serif mb-3 group-hover:text-gray-700 transition-colors duration-300">
                    {moment.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {moment.description}
                  </p>
                  
                  {/* Decorative line */}
                  <div className={`w-16 h-1 bg-gradient-to-r ${moment.gradient} mt-4 rounded-full transform group-hover:w-24 transition-all duration-500`}></div>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>

              {/* Floating particles effect */}
              {hoveredCard === index && (
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-4 left-4 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                  <div className="absolute top-8 right-8 w-1 h-1 bg-blue-400 rounded-full animate-ping animation-delay-200"></div>
                  <div className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping animation-delay-400"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg border border-gray-200">
            <span className="text-2xl">🌟</span>
            <span className="text-lg font-medium text-gray-800">Ready to create your perfect moment?</span>
            <span className="text-2xl">🌟</span>
          </div>
        </div>
      </div>
      
      {/* Responsive Design */}
      <style jsx>{`
        /* MomentsSection responsive styles */
        @media (max-width: 1024px) {
          div[style*="gridTemplateColumns: repeat(auto-fit, minmax(300px, 1fr))"] {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important;
            gap: 2rem !important;
          }
          
          div[style*="padding: 6rem 0"] {
            padding: 4rem 0 !important;
          }
        }
        
        @media (max-width: 768px) {
          div[style*="gridTemplateColumns: repeat(auto-fit, minmax(300px, 1fr))"] {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          
          div[style*="padding: 6rem 0"] {
            padding: 3rem 0 !important;
          }
          
          h2[style*="fontSize: clamp(2.5rem, 6vw, 4rem)"] {
            font-size: clamp(2rem, 5vw, 3rem) !important;
          }
          
          div[style*="height: 300px"] {
            height: 250px !important;
          }
        }
        
        @media (max-width: 480px) {
          div[style*="gridTemplateColumns: repeat(auto-fit, minmax(300px, 1fr))"] {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
          
          div[style*="padding: 6rem 0"] {
            padding: 2rem 0 !important;
          }
          
          h2[style*="fontSize: clamp(2.5rem, 6vw, 4rem)"] {
            font-size: clamp(1.5rem, 4vw, 2.5rem) !important;
          }
          
          div[style*="height: 300px"] {
            height: 200px !important;
          }
          
          h3[style*="fontSize: 1.5rem"] {
            font-size: 1.25rem !important;
          }
          
          p[style*="fontSize: 1rem"] {
            font-size: 0.9rem !important;
          }
        }
      `}</style>
    </section>
  )
}
