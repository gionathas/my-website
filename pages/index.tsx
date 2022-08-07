import LatestWorksSection from 'components/sections/LatestWorksSection'
import OverviewSection from 'components/sections/OverviewSection'
import PopularPostsSection from 'components/sections/PopularPostsSection'
import type { NextPage } from 'next'

const HomePage: NextPage = () => {
  return (
    <>
      <OverviewSection />
      <LatestWorksSection className="mt-20 xs:mt-14" />
      <PopularPostsSection className="mt-20 xs:mt-20" />
    </>
  )
}

export default HomePage
