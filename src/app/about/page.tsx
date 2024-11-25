import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: 'About Juan Salinas - Software Engineer',
  description: 'Learn more about Juan Salinas, a passionate software engineer with over a decade of experience in backend engineering and startups.',
}

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            About Me
          </h1>
          
          <div className="mt-6 space-y-8 text-gray-500 dark:text-gray-300">
            <p>
              Life is an adventure, and my current journey involves working in startups, where I build scalable and innovative software solutions. This path is driven by my two passions: business and technology.
            </p>
            
            <p>
              With over a decade of experience in backend engineering, I specialize in building high-performance, scalable systems and microservices using technologies such as Java, Kotlin (Spring Boot), Node.js, and Python. Over the last 5 years, I've focused on designing and developing RESTful and GraphQL APIs that power efficient and reliable applications across various industries.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12">Journey (👶 to 2020)</h2>
            
            <p>
              Born on May 9th, 1988 in the beautiful city of <Link href="https://en.wikipedia.org/wiki/Buenos_Aires" className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">Buenos Aires</Link> (Capital City of <Link href="https://en.wikipedia.org/wiki/Argentina" className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">Argentina</Link>).
            </p>
            
            <p>
              My journey in Software Engineering began while working at the <Link href="https://en.wikipedia.org/wiki/Bank_of_the_Province_of_Buenos_Aires" className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">Bank of the Province of Buenos Aires</Link>. From 2010 to 2012, I was part of a dedicated team responsible for implementing a lending management system. This project ignited my passion for software development, as I gained hands-on experience in managing complex processes, collaborating closely with the project leader, and delivering solutions that improved the bank's operational efficiency.
            </p>
            
            <p>
              From 2013 to 2019, I built software for <Link href="https://en.wikipedia.org/wiki/Buquebus" className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">Buquebus</Link> e-commerce, where I started my path in the tourism industry. At Buquebus, I started as a Junior Full Stack Developer, and as I gained more experience I started to get more responsibilities. After 4 years, I became a Technical Lead of a team of 5 members, managing the team and resources for delivering software solutions for the Buquebus e-commerce, and I did it pretty well based on feedbacks I got from my coordinators.
            </p>
            
            <p>
              In November 2019, I began to feel a restlessness of working in huge projects of digital transformation with cloud computing, so I started to build software for <Link href="https://en.wikipedia.org/wiki/Equifax" className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">Equifax</Link>. It was a project of an entire migration of the legacy platform to cloud computing (GCP).
            </p>
            
            <p>
              After getting my Bachelor's Degree from <Link href="https://maps.app.goo.gl/rApWSPXMdDqxtfMy8" className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">UNLZ</Link>, I wanted to work in startups, where I can build more scalable and innovative software solutions with cutting-edge technologies.
            </p>
            
            <p>
              After a year in Equifax, I finally got a new position in a startup.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12">Journey (2021 - present)</h2>
            
            <p>
              Since 2021, I've been building software in startups that are scalable, innovative with cutting-edge technologies. My path has been through <Link href="https://almundo.com.ar/" className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">Almundo</Link>, <Link href="https://www.tul.io/" className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">TUL</Link>, and currently <Link href="https://travelx.io/" className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">TravelX</Link>.
            </p>
            
            <p>
              In 2023, I presented <Link href="https://greenplus.gitbook.io/greenplus" className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">Green Plus</Link>, a startup idea in <Link href="https://startuplab.pol.una.py/" className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">Startup Lab</Link>, an incubation program. Green Plus, a SaaS for managing companies' carbon footprint, using blockchain (<Link href="https://algorand.co/" className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">Algorand</Link>) and machine learning as its core solution. During this program I learned a lot more about the startup ecosystem, but I didn't execute the idea because I didn't find the idea motivational enough.
            </p>
            
            <p>
              After more than a decade of experience, I can say that I am passionate about startups because they give me the opportunity to build innovative solutions and make a direct impact on business growth by addressing real-world challenges. I thrive in fast-paced environments where creativity, agility, and problem-solving are key, and I enjoy the process of transforming ideas into scalable, efficient technologies.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}