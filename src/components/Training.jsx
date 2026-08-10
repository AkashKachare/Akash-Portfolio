import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import { training } from '../data/portfolioData'

const Training = () => {
  return (
    <section id="training" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-slate-900/60 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-12">
        <SectionTitle
          eyebrow="Training"
          title="Career development and practical learning"
          description="Hands-on training that strengthened both technical depth and real-world development experience."
        />

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35 }}
          className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8"
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-white">{training.title}</h3>
              <p className="mt-2 text-lg text-cyan-300">{training.institution}</p>
            </div>
            <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
              {training.period}
            </span>
          </div>
          <ul className="mt-6 space-y-3 text-slate-400">
            {training.details.map((detail) => (
              <li key={detail} className="flex gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-cyan-300" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            {training.technologies.map((technology) => (
              <span key={technology} className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-2 text-sm text-slate-300">
                {technology}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Training
