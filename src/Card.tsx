import React from "react";

interface CardProps {
    title: string;
    image: JSX.Element;
    className: string;
    para:string
}

export const Card: React.FC<CardProps> = ({
    title,
    image,
    className,
    para
}) => {
    return (
        <div className={`p-[6.25rem] h-[44.5rem] max-sm:h-[467px] max-sm:py-[56px] max-sm:px-[24px] ${className}`}>

            <div className="flex justify-center rounded-[50px]">
                {image}
            </div>
            <div className="text-left mt-10 w-[32rem] max-sm:w-[327px]">
            <div className="font-semibold text-[24px] leading-8 max-sm:text-[18px]">
                {title}
                <div className="mt-2 tracking-normal font-medium text-grey text-[24px] leading-8 max-sm:text-[16px] max-sm:leading-4">
                    {para}
                </div>
            </div>
            </div>
        </div>
    );
};
