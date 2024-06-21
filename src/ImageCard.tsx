import React from "react";
interface ImageCardProps{
    image:JSX.Element,
    

}
export const ImageCard:React.FC<ImageCardProps>=({
    image,
    
})=>{
   return (
      <>
      
       <div className="w-full h-full">
        {image}
      </div>
      </>
   )
}