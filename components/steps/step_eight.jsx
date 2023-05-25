import React from 'react'


const StepEight = () => {
    return (
      <div className="h-full flex justify-center items-start mt-6">
          <div className="w-[30%] h-[500px] border-[1px] border-gray-300 rounded-2xl py-3 px-4">
              <h1 className="text-xl font-medium mb-12">Personal Information</h1>
              <form action="" className="flex flex-col">
                  <label htmlFor="" className="font-medium">
                      Full names:
                  </label>
                  <input type="text" className="border-[1px] border-gray-500 h-9 rounded-[5px] mb-3 placeholder:text-sm px-2" placeholder="Enter full names" required/>
                  <label htmlFor="" className="font-medium">
                      Email:
                  </label>
                  <input type="email" className="border-[1px] border-gray-500 h-9 rounded-[5px] mb-3 placeholder:text-sm px-2" placeholder="Enter email" required/>
                  <label htmlFor="" className="font-medium">
                      Phone number
                  </label>
                  <input type="text" className="border-[1px] border-gray-500 h-9 rounded-[5px] mb-3 placeholder:text-sm px-2" placeholder="Enter phone number" required/>
                  <label htmlFor="" className="font-medium">
                      City:
                  </label>
                  <input type="text" className="border-[1px] border-gray-500 h-9 rounded-[5px] mb-3 placeholder:text-sm px-2" placeholder="Enter city" required/>
                  <button type="submit" className="bg-black text-white font-medium h-11 rounded">Submit</button>
              </form>
          </div>
      </div>
    )
  }
  
  export default StepEight

