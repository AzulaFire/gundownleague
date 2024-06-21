import logo from '@/public/images/logo.png';
import next_icon from '@/public/next.png';
import html_icon from '@/public/html.png';
import css_icon from '@/public/css.png';
import node_icon from '@/public/nodejs.png';
import js_icon from '@/public/js.png';
import Image from 'next/image';
import Link from 'next/link';

const Footer = ({ japanese }) => {
  const currentYear = new Date().getFullYear();

  if (japanese) {
    return (
      <footer className='bg-black text-white w-full'>
        <div className='flex flex-row mx-auto lg:max-w-[1540px]'>
          <div className='flex flex-col w-1/4 justify-center items-center mx-8'>
            <a href='/'>
              <Image src={logo} width={150} height={46} alt='Footer Logo' />
            </a>
            <p className='text-xl font-bold leading-7 font-montserrat text-white sm:max-w-sm'>
              GunDown League
            </p>
          </div>
          <div className='flex flex-col w-3/4 mx-4 justify-center items-center'>
            <Link
              href={'http://projects.azulafire.com'}
              target='_Blank'
              className='hover:text-amber-400 text-2xl'
            >
              AzulaFire Designs
            </Link>
            <div className='text-white-400 text-2xl mt-10 text-justify flex flex-col lg:flex-row items-center'>
              Built with:
              <Image src={node_icon} alt='NodeJS' width={50} height={30} />
              <Image src={next_icon} alt='NextJS' width={50} height={30} />
              <Image src={html_icon} alt='HTML' width={50} height={30} />
              <Image src={css_icon} alt='CSS' width={50} height={30} />
              <Image src={js_icon} alt='JavaScript' width={50} height={30} />
            </div>
          </div>
        </div>
        <div className='flex justify-center text-white-400 mt-8 max-sm:flex-col max-sm:items-center'>
          <p className='text-sm mx-8 mb-2'>
            &copy; {currentYear} Copyright. All rights reserved.
          </p>
          <p className='text-sm'>Terms & Conditions</p>
        </div>
      </footer>
    );
  } else {
    return (
      <footer className='bg-black text-white w-full'>
        <div className='flex flex-row mx-auto lg:max-w-[1540px]'>
          <div className='flex flex-col w-1/4 justify-center items-center mx-8'>
            <a href='/'>
              <Image src={logo} width={150} height={46} alt='Footer Logo' />
            </a>
            <p className='text-xl font-bold leading-7 font-montserrat text-white sm:max-w-sm'>
              GunDown League
            </p>
          </div>
          <div className='flex flex-col w-3/4 mx-4 justify-center items-center'>
            <Link
              href={'http://projects.azulafire.com'}
              target='_Blank'
              className='hover:text-amber-400 text-2xl'
            >
              AzulaFire Designs
            </Link>
            <div className='text-white-400 text-2xl mt-10 text-justify flex flex-col lg:flex-row items-center'>
              Built with:
              <Image src={node_icon} alt='NodeJS' width={50} height={30} />
              <Image src={next_icon} alt='NextJS' width={50} height={30} />
              <Image src={html_icon} alt='HTML' width={50} height={30} />
              <Image src={css_icon} alt='CSS' width={50} height={30} />
              <Image src={js_icon} alt='JavaScript' width={50} height={30} />
            </div>
          </div>
        </div>
        <div className='flex justify-center text-white-400 mt-8 max-sm:flex-col max-sm:items-center'>
          <p className='text-sm mx-8 mb-2'>
            &copy; {currentYear} Copyright. All rights reserved.
          </p>
          <p className='text-sm'>Terms & Conditions</p>
        </div>
      </footer>
    );
  }
};
export default Footer;
