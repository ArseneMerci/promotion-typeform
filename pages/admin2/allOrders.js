import React from 'react'
import SideBar from '../../components/admin2/Sidebar'
import { FiPlus } from 'react-icons/fi';
import { BiSearchAlt2 } from 'react-icons/bi';
import { IoIosArrowDown,IoIosArrowForward } from 'react-icons/io';
import { AiOutlineCloudDownload } from 'react-icons/ai';
import { MdFilterList } from 'react-icons/md';

import { AiFillCheckCircle } from 'react-icons/ai'
import { FaEdit } from 'react-icons/fa';
import { IoTrashBinSharp } from 'react-icons/io5'
import { useState,useEffect } from 'react';
import Header from '../../components/admin2/Header';

const allOrders = () => {
    const dummyData = [
  {
    "ClientName": "John Doe",
    "Address": "123 Main Street",
    "Space": "Office",
    "Status": "Active",
    "RequestingAssistance": true
  },
  {
    "ClientName": "Alice Johnson",
    "Address": "456 Elm Avenue",
    "Space": "Home",
    "Status": "Pending",
    "RequestingAssistance": false
  },
  {
    "ClientName": "Bob Smith",
    "Address": "789 Oak Lane",
    "Space": "Retail",
    "Status": "Inactive",
    "RequestingAssistance": true
  },
  {
    "ClientName": "Eve Brown",
    "Address": "101 Pine Road",
    "Space": "Warehouse",
    "Status": "Active",
    "RequestingAssistance": false
  }
];
  return (
    <div>
        <SideBar/>
        <div className='font flex flex-row'>         
            <div className="w-full h-screen ml-[230px]">
                <Header/>
                <div className='flex flex-row justify-end my-10 px-7 sm:flex-col'>
                    <div className='flex flex-row  justify-between w-72 border-2 rounded h-8 py-1 px-2'>
                        <input type="text" className='w-[90%] outline-none text-[13px] font-medium' placeholder='Search by client name...'/>
                        <BiSearchAlt2 className='text-gray-400 self-center cursor-pointer'/>
                    </div>
                    <button className='flex flex-row border-2 rounded h-8  px-2 py-1 text-[13px] font-semibold ml-5 sm:self-start'><MdFilterList className='text-lg my-auto mr-2'/> Filter</button>
                </div>
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Client Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Address
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Space
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Status
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    requesting assistance
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    View Details
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Mark Completed
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {dummyData.map((data,index)=>{
                                return(
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                                        <td className="px-6 py-4">
                                            {data.ClientName}
                                        </td>
                                        <td className="px-6 py-4">
                                            {data.Address}    
                                        </td>
                                        <td className="px-6 py-4">
                                            {data.Space}
                                        </td>
                                        <td className="px-6 py-4">
                                            {data.Status}
                                        </td>
                                        <td className="px-6 py-4">
                                            {data.RequestingAssistance ? 'True' : 'False'}
                                        </td>
                                        <td className="px-6 py-4 text-green">
                                            Details
                                        </td>
                                        <td className="px-6 py-4 text-green">
                                            Completed
                                        </td>
                                    </tr> 
                                )
                            })}
                        </tbody>
                    </table>
                </div>

            </div>



        </div>
    </div>
  )
}

export default allOrders