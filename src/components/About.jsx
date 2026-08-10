import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import { profileSummary } from '../data/portfolioData'

const highlights = [
  'Full-stack development across frontend and backend systems.',
  'Experience with React.js, Java, Spring Boot, Node.js, and MongoDB.',
  'Focused on performance, responsiveness, and user-centric design.',
  'Strong problem-solving ability with effective team collaboration and Agile methodology.',
]

const About = () => {
  return (
    <section id="about" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-slate-900/60 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionTitle
            eyebrow="About Me"
            title="Building thoughtful web experiences with modern technologies"
            description={profileSummary.description}
          />
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <p className="text-lg leading-8 text-slate-300">
              I am a full-stack developer focused on creating scalable, responsive, and user-friendly web applications. My work combines frontend and backend development with a strong emphasis on clean architecture, practical problem solving, and efficient collaboration in team environments.
            </p>
            <ul className="mt-6 space-y-3 text-slate-400">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-cyan-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
