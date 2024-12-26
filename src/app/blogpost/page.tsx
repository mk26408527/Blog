'use client'

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    id: 1,
    category: "Technology",
    title: "Revolutionizing Digital Realms",
    description: "Dive into the world of cutting-edge tech innovations, where software and hardware collide to spark a new digital era. Explore the future of artificial intelligence, machine learning, and automation.",
    imageUrl: "/blog-one.jpg",
    likes: 1.2,
    comments: 6,
  },
  {
    id: 2,
    category: "Lifestyle",
    title: "Minimalist Bliss",
    description: "Embrace the essence of a minimalist lifestyle that prioritizes experiences over possessions. Learn how decluttering your mind and space can lead to more peace and freedom in life.",
    imageUrl: "/blog-two.jpg",
    likes: 1.2,
    comments: 6,
  },
  {
    id: 3,
    category: "Entertainment",
    title: "Behind the Silver Screen",
    description: "Get an insider's view into the world of cinema and the stories behind the most iconic films. From timeless classics to modern blockbusters, explore the magic of filmmaking.",
    imageUrl: "/blog-three.jpg",
    likes: 1.2,
    comments: 6,
  },
  {
    id: 4,
    category: "Health",
    title: "Wellness Secrets Unveiled",
    description: "Discover the secrets to leading a healthy and balanced life with expert advice on fitness, nutrition, and mental well-being. Learn how small changes can have a big impact on your overall health.",
    imageUrl: "/blog-four.jpg",
    likes: 1.2,
    comments: 6,
  },
  {
    id: 5,
    category: "Travel",
    title: "Wanderlust Chronicles",
    description: "Uncover hidden travel gems and insider tips for making your next adventure unforgettable. Whether you're exploring local wonders or international hotspots, find inspiration for your next trip.",
    imageUrl: "/blog-five.jpg",
    likes: 1.2,
    comments: 6,
  },
  {
    id: 6,
    category: "Food",
    title: "Culinary Expeditions",
    description: "Indulge your senses with new and exciting recipes from around the world. From savory street food to gourmet meals, learn how to cook with ingredients you've never heard of before.",
    imageUrl: "/blog-six.jpg",
    likes: 1.2,
    comments: 6,
  },
  {
    id: 7,
    category: "Finance",
    title: "Mastering Money Matters",
    description: "Take control of your financial future with tips on budgeting, saving, and investing. Learn the best strategies for building wealth and securing your financial independence.",
    imageUrl: "/blog-seven.jpg",
    likes: 1.2,
    comments: 6,
  },
  {
    id: 8,
    category: "Fashion",
    title: "The Trendsetter's Guide",
    description: "Explore the latest trends in fashion and how to create a wardrobe that blends style with comfort. From classic staples to bold statements, discover what's hot this season.",
    imageUrl: "/blog-eight.jpg",
    likes: 1.2,
    comments: 6,
  },
  {
    id: 9,
    category: "Self-Improvement",
    title: "Elevate Your Life",
    description: "Unlock your full potential with strategies for self-growth, mindfulness, and productivity. Learn how to cultivate a growth mindset and achieve your personal and professional goals.",
    imageUrl: "/blog-nine.jpg",
    likes: 1.2,
    comments: 6,
  },
];

const blogpost = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <motion.div 
            className="flex flex-wrap -m-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {blogPosts.map((post, index) => (
              <motion.div 
                key={post.id} 
                className="p-4 md:w-1/3"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div 
                  className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={post.imageUrl}
                    alt={post.title}
                    width={500}
                    height={500}
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      {post.category}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-400 mb-3">
                      {post.title}
                    </h1>
                    <p className="leading-relaxed mb-3">{post.description}</p>
                    <div className="flex items-center flex-wrap">
                      <Link
                        href={`/blog/${post.id}`}
                        className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                      >
                        Learn More
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      </Link>
                      <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg
                          className="w-4 h-4 mr-1"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx={12} cy={12} r={3} />
                        </svg>
                        {post.likes}K
                      </span>
                      <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg
                          className="w-4 h-4 mr-1"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                        </svg>
                        {post.comments}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default blogpost;

