import { motion } from 'framer-motion'
import { FiGithub } from 'react-icons/fi'
import SectionTitle from './SectionTitle'
import { projects } from '../data/portfolioData'

const Projects = () => {
  return (
    <section id="projects" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Projects"
          title="Selected work"
          description="A collection of projects that reflect hands-on experience in full-stack development, data analysis, and applied machine learning."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="flex h-full flex-col rounded-[2rem] border border-white/10 bg-slate-900/70 p-7 shadow-xl shadow-black/20"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
                  {project.date}
                </span>
              </div>
              <p className="mt-5 flex-1 text-lg leading-8 text-slate-400">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={project.github}
                  className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 font-medium text-cyan-300 transition hover:bg-cyan-400/20"
                >
                  <FiGithub /> GitHub
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
