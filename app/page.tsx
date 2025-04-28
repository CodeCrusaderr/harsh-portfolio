"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Particles from "@/components/particles"
import LoadingScreen from "@/components/loading-screen"
import AnimatedText from "@/components/animated-text"
import ScrollIndicator from "@/components/scroll-indicator"
import ProjectCard from "@/components/project-card"
import TypewriterEffect from "@/components/typewriter-effect"
import { useMobile } from "@/hooks/use-mobile"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const isMobile = useMobile()

  // Parallax scroll effects
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  // Intersection Observer for scroll animations
  useEffect(() => {
    if (!isLoaded) return

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
  }, [isLoaded])

  const projects = [
    {
      title: "Khao - The Food Scanner App",
      description:
        "A comprehensive nutritional food information app that helps users make healthier food choices with detailed nutritional breakdowns and personalized recommendations.",
      longDescription:
        "Khao is a revolutionary food scanner app that provides detailed insights into food ingredients, additives, allergens, and nutritional scores. It offers intuitive scanning and searching features for easy access to comprehensive reports, tailors reports to users' health preferences and conditions, and enhances dietary choices with personalized warnings. The app is committed to continuous innovation for promoting overall well-being and transparency in the food system.",
      tags: ["Flutter", "Firebase", "UI/UX", "Mobile App"],
      category: "mobile",
      github: "https://github.com/CodeCrusaderr/Khao-The-App",
      type: "Mobile App",
    },
    {
      title: "HomeSync — Smart Home Management",
      description:
        "A smart home app for device control, room selection, and real-time monitoring with focus on performance and daily usability.",
      longDescription:
        "HomeSync is a comprehensive smart home management app built with Flutter and Firebase. It enables users to control devices, select rooms, and monitor their home in real-time. The app focuses on performance, daily usability, and easy adaptability with the 'Write Once, Run Everywhere' philosophy.",
      tags: ["Flutter", "Dart", "Firebase", "Mobile App"],
      category: "mobile",
      link: "#",
      github: "https://github.com/CodeCrusaderr/HomeSync",
      type: "Mobile App",
    },
    {
      title: "Quizverse — Multiplayer Quiz Platform",
      description:
        "A real-time multiplayer quiz system to boost student engagement and collaborative learning with live performance dashboards.",
      longDescription:
      "Quizverse is a real-time multiplayer quiz platform powered by Next.js and Gen AI, designed to enhance student engagement and collaborative learning through competitive, social quizzes. It offers live performance dashboards, a seamless mobile and desktop experience, and campus-wide scalability. To amplify the excitement, Quizverse introduces gamified elements like Power Cards — special abilities that let players freeze opponents or reduce their points, adding a strategic twist to every match.",
      tags: ["Next.js", "Gen AI", "Web App", "Education", "Multiplayer"],
      category: "web",
      link: "#",
      github: "https://github.com/CodeCrusaderr/quizverse",
      type: "Web App",
    },
    {
      title: "HealthBuddy — Healthcare Management",
      description:
        "A comprehensive healthcare application designed to simplify health management and empower individuals to take control of their wellness.",
      longDescription:
        "HealthBuddy is a comprehensive healthcare application designed to simplify health management and empower individuals to take control of their wellness. The app allows users to schedule appointments with healthcare providers, book lab tests, upload and manage medical prescriptions, and access detailed nutrition information for smarter dietary decisions. Users also receive timely notifications and guidelines about their booked lab tests and doctor appointments. Additionally, HealthBuddy features a growing health library with articles on essential healthcare topics, promoting awareness and proactive health management, all within a user-friendly interface.",
      tags: ["Flutter", "Firebase", "Twilio", "Razorpay API", "GPay API", "Mobile App"],
      category: "mobile",
      link: "#",
      github: "https://github.com/CodeCrusaderr/healthbuddy",
      type: "Mobile App",
    },
  ]

  const skills = [
    { name: "React", icon: <span>⚛️</span>, color: "teal" },
    { name: "Next.js", icon: <span>▲</span>, color: "purple" },
    { name: "Node.js", icon: <span>🟢</span>, color: "teal" },
    { name: "Express.js", icon: <span>🚀</span>, color: "blue" },
    { name: "Flutter", icon: <span>📱</span>, color: "blue" },
    { name: "React Native", icon: <span>📲</span>, color: "teal" },
    { name: "Firebase", icon: <span>🔥</span>, color: "yellow" },
    { name: "MongoDB", icon: <span>🍃</span>, color: "teal" },
    { name: "PostgreSQL", icon: <span>🐘</span>, color: "blue" },
    { name: "AWS", icon: <span>☁️</span>, color: "yellow" },
    { name: "C", icon: <span>©️</span>, color: "blue" },
    { name: "C++", icon: <span>➕</span>, color: "purple" },
    { name: "WordPress", icon: <span>📝</span>, color: "blue" },
    { name: "TypeScript", icon: <span>𝙏𝙎</span>, color: "blue" },
    { name: "JavaScript", icon: <span>𝙅𝙎</span>, color: "yellow" },
    { name: "UI/UX", icon: <span>🎨</span>, color: "purple" },
  ]

  return (
    <>
      <LoadingScreen />
      <Particles />
      <div className="noise" />

      <main className="relative">
        <section
          ref={heroRef}
          className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
        >
          <motion.div style={{ y, opacity }} className="absolute inset-0 grid-pattern z-[-1]" />

          <div className="container px-4 md:px-6 z-10">
            <div className="flex flex-col items-center text-center space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-2 inline-flex items-center rounded-full border border-teal/30 bg-teal/5 px-3 py-1 text-sm text-teal"
              >
                <span>Freelance Developer + Student Engineer</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
              >
                <TypewriterEffect
                  text="Hi, I'm Harsh Zaveri"
                  className="gradient-text"
                  typingSpeed={100}
                  startDelay={3000}
                />
              </motion.h1>

              <AnimatedText
                text="Crafting Future-Ready Apps and Websites"
                className="text-xl md:text-2xl text-muted-foreground max-w-[700px] mt-4"
                animation="slide"
                delay={0.5}
                speed={0.03}
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="mt-8 flex flex-col sm:flex-row gap-4"
              >
                <Button size="lg" className="group">
                <Link href="/projects">Explore My Work</Link>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Get In Touch</Link>
                </Button>
              </motion.div>
            </div>
          </div>

          <ScrollIndicator />
        </section>

        {/* About Section */}
        <section ref={aboutRef} className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
              <div className="space-y-6 fade-up">
                <div className="inline-flex items-center rounded-full border border-teal/30 bg-teal/5 px-3 py-1 text-sm text-teal mb-4">
                  <span>About Me</span>
                </div>

                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  <AnimatedText text="My Journey as a Developer" animation="slide" delay={0.1} speed={0.05} />
                </h2>

                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Hi, I'm Harsh Zaveri, a freelance developer and student engineer from Mumbai, India. I specialize in
                    creating innovative digital solutions that combine cutting-edge technology with intuitive user
                    experiences.
                  </p>
                  <p>
                    My journey in tech began in 2020 when I started learning programming out of curiosity. Since then,
                    I've worked on numerous projects, from mobile apps to web platforms, always pushing the boundaries
                    of what's possible.
                  </p>
                  <p>
                    As both a student and a professional, I bring a unique perspective to my work—combining academic
                    knowledge with real-world application to create solutions that are not just functional, but
                    forward-thinking.
                  </p>
                </div>
              </div>

              <div className="relative fade-up">
                <div className="relative h-[500px] rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal/20 to-cyberPurple/20 z-10 mix-blend-overlay" />
                  <Image
                    src="/about_small.png?height=1000&width=800"
                    alt="Harsh Zaveri"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 h-48 w-48 rounded-xl overflow-hidden border-4 border-background">
                  <Image src="/about_big.png?height=200&width=200" alt="Harsh Coding" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12 fade-up">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technical Skills</h2>
              <p className="mt-4 text-muted-foreground md:text-xl max-w-[700px] mx-auto">
                A comprehensive toolkit that allows me to build complete, scalable solutions from concept to deployment.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex justify-center"
                >
                  {skill.color === "teal" && (
                    <div className="skill-badge inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-teal/30 bg-teal/5 text-teal glow-border">
                      {skill.icon}
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                  )}
                  {skill.color === "yellow" && (
                    <div className="skill-badge inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-neonYellow/30 bg-neonYellow/5 text-neonYellow glow-border-yellow">
                      {skill.icon}
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                  )}
                  {skill.color === "purple" && (
                    <div className="skill-badge inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-cyberPurple/30 bg-cyberPurple/5 text-cyberPurple glow-border-purple">
                      {skill.icon}
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                  )}
                  {skill.color === "blue" && (
                    <div className="skill-badge inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-electricBlue/30 bg-electricBlue/5 text-electricBlue">
                      {skill.icon}
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section ref={projectsRef} className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="mb-12 md:mb-16 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl fade-up">Featured Projects</h2>
              <p className="mt-4 text-muted-foreground md:text-xl max-w-[700px] mx-auto fade-up">
                A showcase of my recent work, spanning mobile apps, web platforms, and innovative solutions.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 stagger-children">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  longDescription={project.longDescription}
                  tags={project.tags}
                  github={project.github}
                  delay={0.1 * index}
                  type={project.type}
                />
              ))}
            </div>

            <div className="mt-12 text-center fade-up">
              <Button size="lg" variant="outline" asChild>
                <Link href="/projects" className="group">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="glass-card rounded-xl p-8 md:p-12 text-center max-w-4xl mx-auto fade-up">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Let's Build the Future Together
              </h2>
              <p className="text-muted-foreground md:text-xl mb-8 max-w-[700px] mx-auto">
                Have a project in mind? I'm currently available for freelance work and exciting collaborations.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
