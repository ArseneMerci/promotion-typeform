import { FiSearch } from 'react-icons/fi';
import { FaRegBell } from 'react-icons/fa';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdArrowDropdown } from 'react-icons/io';

const Header = () => {
  return (
    <div className='font flex flex-row justify-between h-14 bg-violet-700'>
        <h1 className='text-white font-bold my-auto mx-4 mdm:hidden'>Testing logo</h1>
        <div className='flex flex-row w-1/3 bg-violet-500 rounded h-8 my-3 mx-8 px-3 xs:hidden'>
            <FiSearch className='text-white self-center mr-2 cursor-pointer'/>
            <input type="text" className='outline-none text-[13px] font-semibold bg-inherit text-white placeholder:text-white xs:hidden' placeholder='Search shops...'/>
        </div>
        <div className="flex flex-row ">
            <FaRegBell className='text-white text-lg my-4 cursor-pointer xs:hidden'/>
            <FiSearch className='text-white self-center text-xl mr-2 cursor-pointer xsm:hidden'/>
            <div className='flex flex-row my-3 mx-8'>
                <div className='h-8 w-8 rounded-full bg-image1 bg-cover'></div>
                <div className='sm:hidden'>
                    <h1 className='text-xs font-semibold text-white ml-3'>Admin</h1>
                    <h1 className='text-xs ml-3 text-white'>admin@info.com</h1>
                </div>
                <IoMdArrowDropdown className='text-white text-xl my-auto smm:hidden'/>
                <RxHamburgerMenu className='text-white text-2xl my-auto mdm:hidden md:ml-3'/>
            </div>
        </div>
    </div>
  )
}

export default Header