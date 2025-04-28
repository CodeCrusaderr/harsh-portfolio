"use client"

import { useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedText from "@/components/animated-text"
import Particles from "@/components/particles"

export default function ExperiencePage() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const isTimelineInView = useInView(timelineRef, { once: true, amount: 0.2 })

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    const fadeElements = document.querySelectorAll(".fade-up")
    fadeElements.forEach((el) => observer.observe(el))

    return () => {
      fadeElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  const experiences = [
    {
      title: "Full Stack Developer Intern",
company: "Blackcurrant Labs Pvt. Ltd.",
period: "2023",
description:
  "Worked as a Full Stack Developer intern, contributing to both frontend and backend development using Angular and Express.js. Gained hands-on experience with cutting-edge technologies and collaborated with cross-functional teams to deliver impactful projects.",
achievements: [
  "Developed responsive and interactive web applications using Angular for frontend and Express.js for backend.",
  "Collaborated with design and backend teams to implement seamless user experiences and optimize performance.",
  "Demonstrated strong work ethic and commitment to excellence, positively impacting the team and project outcomes.",
],

    },
    {
      title: "Mobile App Development",
      company: "Vihar Management",
      period: "2024",
      description:
        "Developed a custom mobile application for Vihar Management to streamline their operations and improve customer service.",
      achievements: [
        "Built a feature-rich mobile app using Flutter and Firebase",
        "Implemented real-time data synchronization and notifications",
        "Created an intuitive user interface for easy navigation",
      ],
    },
    {
      title: "Website Development",
company: "Arham Academy",
period: "2025",
description:
  "Designed and developed a modern, responsive website for Arham Academy, significantly enhancing their online presence and student engagement with well-organized and informative content.",
achievements: [
  "Created a responsive, user-friendly website that adapts seamlessly to all devices",
  "Enhanced user experience with intuitive navigation and visually appealing design",
  "Incorporated high-quality, engaging content to promote the academy's offerings and services",
],

    },
    {
      title: "App Developer",
      company: "Aim4u (KEM Hospital)",
      period: "2025",
      description:
        "Developed a healthcare application for KEM Hospital, focusing on improving patient care and hospital management.",
      achievements: [
        "Built a cross-platform mobile application using Flutter",
        "Implemented features for appointment scheduling and patient management",
      ],
    },
    {
      title: "Website Maintenance",
      company: "Multiple Companies",
      period: "2022 - Present",
      description:
        "Providing ongoing website maintenance and support services for two companies, ensuring their online presence remains up-to-date and secure.",
      achievements: [
        "Regular updates and security patches to protect against vulnerabilities",
        "Content updates and feature enhancements based on client needs",
        "Performance optimization and SEO improvements",
        "Technical support and troubleshooting",
      ],
    },
  ]

  return (
    <>
      <Particles />
      <div className="noise" />

      <main className="pt-24 pb-16 overflow-x-hidden">
        <section className="container px-4 md:px-6 py-12 md:py-24 max-w-full">
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-full border border-teal/30 bg-teal/5 px-3 py-1 text-sm text-teal mb-4">
              <span>Experience</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">
              <AnimatedText text="Professional Journey" animation="slide" delay={0.1} speed={0.05} />
            </h1>

            <p className="text-muted-foreground md:text-xl max-w-[700px] mx-auto">
              A timeline of my professional experience, internships, and freelance projects.
            </p>
          </div>

          {/* Timeline */}
          <div ref={timelineRef} className="relative max-w-4xl mx-auto mt-20 overflow-x-hidden">
            {/* Timeline line - fixed position */}
            <div
              className={`absolute left-[20px] sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal via-neonYellow to-cyberPurple transform sm:-translate-x-1/2 timeline-line ${isTimelineInView ? "visible" : ""
                }`}
            />

            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isTimelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative mb-16 last:mb-0 flex ${index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  } items-start w-full`}
                whileHover={{ scale: 1.01 }}
              >
                {/* Timeline node - just a dot now, no icon */}
                <motion.div
                  className="timeline-node absolute left-[20px] sm:left-1/2 top-0 transform -translate-x-1/2 w-4 h-4 rounded-full bg-teal border border-border z-10"
                  whileHover={{
                    scale: 1.5,
                    boxShadow: "0 0 15px rgba(1, 136, 159, 0.7)",
                  }}
                />

                {/* Content card - positioned relative to the timeline */}
                <motion.div
                  className={`glass-card rounded-xl p-6 ${index % 2 === 0
                      ? "ml-[40px] sm:ml-0 sm:mr-[calc(50%+20px)] sm:text-right"
                      : "ml-[40px] sm:ml-[calc(50%+20px)]"
                    } w-[calc(100%-40px)] sm:w-[calc(50%-30px)]`}
                  whileHover={{
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3), 0 0 15px rgba(1, 136, 159, 0.3)",
                  }}
                >
                  <div className="flex justify-between items-center">
                    <div
                      className={`inline-flex items-center rounded-full border border-teal/30 bg-teal/5 px-2 py-0.5 text-xs text-teal mb-2 ${index % 2 === 0 ? "sm:ml-auto" : ""
                        }`}
                    >
                      <span>{experience.period}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold">{experience.title}</h3>
                  <p className="text-muted-foreground font-medium">{experience.company}</p>
                  <p className="mt-3 text-muted-foreground">{experience.description}</p>

                  <ul className={`mt-4 space-y-2 ${index % 2 === 0 ? "sm:pl-8" : "sm:pr-8"}`}>
                    {experience.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        className={`flex items-start gap-2 ${index % 2 === 0 ? "sm:flex-row-reverse" : ""}`}
                        initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                      >
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-teal mt-1.5 flex-shrink-0" />
                        <span className={`text-sm ${index % 2 === 0 ? "sm:text-right" : ""}`}>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>

        
        {/* Call to Action */}
        <section className="container px-4 md:px-6 py-12 md:py-24">
          <div className="glass-card rounded-xl p-8 md:p-12 text-center max-w-4xl mx-auto fade-up">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Ready to Work Together?</h2>
            <p className="text-muted-foreground md:text-xl mb-8 max-w-[700px] mx-auto">
              I'm currently available for freelance projects and exciting collaborations. Let's discuss how I can help
              bring your ideas to life.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact" className="group">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </>
  )
}
