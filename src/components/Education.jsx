import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import { education } from '../data/portfolioData'

const Education = () => {
  return (
    <section id="education" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Education"
          title="Academic background"
          description="A strong engineering foundation with practical development exposure."
        />

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35 }}
          className="mt-10 rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-lg shadow-black/20"
        >
          <h3 className="text-2xl font-semibold text-white">{education.degree}</h3>
          <p className="mt-3 text-lg text-cyan-300">{education.institution}</p>
          <p className="mt-4 text-slate-400">{education.graduation}</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
