import sniper from '@/public/images/sniper.png';
import assault from '@/public/images/assault.png';
import shotgun from '@/public/images/shotgun.png';
import taunt from '@/public/images/taunt.gif';
import barriers from '@/public/images/barriers.jpg';
import { GiHeavyBullets } from 'react-icons/gi';
import Image from 'next/image';
import { features, features_jp } from '@/constants/constants';
import { MdOutlineWarning } from 'react-icons/md';

const Guns = ({ japanese }) => {
  if (japanese) {
    return (
      <section
        id='Features'
        className='w-full bg-trash bg-black text-white lg:text-justify leading-8 text-xl px-10 py-20'
      >
        <h1 className='lg:text-4xl my-4 mx-6 text-3xl'>
          ユニークな{' '}
          <span className='text-lime-500 font-bold font-montserrat pb-4'>
            特徴
          </span>
        </h1>
        <div className='flex flex-col justify-between mx-16 mb-10 pb-10 lg:flex-row'>
          <Image src={assault} alt='Assault' width={223} height={91} />
          <Image src={shotgun} alt='Shotgun' width={196} height={81} />
          <Image src={sniper} alt='Sniper' width={362} height={99} />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 text-base lg:text-2xl'>
          <div>
            <ul>
              {features_jp.map((feature) => (
                <li key={feature.id} className='flex flex-row items-center'>
                  <GiHeavyBullets className='mr-6 text-lime-400' />
                  {feature.description}
                </li>
              ))}
            </ul>
          </div>
          <div className='flex flex-col items-center'>
            <Image
              src={barriers}
              alt='Barriers'
              width={500}
              height={290}
              className='border-2 border-cyan-400 my-4'
            />
            <Image
              src={taunt}
              alt='Taunt'
              width={500}
              height={290}
              className='border-2 border-cyan-400'
              unoptimized
            />
            <h3 className='text-2xl my-4 mx-6 text-cyan-400 font-bold font-montserrat pt-4 text-center'>
              これはあなたのおじいちゃんのゲームではありません!
            </h3>
            <div className='flex flex-row items-end justify-center'>
              <MdOutlineWarning className='text-yellow-300 text-4xl' />
              <p className='pl-4'>
                {' '}
                <span className='font-bold font-montserrat pb-4'>
                  警告!
                </span>{' '}
                このゲームは繊細な人向けでは{' '}
                <span className='underline text-yellow-300'>ありません</span>。
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section
        id='Features'
        className='w-full bg-trash bg-black text-white lg:text-justify leading-8 text-xl px-10 py-20'
      >
        <h1 className='lg:text-4xl my-4 mx-6 text-3xl'>
          Unique{' '}
          <span className='text-lime-500 font-bold font-montserrat pb-4'>
            Features
          </span>
        </h1>
        <div className='flex flex-col justify-between mx-16 mb-10 pb-10 lg:flex-row'>
          <Image src={assault} alt='Assault' width={223} height={91} />
          <Image src={shotgun} alt='Shotgun' width={196} height={81} />
          <Image src={sniper} alt='Sniper' width={362} height={99} />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 text-base lg:text-2xl'>
          <div>
            <ul>
              {features.map((feature) => (
                <li key={feature.id} className='flex flex-row items-center'>
                  <GiHeavyBullets className='mr-6 text-lime-400' />
                  {feature.description}
                </li>
              ))}
            </ul>
          </div>
          <div className='flex flex-col items-center'>
            <Image
              src={barriers}
              alt='Barriers'
              width={500}
              height={290}
              className='border-2 border-cyan-400 my-4'
            />
            <Image
              src={taunt}
              alt='Taunt'
              width={500}
              height={290}
              className='border-2 border-cyan-400'
              unoptimized
            />
            <h3 className='text-2xl my-4 mx-6 text-cyan-400 font-bold font-montserrat pt-4 text-center'>
              This isn&apos;t your Grandpa&apos; Game!
            </h3>
            <div className='flex flex-row items-end justify-center'>
              <MdOutlineWarning className='text-yellow-300 text-4xl' />
              <p className='pl-4'>
                {' '}
                <span className='font-bold font-montserrat pb-4'>
                  WARNING!
                </span>{' '}
                This game is not for the{' '}
                <span className='underline text-yellow-300'>sensitive</span>.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
};
export default Guns;
