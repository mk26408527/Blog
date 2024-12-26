'use client'

/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4">
  

      {/* Introduction with Side-by-Side*/}
      <section>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
    <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2 space-y-6"
      >
        <h2 className="text-3xl sm:text-4xl font-semibold text-center lg:text-left">
          Get to Know Me
        </h2>
        <div className="space-y-4 text-gray-600 text-base sm:text-lg">
          <p>
            Hello! I'm Muhammed Huzaifa, a passionate learner and aspiring full-stack developer. My journey began with a deep curiosity about technology and a vision to create meaningful projects that inspire and educate others.
          </p>
          <p>
            From taking part in exciting coding challenges to honing my skills in TypeScript, JavaScript, HTML, and CSS, I've been on an incredible path of growth. With guidance from my seniors and peers, I've built a solid foundation in web development and am excited to expand into advanced technologies.
          </p>
          <p>
            My mission is simple: to turn ideas into reality, share my knowledge with others, and make an impact in the tech world. As I continue my learning at Comprehensive College and beyond, I'm dedicated to achieving my goal of becoming a skilled full-stack developer.
          </p>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full lg:w-1/2 flex items-stretch"
      >
        <div className="relative w-full h-[300px] sm:h-[400px] lg:h-full overflow-hidden rounded-lg shadow-lg">
          <Image
            src="/image.jpg"
            alt="Muhammed Huzaifa"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>
      </motion.div>
    </div>
  </div>
</section>


      {/* Additional Cards Section */}
      <section className="mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {['Our Vision', 'Our Mission', 'Our Values'].map((title, index) => (
    <motion.div
      key={title}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          {title === 'Our Vision' && (
            <p>To be the go-to platform for curious minds seeking quality content and engaging discussions on a wide range of topics.</p>
          )}
          {title === 'Our Mission' && (
            <p>To provide our readers with well-researched, thought-provoking content that informs, inspires, and fosters a community of lifelong learners.</p>
          )}
          {title === 'Our Values' && (
            <ul className="list-disc list-inside">
              <li>Integrity in our research and reporting</li>
              <li>Respect for diverse perspectives</li>
              <li>Commitment to continuous learning</li>
              <li>Passion for sharing knowledge</li>
            </ul>
          )}
        </CardContent>
      </Card>
    </motion.div>
  ))}
</section>

      {/* Team Members */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamMember key={member.name} {...member} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <motion.section 
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="rounded-lg p-8"
>
  <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
  <p className="text-lg text-gray-600 mb-6">
    We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, don't hesitate to reach out.
  </p>
  <Link href='/contact'>
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button size="lg">Contact Us</Button>
    </motion.div>
  </Link>
</motion.section>
    </div>
  )
}

const teamMembers = [
  {
    name: "Jane Doe",
    role: "Founder & Editor-in-Chief",
    image: "/about-one.jpg",
    bio: "Jane has been writing and editing for over a decade, with a passion for technology and science."
  },
  {
    name: "John Smith",
    role: "Senior Writer",
    image: "/about-two.jpg",
    bio: "John specializes in long-form articles on climate change and environmental issues."
  },
  {
    name: "Kinza Rehman",
    role: "Social Media Manager",
    image: "/about-three.jpg",
    bio: "Kinza keeps our community engaged and growing across all social platforms."
  }
]

function TeamMember({ name, role, image, bio }: {
  name: string
  role: string
  image: string
  bio: string
}) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="rounded-lg shadow-md overflow-hidden"
    >
      <Image
        src={image}
        alt={name}
        width={300}
        height={300}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className=" mb-4">{role}</p>
        <p>{bio}</p>
      </div>
    </motion.div>
  )
}

