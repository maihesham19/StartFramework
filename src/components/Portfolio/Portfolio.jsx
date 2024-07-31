import React, { useEffect } from 'react'
import HomeImage from "../../../../images/port1.png"
import CheesCake from "../../../../images/port2.png"
import HomeImage2 from "../../../../images/port3.png"

export default function Portfolio() {
  useEffect(() => {
    document.title = 'portfolio';
  }, []);
  return <>
  <div className='pt-28'>
      <div className="container mx-auto">
      <div className="py-3 text-center">
                <h2 className="text-[40px] font-bold text-[#2C3E50] mb-3 ">PORTFOLIO COMPONENT</h2>
                <div className="mb-3 flex justify-center content-center relative">
                <div className="line me-7 bg-[#2C3E50]"></div>
                <i className="fa-solid fa-star text-[#2C3E50] absolute top-[-7px] "></i>
                <div className="line ms-7 bg-[#2C3E50]"></div>
                </div>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-3'>
           <div className='rounded-3 overflow-hidden relative group/item '>
            <img src={HomeImage} alt="home" className='w-full rounded-3'data-modal-target="default-modal1" data-modal-toggle="default-modal1"/>
            <div className='absolute start-0 top-0 w-full h-full flex justify-center content-center layer group-hover/item:opacity-100'>
            <i className="text-white fa-solid fa-plus fa-6x flex justify-center content-center"></i>
            </div>
           </div>
           <div className='rounded-3 overflow-hidden relative group/item '>
            <img src={CheesCake} alt="cake" className='w-full rounded-3'data-modal-target="default-modal2" data-modal-toggle="default-modal2"/>
            <div className='absolute start-0 top-0 w-full h-full flex justify-center content-center layer group-hover/item:opacity-100'>
            <i className="text-white fa-solid fa-plus fa-6x flex justify-center content-center"></i>
            </div>
           </div>
           <div className='rounded-3 overflow-hidden relative group/item '>
            <img src={HomeImage2} alt="home2" className='w-full rounded-3'data-modal-target="default-modal3" data-modal-toggle="default-modal3"/>
            <div className='absolute start-0 top-0 w-full h-full flex justify-center content-center layer group-hover/item:opacity-100'>
            <i className="text-white fa-solid fa-plus fa-6x flex justify-center content-center"></i>
            </div>
           </div>
           <div className='rounded-3 overflow-hidden relative group/item '>
            <img src={HomeImage} alt="home" className='w-full rounded-3'data-modal-target="default-modal1" data-modal-toggle="default-modal1"/>
            <div className='absolute start-0 top-0 w-full h-full flex justify-center content-center layer group-hover/item:opacity-100'>
            <i className="text-white fa-solid fa-plus fa-6x flex justify-center content-center"></i>
            </div>
           </div>
           <div className='rounded-3 overflow-hidden relative group/item '>
            <img src={CheesCake} alt="cake" className='w-full rounded-3'data-modal-target="default-modal2" data-modal-toggle="default-modal2"/>
            <div className='absolute start-0 top-0 w-full h-full flex justify-center content-center layer group-hover/item:opacity-100'>
            <i className="text-white fa-solid fa-plus fa-6x flex justify-center content-center"></i>
            </div>
           </div>
           <div className='rounded-3 overflow-hidden relative group/item '>
            <img src={HomeImage2} alt="home2" className='w-full rounded-3'data-modal-target="default-modal3" data-modal-toggle="default-modal3"/>
            <div className='absolute start-0 top-0 w-full h-full flex justify-center content-center layer group-hover/item:opacity-100'>
            <i className="text-white fa-solid fa-plus fa-6x flex justify-center content-center"></i>
            </div>
           </div>
            </div>
      </div>
    </div>
    <div id="default-modal1" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="p-4 md:p-5 space-y-4">
              <img src={HomeImage} alt="" />
            </div>
    </div>
</div>


<div id="default-modal2" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="p-4 md:p-5 space-y-4">
              <img src={CheesCake} alt="" />
            </div>
    </div>
</div>

<div id="default-modal3" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="p-4 md:p-5 space-y-4">
              <img src={HomeImage2} alt="" />
            </div>
    </div>
</div>
  </>
    
    

}