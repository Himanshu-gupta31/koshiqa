import React from "react";
import Crown from './assets/Crown.svg'
const Referral:React.FC=()=>{
    return (
        <div className="flex flex-col mt-6 h-full">
      
        <div className="flex justify-center items-center mb-4 ">
          <div className="w-[22rem] h-[7rem] bg-gradient-to-b from-dark-blue to-blue-800 rounded-xl">
            <div className="flex flex-row items-center w-[90%] justify-evenly">
            <div className="flex justify-center w-full ml-4  flex-col mt-4">
              <p className="font-bold text-white text-xl mt-4">Change Maker</p>
              <p className="text-sm text-gray-400 mt-2">More than 10 Referrals</p>
            </div>
              <div className="mt-4">
              <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9 18L4 13L5.41 11.59L9 15.17L18.59 5.59L20 7L9 18Z" fill="white"/>
</svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-[22rem] h-[24rem] bg-gradient-to-b from-emerald-800 to-dark-green rounded-xl">
            <div className="flex justify-center w-full items-center flex-col mt-4">
              <p className="font-bold text-white text-xl mt-4">Change Maker</p>
              <p className="text-sm text-gray-400 mt-2">Less than 10 Referrals</p>
              <hr className="horizontal-line w-[80%] mt-4 bg-slate-600"></hr>
              <p className="mt-4 text-white text-sm">Team Contest starting in </p>
              //count down till monday 12 pm ist//
            </div>
            <div className="flex">
            <div className="mx-4 h-[5rem] rounded-xl mt-4 w-[10rem] px-2" style={{ backgroundColor: 'rgba(255, 255, 255, 0.16)' }}>
                <div className="flex w-full justify-center mt-4">
                <img src={Crown} alt="Crown" className=""/>
                </div>
                
                <p className="text-white font-medium text-md text-center mt-2">Today’s Rank</p>
              </div>
              <div className="mx-4 h-[5rem] rounded-xl mt-4 w-[10rem] px-2" style={{ backgroundColor: 'rgba(255, 255, 255, 0.16)' }}>
                 <p className="text-white font-medium text-center mt-2 text-md">Referral Count</p>
                 <p  className="text-white font-medium text-center mt-2 text-md" >Referrals</p>
              </div>
            </div>
            <div className="bg-white w-[90%] h-[4rem] mt-8 rounded-xl">
                                    <div className='h-full flex items-center'>
                                        {/* <img src={Share} alt="Share" className='ml-3' /> */}
                                        <p className='text-black ml-3 font-semibold text-lg'>Refer Now</p>
                                    </div>
                                </div>
          </div>
          </div>
        
    </div>
    )
}
export default Referral