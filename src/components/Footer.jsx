import { personalInfo } from '../data/portfolioData'

const Footer = () => {
  return (
    <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-400 lg:px-8">
      <p>
        © {new Date().getFullYear()} {personalInfo.name}. Built with React, Vite, Tailwind CSS, and Framer Motion.
      </p>
    </footer>
  )
}

export default Footer
