import { Github, Twitter, Linkedin, Mail, Rss, Instagram } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/juansalinas-xyz' },
    { name: 'Twitter', icon: Twitter, href: 'https://x.com/juansalinas_xyz' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/juansalinas-xyz/' },
    { name: 'Email', icon: Mail, href: 'mailto:jmsalinas88@gmail.com' },
    { name: 'Medium', icon: Rss, href: 'https://medium.com/@juansalinas-xyz' },
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/juansalinas_xyz/' },
  ]

  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:flex xl:justify-between">
          <div className="space-y-8">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">Juan Salinas</span>
            </Link>
            <p className="text-gray-500 dark:text-gray-400 text-base">
              Software Engineer passionate about creating innovative solutions.
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {socialLinks.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            © {new Date().getFullYear()} Juan Salinas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}