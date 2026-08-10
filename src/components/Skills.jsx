import { motion } from 'framer-motion'
import { FiCode, FiServer, FiDatabase, FiCpu } from 'react-icons/fi'
import SectionTitle from './SectionTitle'
import { skillGroups } from '../data/portfolioData'

const icons = [
  <FiCode key="code" size={22} />,
  <FiServer key="server" size={22} />,
  <FiDatabase key="database" size={22} />,
  <FiCpu key="cpu" size={22} />,
]

const Skills = () => {
  return (
    <section id="skills" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Skills"
          title="Technologies I work with"
          description="A focused stack built around modern full-stack development with strong backend and database fundamentals."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="rounded-3xl border border-white/10 bg-slate-900/70 p-7 shadow-lg shadow-black/20"
            >
              <div className="mb-5 inline-flex rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                {icons[index]}
              </div>
              <h3 className="text-xl font-semibold text-white">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
