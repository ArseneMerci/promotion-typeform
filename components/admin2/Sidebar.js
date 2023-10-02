import { FiUsers } from 'react-icons/fi';
import { AiOutlineDropbox,AiOutlineBarChart } from 'react-icons/ai';
import { BsShop,BsFillCartCheckFill } from 'react-icons/bs';
import { useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/dashboardTwo.module.css'

const SideBar = () => {
    const [activeLink, setActiveLink] = useState('/admin2/dashboard');

  return (
    <div className= {`${styles.outfit} w-[230px] h-screen border-r-2 py-7 px-4 flex flex-col justify-between fixed left-0 md:hidden md:w-full`}>
        <h1 className='text-black text-2xl text-center'>Testing logo</h1>
        <ul className='-mt-28'>
            <li className={ activeLink === '/admin2/dashboard' ? 'text-violet-700 p-2 rounded bg-violet-200 transition ease-in-out duration-300 mb-2' : 'mb-4 cursor-pointer hover:text-violet-700 hover:p-2 hover:rounded hover:bg-violet-200 hover:transition ease-in-out duration-300'}><Link href='/admin2/dashboard' onClick={()=>setActiveLink('/admin2/dashboard')}><div className='flex flex-row'><AiOutlineBarChart className='text-2xl -mt-1'/><h1 className={ activeLink === '/admin2/dashboard' ? 'text-[15px] font-semibold ml-3 w-full text-violet-700' : 'text-[15px] font-semibold text-black ml-3 w-full hover:text-violet-700'}>Analytics</h1></div></Link></li>
            <li className={ activeLink === '/shops' ? 'text-violet-700 p-2 rounded bg-violet-200 transition ease-in-out duration-300 mb-2' : 'mb-4 cursor-pointer hover:text-violet-700 hover:p-2 hover:rounded hover:bg-violet-200 hover:transition ease-in-out duration-300'}><Link href='/shops' onClick={()=>setActiveLink('/shops')}><div className='flex flex-row'><BsShop className='text-2xl -mt-1'/><h1 className={ activeLink === '/shops' ? 'text-[15px] font-semibold ml-3 w-full text-violet-700' :'text-[15px] font-semibold text-black ml-3 w-full hover:text-violet-700'}>All Orders</h1></div></Link></li>
            <li className={ activeLink === '/products' ? 'text-violet-700 p-2 rounded bg-violet-200 transition ease-in-out duration-300 mb-2' : 'mb-4 cursor-pointer hover:text-violet-700 hover:p-2 hover:rounded hover:bg-violet-200 hover:transition ease-in-out duration-300'}> <Link href='/products' onClick={()=>setActiveLink('/products')}><div className='flex flex-row'><AiOutlineDropbox className='text-2xl -mt-1'/><h1 className={ activeLink === '/products' ? 'text-[15px] font-semibold ml-3 w-full text-violet-700' :'text-[15px] font-semibold text-black ml-3 w-full hover:text-violet-700'}>completed Orders</h1></div></Link></li>
            <li className={ activeLink === '/orders' ? 'text-violet-700 p-2 rounded bg-violet-200 transition ease-in-out duration-300 mb-2' :'mb-4 cursor-pointer hover:text-violet-700 hover:p-2 hover:rounded hover:bg-violet-200 hover:transition ease-in-out duration-300'}><Link href='/orders' onClick={()=>setActiveLink('/orders')}><div className='flex flex-row'><BsFillCartCheckFill className='text-2xl -mt-1'/><h1 className={ activeLink === '/orders' ? 'text-[15px] font-semibold ml-3 w-full text-violet-700' :'text-[15px] font-semibold text-black ml-3 w-full hover:text-violet-700'}>Incomplete Orders</h1></div></Link></li>
            <li className={ activeLink === '/users' ? 'text-violet-700 p-2 rounded bg-violet-200 transition ease-in-out duration-300 mb-2' :'mb-4 cursor-pointer hover:text-violet-700 hover:p-2 hover:rounded hover:bg-violet-200 hover:transition ease-in-out duration-300'}><Link href='/users' onClick={()=>setActiveLink('/users')}><div className='flex flex-row'><FiUsers className='text-2xl -mt-1'/><h1 className={ activeLink === '/users' ? 'text-[15px] font-semibold ml-3 w-full text-violet-700' :'text-[15px] font-semibold text-black ml-3 w-full hover:text-violet-700'}>Orders requesting assistance</h1></div></Link></li>
            <li className={ activeLink === '/users' ? 'text-violet-700 p-2 rounded bg-violet-200 transition ease-in-out duration-300 mb-2' :'mb-4 cursor-pointer hover:text-violet-700 hover:p-2 hover:rounded hover:bg-violet-200 hover:transition ease-in-out duration-300'}><Link href='/users' onClick={()=>setActiveLink('/users')}><div className='flex flex-row'><FiUsers className='text-2xl -mt-1'/><h1 className={ activeLink === '/users' ? 'text-[15px] font-semibold ml-3 w-full text-violet-700' :'text-[15px] font-semibold text-black ml-3 w-full hover:text-violet-700'}>Reff]erals</h1></div></Link></li>

        </ul>
        <div className="">
            {/* <div className="flex flex-row pb-5 border-b-2 cursor-pointer"><FiSettings/><h1 className='text-[13px] font-semibold text-black ml-3'>Settings</h1></div> */}
            <div className='flex flex-row pt-5 border-t-2'>
                <div className='h-8 w-8 rounded-full bg-image1 bg-cover'></div>
                <div className=''>
                    <h1 className='text-[13px] font-semibold text-black ml-3'>Admin</h1>
                    <h1 className='text-[13px] font-normal ml-3'>admin@info.com</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SideBar