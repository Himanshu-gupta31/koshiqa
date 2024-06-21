import React from 'react';
import './App.css';
import { Card } from './Card';
import fitIndiaImage from './assets/fitIndiaImage.svg';
import GreenIndia from './assets/GreenIndia.svg'
import Growing from './Growing';
import WeLoveToChat from './WeLoveToChat';
import  {ImageCard}  from './ImageCard';
import Coin from './assets/Coin.svg'
import OfficeColleagues from './assets/OfficeColleagues.svg'
import Medal from './assets/Medal.svg'
import Tree from "./assets/Tree.svg"

const App: React.FC = () => {
    return (
        <>
            <div className='flex flex-row items-center overflow-hidden max-sm:grid max-sm:grid-cols-1'>
                <Card 
                    title='1000 crore steps/month by Dec 2024'
                    image={<img src={fitIndiaImage} alt="Fit India" />}
                    className="w-1/2 bg-yellow max-sm:w-full"
                    para="Our and our environment health, both are in critical conditions. We are on a mission to do our bit with the help of fitness & environmental lovers like you."
                /> 
                <div className='bg-black w-[2px] h-[44.5rem] max-sm:hidden'></div>
                <Card 
                    title='10,000 Trees by Dec 2024'
                    image={<img src={GreenIndia} alt="Green India" />}
                    className="w-1/2 bg-green max-sm:w-full"
                    para="With “GrowBillionTrees” we plant fruit bearing trees on the lands of farmers. And take care of them for the next 3 years by setting up facilities like drip irrigation"
                />
            </div>
            <div>
            <Growing/>
            </div>
            <div>
            <WeLoveToChat/>
            </div>
            <div className='grid grid-cols-2 gap-0 bg-black max-sm:grid max-sm:grid-cols-1'>
              
                <ImageCard image={<img src={Medal} alt="Medal" className='w-full h-full' />} />
                <ImageCard image={<img src={Tree} alt="Tree" className='w-full h-full' />} />
                <ImageCard image={<img src={OfficeColleagues} alt="Office Colleagues" className='w-full h-full' />} />
                <ImageCard image={<img src={Coin} alt="Coin" className='w-full h-full'/>} />
            </div>
        </>
    );
}

export default App;
