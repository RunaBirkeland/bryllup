import React from 'react';

const Accommodation = () => {
    return (
        <div id='accommodation' className='app'>
            <div className='half-height-page-container'>
                <div className='padding-panel'></div>
                <div className='info-container centered-flex'>
                    <h2 className='header'>
                        Overnatting
                    </h2>
                    <span className='text'>
                        For våre gjester som kommer utenbysfra og trenger et sted å overnatte
                        kan vi anbefale sjarmerende og rimelige Voksenåsen Hotell.
                        Hotellet ligger en ti minutters spasertur fra Solstua,
                        hvilket gjør det enkelt å komme seg til og fra arrangementet.
                    </span>
                    <div className='accomodation-button-container '>
                        <button className='button button-small'>
                            <a href="https://voksenaasen.no/hotell-og-restaurant/">
                                Voksenåsen Hotell
                            </a>
                        </button>
                    </div>
                </div>
                <div className="side-panel-accommodation"></div>
            </div>
        </div>
    )
}

export default Accommodation