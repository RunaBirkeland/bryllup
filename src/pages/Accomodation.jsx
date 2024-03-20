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
                        For våre gjester som kommer utenbysfra og trenger et sted å overnatte,
                        har vi reservert rom på det sjarmerende Voksenåsen Hotell.
                        Hotellet ligger en ti minutters spasertur fra Solstua,
                        noe som gjør det enkelt å komme seg til og fra arrangementet. <br />
                        Et enkeltrom kan reserveres for 1090,- kr, mens et dobbeltrom koster 1390,- kr. <br />
                        Det er også mulig å oppgradere til Superior-rom for 1590,- så lenge det finnes ledige rom.<br />  <br />
                        Rommene holdes av frem til seks uker før bryllupet. Det vil da fortsatt være mulig å bestille rom
                        forutsatt at det fortsatt er ledige rom tilgjengelig.<br /> <br />
                        Videre byr Oslo på et mangfold av andre hoteller og overnattingsmuligheter,
                        og det er enkelt å reise til og fra Solstua fra Oslo sentrum.
                    </span>
                    <div className='accomodation-button-container '>
                        <button className='button button-small'>
                            <a href="https://voksenaasen.no/hotell-og-restaurant/">
                                Mer info om Voksenåsen Hotell
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