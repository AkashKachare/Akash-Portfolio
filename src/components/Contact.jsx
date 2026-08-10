import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa'
import { personalInfo } from '../data/portfolioData'

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-slate-900/60 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Contact</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Let&apos;s connect</h2>
            <p className="mt-4 text-lg text-slate-400">
              I am open to opportunities, collaborative projects, and professional conversations.
            </p>

            <div className="mt-8 space-y-4 text-slate-300">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-cyan-300" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-cyan-300" />
                <span>{personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-cyan-300" />
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <FaLinkedin className="text-cyan-300" />
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-300">
                  {personalInfo.linkedin}
                </a>
              </div>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35 }}
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm text-slate-300">
                <span className="mb-2 block">Name</span>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(event) => setFormState({ ...formState, name: event.target.value })}
                  className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none focus:border-cyan-300"
                />
              </label>
              <label className="text-sm text-slate-300">
                <span className="mb-2 block">Email</span>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(event) => setFormState({ ...formState, email: event.target.value })}
                  className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none focus:border-cyan-300"
                />
              </label>
            </div>
            <label className="mt-4 block text-sm text-slate-300">
              <span className="mb-2 block">Message</span>
              <textarea
                required
                rows="6"
                value={formState.message}
                onChange={(event) => setFormState({ ...formState, message: event.target.value })}
                className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none focus:border-cyan-300"
              />
            </label>
            <button
              type="submit"
              className="mt-6 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Send Message
            </button>
            {submitted ? (
              <p className="mt-4 text-sm text-cyan-300">Thanks for reaching out. Your message has been received.</p>
            ) : null}
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
