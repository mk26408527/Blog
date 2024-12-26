'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <header className="relative text-white">
      {/* Hero Section */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between py-16 px-4 md:px-6 lg:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 text-center lg:text-left max-w-2xl mx-auto lg:mx-0"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-gray-700 dark:text-gray-200"
          >
            Discover the World of <span className="text-gray-800 dark:text-gray-300">Blogging</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 text-lg md:text-xl text-gray-300 dark:text-gray-400 mb-8"
          >
            Create stunning content, connect with readers, and take your writing to the next level with our cutting-edge blogging platform.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center lg:justify-start space-x-4"
          >
            <Link href='/contact'>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 py-3 px-6 rounded-full shadow-lg transition-all flex items-center justify-center space-x-2"
              >
                <span>Get in touch</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.button>
            </Link>
            <Link href="/about">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 py-3 px-6 rounded-full shadow-lg transition-all flex items-center justify-center space-x-2"
              >
                <span>Learn More</span>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/one.jpg"
              alt="Hero"
              width={500}
              height={500}
              className="w-full max-w-md rounded-lg shadow-2xl grayscale"
            />
          </motion.div>
        </motion.div>
      </div> 
    </header>
  )
}

export default Header

