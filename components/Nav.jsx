'use client';
import { links, links_jp } from '@/constants/constants';
import logo from '@/public/images/logo.png';
import hamburger from '@/public/hamburger.svg';
import Image from 'next/image';
import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Nav = ({ handleTranslate }) => {
  const [language, setLanguage] = useState('日本語');

  const handleLanguage = () => {
    if (language === '日本語') {
      setLanguage('English');
    } else {
      setLanguage('日本語');
    }

    handleTranslate();
  };

  if (language !== '日本語') {
    return (
      <div className='bg-black sticky top-0 z-50'>
        <nav className='flex flex-row'>
          <Image src={logo} alt='Logo' width={60} height={60} />
          <ul className='hidden text-white items-center ml-[120px] text-2xl lg:flex flex-row w-full'>
            {links_jp.map((link) => (
              <li key={link.id} className='px-4'>
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
          <div className='flex w-full justify-end text-white items-center px-4 lg:hidden'>
            <Sheet>
              <SheetTrigger>
                <Image
                  src={hamburger}
                  alt='Menu'
                  width={30}
                  height={30}
                  className='w-[30px] h-[30px]'
                />
              </SheetTrigger>
              <SheetContent side='left' className='bg-lime-700'>
                <SheetHeader>
                  {links_jp.map((link) => (
                    <SheetTitle
                      key={link.id}
                      className='py-4 text-white text-2xl'
                    >
                      <Link href={link.href}>{link.name}</Link>
                    </SheetTitle>
                  ))}
                  <SheetDescription>
                    <Button
                      className='bg-black text-white'
                      onClick={handleLanguage}
                    >
                      {language}
                    </Button>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
          <div className='hidden w-full justify-end text-white items-center px-4 lg:flex'>
            <Button className='bg-lime-500' onClick={handleLanguage}>
              {language}
            </Button>
          </div>
        </nav>
      </div>
    );
  } else {
    return (
      <div className='bg-black sticky top-0 z-50'>
        <nav className='flex flex-row'>
          <Image src={logo} alt='Logo' width={60} height={60} />
          <ul className='hidden text-white items-center ml-[120px] text-2xl lg:flex flex-row'>
            {links.map((link) => (
              <li key={link.id} className='px-4'>
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
          <div className='flex w-full justify-end text-white items-center px-4 lg:hidden'>
            <Sheet>
              <SheetTrigger>
                <Image
                  src={hamburger}
                  alt='Menu'
                  width={30}
                  height={30}
                  className='w-[30px] h-[30px]'
                />
              </SheetTrigger>
              <SheetContent side='left' className='bg-lime-700'>
                <SheetHeader>
                  {links.map((link) => (
                    <SheetTitle
                      key={link.id}
                      className='py-4 text-white text-2xl'
                    >
                      <Link href={link.href}>{link.name}</Link>
                    </SheetTitle>
                  ))}
                  <SheetDescription>
                    <Button
                      className='bg-black text-white'
                      onClick={handleLanguage}
                    >
                      {language}
                    </Button>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
          <div className='hidden w-full justify-end text-white items-center px-4 lg:flex'>
            <Button className='bg-lime-500' onClick={handleLanguage}>
              {language}
            </Button>
          </div>
        </nav>
      </div>
    );
  }
};
export default Nav;
