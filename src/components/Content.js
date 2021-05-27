import React from 'react'
import Model from '../static/model.png'
import { BiCaretRight } from 'react-icons/bi';
import Socials from './Socials';
import Slider from './Slider';


function Content() {
    
    
    return (
        <div className="main-content flex flex-col">
            {/**Text & model */}
            <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center">

                {/**Model */}  
                <div className="main-model px-10 mt-3 sm:order-2">
                    <img className="w-52 sm:w-72" src={Model} alt="model image"/>
                </div>              
                
                {/**Text, product, price & CTA */}
                <div className="main-header flex flex-col sm:order-1">
                    {/**Text*/}
                    <div className="main-text">
                        <span className="text-sm tracking-normal font-bold ml-2">don't</span><br/>
                        <h1 className="text-7xl sm:text-8xl tracking-widest font-extrabold">
                            <span>Be</span><br/>
                            <span>Stupid!</span>
                        </h1>
                        <p className="text-xs mt-6">Fashion is a form of self-expression, at a particular <br/> period and place and in a specific context.</p>
                    </div>
                    {/**product & price & CTA */}
                    <div className="flex mt-10">
                        {/**product & price */}
                        <div className="main-product-price flex flex-col text-2xl uppercase">
                            <span className="text-sm tracking-widest font-light mb-2">drix spark</span>
                            <span className="text-4xl">$230</span>
                        </div>
                        {/**CTA */}
                        <div className="flex flex-col">
                            {/**Empty top space & grow remaining space */}
                            <div className="flex-1">
                                <span></span>
                            </div>
                            <button href="#GetItNow" className="main-cta font-bold uppercase text-xs py-2 px-4 rounded tracking-widest ml-2">
                            Get it now <span className="inline-block"><BiCaretRight/></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/** Socials and Slider*/}
            <div className="flex justify-between mt-10 mb-10">
                <Socials/>
                <Slider/>
            </div>   
        </div>
    )
}

export default Content
