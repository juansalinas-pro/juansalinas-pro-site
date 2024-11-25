import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from './components/Header'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'

export const metadata: Metadata = {
  title: 'Juan Salinas - Software Engineer',
  description: 'Personal website and portfolio of Juan Salinas, a passionate software engineer with over a decade of experience in backend engineering and startups.',
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-white dark:bg-gray-900">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="mb-8">
                <Image
                  src="/avatars/me.jpeg?height=300&width=300"
                  alt="Juan Salinas"
                  width={300}
                  height={300}
                  className="mx-auto rounded-full shadow-lg"
                  priority
                />
              </div>
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                <span className="block">Hi, I'm Juan Salinas</span>
                <span className="block text-indigo-600 dark:text-indigo-400">Software Engineer</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Passionate about creating innovative solutions, building cutting-edge applications, and working with startups.
              </p>
              <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <div className="rounded-md shadow">
                  <a
                    href="mailto:jmsalinas88@gmail.com"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Contact Me
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-16 space-y-8 text-gray-500 dark:text-gray-300">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl text-center">About Me</h2>

              <p>
                Life is an adventure, and my current journey involves working in startups, where I build scalable and innovative software solutions. This path is driven by my two passions: business and technology.
              </p>

              <p>
                With over a decade of experience in backend engineering, I specialize in building high-performance, scalable systems and microservices using technologies such as Java, Kotlin (Spring Boot), Node.js, and Python. Over the last 5 years, I've focused on designing and developing RESTful and GraphQL APIs that power efficient and reliable applications across various industries.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-12">Journey (👶 to 2020)</h3>

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

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-12">Journey (2021 - present)</h3>

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
        </section>
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}