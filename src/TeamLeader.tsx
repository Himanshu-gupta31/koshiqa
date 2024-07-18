import React from "react";
interface TeamLeaderProps{
    teamranking:number,
    teamprofilepic:string,
    teamname:string,
    teammembercount:number,
    teamsteps:number
}
export const TeamLeader:React.FC<TeamLeaderProps>=(
    {
        teamranking,
        teamprofilepic,
        teammembercount,
        teamsteps,
        teamname
    }
)=>{
      return(
        <>
        <div className="flex justify-evenly items-center">
            <div>
             <p className="font-semibold text-md text-gray-500">{teamranking}</p>
            </div>
            <div>
                <img src={teamprofilepic} alt="TeamProfilepic"/>
                <div className="flex flex-col">
                  <p className="text-black font-bold">
                    {teamname}
                  </p>
                  <p className="text-gray-400 ">
                    {teammembercount}
                  </p>
                </div>
            </div>
            <div>
                <p>{teamsteps}</p>
            </div>

        </div>
        </>
      )
}