import MaziLogo from '@/public/brandimage/mazi-logo.png';
import Image from 'next/image';

type ImageLogoProps = {
  width?: number;
  height?: number;
}

export default function ImageLogo({width, height}: ImageLogoProps) {
  return (
    <>
    <Image 
      src={MaziLogo}
      alt='mazi logo'
      width={width}
      height={height}
      className='w-auto h-auto'
    />

    </>
  )
}