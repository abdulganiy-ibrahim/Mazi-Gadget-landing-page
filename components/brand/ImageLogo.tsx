import Image from 'next/image';

type ImageLogoProps = {
  width?: number;
  height?: number;
}

export default function ImageLogo({width, height}: ImageLogoProps) {
  return (
    <>
    <Image 
      src='/brandimage/mazi-logo.png'
      alt='Mazi Gadgets'
      width={width}
      height={height}
      className='w-auto h-auto'
    />

    </>
  )
}