import React from 'react'
import '../CSS/Slider.css'

function Slider() {
    return (
        <>
            <div className="slider-container">
                <div id="slider">
                    <img src={require('../Images/img1.webp')} alt="" className="slides active" />
                    <img src={require('../Images/img2.webp')} alt="" className="slides" />
                    <img src={require('../Images/img3.webp')} alt="" className="slides" />
                    <img src={require('../Images/img4.webp')} alt="" className="slides" />
                    <img src={require('../Images/img5.webp')} alt="" className="slides" />
                    <img src={require('../Images/img6.webp')} alt="" className="slides" />
                    <div id="prev"><i className="fa-solid fa-angles-left"></i></div>
                    <div id="next"><i className="fa-solid fa-angles-right"></i></div>

                </div>
                <div className="dots-container">
                    <div className="dot activeDot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
            </div>
        </>
    )
}

export default Slider