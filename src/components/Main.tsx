'use client'

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const posts = [
  {
    title: "Code with Syntax Highlighting with PrismJS",
    date: "May 09, 2020",
    image: "https://creative-blog.vercel.app/assets/image-2.jpg", // Replace with the actual image path
  },
  {
    title: "Fascinating movies about photography",
    date: "May 10, 2020",
    image: "https://creative-blog.vercel.app/assets/photo-1542038784456-1ea8e935640e.jpg",
  },
  {
    title: "Time for a step change in how we view men on the dancefloor",
    date: "May 10, 2020",
    image: "https://creative-blog.vercel.app/assets/photo-1502519144081-acca18599776.jpg",
  },
  {
    title: "Dummy Content from Fillerama",
    date: "May 09, 2020",
    image: "https://creative-blog.vercel.app/assets/image-5.jpg",
  },
  {
    title: "Why music is good for health",
    date: "May 10, 2020",
    image: "https://creative-blog.vercel.app/assets/brian-lundquist-eqGTjImNi_s-unsplash.jpg",
  },
  {
    title: "Fascinating movies about photography",
    date: "May 10, 2020",
    image: "https://creative-blog.vercel.app/assets/photo-1542038784456-1ea8e935640e.jpg",
  },
  {
    title: "Time for a step change in how we view men on the dancefloor",
    date: "May 10, 2020",
    image: "https://creative-blog.vercel.app/assets/photo-1502519144081-acca18599776.jpg",
  },
  {
    title: "Dummy Content from Fillerama",
    date: "May 09, 2020",
    image: "https://creative-blog.vercel.app/assets/image-5.jpg",
  },
  {
    title: "Why music is good for health",
    date: "May 10, 2020",
    image: "https://creative-blog.vercel.app/assets/brian-lundquist-eqGTjImNi_s-unsplash.jpg",
  },
];

const Main = () => {
  return (
    <>
      <main>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10"
        >
          <motion.h2 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl font-bold mb-8"
          >
            Recent Posts
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative bg-gray-200 rounded-lg overflow-hidden shadow-lg"
              >
                <a 
                  href={`https://www.google.com/search?q=${encodeURIComponent(post.title)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={500}
                    height={500}
                    className="w-full h-48 object-cover"
                  />
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                    className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white"
                  >
                    <h3 className="text-lg font-semibold">{post.title}</h3>
                    <p className="text-sm">{post.date}</p>
                  </motion.div>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </>
  );
}

export default Main;
