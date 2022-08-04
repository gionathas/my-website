import Link from 'next/link'
import React from 'react'

export type LatestSectionProps = {
  title: string
  viewAllHref: string
  children?: React.ReactNode
  className?: string
  externalLink?: boolean
}

export const ProjectPreviewsSection = ({
  title,
  viewAllHref,
  className = '',
  children,
  externalLink = false,
}: LatestSectionProps) => {
  const viewAllExternalLink = (
    <a href={viewAllHref} target="_blank" rel="noreferrer">
      View All
    </a>
  )
  const viewAllInternalLink = (
    <Link href={viewAllHref} passHref>
      <a>View All</a>
    </Link>
  )

  return (
    <section className={className}>
      <div className="flex items-baseline justify-between">
        <h2 className="text-xl font-semibold">{title}</h2>
        {externalLink ? viewAllExternalLink : viewAllInternalLink}
      </div>
      {children}
    </section>
  )
}

export const ProjectsPreviewsContent = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div
      className={`flex flex-col gap-y-8 gap-x-2 xs:flex-row xs:gap-y-0 ${className}`}
    >
      {children}
    </div>
  )
}
