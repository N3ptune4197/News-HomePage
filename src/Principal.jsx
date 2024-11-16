import React from "react";
import ImagenTop from './assets/image-web-3-desktop.jpg'

const Principal = () => {
    

    return(
        <>
            <dir className="contenedor flex w-[64%] pl-0 mt-0 font-inter">
                <div className="flex flex-col w-full ">
                    <div className="child1">
                        <img src={ImagenTop} alt="" className="" />

                    </div>
                    <div className="child-2 flex flex-row mt-8">
                        <h1 className="font-bold text-7xl w-1/2 pr-14">The Bright Future of Web 3.0?</h1>
                        <div className="parrafo flex flex-col w-1/2 font-medium text-darkgrayishblue pr-5 pl-3">
                            <p className="text-lg leading-8 mb-9">We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
                            But is it really fulfilling its promise?</p>
                            <div className="button pt-5">
                                <a href="#" className="tracking-[0.35em] px-9 hover:bg-verydarkblue hover:text-offwhite py-5 bg-softred text-verydarkblue font-bold text-lg inline transition-all">READ MORE</a>

                            </div>
                        </div>
                    </div>
                </div>
            </dir>
        </>
    );
}

export default Principal;