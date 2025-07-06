type TitleSectionProps = {
  children: React.ReactNode
  className?: string
}
export default function TitleSection({ children, className = '' }: TitleSectionProps) {
  return (
    <div className={`title text-center overflow-hidden ${className}`}>
      <p className="script inline-block relative px-5 text-black text-[2.5vw]">
        <span className="spanWhite px-1 font-bold">{children}</span>
      </p>
    </div>
  )
}