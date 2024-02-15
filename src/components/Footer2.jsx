import { Link } from 'react-router-dom';
import { LogoIcon } from './Icons/LogoIcon';
import Typography from './FindPage/Typography';

const Footer2 = () => {
  return (
    <footer className='flex flex-col items-center w-full bg-white border-t-[1px] border-grayscale-100 h-[240px]'>
      <div className='flex items-center w-[124px] justify-between mt-[60px]'>
        <LogoIcon width={36} height={36}></LogoIcon>
        <Typography.SubH className='font-cafe24'>밥 친구</Typography.SubH>
      </div>
      <div className='flex mt-6 gap-x-1'>
        <Typography.Caption2 className='w-16'>
          <Link to={'/'}>Home</Link>
        </Typography.Caption2>

        <Typography.Caption2 className='w-6'>|</Typography.Caption2>

        <Typography.Caption2 className='w-16'>
          <Link to={'/'}>About</Link>
        </Typography.Caption2>

        <Typography.Caption2 className='w-6'>|</Typography.Caption2>

        <Typography.Caption2 className='w-16'>
          <Link to={'/'}>Contact</Link>
        </Typography.Caption2>
      </div>
      <Typography.Caption3 className='text-grayscale-700 mt-9'>
        Copyright 2023. UMC all rights deserved.
      </Typography.Caption3>
    </footer>
  );
};

export default Footer2;
