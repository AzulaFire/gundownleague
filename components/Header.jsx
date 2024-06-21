import gdl_main from '/public/images/gdl_main_grad2.png';
import Image from 'next/image';

const Header = () => {
  return (
    <div className='mt-0 relative'>
      <Image
        src={gdl_main}
        alt='Banner'
        width={0}
        height={0}
        sizes='100vw'
        priority={true}
        className='w-full h-auto'
      />
    </div>
  );
};
export default Header;
