import React, { useEffect } from 'react'

export default function Contact() {
  useEffect(() => {
    document.title = 'contact';
  }, []);
  return <>
  <div className='py-28'>
      <div className="container mx-auto">
      <div className="py-3 text-center">
                <h2 className="text-[40px] font-bold text-[#2C3E50] mb-3 ">CONATCT SECTION</h2>
                <div className="mb-3 flex justify-center content-center relative">
                <div className="line me-7 bg-[#2C3E50]"></div>
                <i className="fa-solid fa-star text-[#2C3E50] absolute top-[-7px] "></i>
                <div className="line ms-7 bg-[#2C3E50]"></div>
                </div>
            </div>
            <div className='md:w-2/3 p-3 mx-auto mt-5 sm:w-full'>
           <form action="">
            <input type="text" placeholder="userName" name="userName" class="form-control border-0 border-b-2"></input>
            <input type="text" placeholder="userAge" name="userName" class="form-control border-0 border-b-2 py-3 my-10"></input>
            <input type="text" placeholder="userEmail" name="userName" class="form-control border-0 border-b-2 py-3 mb-10"></input>
            <input type="text" placeholder="userPassword" name="userName" class="form-control border-0 border-b-2"></input>
           </form>
            <button className='text-white bg-[#1abc9c] px-3 py-[.375rem] rounded-md mt-4'> send Message </button>
            </div>
      </div>
    </div>
  </>
}