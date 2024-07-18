import React from "react";

interface LotteryProps {
    lotterynumber: number;
}

export const Lottery: React.FC<LotteryProps> = ({ lotterynumber }) => {
    return (
        <div className="w-screen flex justify-center mt-4">
        <div className="flex justify-between items-center bg-custom-gradient bg-cover rounded-xl border border-blue-600 w-[80%] h-[4rem] p-4">
            <div className="text-black font-bold">
                <p>LUCKY DRAW NUMBER</p>
            </div>
            <div className="text-black font-bold text-xl">
                {lotterynumber}
            </div>
        </div>
        </div>
    );
};
