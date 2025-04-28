"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ProjectCard from "@/components/project-card"
import AnimatedText from "@/components/animated-text"
import Particles from "@/components/particles"
import { Button } from "@/components/ui/button"

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all")
  const [filteredProjects, setFilteredProjects] = useState<any[]>([])

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
      title: "Edusync — Digital Learning Library & LMS",
      description:
        "A next-gen campus-focused LMS offering structured courses and centralized content hubs to solve content overload and disengagement in hybrid education.",
      longDescription:
        "CampusCore is a next-generation campus-focused Learning Management System built with Next.js and Gen AI. It offers structured courses and centralized content hubs to solve content overload and disengagement in hybrid education. The platform implements role-based onboarding, multimedia course creation, live dashboards, and mobile/desktop seamlessness with offline access. It also features powerful admin and moderation tools for user management, content control, and campus-wide performance tracking.",
      tags: ["Next.js", "Gen AI", "Web App", "Education"],
      category: "web",
      link: "#",
      github: "https://github.com/CodeCrusaderr/EduSync",
      type: "Web App",
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
    {
      title: "NanoHack — Smart City Surveillance",
      description:
        "An advanced smart city surveillance car with integrated vision and network surveillance capabilities to enhance urban safety.",
      longDescription:
        "NanoHack is an advanced smart city surveillance car with integrated vision and network surveillance capabilities to enhance urban safety. It utilizes face detection technology for real-time criminal identification, sending immediate alerts to local authorities to improve security response times. The system includes network surveillance features to detect and mitigate cyber threats such as DoS attacks, MITM intrusions, and Rogue AP attempts, reinforcing the city's security infrastructure. The car is equipped with ultrasonic sensors for landmine detection and a robotic arm for versatile operations, providing support for public safety. It also integrates a microwave sensor and a payload system to improve the city's defense mechanisms, with a self-annihilation feature to protect sensitive data and ensure system integrity during high-risk operations.",
      tags: ["IoT", "Python", "Computer Vision", "Robotics", "Security"],
      category: "iot",
      link: "#",
      github: "#",
      type: "IoT Project",
    },
    {
      title: "Market Minds — Stock Market Simulator",
      description:
        "A multiplayer stock market simulation game that teaches financial literacy through competitive trading scenarios and real-time market data.",
      longDescription:
        "Market Minds is a multiplayer stock market simulation game built with Flask that teaches financial literacy through competitive trading scenarios and real-time market data. The game simulates a stock market where stocks start with an initial price, and at regular intervals, news is released that affects stock prices. Additionally, user buying and selling activities influence stock prices, creating a dynamic and realistic trading environment. This interactive approach makes learning about financial markets engaging and practical.",
      tags: ["Flask", "Python", "JavaScript", "WebSockets", "Multiplayer"],
      category: "web",
      link: "#",
      github: "#",
      type: "Web App",
    },
  ]

  useEffect(() => {
    if (filter === "all") {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter((project) => project.category === filter))
    }
  }, [filter])

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Apps" },
    { id: "mobile", name: "Mobile Apps" },
    { id: "iot", name: "IoT Projects" },
  ]

  return (
    <>
      <Particles />
      <div className="" />

      <main className="pt-24 pb-16">
        <section className="container px-4 md:px-6 py-12 md:py-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-full border border-teal/30 bg-teal/5 px-3 py-1 text-sm text-teal mb-4">
              <span>My Work</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">
              <AnimatedText text="Featured Projects" animation="slide" delay={0.1} speed={0.05} />
            </h1>

            <p className="text-muted-foreground md:text-xl max-w-[700px] mx-auto">
              A showcase of my recent work, spanning mobile apps, web platforms, and innovative solutions.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={filter === category.id ? "default" : "outline"}
                onClick={() => setFilter(category.id)}
                className="transition-all duration-300"
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    longDescription={project.longDescription}
                    tags={project.tags}
                    link={project.link}
                    github={project.github}
                    type={project.type}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </section>

        {/* Collaboration CTA */}
        <section className="container px-4 md:px-6 py-12 md:py-24">
          <div className="glass-card rounded-xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Have a Project in Mind?</h2>
            <p className="text-muted-foreground md:text-xl mb-8 max-w-[700px] mx-auto">
              I'm always open to new collaborations and exciting projects. Let's discuss your ideas and bring them to
              life.
            </p>
            <Button size="lg" asChild>
              <a href="/contact">Let's Talk</a>
            </Button>
          </div>
        </section>
      </main>
    </>
  )
}
