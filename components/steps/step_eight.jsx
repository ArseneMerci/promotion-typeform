import React from 'react'


const StepEight = () => {
    return (
      <div className="h-screen flex justify-center items-center">
          <div className="w-[30%] h-[500px] border-[1px] border-green-400 rounded-2xl py-3 px-4">
              <h1 className="text-xl font-medium mb-12">Personal Information</h1>
              <form action="" className="flex flex-col">
                  <label htmlFor="" className="font-medium">
                      Full names:
                  </label>
                  <input type="text" className="border-[1px] border-gray-500 h-8 rounded-[5px] mb-3 placeholder:text-xs" placeholder="Enter your full names" required/>
                  <label htmlFor="" className="font-medium">
                      Email:
                  </label>
                  <input type="email" className="border-[1px] border-gray-500 h-8 rounded-[5px] mb-3" required/>
                  <label htmlFor="" className="font-medium">
                      Phone number
                  </label>
                  <input type="text" className="border-[1px] border-gray-500 h-8 rounded-[5px] mb-3" required/>
                  <label htmlFor="" className="font-medium">
                      City:
                  </label>
                  <input type="text" className="border-[1px] border-gray-500 h-8 rounded-[5px] mb-3" required/>
                  <button type="submit" className="bg-black text-white font-medium h-9 rounded">Submit</button>
              </form>
          </div>
      </div>
    )
  }
  
  export default StepEight

