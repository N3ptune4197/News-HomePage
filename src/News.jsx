import React from "react";



const News = () => {



    return(

        
        <>
            <div className="contenedor pl-7 pr-7 pt-11 bg-verydarkblue w-[33%] font-inter h-[575px]">
                <h3 className="text-5xl text-softorange font-bold tracking-wide mb-9">New</h3>

                <a href="#" className="text-offwhite text-2xl transition-all font-bold tracking-wide mb-2 hover:text-softorange block">Hydrogen VS Electric Cars</a>
                <span className="text-grayishblue text-lg font-normal tracking-wide leading-8">  Will hydrogen-fueled cars ever catch up to EVs?</span>

                <hr className="border-1 border-darkgrayishblue my-8" />


                <a href="#" className="text-offwhite text-2xl transition-all font-bold tracking-wide mb-2 hover:text-softorange block">The Downsides of AI Artistry</a>
                <span className="text-grayishblue text-lg font-normal tracking-wide leading-8">  What are the possible adverse effects of on-demand AI image generation?</span>

                <hr className="border-1 border-darkgrayishblue my-8" />


                <a href="#" className="text-offwhite text-2xl transition-all font-bold tracking-wide mb-2 hover:text-softorange block">Is VC Funding Drying Up?</a>
                <span className="text-grayishblue text-lg font-normal tracking-wide leading-8">  Private funding by VC firms is down 50% YOY. We take a look at what that means.</span>



            </div>
        </>
    );
}

export default News;