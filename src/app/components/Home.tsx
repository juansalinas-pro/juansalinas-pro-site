import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 max-w-3xl">
        <div className="flex justify-center mb-12">
          <Image
            src="/avatars/me.jpeg"
            width={192}
            height={192}
            alt="Juan Salinas personal blog"
            className="rounded-full shadow-lg"
          />
        </div>
        <div className="prose dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-6">👋 Hi, I'm Juan Salinas.</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6"> Life is an adventure, and my current journey involves working in startups, where I build scalable and innovative software solutions. This path is driven by my two passions: business and technology.</p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">With over a decade of experience in backend engineering, I specialize in building high-performance, scalable systems and microservices using technologies such as Java, Kotlin (Spring Boot), Node.js, and Python. Over the last 5 years, I've focused on designing and developing RESTful and GraphQL APIs that power efficient and reliable applications across various industries. </p>


          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-12 mb-6">Journey (👶 to 2020)</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">Born in May 9th 1988 in the beautiful city of <a href="https://en.wikipedia.org/wiki/Buenos_Aires" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Buenos Aires</a> (Capital City of <a href="https://en.wikipedia.org/wiki/Argentina" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Argentina</a>).</p>
     
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">My journey in Software Engineering began while working at the <a href="https://en.wikipedia.org/wiki/Bank_of_the_Province_of_Buenos_Aires" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Bank of the Province of Buenos Aires</a>. From 2010 to 2012, I was part of a dedicated team responsible for implementing a lending management system. This project ignited my passion for software development, as I gained hands-on experience in managing complex processes, collaborating closely with the project leader, and delivering solutions that improved the bank’s operational efficiency.</p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">From 2013 to 2019, I built software for <a href="https://en.wikipedia.org/wiki/Buquebus" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Buquebus</a> e-commerce, where I started my path in the tourism industry. At Buquebus, I started as a Junior Full Stack Developer, and as I gained more experience I started to get more responsibilities, and after 4 years I became a Technical Lead of a team of 5 members, managing the team and resources for delivering software solutions for the Buquebus e-commerce, and I did it pretty well based on feedbacks I got from my coordinators.</p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">In November 2019 I began to feel a restlessness of working in huge projects of digital transformation with cloud computing, so I started to build software for <a href="https://en.wikipedia.org/wiki/Equifax" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Equifax</a>, it was a project of an entire migration of the legacy platform to cloud computing (GCP).</p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">After getting my Bachelor’s Degree from <a href="https://maps.app.goo.gl/rApWSPXMdDqxtfMy8" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">UNLZ</a>, I wanted to work in startups, where I can build more scalable and innovative software solutions with cutting-edge technologies.</p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">After a year in Equifax, I finally got a new position in a startup.</p>

          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-12 mb-6">Journey (2021 - present)</h3>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">Since 2021, I’ve been building software in startups that are scalable, innovative with cutting-edge technologies, my path has been through <a href="https://almundo.com.ar/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Almundo</a>, <a href="https://www.tul.io/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">TUL</a>, and currently <a href="https://travelx.io/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">TravelX</a>.</p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">In 2023, I presented <a href="https://greenplus.gitbook.io/greenplus" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Green Plus</a>, a startup idea in <a href="https://startuplab.pol.una.py/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Startup Lab</a>, an incubation program. Green Plus, a SaaS for managing companies' carbon footprint, using blockchain (<a href="https://algorand.co/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Algorand</a>) and machine learning as its core solution. During this program I learned a lot more about the startup ecosystem, but I didn’t execute the idea because I didn’t find the idea motivational enough.</p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">After more than a decade of experience, I can say that I am passionate about startups because they give me the opportunity to build innovative solutions and make a direct impact on business growth by addressing real-world challenges. I thrive in fast-paced environments where creativity, agility, and problem-solving are key, and I enjoy the process of transforming ideas into scalable, efficient technologies.</p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6"></p>

  
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-12 mb-6">Get in touch</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">I'm most active on <a href="https://www.linkedin.com/in/juansalinas-xyz/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">LinkedIn</a>. You can also find me at <Link href="mailto:jmsalinas88@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">jmsalinas88@gmail</Link>.</p>
        </div>
      </main>
    </div>
  )
}