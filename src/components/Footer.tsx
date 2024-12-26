import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Rss } from 'lucide-react'


export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
          <span className="font-custom font-bold text-2xl">HezziBlogs</span>
            <p className="text-gray-500 text-base">
              Exploring ideas, sharing insights, and fostering community through the written word.
            </p>
            <div className="flex space-x-6">
              <Link href="https://www.facebook.com/" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="https://x.com/Huzaifa20008" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="https://www.instagram.com/itx_hezzi/" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="https://www.linkedin.com/in/muhammad-huzaifa-9102282b7/" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">RSS Feed</span>
                <Rss className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Categories
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {['Technology', 'Lifestyle', 'Travel', 'Food'].map((item) => (
                    <li key={item}>
                      <Link href="/blogpost" className="text-base text-gray-500 hover:text-gray-900">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Support
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {['About', 'Contact', 'Privacy Policy', 'Terms of Service'].map((item) => (
                    <li key={item}>
                      <Link href="/" className="text-base text-gray-500 hover:text-gray-900">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Subscribe to our newsletter
                </h3>
                <p className="mt-4 text-base text-gray-500">
                  Get the latest posts delivered right to your inbox.
                </p>
                <form className="mt-4 sm:flex sm:max-w-md">
                  <Input
                    type="email"
                    name="email-address"
                    id="email-address"
                    required
                    placeholder="Enter your email"
                    className="w-full min-w-0 px-4 py-2"
                  />
                  <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                    <Button type="submit" className="w-full">
                      Subscribe
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} <span className='font-custom'>HezziBlogs</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

