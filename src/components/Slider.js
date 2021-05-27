import React from 'react'

import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

function Slider() {
    return (
        <div className="main-slider">
            <a className="text-white p-2 rounded-lg" href="#PrevContent"><span className="inline-block align-middle"><BsChevronLeft/></span></a>
            <a className="bg-white active p-2 ml-3 mr-3 rounded-lg" href="#NextContent"><span className="inline-block align-middle"><BsChevronRight/></span></a>
        </div>
    )
}

export default Slider
