import { FiUsers } from 'react-icons/fi';
import { AiOutlineDropbox,AiOutlineBarChart } from 'react-icons/ai';
import { BsShop,BsFillCartCheckFill } from 'react-icons/bs';
import { useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/dashboardTwo.module.css'
import { useRouter } from 'next/router';

const SideBar = () => {
    const [activeLink, setActiveLink] = useState('');
    const router = useRouter();
  return (
    <div className= {`${styles.outfit} w-[230px] h-screen border-r-2 py-7 px-4 flex flex-col justify-between fixed left-0 md:hidden md:w-full`}>
        <h1 className='text-black text-2xl text-center'>Testing logo</h1>
        <ul className='-mt-28'>
            <li className={ router.pathname === '/admin2/dashboard' ? 'text-violet-700 p-2 rounded bg-violet-200 transition ease-in-out duration-300 mb-3' : 'mb-4 cursor-pointer hover:text-violet-700 hover:p-2 hover:rounded hover:bg-violet-200 hover:transition ease-in-out duration-300'} onClick={()=>setActiveLink('/admin2/dashboard')}><Link href='/admin2/dashboard'><div className='flex flex-row items-center'><AiOutlineBarChart className='text-2xl'/><h1 className={ router.pathname === '/admin2/dashboard' ? 'text-[15px] font-semibold ml-3 w-full text-violet-700 hover:text-inherit' : 'text-[15px] font-semibold text-black ml-3 w-full hover:text-violet-700'} >Analytics</h1></div></Link></li>
            <li className={ router.pathname === '/admin2/allOrders' ? 'text-violet-700 p-2 rounded bg-violet-200 transition ease-in-out duration-300 mb-3' : 'mb-4 cursor-pointer hover:text-violet-700 hover:p-2 hover:rounded hover:bg-violet-200 hover:transition ease-in-out duration-300'} onClick={()=>setActiveLink('/admin2/allOrders')}><Link href='/admin2/allOrders' ><div className='flex flex-row items-center'><BsShop className='text-2xl'/><h1 className={ router.pathname === '/admin2/allOrders' ? 'text-[15px] font-semibold ml-3 w-full text-violet-700' :'text-[15px] font-semibold text-black ml-3 w-full hover:text-violet-700'} >All Orders</h1></div></Link></li>
            <li className={ router.pathname === '/products' ? 'text-violet-700 p-2 rounded bg-violet-200 transition ease-in-out duration-300 mb-3' : 'mb-4 cursor-pointer hover:text-violet-700 hover:p-2 hover:rounded hover:bg-violet-200 hover:transition ease-in-out duration-300'} onClick={()=>setActiveLink('/products')}> <Link href='/products'><div className='flex flex-row items-center'><AiOutlineDropbox className='text-2xl'/><a className={ router.pathname === '/products' ? 'text-[15px] font-semibold ml-3 w-full text-violet-700' :'text-[15px] font-semibold text-black ml-3 w-full hover:text-violet-700'} >Completed Orders</a></div></Link></li>
            <li className={ router.pathname === '/orders' ? 'text-violet-700 p-2 rounded bg-violet-200 transition ease-in-out duration-300 mb-3' :'mb-4 cursor-pointer hover:text-violet-700 hover:p-2 hover:rounded hover:bg-violet-200 hover:transition ease-in-out duration-300'} onClick={()=>setActiveLink('/orders')}><Link href='/orders' ><div className='flex flex-row items-center'><BsFillCartCheckFill className='text-2xl'/><a className={ router.pathname === '/orders' ? 'text-[15px] font-semibold ml-3 w-full text-violet-700' :'text-[15px] font-semibold text-black ml-3 w-full hover:text-violet-700'} >Incomplete Orders</a></div></Link></li>
            <li className={ router.pathname === '/users' ? 'text-violet-700 p-2 rounded bg-violet-200 transition ease-in-out duration-300 mb-3' :'mb-4 cursor-pointer hover:text-violet-700 hover:p-2 hover:rounded hover:bg-violet-200 hover:transition ease-in-out duration-300'} onClick={()=>setActiveLink('/users')}><Link href='/users'><div className='flex flex-row items-center'><FiUsers className='text-2xl'/><a className={ router.pathname === '/users' ? 'text-[15px] font-semibold ml-3 w-full text-violet-700' :'text-[15px] font-semibold text-black ml-3 w-full hover:text-violet-700'} >Orders requesting assistance</a></div></Link></li>
            <li className={ router.pathname === '/users' ? 'text-violet-700 p-2 rounded bg-violet-200 transition ease-in-out duration-300 mb-3' :'mb-4 cursor-pointer hover:text-violet-700 hover:p-2 hover:rounded hover:bg-violet-200 hover:transition ease-in-out duration-300'} onClick={()=>setActiveLink('/users')}><Link href='/users'><div className='flex flex-row items-center'><FiUsers className='text-2xl'/><a className={ router.pathname === '/users' ? 'text-[15px] font-semibold ml-3 w-full text-violet-700' :'text-[15px] font-semibold text-black ml-3 w-full hover:text-violet-700'} >Referrals</a></div></Link></li>
    
        </ul>
        <div className="">
            {/* <div className="flex flex-row pb-5 border-b-2 cursor-pointer"><FiSettings/><h1 className='text-[13px] font-semibold text-black ml-3'>Settings</h1></div> */}
            <div className='flex flex-row pt-4 border-t-2'>
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