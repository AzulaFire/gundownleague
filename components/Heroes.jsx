'use client';
import { heroes, heroes_jp } from '@/constants/constants';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Heroes = ({ japanese }) => {
  const [viewGrid, setViewGrid] = useState(true);
  const [selectedHero, setSelectedHero] = useState();

  const handleSelectedHero = (hero) => {
    setViewGrid(false);
    if (japanese) {
      setSelectedHero(heroes_jp[hero - 1]);
    } else {
      setSelectedHero(heroes[hero - 1]);
    }
  };

  if (japanese) {
    return (
      <section
        id='Heroes'
        className='w-full bg-black text-white text-justify leading-8 text-xl px-10 pt-20'
      >
        <h1 className='lg:text-4xl my-4 lg:mx-6 text-3xl'>
          ヒーロー{' '}
          <span className='text-lime-500 font-bold font-montserrat pb-4'>
            の紹介
          </span>
        </h1>
        {viewGrid ? (
          <motion.div
            className='grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'linear', delay: 0.2 }}
          >
            {heroes_jp.map((hero) => (
              <Link
                key={hero.id}
                href={'#Heroes'}
                onClick={() => handleSelectedHero(hero.id)}
              >
                <Card className='bg-black border-none cursor-pointer'>
                  <CardHeader>
                    <CardTitle className='border-2 border-cyan-400 rounded bg-cyan-600 hover:bg-cyan-400 hover:scale-105 hover:ease-in transition duration-0 hover:duration-250'>
                      <Image
                        src={hero.image}
                        alt={hero.name}
                        width={0}
                        height={0}
                        sizes='100vw'
                        priority={true}
                        className='w-full h-auto hero'
                      />
                    </CardTitle>
                    <CardDescription className='text-cyan-400 text-2xl font-semibold text-center font-montserrat'>
                      {hero.name}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </motion.div>
        ) : (
          <div id='HeroBox' className='flex md:flex-row bg-field flex-col'>
            <motion.div
              className='md:w-2/5 w-full flex items-end'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: 'linear', delay: 0.2 }}
            >
              <Image
                src={selectedHero.image}
                alt={selectedHero.name}
                width={0}
                height={0}
                sizes='100vw'
                priority={true}
                className='w-full h-auto cursor-pointer'
                onClick={() => setViewGrid(true)}
              />
            </motion.div>
            <div className='md:w-3/5 w-full bg-gradient-to-t from-black to-none'>
              <div className='flex flex-row items-center my-4'>
                <h2 className='ml-[45px] text-4xl text-lime-400 mr-5 font-palanquin'>
                  {selectedHero.name}
                </h2>
                <Image
                  src={selectedHero.icon}
                  alt='Ability'
                  width={70}
                  height={30}
                  className='w-[70px] h-[70px]'
                />
              </div>
              <h3 className='text-lime-400 ml-4 font-montserra px-7'>
                Ability: {selectedHero.ability}
              </h3>

              {selectedHero.descriptions.map((desc, index) => (
                <motion.div
                  key={index}
                  className='text-justify px-6'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ ease: 'linear', delay: 0.2 }}
                >
                  <p className='mb-4 mt-4'>{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </section>
    );
  } else {
    return (
      <section
        id='Heroes'
        className='w-full bg-black text-white text-justify leading-8 text-xl px-10 pt-20'
      >
        <h1 className='lg:text-4xl my-4 lg:mx-6 text-3xl'>
          Meet the{' '}
          <span className='text-lime-500 font-bold font-montserrat pb-4'>
            Heroes
          </span>
        </h1>
        {viewGrid ? (
          <motion.div
            className='grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'linear', delay: 0.2 }}
          >
            {heroes.map((hero) => (
              <Link
                key={hero.id}
                href={'#Heroes'}
                onClick={() => handleSelectedHero(hero.id)}
              >
                <Card className='bg-black border-none cursor-pointer'>
                  <CardHeader>
                    <CardTitle className='border-2 border-cyan-400 rounded bg-cyan-600 hover:bg-cyan-400 hover:scale-105 hover:ease-in transition duration-0 hover:duration-250'>
                      <Image
                        src={hero.image}
                        alt={hero.name}
                        width={0}
                        height={0}
                        sizes='100vw'
                        priority={true}
                        className='w-full h-auto hero'
                      />
                    </CardTitle>
                    <CardDescription className='text-cyan-400 text-2xl font-semibold text-center font-montserrat'>
                      {hero.name}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </motion.div>
        ) : (
          <div id='HeroBox' className='flex md:flex-row bg-field flex-col'>
            <motion.div
              className='md:w-2/5 w-full flex items-end'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: 'linear', delay: 0.2 }}
            >
              <Image
                src={selectedHero.image}
                alt={selectedHero.name}
                width={0}
                height={0}
                sizes='100vw'
                priority={true}
                className='w-full h-auto cursor-pointer'
                onClick={() => setViewGrid(true)}
              />
            </motion.div>
            <div className='md:w-3/5 w-full bg-gradient-to-t from-black to-none'>
              <div className='flex flex-row items-center my-4'>
                <h2 className='ml-[45px] text-4xl text-lime-400 mr-5 font-palanquin'>
                  {selectedHero.name}
                </h2>
                <Image
                  src={selectedHero.icon}
                  alt='Ability'
                  width={70}
                  height={30}
                  className='w-[70px] h-[70px]'
                />
              </div>
              <h3 className='text-lime-400 ml-4 font-montserra px-7'>
                Ability: {selectedHero.ability}
              </h3>

              {selectedHero.descriptions.map((desc, index) => (
                <motion.div
                  key={index}
                  className='text-justify px-6'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ ease: 'linear', delay: 0.2 }}
                >
                  <p className='mb-4 mt-4'>{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </section>
    );
  }
};
export default Heroes;
