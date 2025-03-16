"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  // Show back-to-top button when scrolling down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* SVG Gradient Definitions */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="thunder-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00FFE0" />
            <stop offset="100%" stopColor="#00B4FF" />
          </linearGradient>
        </defs>
      </svg>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0F0F0F]/90 backdrop-blur-md py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold gradient-text flex items-center">
              {/* Thunder Logo */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-7 w-7 mr-2" 
                viewBox="0 0 24 24" 
                fill="none"
                stroke="url(#thunder-gradient)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              KushUp
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-white hover:text-[#00FFE0] transition-colors">Services</a>
            <a href="#case-studies" className="text-white hover:text-[#00FFE0] transition-colors">Case Studies</a>
            <a href="#about" className="text-white hover:text-[#00FFE0] transition-colors">About</a>
            <a href="#contact" className="text-white hover:text-[#00FFE0] transition-colors">Contact</a>
          </div>
          <button className="bg-transparent border border-[#00FFE0] text-[#00FFE0] px-6 py-2 rounded-full hover:bg-[#00FFE0]/10 transition-colors">
            Get Started
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24">
        {/* Hero Section */}
        <section 
          className="min-h-screen relative flex items-center overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0F0F0F 0%, #2A2A2A 100%)",
          }}
        >
          {/* Hexagonal Pattern Background */}
          <div className="absolute inset-0 hexagon-pattern"></div>
          
          {/* Parallax Effect Container */}
          <div className="container mx-auto px-6 py-20 relative z-10">
            <div className="flex flex-col items-center text-center">
              {/* Main Heading with Gradient */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight gradient-text mb-6 fade-in-up">
                Innovating Your<br />Digital Presence
              </h1>
              
              {/* Subheading */}
              <h2 className="text-xl md:text-2xl text-[#E0E0E0] font-medium max-w-3xl mb-8 fade-in-up" style={{ animationDelay: "0.2s" }}>
                As a Forward-Thinking Digital Partner, We Specialize in Creative Solutions
              </h2>
              
              {/* Tagline */}
              <p className="text-lg md:text-xl text-white italic mb-12 fade-in-up" style={{ animationDelay: "0.4s" }}>
                We Provide the Best Service for Your Brand.
              </p>
              
              {/* CTA Button */}
              <button className="bg-transparent border-2 border-[#00FFE0] text-[#00FFE0] rounded-full px-8 py-3 text-lg font-medium hover:bg-[#00FFE0]/10 transition-all fade-in-up" style={{ animationDelay: "0.6s" }}>
                Explore More
              </button>
              
              {/* Client Logos */}
              <div className="mt-20 flex flex-wrap justify-center gap-10 fade-in-up" style={{ animationDelay: "0.8s" }}>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-[#3A3A3A] flex items-center justify-center mr-2"></div>
                  <div className="w-12 h-12 rounded-full bg-[#3A3A3A] flex items-center justify-center mr-2"></div>
                  <div className="w-12 h-12 rounded-full bg-[#3A3A3A] flex items-center justify-center"></div>
                </div>
                <div className="text-[#CCCCCC]">
                  <span className="font-bold text-2xl mr-2">350+</span>
                  <span>Clients</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Value Proposition Section */}
        <section id="about" className="py-24 relative overflow-hidden">
          {/* Semi-transparent radial gradient overlay */}
          <div 
            className="absolute inset-0 z-0" 
            style={{ 
              background: "radial-gradient(circle, #1A1A1A 0%, transparent 70%)"
            }}
          ></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              {/* Left Column - Text */}
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-semibold text-white mb-8">
                  As a Forward-Thinking <br/> Digital Agency, We Specialize <br/> in <span className="gradient-text">Creative Solutions</span>
                </h2>
                
                <div className="mb-8 flex items-start gap-4">
                  <div className="text-[#00FFE0] mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-white mb-2">Innovation Focused</h3>
                    <p className="text-[#CCCCCC]">We pride ourselves on pushing the boundaries of what's possible in digital experiences, combining creative vision with technical excellence.</p>
                  </div>
                </div>
                
                <div className="mb-8 flex items-start gap-4">
                  <div className="text-[#00FFE0] mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-white mb-2">Result-Driven Approach</h3>
                    <p className="text-[#CCCCCC]">Our approach combines creativity with data-driven insights to ensure your digital presence not only looks great but delivers measurable results.</p>
                  </div>
                </div>
                
                <button className="px-8 py-3 rounded-full bg-gradient-to-r from-[#00FFE0] to-[#00B4FF] text-[#0F0F0F] font-semibold hover:shadow-lg hover:shadow-[#00FFE0]/20 transition-all">
                  Learn More
                </button>
              </div>
              
              {/* Right Column - Big Number */}
              <div className="flex-1 flex flex-col items-center justify-center">
                <div className="relative">
                  {/* Large Number with Animation */}
                  <div className="text-[120px] md:text-[160px] font-black text-[#00FFE0] opacity-100" 
                       style={{ 
                         textShadow: "0 0 30px rgba(0, 255, 224, 0.5)",
                         animation: "numberAnimation 2s ease-out forwards"
                       }}>
                    28
                  </div>
                  
                  {/* Caption */}
                  <div className="text-center">
                    <p className="text-[#CCCCCC] text-xl">Successful Projects Delivered</p>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -top-8 -left-8 w-16 h-16 border-l-2 border-t-2 border-[#00FFE0] opacity-60"></div>
                  <div className="absolute -bottom-8 -right-8 w-16 h-16 border-r-2 border-b-2 border-[#00FFE0] opacity-60"></div>
                </div>
                
                <button className="mt-12 px-8 py-3 rounded-full border border-[#00FFE0] text-[#00FFE0] font-medium hover:bg-[#00FFE0]/10 transition-all">
                  View Our Portfolio
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Impact & Innovation Section */}
        <section id="case-studies" className="py-24 relative overflow-hidden">
          {/* Diagonal split background */}
          <div className="absolute inset-0 z-0">
            <div className="h-full w-full" style={{ 
              background: `linear-gradient(135deg, #1A1A1A 50%, #0F0F0F 50%)` 
            }}></div>
            
            {/* Abstract geometric animation (simplified with CSS) */}
            <div className="absolute right-0 top-0 h-full w-1/2 overflow-hidden">
              <div className="absolute inset-0 diagonal-pattern"></div>
            </div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-white">Showcasing Our </span>
                <span className="gradient-text">Impact and Innovation</span>
              </h2>
              <p className="text-[#CCCCCC] text-xl max-w-3xl mx-auto">
                Discover How We've Helped Our Clients Achieve Their Goals.
              </p>
            </div>
            
            {/* Case Study Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Case Study Card 1 */}
              <div className="case-study-card bg-[#1A1A1A] rounded-lg overflow-hidden">
                <div className="h-48 bg-blue-600 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Placeholder for client logo or project image */}
                    <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-white font-bold">01</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4 flex items-center">
                    <span className="text-xs font-semibold mr-2 px-2.5 py-0.5 rounded bg-[#00FFE0] text-black">
                      Digital Marketing
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">E-Commerce Transformation</h3>
                  <p className="text-[#CCCCCC] mb-4">Increased online sales by 150% through strategic digital marketing and user experience improvements.</p>
                  <button className="text-[#00FFE0] font-medium flex items-center">
                    View Case Study
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Case Study Card 2 */}
              <div className="case-study-card bg-[#1A1A1A] rounded-lg overflow-hidden">
                <div className="h-48 bg-purple-600 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Placeholder for client logo or project image */}
                    <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-white font-bold">02</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4 flex items-center">
                    <span className="text-xs font-semibold mr-2 px-2.5 py-0.5 rounded bg-[#00FFE0] text-black">
                      Web Development
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Global B2B Platform</h3>
                  <p className="text-[#CCCCCC] mb-4">Developed a multi-language B2B platform that connected suppliers with businesses across 20+ countries.</p>
                  <button className="text-[#00FFE0] font-medium flex items-center">
                    View Case Study
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Case Study Card 3 */}
              <div className="case-study-card bg-[#1A1A1A] rounded-lg overflow-hidden">
                <div className="h-48 bg-green-600 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Placeholder for client logo or project image */}
                    <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-white font-bold">03</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4 flex items-center">
                    <span className="text-xs font-semibold mr-2 px-2.5 py-0.5 rounded bg-[#00FFE0] text-black">
                      Brand Identity
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Startup Rebrand & Marketing</h3>
                  <p className="text-[#CCCCCC] mb-4">Complete rebrand and digital marketing strategy that helped secure Series A funding of $5M.</p>
                  <button className="text-[#00FFE0] font-medium flex items-center">
                    View Case Study
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Navigation/Pagination Dots */}
            <div className="flex justify-center mt-12">
              <button className="w-3 h-3 mx-1 rounded-full bg-[#00FFE0]"></button>
              <button className="w-3 h-3 mx-1 rounded-full bg-white/30"></button>
              <button className="w-3 h-3 mx-1 rounded-full bg-white/30"></button>
              <button className="w-3 h-3 mx-1 rounded-full bg-white/30"></button>
              <button className="w-3 h-3 mx-1 rounded-full bg-white/30"></button>
            </div>
            
            {/* Navigation Arrows */}
            <div className="flex justify-between mt-8">
              <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section id="services" className="py-24 relative overflow-hidden">
          {/* Background with grid pattern */}
          <div className="absolute inset-0 dotted-grid"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold gradient-text mb-4">
                Our Expertise
              </h2>
              <h3 className="text-2xl text-white mb-8">
                We Provide Best Service for <span className="text-[#00FFE0]">Your Brand</span>
              </h3>
            </div>
            
            {/* Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Service Card 1: Digital Marketing & Development */}
              <div className="service-card bg-[#2A2A2A] rounded-lg p-6 border border-transparent">
                <div className="text-[#00FFE0] mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Digital Marketing & Development</h3>
                <p className="text-[#CCCCCC] mb-4">
                  Strategic digital marketing campaigns and custom web development to grow your online presence.
                </p>
                <a href="#" className="inline-flex items-center text-[#00FFE0]">
                  Explore More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
              
              {/* Service Card 2: UI/UX Design */}
              <div className="service-card bg-[#2A2A2A] rounded-lg p-6 border border-transparent">
                <div className="text-[#00FFE0] mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">UI/UX Design</h3>
                <p className="text-[#CCCCCC] mb-4">
                  User-centered design solutions that create intuitive, engaging, and visually stunning digital experiences.
                </p>
                <a href="#" className="inline-flex items-center text-[#00FFE0]">
                  Explore More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
              
              {/* Service Card 3: Brand Identity */}
              <div className="service-card bg-[#2A2A2A] rounded-lg p-6 border border-transparent">
                <div className="text-[#00FFE0] mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Brand Identity</h3>
                <p className="text-[#CCCCCC] mb-4">
                  Comprehensive branding services to create a unique and recognizable identity in the market.
                </p>
                <a href="#" className="inline-flex items-center text-[#00FFE0]">
                  Explore More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
              
              {/* Service Card 4: Event Activation */}
              <div className="service-card bg-[#2A2A2A] rounded-lg p-6 border border-transparent">
                <div className="text-[#00FFE0] mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Event Activation</h3>
                <p className="text-[#CCCCCC] mb-4">
                  Creative event planning and execution for memorable physical and digital experiences.
                </p>
                <a href="#" className="inline-flex items-center text-[#00FFE0]">
                  Explore More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Testimonials */}
            <div className="mt-20">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-semibold text-white mb-4">What Our Clients Say</h3>
                <div className="w-20 h-1 bg-[#00FFE0] mx-auto"></div>
              </div>
              
              <div className="bg-[#1A1A1A] p-8 rounded-lg max-w-3xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-[#3A3A3A] flex items-center justify-center">
                      <span className="text-[#00FFE0] font-bold">AB</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-[#E0E0E0] italic mb-4">
                      "Working with KushUp has been transformative for our business. Their innovative approach to digital marketing has increased our online presence significantly."
                    </p>
                    <div>
                      <h4 className="text-white font-medium">Amanda Brown</h4>
                      <p className="text-[#CCCCCC] text-sm">CEO, TechVision Inc.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Updates Section */}
        <section id="updates" className="py-24 relative overflow-hidden">
          {/* Background with diagonal stripes */}
          <div className="absolute inset-0 diagonal-pattern"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-semibold text-white mb-4">
                Stay Ahead With Our Latest <br/>
                <span className="gradient-text">Articles and Updates</span>
              </h2>
            </div>
            
            {/* Blog Articles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Article 1 */}
              <div className="bg-[#1A1A1A] rounded-lg overflow-hidden">
                <div className="h-48 bg-purple-500 relative"></div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-[#CCCCCC]">Dec 15, 2023</span>
                    <span className="text-xs bg-[#2A2A2A] text-[#CCCCCC] px-2 py-1 rounded">Design</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">The Power of UI Design to Create Intuitive User Journeys</h3>
                  <p className="text-[#CCCCCC] mb-4">Explore how thoughtful UI design can significantly enhance user experience and drive conversion rates.</p>
                  <button className="text-[#00FFE0] font-medium flex items-center">
                    Read Article
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Article 2 */}
              <div className="bg-[#1A1A1A] rounded-lg overflow-hidden">
                <div className="h-48 bg-blue-500 relative"></div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-[#CCCCCC]">Nov 28, 2023</span>
                    <span className="text-xs bg-[#2A2A2A] text-[#CCCCCC] px-2 py-1 rounded">Marketing</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Mastering Social Media Marketing for Maximum Engagement</h3>
                  <p className="text-[#CCCCCC] mb-4">Learn the latest strategies to maximize your brand's social media presence and engage with your audience effectively.</p>
                  <button className="text-[#00FFE0] font-medium flex items-center">
                    Read Article
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Email Subscription */}
            <div className="mt-20 bg-[#1A1A1A] p-8 md:p-12 rounded-lg">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="max-w-md">
                  <h3 className="text-2xl font-semibold text-white mb-3">Subscribe to Our Newsletter</h3>
                  <p className="text-[#CCCCCC]">Get the latest insights, tips, and updates delivered directly to your inbox.</p>
                </div>
                <div className="w-full md:w-auto">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input 
                      type="email" 
                      placeholder="Enter your email..." 
                      className="email-input bg-[#2A2A2A] text-white px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-[#00FFE0] w-full sm:w-64"
                    />
                    <button className="subscribe-button px-6 py-3 rounded-full text-[#0F0F0F] font-medium">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-16 bg-[#0F0F0F]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <div className="mb-6">
                <span className="text-3xl font-bold gradient-text flex items-center">
                  {/* Thunder Logo */}
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-8 w-8 mr-2" 
                    viewBox="0 0 24 24" 
                    fill="none"
                    stroke="url(#thunder-gradient)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                  KushUp
                </span>
              </div>
              <p className="text-[#CCCCCC] mb-6">
                Innovating your digital presence with creative solutions and strategic digital marketing.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-[#00FFE0] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-[#00FFE0] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Main Pages</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-[#CCCCCC] hover:text-[#00FFE0]">Home</a></li>
                <li><a href="#services" className="text-[#CCCCCC] hover:text-[#00FFE0]">Services</a></li>
                <li><a href="#case-studies" className="text-[#CCCCCC] hover:text-[#00FFE0]">Case Studies</a></li>
                <li><a href="#about" className="text-[#CCCCCC] hover:text-[#00FFE0]">About Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-[#CCCCCC] hover:text-[#00FFE0]">Privacy Policy</a></li>
                <li><a href="#" className="text-[#CCCCCC] hover:text-[#00FFE0]">Terms of Service</a></li>
                <li><a href="#" className="text-[#CCCCCC] hover:text-[#00FFE0]">Cookie Policy</a></li>
                <li><a href="#" className="text-[#CCCCCC] hover:text-[#00FFE0]">Careers</a></li>
                <li><a href="#" className="text-[#CCCCCC] hover:text-[#00FFE0]">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#00FFE0] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-[#CCCCCC]">123 Design Street, Creative City, 10010</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#00FFE0] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-[#CCCCCC]">info@kushup.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-[#2A2A2A] text-center">
            <p className="text-[#CCCCCC]">&copy; {new Date().getFullYear()} KushUp. All rights reserved. Designed by Vibe.</p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button 
        onClick={scrollToTop} 
        className={`back-to-top ${isVisible ? 'visible' : ''}`}
        aria-label="Back to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </>
  );
}
