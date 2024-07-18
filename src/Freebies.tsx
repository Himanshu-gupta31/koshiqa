import React, { useState } from "react";
import Freebies1 from './assets/Freebies1.svg'
import Stars from './assets/Stars.svg'
import Lock from './assets/LockFreebies.svg'
import Freebies2 from './assets/Freebies2.svg'
import Freebies3 from './assets/Freebies3.svg'
import Freebies4 from './assets/Freebies4.svg'
const Freebies:React.FC=()=>{
    const [claim,SetClaim]=useState<boolean>(false)
    return (
       <div>
        <div className="border border-gray-300 w-[90%] mx-4 h-fit mt-8 px-2 rounded-xl">
            <div className="flex">
                <div className="flex flex-col mt-4 mr-2">
                <p className="text-black font-semibold text-md">1000 Koins + 1 Lottery </p>
                <p className="text-gray-400 text-sm w-[12rem]">Get 1000 koins and one lottery ticket for each referral</p>
                {claim ? <button onClick={(e)=>SetClaim(!claim)} className="mt-6 mb-4">
                    <div className="bg-button-green w-[6rem] h-[2rem] rounded-lg flex justify-center items-center">
                      <img src={Stars} alt="Stars" className="mr-2"/>
                      <p className="text-sm text-white">Claim x2</p>
                    </div>

                </button> :
                <div className="mt-2">
                    <p className="text-button-green text-sm font-semibold w-fit">POTENTIAL WINNER</p>
                <button className="mt-2">
                     <div className="bg-gray-100 w-[6rem] h-[2rem] rounded-lg flex justify-center items-center border border-gray-600">
                      <img src={Lock} alt="Stars" className="mr-2"/>
                      <p className="text-sm text-gray-400 font-semibold">Claim</p>
                    </div>
                </button>
                </div>
                }
                
                </div>
                <div className="mt-4">
                <img src={Freebies1} alt="Freebies" className="w-[8rem]"/>
                </div>
               
            </div>
        </div>
        <div className="border border-gray-300 w-[90%] mx-4 h-fit mt-8 px-2 rounded-xl">
            <div className="flex">
                <div className="flex flex-col mt-4 mr-2">
                <p className="text-black font-semibold text-md">Koshiqa Tshirt</p>
                <p className="text-gray-400 text-sm w-[12rem]">Get a cool torty t-shirt as a Legacy Builder</p>
                {claim ? <button onClick={(e)=>SetClaim(!claim)} className="mt-6 mb-4">
                    <div className="bg-button-green w-[6rem] h-[2rem] rounded-lg flex justify-center items-center">
                      <img src={Stars} alt="Stars" className="mr-2"/>
                      <p className="text-sm text-white">Claim </p>
                    </div>

                </button> :
                <div className="mt-2">
                    <p className="text-button-green text-sm font-semibold w-fit">POTENTIAL WINNER</p>
                <button className="mt-2">
                     <div className="bg-gray-100 w-[6rem] h-[2rem] rounded-lg flex justify-center items-center border border-gray-600">
                      <img src={Lock} alt="Stars" className="mr-2"/>
                      <p className="text-sm text-gray-400 font-semibold">Claim</p>
                    </div>
                </button>
                </div>
                }
                
                </div>
                <div className="mt-4">
                <img src={Freebies2} alt="Freebies" className="w-[8rem]"/>
                </div>
               
            </div>
        </div>
        <div className="border border-gray-300 w-[90%] mx-4 h-fit mt-8 px-2 rounded-xl">
            <div className="flex">
                <div className="flex flex-col mt-4 mr-2">
                <p className="text-black font-semibold text-md">Top 10 Hamper </p>
                <p className="text-gray-400 text-sm w-[12rem]">Get 10k coins, torty t-shirt & photo frame  </p>
                {claim ? <button onClick={(e)=>SetClaim(!claim)} className="mt-6 mb-4">
                    <div className="bg-button-green w-[6rem] h-[2rem] rounded-lg flex justify-center items-center">
                      <img src={Stars} alt="Stars" className="mr-2"/>
                      <p className="text-sm text-white">Claim </p>
                    </div>

                </button> :
                <div className="mt-2">
                    <p className="text-button-green text-sm font-semibold w-fit">POTENTIAL WINNER</p>
                <button className="mt-2">
                     <div className="bg-gray-100 w-[6rem] h-[2rem] rounded-lg flex justify-center items-center border border-gray-600">
                      <img src={Lock} alt="Stars" className="mr-2"/>
                      <p className="text-sm text-gray-400 font-semibold">Claim</p>
                    </div>
                </button>
                </div>
                }
                
                </div>
                <div className="mt-4">
                <img src={Freebies1} alt="Freebies" className="w-[8rem]"/>
                </div>
               
            </div>
        </div>
        <div className="border border-gray-300 w-[90%] mx-4 h-[10rem] mt-8 px-2 rounded-xl">
            <div className="flex">
                <div className="flex flex-col mt-4 mr-2">
                <p className="text-black font-semibold text-md">Top 3 Hamper </p>
                <p className="text-gray-400 text-sm w-[12rem]">Get 10k coins, t-shirt, photo frame & temperature bottle  </p>
                {claim ? <button onClick={(e)=>SetClaim(!claim)} className="mt-6">
                    <div className="bg-button-green w-[6rem] h-[2rem] rounded-lg flex justify-center items-center">
                      <img src={Stars} alt="Stars" className="mr-2"/>
                      <p className="text-sm text-white">Claim </p>
                    </div>

                </button> :
                <div className="mt-2">
                    <p className="text-button-green text-sm font-semibold w-fit">POTENTIAL WINNER</p>
                <button className="mt-2">
                     <div className="bg-gray-100 w-[6rem] h-[2rem] rounded-lg flex justify-center items-center border border-gray-600">
                      <img src={Lock} alt="Stars" className="mr-2"/>
                      <p className="text-sm text-gray-400 font-semibold">Claim</p>
                    </div>
                </button>
                </div>
                }
                
                </div>
                <div className="mt-4">
                <img src={Freebies3} alt="Freebies" className="w-[8rem]"/>
                </div>
               
            </div>
        </div>
        <div className="border border-gray-300 w-[90%] mx-4 h-fit mt-8 px-2 rounded-xl">
            <div className="flex">
                <div className="flex flex-col mt-4 mr-2">
                <p className="text-black font-semibold text-md">The #1 Hamper </p>
                <p className="text-gray-400 text-sm w-[12rem]">Get a t-shirt, photo frame, smartwatch, temperature bottle & 10k coins</p>
                {claim ? <button onClick={(e)=>SetClaim(!claim)} className="mt-4 mb-4">
                    <div className="bg-button-green w-[6rem] h-[2rem] rounded-lg flex justify-center items-center">
                      <img src={Stars} alt="Stars" className="mr-2"/>
                      <p className="text-sm text-white">Claim </p>
                    </div>

                </button> :
                <div className="mt-2 mb-2">
                    <p className="text-button-green text-sm font-semibold w-fit">POTENTIAL WINNER</p>
                <button className="mt-2">
                     <div className="bg-gray-100 w-[6rem] h-[2rem] rounded-lg flex justify-center items-center border border-gray-600">
                      <img src={Lock} alt="Stars" className="mr-2"/>
                      <p className="text-sm text-gray-400 font-semibold">Claim</p>
                    </div>
                </button>
                </div>
                }
                
                </div>
                <div className="mt-4">
                <img src={Freebies4} alt="Freebies" className="w-[8rem]"/>
                </div>
               
            </div>
        </div>
       </div>
    )
}
export default Freebies