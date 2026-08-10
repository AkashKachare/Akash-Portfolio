import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import { experience } from '../data/portfolioData'

const Experience = () => {
  return (
    <section id="experience" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Experience"
          title="Professional experience"
          description="A steady progression through internships and hands-on development work."
        />

        <div className="mt-12 space-y-6">
          {experience.map((item, index) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-lg shadow-black/20"
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-white">{item.company}</h3>
                  <p className="mt-2 text-lg text-cyan-300">{item.role}</p>
                </div>
                <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
                  {item.period}
                </span>
              </div>
              <ul className="mt-6 space-y-3 text-slate-400">
                {item.responsibilities.map((responsibility) => (
                  <li key={responsibility} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-cyan-300" />
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
