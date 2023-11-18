import Image from 'next/image'
import React, { useState } from 'react'

type OwnProps = {
  alt: string
  className?: string
  imageClassName?: string
}

type ImageProps = React.ComponentPropsWithoutRef<typeof Image>

type ResponsiveImageProps = OwnProps & ImageProps

const ResponsiveImage = ({
  alt,
  className = '',
  imageClassName = '',
  onClick,
  ...rest
}: ResponsiveImageProps) => {
  const [isLoading, setIsLoading] = useState(true)
  return (
    <div className={`relative overflow-hidden ${className}`} onClick={onClick}>
      <Image
        alt={alt}
        className={`duration-200 ease-in-out object-cover ${imageClassName} ${
          isLoading ? 'grayscale blur-md' : 'grayscale-0 blur-0'
        }`}
        fill
        onLoadingComplete={() => setIsLoading(false)}
        {...rest}
      />
    </div>
  )
}

export default ResponsiveImage
