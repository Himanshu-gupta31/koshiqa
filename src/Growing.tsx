import React from "react";
import WeAreGrowing from './assets/WeAreGrowing.svg'
import PhoneWeAreGrowing from './assets/PhoneWeAreGrowing.svg'
const Growing:React.FC=()=>{
    return(
        <>
        <div className="w-screen h-[36rem] bg-cream p-[100px] max-sm:h-[681px] max-sm:py-[64px] max-sm:px-[15px]">
            <div className="w-[1,240px] h-[147px] flex justify-center flex-col">
          <h1 className="font-extrabold font-anton text-[64px] max-sm:text-[40px] ">WE ARE GROWING!</h1>
          <p className="text-grey font-medium w-[34rem] text-[24px] max-sm:text-[16px] max-sm:w-[336px] ">From 10L/day to 1cr/day, quickly growing as India's most sincere community of healthy habits</p>
          </div>
          <div>
            <img src={WeAreGrowing} alt="WeAreGoing" className="mt-16 max-sm:hidden"/>
          </div>
          <div>
            <img src={PhoneWeAreGrowing} alt="WeAreGoing"className="lg:hidden max-sm:mt-8 " />
          </div>
        </div>
        </>
    )
}
export default Growing