import React from "react";
import ImagenTop from './assets/image-web-3-desktop.jpg'

const Principal = () => {
    

    return(
        <>
            <dir className="contenedor flex w-full lg:w-[64%] pl-0 mt-0 font-inter">
                <div className="flex flex-col w-full ">
                    <div className="child1">
                        <img src={ImagenTop} alt="" className="img-principal h-72" style={{objectFit: 'cover'}}  />

                    </div>
                    <div className="child-2 flex flex-col lg:flex-row mt-8 mb-20 lg:mb-0">
                        <h1 className="font-extrabold lg:font-bold text-5xl lg:text-7xl lg:w-1/2 lg:pr-14">The Bright Future of Web 3.0?</h1>
                        <div className="parrafo flex flex-col lg:w-1/2 font-medium text-darkgrayishblue mt-5 lg:mt-0 pr-5 lg:pl-3">
                            <p className="text-md lg:text-lg leading-[28px] lg:leading-8 mb-7 lg:mb-9">We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
                            But is it really fulfilling its promise?</p>
                            <div className="button pt-3 lg:pt-5">
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