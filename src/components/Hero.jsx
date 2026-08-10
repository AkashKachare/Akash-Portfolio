import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'
import { personalInfo, profileSummary } from '../data/portfolioData'

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.22),_transparent_45%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
            Full-Stack Developer Portfolio
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-7xl">
            Hi, I&apos;m <span className="text-cyan-300">{personalInfo.name}</span>
          </h1>
          <h2 className="mt-4 text-2xl font-medium text-slate-200 sm:text-3xl">
            {profileSummary.title}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            {profileSummary.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              View My Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-300"
            >
              Contact Me
            </a>
            <a
              href={personalInfo.resume}
              download
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 px-6 py-3 font-semibold text-cyan-300 transition hover:bg-cyan-400/10"
            >
              <FaDownload /> Download Resume
            </a>
          </div>

          <div className="mt-8 flex gap-4">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 p-3 text-slate-200 transition hover:border-cyan-300 hover:text-cyan-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href={personalInfo.github}
              className="rounded-full border border-white/10 p-3 text-slate-200 transition hover:border-cyan-300 hover:text-cyan-300"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl sm:p-8"
        >
          <div className="flex w-full max-w-[360px] flex-col items-center rounded-2xl border border-cyan-400/20 bg-slate-900/70 p-4 text-center sm:p-6">
            <img
              src="/assets/profile.jpg"
              alt="Akash Kachare"
              className="h-[220px] w-[220px] rounded-full border border-cyan-300/70 object-cover object-center shadow-[0_0_30px_rgba(34,211,238,0.25)] sm:h-[280px] sm:w-[280px] lg:h-[320px] lg:w-[320px]"
            />
            <p className="mt-6 text-sm uppercase tracking-[0.35em] text-cyan-300">Profile Snapshot</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>• Full-stack development with a focus on front-end and back-end technologies.</li>
              <li>• Skilled in React.js, Java, Spring Boot, Node.js, and MongoDB.</li>
              <li>• Strong interest in performance, responsiveness, and user-centric design.</li>
              <li>• Experienced in collaborative problem-solving and agile delivery.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
