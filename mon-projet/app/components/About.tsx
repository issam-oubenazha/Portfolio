import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
    <section className="w-full text-center py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-red-950/15 to-slate-950" id="about">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-lg font-bold text-red-200">My Introduction</h3>
        <h2 className="mt-2 text-4xl font-bold bg-gradient-to-r from-red-200 via-red-400 to-rose-200 bg-clip-text text-transparent">About Me</h2>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Container */}
          <div className="flex justify-center">
              <Image
                src="/images/photo de CV.jpg" //image 
                className="relative rounded-full h-80 w-80 object-cover ring-2 ring-red-400/50 shadow-[0_25px_80px_-20px_rgba(239,68,68,0.65)]"
                alt="Issam Oubenazha - Full Stack & AI Developer"
                width={320}
                height={320}
                priority
              />
          </div>

          {/* Content Container */}
          <div className="space-y-12">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-red-700/35 via-rose-700/20 to-slate-900/60 border border-red-300/20 p-6 rounded-2xl hover:-translate-y-1 hover:shadow-[0_25px_60px_-25px_rgba(239,68,68,0.9)] transition-all duration-300">
                <i className="fas fa-award text-red-200 text-2xl mb-3"></i>
                <h3 className="font-bold text-lg">Experience</h3>
                <span className="text-red-100">1 Year</span>
              </div>

              <div className="bg-gradient-to-br from-red-700/35 via-red-600/20 to-slate-900/60 border border-red-300/20 p-6 rounded-2xl hover:-translate-y-1 hover:shadow-[0_25px_60px_-25px_rgba(239,68,68,0.9)] transition-all duration-300">
                <i className="fas fa-briefcase text-red-200 text-2xl mb-3"></i>
                <h3 className="font-bold text-lg">Projects</h3>
                <span className="text-red-100">10+ Done</span>
              </div>

              <div className="bg-gradient-to-br from-rose-700/35 via-red-700/20 to-slate-900/60 border border-red-300/20 p-6 rounded-2xl hover:-translate-y-1 hover:shadow-[0_25px_60px_-25px_rgba(248,113,113,0.9)] transition-all duration-300">
                <i className="fas fa-headset text-red-200 text-2xl mb-3"></i>
                <h3 className="font-bold text-lg">Support</h3>
                <span className="text-red-100">24/7 Online</span>
              </div>
            </div>  

            {/* Description */}
            <div className="bg-gradient-to-br from-red-800/20 via-slate-900/70 to-rose-800/15 p-7 rounded-2xl border border-red-300/20 shadow-[0_20px_45px_-25px_rgba(239,68,68,0.75)]">
              <p className="text-left text-base sm:text-lg leading-relaxed">
               I am a Data Engineering and Artificial Intelligence student at <strong>Ibn Tofaïl University – Kénitra </strong>, with a strong foundation in Full Stack Development from <strong>ISTA Ifrane. </strong> Passionate about web development, data analysis, and AI, I enjoy turning complex problems into practical solutions. I’m eager to apply my skills in projects that combine coding, data, and intelligence systems to make an impact.
              </p>
            </div>  

            {/* Contact Button */}
            <div className="text-center pt-6">
              <a 
                href="#contact" 
                className="inline-flex items-center px-8 py-3 text-sm font-medium text-white rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-rose-600 hover:from-red-500 hover:via-red-400 hover:to-rose-500 shadow-[0_20px_40px_-18px_rgba(239,68,68,0.9)] transition-all duration-300 group"
              >
                Let&apos;s Build Something Intelligent
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
