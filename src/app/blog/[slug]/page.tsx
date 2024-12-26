import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CommentSection } from '@/components/Comments';

const blogPosts = [
  {
    id: 1,
    category: "Technology",
    title: "Revolutionizing Digital Realms",
    description: "Dive into the world of cutting-edge tech innovations, where software and hardware collide to spark a new digital era. Explore the future of artificial intelligence, machine learning, and automation.",
    imageUrl: "/blog-one.jpg",
    likes: 1.2,
    comments: 6,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 2,
    category: "Lifestyle",
    title: "Minimalist Bliss",
    description: "Embrace the essence of a minimalist lifestyle that prioritizes experiences over possessions. Learn how decluttering your mind and space can lead to more peace and freedom in life.",
    imageUrl: "/blog-two.jpg",
    likes: 1.2,
    comments: 6,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 3,
    category: "Entertainment",
    title: "Behind the Silver Screen",
    description: "Get an insider's view into the world of cinema and the stories behind the most iconic films. From timeless classics to modern blockbusters, explore the magic of filmmaking.",
    imageUrl: "/blog-three.jpg",
    likes: 1.2,
    comments: 6,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 4,
    category: "Health",
    title: "Wellness Secrets Unveiled",
    description: "Discover the secrets to leading a healthy and balanced life with expert advice on fitness, nutrition, and mental well-being. Learn how small changes can have a big impact on your overall health.",
    imageUrl: "/blog-four.jpg",
    likes: 1.2,
    comments: 6,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 5,
    category: "Travel",
    title: "Wanderlust Chronicles",
    description: "Uncover hidden travel gems and insider tips for making your next adventure unforgettable. Whether you're exploring local wonders or international hotspots, find inspiration for your next trip.",
    imageUrl: "/blog-five.jpg",
    likes: 1.2,
    comments: 6,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 6,
    category: "Food",
    title: "Culinary Expeditions",
    description: "Indulge your senses with new and exciting recipes from around the world. From savory street food to gourmet meals, learn how to cook with ingredients you've never heard of before.",
    imageUrl: "/blog-six.jpg",
    likes: 1.2,
    comments: 6,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 7,
    category: "Finance",
    title: "Mastering Money Matters",
    description: "Take control of your financial future with tips on budgeting, saving, and investing. Learn the best strategies for building wealth and securing your financial independence.",
    imageUrl: "/blog-seven.jpg",
    likes: 1.2,
    comments: 6,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 8,
    category: "Fashion",
    title: "The Trendsetter's Guide",
    description: "Explore the latest trends in fashion and how to create a wardrobe that blends style with comfort. From classic staples to bold statements, discover what's hot this season.",
    imageUrl: "/blog-eight.jpg",
    likes: 1.2,
    comments: 6,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 9,
    category: "Self-Improvement",
    title: "Elevate Your Life",
    description: "Unlock your full potential with strategies for self-growth, mindfulness, and productivity. Learn how to cultivate a growth mindset and achieve your personal and professional goals.",
    imageUrl: "/blog-nine.jpg",
    likes: 1.2,
    comments: 6,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
];

export default function Page({ params }: { params: { slug: string } }) {
  const postId = parseInt(params.slug, 10);
  const post = blogPosts.find(p => p.id === postId);

  if (!post) {
    notFound();
  }

  return (
    <main>
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-3xl mx-auto">
        <Image
          src={post.imageUrl}
          alt={post.title}
          width={600}
          height={400}
          className="w-full h-64 object-cover rounded-t-lg"
        />
        <CardHeader>
          <div className="text-sm font-medium text-blue-600 mb-2">{post.category}</div>
          <CardTitle className="text-3xl font-bold">{post.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">{post.description}</p>
          <div className="border-t border-gray-200 pt-4 mb-4">
            <p className="text-gray-600">{post.content}</p>
          </div>
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span>{post.likes}K likes</span>
            <span>{post.comments} comments</span>
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild>
            <Link href="/blogpost">Back to Blog List</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
    <CommentSection postId={0} initialComments={[]} userName={''} />
    </main>
);
}

