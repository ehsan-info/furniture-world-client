import React from 'react';
import slider1 from '../../../assets/sliders/slider1.jpg';
import slider2 from '../../../assets/sliders/slider2.jpg';
import slider3 from '../../../assets/sliders/slider3.jpg';
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={slider1} className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={slider2} className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={slider3} className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#slide1" className="btn btn-xs">1</a>
                <a href="#slide2" className="btn btn-xs">2</a>
                <a href="#slide3" className="btn btn-xs">3</a>
            </div>
        </div>
    );
};

export default Banner;