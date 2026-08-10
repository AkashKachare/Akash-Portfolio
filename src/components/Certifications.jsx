import { motion } from 'framer-motion'
import { FaAward } from 'react-icons/fa'
import SectionTitle from './SectionTitle'
import { certifications } from '../data/portfolioData'

const Certifications = () => {
  return (
    <section id="certifications" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Certifications"
          title="Professional certifications"
          description="Focused credentials that complement a modern software development profile."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {certifications.map((certification, index) => (
            <motion.article
              key={certification.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-7 shadow-xl shadow-black/20"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                  <FaAward size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{certification.title}</h3>
                  <p className="mt-2 text-slate-400">{certification.provider}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
