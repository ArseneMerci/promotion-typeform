import React from 'react'
import { FaUsers,FaShoppingCart } from 'react-icons/fa'
import { AiTwotoneShop } from 'react-icons/ai'
import { BsBoxSeamFill } from 'react-icons/bs'
import Header from '../../components/admin2/Header'
import SideBar from '../../components/admin2/Sidebar'

const dashboard = () => {

  return (
    <div>
        <SideBar/>
        <div className="font h-screen ml-[230px]">
            <Header/>
            <div className='px-20 py-10'>
                <h1 className='text-3xl text-gray-600'>Dashboard</h1>
                <h1 className='text-lg text-gray-600'>Welcome back !</h1>
                <h1 className='text-4xl mt-10'>Overview</h1>
                <div className='mt-10 flex justify-between'>
                    <div className='w-[220px] h-[150px] bg-orange-100 rounded-lg py-2 px-3'>
                        <div className='flex justify-start items-center'>
                            <FaUsers className={`text-5xl text-orange-500`}/>
                            <h1 className='text-black text-xl ml-2 font-medium'>Users</h1>
                        </div>
                        <h1 className='text-2xl font-bold mt-3 text'>2,000</h1>
                        <h1 className='text-sm mt-3 text-gray-500'>Total users</h1>
                    </div>
                    <div className='w-[220px] h-[150px] bg-emerald-100 rounded-lg p-3'>
                        <div className='flex justify-start items-center'>
                            <FaShoppingCart className={`text-4xl text-emerald-600`}/>
                            <h1 className='text-black text-xl ml-2 font-medium'>Orders</h1>
                        </div>
                        <h1 className='text-2xl font-bold mt-3 text'>2,000</h1>
                        <h1 className='text-sm mt-3 text-gray-500'>Total orders</h1>
                    </div>
                    <div className='w-[220px] h-[150px] bg-blue-100 rounded-lg p-3'>
                        <div className='flex justify-start items-center'>
                            <AiTwotoneShop className={`text-4xl text-blue-600`}/>
                            <h1 className='text-black text-xl ml-2 font-medium'>Shops</h1>
                        </div>
                        <h1 className='text-2xl font-bold mt-3 text'>2,000</h1>
                        <h1 className='text-sm mt-3 text-gray-500'>Total shops</h1>
                    </div>
                    <div className='w-[220px] h-[150px] bg-purple-100 rounded-lg p-3'>
                        <div className='flex justify-start items-center'>
                            <BsBoxSeamFill className={`text-4xl text-purple-600`}/>
                            <h1 className='text-black text-xl ml-2 font-medium'>Products</h1>
                        </div>
                        <h1 className='text-2xl font-bold mt-3 text'>2,000</h1>
                        <h1 className='text-sm mt-3 text-gray-500'>Total products</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default dashboard