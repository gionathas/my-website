import LatestWorksSection from 'components/sections/LatestWorksSection'
import OverviewSection from 'components/sections/OverviewSection'
import PopularPostsSection from 'components/sections/PopularPostsSection'
import type { NextPage } from 'next'

const HomePage: NextPage = () => {
  return (
    <>
      <OverviewSection />
      <LatestWorksSection className="mt-16" />
      <PopularPostsSection className="mt-24" />
    </>
  )
}

export default HomePage
