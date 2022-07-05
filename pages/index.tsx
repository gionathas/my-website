import LatestProjectsSection from 'components/sections/LatestProjectsSection'
import OverviewSection from 'components/sections/OverviewSection'
import TechStackSection from 'components/sections/TechStackSection'
import type { NextPage } from 'next'

const HomePage: NextPage = () => {
  return (
    <>
      <OverviewSection />
      <LatestProjectsSection className="mt-16" />
      <TechStackSection className="mt-14" />
    </>
  )
}

export default HomePage
