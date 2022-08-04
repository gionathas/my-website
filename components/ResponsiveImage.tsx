import Image from 'next/image'
import React from 'react'

type OwnProps = {
  className?: string
  imageClassName?: string
}

type ImageProps = React.ComponentPropsWithoutRef<typeof Image>

type ResponsiveImageProps = OwnProps & ImageProps

const ResponsiveImage = ({
  className = '',
  imageClassName = '',
  onClick,
  ...rest
}: ResponsiveImageProps) => {
  return (
    <div className={`relative overflow-hidden ${className}`} onClick={onClick}>
      <Image
        className={imageClassName}
        objectFit="cover"
        layout="fill"
        {...rest}
      />
    </div>
  )
}

export default ResponsiveImage
