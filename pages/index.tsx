import LatestWorksSection from 'components/home/FeaturedProjects'
import PopularPostsSection from 'components/home/FeaturedVideos'
import OverviewSection from 'components/home/OverviewSection'
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
