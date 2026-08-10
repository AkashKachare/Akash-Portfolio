const SectionTitle = ({ eyebrow, title, description }) => {
  return (
    <div className="max-w-2xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-lg text-slate-400">{description}</p> : null}
    </div>
  )
}

export default SectionTitle
