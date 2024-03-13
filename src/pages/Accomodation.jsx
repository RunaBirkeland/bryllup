import React from 'react';

const Accommodation = () => {
    return (
        <div id='accommodation' className='app'>
            <div className='half-height-page-container'>
                <div className="side-panel"></div>
                <div className='info-container centered-flex'>
                    <h2 className='header'>
                        Overnatting
                    </h2>
                    <span className='text'>
                        For våre gjester som kommer utenbysfra og trenger et sted å overnatte, 
                        har vi gleden av å tilby spesielt reserverte rom på det sjarmerende hotellet Voksenåsen 
                        til reduserte priser.
                         Hotellet ligger kun en kort spasertur fra Solstua, 
                         noe som gjør det enkelt å komme seg til og fra arrangementet. 
                         Et enkeltrom kan reserveres for XXXX kroner, mens et dobbeltrom vil koste XXXX kroner. <br/>
                         Videre byr Oslo på et mangfold av andre hoteller og overnattingsmuligheter, 
                        og det er enkelt å reise til og fra Solstua fra sentrum (se 'Reise' for mer informasjon)
                    </span>
                    <div className='accomodation-button-container '>
                        <button className='button button-small'>
                            <a href="https://www.google.com">
                                Mer info
                            </a>
                        </button>
                    </div>
                </div>
                <div className='padding-panel'></div>
            </div>
        </div>
    )
}

export default Accommodation