"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Send, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import AnimatedText from "@/components/animated-text"
import Particles from "@/components/particles"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Format the message
    const formattedMessage = `*New Contact Form Submission*\n\n*Name:* ${formState.name}\n*Email:* ${formState.email}\n*Subject:* ${formState.subject}\n\n*Message:*\n${formState.message}`

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(formattedMessage)
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/919324549780?text=${encodedMessage}`

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank')

    // Reset form
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    })

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "harshzaveri54@gmail.com",
      link: "mailto: harshzaveri54@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91 93245 49780",
      link: "tel:+919324549780",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Mumbai, India",
      link: "https://maps.google.com/?q=Mumbai,India",
    },
  ]

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      link: "https://github.com/CodeCrusaderr",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/harsh-zaveri-0b385b25a/",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      link: "mailto:harsh.zaveri@gmail.com",
    },
  ]

  return (
    <>
      <Particles />
      <div className="noise" />

      <main className="pt-24 pb-16">
        <section className="container px-4 md:px-6 py-12 md:py-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-full border border-teal/30 bg-teal/5 px-3 py-1 text-sm text-teal mb-4">
              <span>Get In Touch</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">
              <AnimatedText text="Let's Build Something Amazing Together" animation="slide" delay={0.1} speed={0.05} />
            </h1>

            <p className="text-muted-foreground md:text-xl max-w-[700px] mx-auto">
              Have a project in mind or just want to chat? I'm always open to new opportunities and collaborations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-xl p-6 md:p-8"
            >
              <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-teal/10 border border-teal/30 text-teal rounded-lg p-4 mb-6"
                >
                  <p className="font-medium">Message sent successfully!</p>
                  <p className="text-sm mt-1">I'll get back to you as soon as possible.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="bg-background/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email address"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="bg-background/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What's this about?"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="bg-background/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project, ideas, or questions..."
                      value={formState.message}
                      onChange={handleChange}
                      required
                      className="min-h-[150px] bg-background/50"
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="glass-card rounded-xl p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.link}
                      target={item.label === "Location" ? "_blank" : undefined}
                      rel={item.label === "Location" ? "noopener noreferrer" : undefined}
                      className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-medium">{item.label}</h3>
                        <p className="text-muted-foreground">{item.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="glass-card rounded-xl p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-6">Connect With Me</h2>

                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                      whileHover={{ y: -5 }}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </motion.a>
                  ))}
                </div>

                <div className="mt-8">
                  <h3 className="font-medium mb-3">Availability</h3>
                  <p className="text-muted-foreground">
                    I'm currently available for freelance work and exciting collaborations. My typical response time is
                    within 24 hours.
                  </p>
                </div>
              </div>

              </motion.div>
          </div>
        </section>
      </main>
    </>
  )
}
