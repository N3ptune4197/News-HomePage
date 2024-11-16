import React from "react";
import Gaming from './assets/image-gaming-growth.jpg'
import Retro from './assets/image-retro-pcs.jpg'
import Laptops from './assets/image-top-laptops.jpg'


const Ranking = () => {



    return(
        <>
            <div className="contenedor w-full flex flex-col lg:flex-row justify-between font-inter">

                <div className="cards flex flex-row w-full lg:w-[31%] mb-10 lg:mb-0">
                    <img src={Retro} alt="" className="max-h-[145px] max-w-[110px] lg:max-w-[125px]" />
                    <div className="texto ml-5 lg:ml-7 flex flex-col">
                        <span className="text-4xl text-softred font-extrabold tracking-wide">01</span>
                        <a href="#" className="transition-all title text-[18px] lg:text-[20px] mt-2 mb-3 font-bold text-verydarkblue tracking-tight hover:text-softred">Reviving Retro Pcs</a>
                        <p className="text-sm lg:text-lg text-darkgrayishblue lg:font-medium">What happens when old PCs are given modern upgrades?</p>
                    </div>
                </div>



                <div className="cards flex flex-row w-full lg:w-[32%] mb-10 lg:mb-0">
                    <img src={Laptops} alt="" className="max-h-[145px] max-w-[110px] lg:max-w-[125px]" />
                    <div className="texto ml-5 lg:ml-7 flex flex-col">
                        <span className="text-4xl text-softred font-extrabold tracking-wide">02</span>
                        <a href="#" className="title text-[18px] lg:text-[20px] mt-2 mb-3 font-bold text-verydarkblue tracking-tight hover:text-softred transition-all">Top 10 Laptops of 2022</a>
                        <p className="text-sm lg:text-lg text-darkgrayishblue font-medium">Our best picks for various needs and budgets.</p>
                    </div>
                </div>
                

                <div className="cards flex flex-row w-full lg:w-[33%] mb-10 lg:mb-0">
                    <img src={Gaming} alt="" className="max-h-[145px] max-w-[110px] lg:max-w-[125px]" />
                    <div className="texto ml-5 lg:ml-7 flex flex-col">
                        <span className="text-4xl text-softred font-extrabold tracking-wide">03</span>
                        <a href="#" className="transition-all title text-[18px] lg:text-[20px] mt-2 mb-3 font-bold text-verydarkblue tracking-tight hover:text-softred">The Growth of Gaming</a>
                        <p className="text-sm lg:text-lg text-darkgrayishblue font-medium">How the pandemic has sparked fresh opportunities.</p>
                    </div>
                </div>
            
            </div>
        </>
    );
}



export default Ranking;