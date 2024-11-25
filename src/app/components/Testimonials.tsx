import Image from 'next/image'

const testimonials = [
  {
    name: 'Diego Abdala',
    role: 'Software Engineer, Lear Soft',
    image: '/avatars/diego-abdala.png?height=100&width=100',
    content: 'I worked with Juan for three years. He is a very diligent and methodical employee. He is keen on learning and implementing new methodologies, always seeking the one that best fits the company\'s needs. He continuously strives to grow technologically, even though he already possesses advanced knowledge. He is supportive of his colleagues, constantly sharing information, solutions, and best practices that enhance the entire team\'s capabilities. He perfectly embodies the company\'s ideals and values. He is very respectful of schedules, deadlines, client interactions, and, most importantly, the quality of the delivered product. He easily adapts to changes in projects, technology, and teams. Additionally, he has excellent leadership skills.',
    rating: 5,
  },
  {
    name: 'Sam Andreatta',
    role: 'Software Engineer, Lear Soft',
    image: '/avatars/sam-andreatta.jpeg?height=100&width=100',
    content: 'Juan was the leader of my team in one of my first work experiences, and to this day, he serves as an example of a good programmer and professional. He is very serious and responsible, committed to the team, and an expert in Java. He had a lot of patience when I knew almost nothing and taught me to seek to understand each problem, break it down into parts, and justify the possible solutions. At every stage of the project, he encouraged us to maintain good practices and documentation, and he motivated the entire team to keep studying and become independent, which I consider the most important characteristic of a leader.',
    rating: 5,
  },
  {
    name: 'Andrea Perez',
    role: 'UX/UI Designer / Design Lead, Buquebus',
    image: '/avatars/andrea-perez.jpeg?height=100&width=100',
    content: 'Juan is an excellent professional, with great technical knowledge and a great ability to solve problems. He is always willing to help and share his knowledge with the team. He is very responsible and committed to his work, always looking for the best solution for the project. He is a great leader and knows how to motivate the team to achieve the best results.',
    rating: 5,
  },
  {
    name: 'Pablo Delgado',
    role: 'Web Designer, Buquebus',
    image: '/avatars/pablo-delgado.jpeg?height=100&width=100',
    content: 'During the time Juan worked with us providing support, he proved to be an excellent professional with a great ability to solve all kinds of problems. He always had a positive attitude and contributed ideas to facilitate and improve our tools and work systems.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">
            What the people I worked with say
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Don't just take my word for it – hear from the people I've worked with!
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white overflow-hidden shadow rounded-lg dark:bg-gray-800"
            >
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Image
                      className="h-12 w-12 rounded-full"
                      src={testimonial.image}
                      alt={`Portrait of ${testimonial.name}`}
                      width={48}
                      height={48}
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <blockquote className="mt-4 text-gray-600 dark:text-gray-300">
                  "{testimonial.content}"
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}