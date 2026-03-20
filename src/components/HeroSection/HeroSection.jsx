import React from 'react';
import nenesJugando from "../../assets/nenesjugando.PNG"
import "./HeroSection.css";

const HeroSection = () => {
    return (
        <section className='container-fluid mt-2 border border-black'>
            <div className="row">
                <div className="col-12 col-md-6 border border-black"></div>
                <div className="col-12 col-md-6 d-flex justify-content-center align-items-center py-2 hero-img-container">
                    <img src={nenesJugando} className='img-hero-section' alt="Niños jugando" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;