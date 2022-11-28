import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import bg from '../../../assets/bg.jpg';
const AboutUs = () => {
    return (
        <div className="hero" style={{
            background: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">ABOUT furnitureWorld</h1>
                    <p className="mb-5">“furnitureWorld - means forest and is a Bengali word chosen by Late Nitun Kundu, one of the most renowned artists and sculptors and also the founder of furnitureWorld Limited.”
                        furnitureWorld, the leading furniture manufacturer and retailer in Bangladesh is the most preferred lifestyle solution brand because of its constant innovations, advanced technological expertise, manufacturing capacity in the widest range of furniture categories, largest distribution network and time-tested service reputation. </p>
                    <PrimaryButton>Read More</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;