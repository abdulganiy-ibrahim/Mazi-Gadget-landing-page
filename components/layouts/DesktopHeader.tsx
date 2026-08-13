import { navLinks as Links } from '@/lib/data';
import { ImageLogo, BrandName } from '../brand';
import Link from 'next/link';
import { Button } from '../ui';

export default function DesktopHeader() {
  return (
    <div className='hidden lg:flex items-center justify-between py-4 px-6 bg-dark-background'>
      <div>
        <ImageLogo height={100} width={150}/>
      </div>

      <div>
        {
          Links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className='text-white font-semibold p-2 hover:text-primary hover:border-b hover:border-primary transition-all duration-300'
            >
              {link.label}
            </Link>
          ))
        }
      </div>

      <div>
        <Button
          variant='primary'
          className='rounded-lg'
        >
          Chat on whatsapp
        </Button>
      </div>
      
    </div>
  )
}