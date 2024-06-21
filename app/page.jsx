'use client';
import Header from '@/components/Header';
import Nav from '@/components/Nav';
import About from '@/components/About';
import Heroes from '@/components/Heroes';
import Modes from '@/components/Modes';
import Guns from '@/components/Guns';
import Footer from '@/components/Footer';
import Faqs from '@/components/Faqs';
import { useState } from 'react';

export const metadata = {
  title: 'GunDown League - Fast-Paced Action & Sports Gameplay',
  description:
    'Experience the thrill of Ultimate Sports FPS, the fast-paced game that combines intense first-person shooter action with exciting sports gameplay. Join the action now!',
  keywords: [
    'GunDown League',
    'GDL',
    'FPS game',
    'sports video game',
    'first-person shooter',
    'action sports game',
    'multiplayer FPS',
    'competitive gaming',
    'eSports',
    'online gaming',
    'Ultimate Sports FPS',
  ],
};

export default function Home() {
  const [japanese, setJapanese] = useState(false);

  const handleTranslate = () => {
    setJapanese((prev) => !prev);
  };

  console.log(japanese);

  return (
    <div className='w-full flex flex-col mx-auto bg-black bg-repeat bg-bg min-h-screen'>
      <Nav handleTranslate={handleTranslate} />
      <main className='flex flex-col mx-auto lg:max-w-[1540px]'>
        <Header />
        <About japanese={japanese} />
        <Heroes japanese={japanese} />
        <Modes japanese={japanese} />
        <Guns japanese={japanese} />
        <Faqs japanese={japanese} />
      </main>
      <Footer japanese={japanese} />
    </div>
  );
}
