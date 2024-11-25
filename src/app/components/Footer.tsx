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
        <div className="flex flex-col items-center">
          <Link href="/" className="flex items-center justify-center mb-6">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">Juan Salinas</span>
          </Link>
          <p className="text-gray-500 dark:text-gray-400 text-base text-center mb-8">
            Software Engineer passionate about creating innovative solutions.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex justify-center space-x-6 mb-6">
            {socialLinks.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="text-base text-gray-400 text-center">
            © {new Date().getFullYear()} Juan Salinas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}