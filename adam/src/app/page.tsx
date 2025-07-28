"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import { ParallaxSection } from "@/components/ParallaxSection";
import { AnimatedText } from "@/components/AnimatedText";
import { AnimatedSvg } from "@/components/AnimatedSvg";
import { BackgroundAccents } from "@/components/BackgroundAccents";
import { useState } from "react";
import Link from "next/link";
import { FooterBackgroundDots } from "@/components/FooterBackgroundDots";

export default function Home() {
  // Add a scroll handler function for smooth scrolling
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="font-sans min-h-screen overflow-hidden bg-gradient-to-b from-blue-50 to-blue-100">
      {/* Navbar with Logo */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Image 
                src="/WhatsApp Image 2025-07-28 at 12.37.05 PM.jpeg" 
                alt="ADAM Logo" 
                width={150} 
                height={50}
                className="h-12 w-auto"
                priority
              />
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="#" className="text-blue-900 hover:text-blue-600 font-medium">Home</Link>
              <Link href="#services" onClick={(e) => {e.preventDefault(); scrollToSection('services');}} className="text-blue-900 hover:text-blue-600 font-medium">Services</Link>
              <Link href="#about" onClick={(e) => {e.preventDefault(); scrollToSection('about');}} className="text-blue-900 hover:text-blue-600 font-medium">About Us</Link>
              <Link href="#case-studies" onClick={(e) => {e.preventDefault(); scrollToSection('case-studies');}} className="text-blue-900 hover:text-blue-600 font-medium">Case Studies</Link>
              <Button size="sm" variant="blue" onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSdAwNBONpL5Y0Upybmng_wZxkHp2Dih108eIOcu4ysBVDIiBw/viewform?usp=sharing&ouid=101813523552241469946", "_blank")}>
                Contact Us
              </Button>
            </nav>
            <div className="md:hidden">
              <Button variant="ghost" size="sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen pt-20 flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-100 via-white to-blue-50">
        <div className="absolute w-full h-full">
          <AnimatedSvg colorScheme="blue" />
        </div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent to-blue-50/40"></div>
        <div className="container mx-auto px-4 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <AnimatedText 
              text="Advancing Medical Excellence" 
              className="text-5xl md:text-7xBool font-bold text-blue-950 mb-6" 
            />
            <p className="text-xl md:text-2xl text-blue-900 mb-8 max-w-2xl mx-auto font-medium">
              Strategic consulting for radiology practices, imaging centers, and healthcare technology partners to optimize operations and enhance patient care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
    href="https://docs.google.com/forms/d/e/1FAIpQLSdAwNBONpL5Y0Upybmng_wZxkHp2Dih108eIOcu4ysBVDIiBw/viewform?usp=sharing&ouid=101813523552241469946"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button size="lg" variant="blue" className="shadow-lg">
      Schedule a Consultation
    </Button>
  </Link>
  <Button 
    size="lg" 
    variant="outline" 
    className="border-blue-600 text-blue-600 hover:bg-blue-50"
    onClick={() => scrollToSection('services')}
  >
    Explore Our Solutions
  </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Hero Floating Elements */}
        <motion.div 
          className="absolute bottom-10 right-10 w-20 h-20 bg-blue-300/30 rounded-full"
          animate={{ 
            y: [0, -15, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-20 left-10 w-12 h-12 bg-blue-400/30 rounded-full"
          animate={{ 
            y: [0, 10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </section>

      {/* Services Section as Timeline */}
      <ParallaxSection id="services" className="relative py-20 bg-gradient-to-b from-blue-100 to-blue-200" strength={20}>
        <BackgroundAccents colorTheme="blue" />
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4">Our Services</h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
          </motion.div>
          
          {/* Services Timeline Layout */}
          <div className="relative">
            {/* Timeline Center Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-300 transform -translate-x-1/2 hidden md:block"></div>
            
            {[
              { 
                title: "Radiology Practice Optimization", 
                icon: "/icons/strategy.svg", 
                description: "Enhance operational efficiency, workflow design, and resource allocation to maximize your radiology practice's performance and profitability.",
                delay: 0,
                bgColor: "bg-gradient-to-br from-white to-blue-50"
              },
              { 
                title: "Medical Imaging Technology Advisory", 
                icon: "/icons/analysis.svg", 
                description: "Expert guidance on selecting, implementing, and optimizing PACS, RIS, AI solutions, and other imaging technologies for your facility.",
                delay: 0.2,
                bgColor: "bg-gradient-to-br from-white to-blue-50"
              },
              { 
                title: "Healthcare IT Integration", 
                icon: "/icons/transform.svg", 
                description: "Seamless integration of radiology systems with EMR/EHR platforms, ensuring efficient data flow and improved clinical decision support.",
                delay: 0.4,
                bgColor: "bg-gradient-to-br from-white to-blue-50"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: service.delay }}
                viewport={{ once: true }}
                className="mb-24 md:mb-16 relative"
              >
                {/* Timeline Point */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-500 z-10 shadow-lg">
                  <div className="absolute inset-1 rounded-full bg-white"></div>
                </div>
                
                <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline Date/Number */}
                  <div className={`hidden md:block w-1/2 ${index % 2 === 0 ? 'text-right pr-16' : 'text-left pl-16'} font-bold text-blue-800 text-5xl opacity-30`}>
                    0{index + 1}
                  </div>
                  
                  {/* Card Content */}
                  <motion.div 
                    className="w-full md:w-1/2 p-4 relative z-10"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Card className={`shadow-lg h-full overflow-hidden rounded-xl ${service.bgColor}`}>
                      <CardContent className="p-8">
                        <div className="flex items-center mb-4">
                          <div className="p-3 bg-blue-100 rounded-full mr-4">
                            <Image src={service.icon} alt={service.title} width={40} height={40} className="h-10 w-10 text-blue-700" />
                          </div>
                          <h3 className="text-2xl font-semibold text-blue-900">{service.title}</h3>
                        </div>
                        <p className="text-blue-800 text-lg">{service.description}</p>
                        <ul className="mt-4 space-y-2">
                          {index === 0 ? [
                            "Workflow optimization & productivity enhancement",
                            " Staff scheduling & resource allocation models",
                            " Financial performance & reimbursement strategy"
                          ] : index === 1 ? [
                            "Vendor-neutral technology assessment & selection",
                            " PACS/RIS implementation & migration support",
                            " AI & advanced visualization integration"
                          ] : [
                            "EMR/EHR integration with imaging systems",
                            "Interoperability & data exchange solutions",
                            "Cloud infrastructure & teleradiology setup"
                          ].map((item, i) => (
                            <li key={i} className="flex items-center">
                              <svg className="h-5 w-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span className="text-blue-800">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
                
                {/* Timeline Connector (Mobile) */}
                <div className="md:hidden flex justify-center mt-8 mb-8">
                  <div className="w-1 h-16 bg-blue-300"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* About Us Section */}
      <ParallaxSection id="about" className="relative py-20 bg-gradient-to-br from-blue-200 to-blue-300" strength={15}>
        <BackgroundAccents variant="secondary" colorTheme="blue" />
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4">About Us</h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
            <p className="mt-6 text-lg text-blue-800 max-w-3xl mx-auto">
              We are a specialized consulting firm with deep expertise in radiology operations, medical imaging technology, and healthcare IT integration.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { 
                name: "Aditya Dubey", 
                position: "Co-Founder & COO",
                image: "/1746442970883(1).jpg",
                experience: "Prev: BCG, Unicorn India Ventures, London Business School",
                keyCase: "Expertise: Radiology Practice Management, Medical Technology Strategy"
              },
              { 
                name: "Aorkodeep Mandal", 
                position: "Co-Founder & CEO",
                image: "/Screenshot 2025-07-28 at 2.51.04 AM.png",
                experience: "Prev: BCG, Weekday AI (YC-21), Columbia Business School",
                keyCase: "Expertise: Healthcare IT Systems, Imaging Informatics, AI Solutions"
              }
            ].map((founder, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="flex flex-col items-center md:items-start bg-white/70 p-6 rounded-xl backdrop-blur-sm shadow-lg"
              >
                <div className="relative mb-6 w-48 h-48">
                  <div className="absolute inset-0 rounded-full bg-blue-300/20" />
                  <div className="absolute inset-2 rounded-full bg-blue-200/20" />
                  <div className="absolute inset-4 rounded-full overflow-hidden">
                    <Image 
                      src={founder.image} 
                      alt={founder.name} 
                      width={160} 
                      height={160} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-blue-900">{founder.name}</h3>
                <p className="text-blue-700 font-medium mb-3">{founder.position}</p>
                <p className="text-blue-800 mb-2">{founder.experience}</p>
                <p className="text-blue-900 font-medium">{founder.keyCase}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Projects Section */}
      <ParallaxSection id="case-studies" className="relative py-20 bg-gradient-to-b from-blue-50 to-blue-100" strength={15}>
        <BackgroundAccents variant="primary" colorTheme="blue" />
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4">Case Studies</h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
            <p className="mt-6 text-lg text-blue-800 max-w-3xl mx-auto">
              Explore our success stories working with leading radiology practices, hospitals, and healthcare technology providers.
            </p>
          </motion.div>

          <div className="space-y-16">
            {/* Project 1 */}
            <ProjectCard 
              client="Cloud-based PACS Company"
              title="OEM & HIMS Partnership Strategy"
              image="/full-pacs-cloud-02.png"
              points={[
                "Designed and implemented a go-to-market partnership strategy with leading HIMS players across Tier 1 and Tier 2 hospital networks",
                "Initiated OEM alliances with three major radiology equipment providers to enable bundled PAX-Hardware offerings",
                "Created a white-labelling framework for PAX deployment, enabling scale via third-party HIMS partners",
                "Structured SLAs and commercial models for 5+ OEM/HIMS partnerships to ensure alignment on uptime, data security, and revenue share",
                "Developed custom integration modules for two top HIMS platforms, reducing onboarding time by 45%",
                "Facilitated pilot implementation with an HIMS-OEM joint deployment, approved by the VP, Partnerships and Director, Product"
              ]}
              index={0}
            />

            {/* Project 2 */}
            <ProjectCard 
              client="Multi-Hospital Radiology Group"
              title="Radiology Network Optimization"
              image="/selection-151-500x500.png"
              points={[
                "Developed and implemented an AI-powered workload balancing system across a 12-hospital radiology network, reducing turnaround times by 32%",
                "Created a centralized reading workflow that dynamically assigned cases based on subspecialty expertise, urgency, and radiologist availability",
                "Designed and deployed a unified credentialing and quality assurance framework across previously disparate hospital systems",
                "Implemented advanced analytics dashboards providing real-time insights into productivity, turnaround times, and quality metrics",
                "Established standardized protocols and templates across the network, improving report consistency and clinical value",
                "Restructured after-hours coverage model, reducing outsourcing costs by 28% while maintaining quality and turnaround benchmarks"
              ]}
              index={1}
            />
          </div>
        </div>
      </ParallaxSection>

      {/* Footer with Animation */}
      <footer className="relative py-16 bg-gradient-to-b from-blue-500 to-blue-700 text-white overflow-hidden">
        {/* Animated wave decoration */}
        <div className="absolute top-0 left-0 w-full overflow-hidden">
          <svg 
            className="relative block w-full h-12" 
            data-name="Layer 1" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
          >
            <path 
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
              className="fill-blue-100"
            ></path>
          </svg>
        </div>

        {/* Replace the random animated dots with the client-side component */}
        <FooterBackgroundDots />

        {/* Rest of the footer content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-10">
            {/* Company Information with updated logo */}
            <div className="col-span-1 lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="mb-5 flex items-center">
                  <div className="bg-white p-2 rounded-lg mr-3">
                    <Image
                      src="/WhatsApp Image 2025-07-28 at 12.37.05 PM.jpeg"
                      alt="ADAM Logo"
                      width={100}
                      height={40}
                      className="h-10 w-auto"
                    />
                  </div>
                  <span className="text-xl font-bold">ADAM</span>
                </div>
                <p className="text-blue-100 mb-4">
                  Specialized consulting for radiology practices, imaging centers, and healthcare technology providers. We optimize operations, technology integration, and clinical workflows to enhance patient care.
                </p>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  {[
                    { name: 'Home', id: '' },
                    { name: 'Services', id: 'services' },
                    { name: 'About', id: 'about' },
                    { name: 'Case Studies', id: 'case-studies' },
                    { name: 'Contact', id: '' }
                  ].map((item, i) => (
                    <li key={i}>
                      {item.id ? (
                        <a 
                          href={`#${item.id}`}
                          onClick={(e) => {e.preventDefault(); scrollToSection(item.id);}}
                          className="text-blue-100 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center cursor-pointer"
                        >
                          <svg className="w-3 h-3 mr-2 transition-transform duration-300 transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                          </svg>
                          {item.name}
                        </a>
                      ) : (
                        <Link href="#" className="text-blue-100 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center">
                          <svg className="w-3 h-3 mr-2 transition-transform duration-300 transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                          </svg>
                          {item.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Contact Information */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    <span className="text-blue-100">8639855425</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    <span className="text-blue-100">adityadb2016@gmail.com
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span className="text-blue-100">F-606, Phase-2,  Sector 62, Noida</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Newsletter */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                <p className="text-blue-100 mb-4">Subscribe to our newsletter for the latest in radiology consulting insights.</p>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="py-2 px-3 rounded-l-md text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-300 flex-grow"
                  />
                  <button className="bg-blue-900 hover:bg-blue-800 transition-colors px-4 rounded-r-md text-white">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                    </svg>
                  </button>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Social Media & Copyright */}
          <div className="pt-8 mt-8 border-t border-blue-400 flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex space-x-4 mb-4 md:mb-0"
            >
              {[
                { icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z", name: "LinkedIn" },
                { icon: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84", name: "Twitter" },
                { icon: "M16.5 6a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18 6A6 6 0 006 6c0 1.99.97 3.75 2.47 4.84A9.97 9.97 0 000 21h2a8 8 0 1116 0h2a9.97 9.97 0 00-8.53-10.16A6 6 0 0018 6z", name: "GitHub" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="bg-blue-400/30 p-2 rounded-full hover:bg-blue-300/50 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d={social.icon}></path>
                  </svg>
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-blue-100 text-sm"
            >
              © {new Date().getFullYear()} ADAM. All rights reserved.
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  );
}

interface ProjectCardProps {
  client: string;
  title: string;
  image: string;
  points: string[];
  index: number;
}

function ProjectCard({ client, title, image, points, index }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative bg-white rounded-2xl shadow-xl overflow-hidden"
    >
      <div className={`flex flex-col lg:flex-row ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
        {/* Project Image */}
        <div className="lg:w-2/5 h-60 lg:h-auto relative">
          <div className="absolute inset-0">
            <Image 
              src={image} 
              alt={title} 
              fill
              style={{ objectFit: 'cover' }}
              className="transition-transform duration-700 ease-in-out group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-blue-900/40"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="text-sm font-semibold text-blue-200">Client</div>
            <h3 className="text-2xl font-bold">{client}</h3>
          </div>
        </div>
        
        {/* Project Content */}
        <div className="lg:w-3/5 p-6 lg:p-10">
          <div>
            <h4 className="text-blue-600 font-semibold mb-2">Project Scope</h4>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">{title}</h3>
            
            {/* Content container with fixed height when not expanded */}
            <div className={`${expanded ? 'h-auto' : 'h-[120px] lg:h-[150px]'} overflow-hidden transition-all duration-500 ease-in-out mb-4`}>
              <div className="space-y-3">
                {points.map((point, i) => (
                  <div key={i} className="flex items-start">
                    <div className="mt-1 mr-3 flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 text-xs font-bold">{i+1}</span>
                    </div>
                    <p className="text-blue-800">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Gradient fade when collapsed */}
            {!expanded && (
              <div className="h-12 bg-gradient-to-t from-white to-transparent -mt-12 relative z-10"></div>
            )}
          </div>
          
          <Button 
            variant="outline" 
            className="mt-2 border-blue-300 text-blue-600 hover:bg-blue-50 relative z-20"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? 'Show Less' : 'Read More'}
          </Button>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-4 right-4 w-20 h-20 rounded-full border-4 border-blue-100 opacity-30"></div>
      <div className="absolute bottom-8 right-8 w-12 h-12 rounded-full bg-blue-100 opacity-20"></div>
      <motion.div 
        className="absolute top-1/2 right-8 w-4 h-4 rounded-full bg-blue-500"
        animate={{ 
          y: [0, 10, 0],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </motion.div>
  );
}

