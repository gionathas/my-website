import techStack from 'public/tech-stack.json'

const TechStackSection = ({ className = '' }: { className?: string }) => {
  return (
    <article className={className}>
      <h2 className="text-xl font-semibold">My Tech Stack 🔨</h2>
      <div className="mt-3">
        Currently my main tech stack is composed by:
        <MainTechStackList />
        Often integrated with other tools like <strong>
          Jest, Cypress
        </strong>{' '}
        (unit and E2E testing), <strong>Storybook</strong> (UI development),{' '}
        <strong>Git</strong> (version control system) etc..
      </div>
    </article>
  )
}

const MainTechStackList = () => {
  return (
    <ul className="list-disc pl-4">
      {techStack.map(({ name, desc }) => (
        <li key={name}>
          <strong>{name}</strong>
          {desc && <span className="ml-1">{desc}</span>}
        </li>
      ))}
    </ul>
  )
}

export default TechStackSection
