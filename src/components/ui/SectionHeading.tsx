type SectionHeadingProps = {
  id?: string
  kicker: string
  title: string
  description?: string
}

export function SectionHeading({
  id,
  kicker,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary">
        {kicker}
      </p>
      <h2
        id={id}
        className="mt-3 text-3xl font-semibold tracking-tight text-text-primary md:text-5xl md:leading-[1.1]"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-xl text-base leading-relaxed text-text-secondary md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}
