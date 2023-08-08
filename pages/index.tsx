import PopularPostsSection from 'components/sections/LatestVideos'
import LatestWorksSection from 'components/sections/LatestWorks'
import OverviewSection from 'components/sections/OverviewSection'
import type { NextPage } from 'next'

const HomePage: NextPage = () => {
  return (
    <>
      <OverviewSection />
      <LatestWorksSection className="mt-20" />
      <PopularPostsSection className="mt-36 md:mt-20" />
    </>
  )
}

export default HomePage
