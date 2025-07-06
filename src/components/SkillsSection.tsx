import pointingHand from '/pointing-hand.png'

const skills = [
  {
    title: 'Languages',
    className: 'skillsTitleLan',
    items: ["Java", "Python", "Javascript", "Typescript", "C++ and C", "GoLang", "SQL", "XML and XSL", "HTML", "CSS"],
  },
  {
    title: 'Industry Knowledge',
    className: 'skillsTitleIndus',
    items: ["Agile Testing", "Agile Project Management", "Agile Methodologies", "Business Analysis", "Quality Assurance", "Quality Control", "DevOps", "EER and UML Diagrams", "OCL Constraints", "API Experience"],
  },
  {
    title: 'Software',
    className: 'skillsTitleSoft',
    items: ["React/Angular", "Next.js", "Kubernetes/Docker", "Jira", "Quarkus", "Spring Framework", "Tailwind CSS", "Visual Studio Code", "Linux/Windows/macOs", "Git"],
  },
  {
    title: 'Other Knowledge',
    className: 'skillsTitleOther',
    items: ["Sales", "Investment Research", "Portfolio Management", "Customer Service"],
  },
]

export default function SkillsSection() {
  return (
    <div className='skills'>
      {skills.map(({ title, className, items }) => (
        <div key={title} className="sectionSkill">
          <span className={className}><strong>{title}</strong></span>
          <ul style={{width: '100%'}}>
            {items.map((item) => (
              <li key={item} style={{display: "flex", flexDirection: 'row', width: '100%'}}>
                <img className="emojiList" alt="Pointing Hand" src={pointingHand} />
                <span className="raiseText">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}