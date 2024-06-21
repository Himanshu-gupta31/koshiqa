import React from "react";
import Whatsapp from "./assets/Whatsapp.svg";

const WeLoveToChat: React.FC = () => {
    return (
        <>
            <hr className="horizontal-line max-sm:hidden" />
            <div className="bg-cream w-full py-[72px] px-[100px] overflow-x-hidden max-sm:py-[56px] max-sm:px-[24px] max-sm:grid max-sm:grid-cols-1">
                <div className="container mx-auto">
                    <div className="flex justify-between items-start max-sm:flex-col ">
                        <div className="max-sm:text-left max-sm:mb-6">
                            <h1 className="font-extrabold text-[48px] font-anton mb-4 max-sm:text-[28px]">
                                We LOVE TO CHAT!
                            </h1>
                            <p className="text-grey text-[24px] w-[60rem] max-sm:text-[16px] max-sm:w-full">
                                Our content team tried hard to resolve most of the queries.
                                If you have any questions, we are just a click away. Super
                                fast response guaranteed!
                            </p>
                        </div>
                        <div className="bg-green rounded-[10px] w-[213px] h-[60px] py-[18px] px-[16px] flex items-center justify-between  max-sm:py-2 max-sm:px-4 max-sm:w-[156px] max-sm:h-[48px]">
                            <p className="font-normal text-white text-[22px] mr-2 max-sm:text-[14px]">
                                WhatsApp us
                            </p>
                            <img src={Whatsapp} alt="WhatsApp" className="h-[24px] max-sm:h-[20px]" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WeLoveToChat;
