import React from 'react';

const Travel = () => {

    return (
        <div id='travel' className='travel'>
            <div className='page-container'>
                <div className='padding-panel'></div>
                <div className="info-container">
                    <h2 className='header'>Lokasjon</h2>
                    <div className='text'>
                        Solstua ligger på toppen av Holmenkollen med Kongsseteren som nærmeste nabo. <br/> Her holdes både vielse og fest.
                    </div>
                    <h2 className='subheader'>
                        Offentlig transport
                    </h2>
                    <div className='text'>
                       Voksenkollen T-banestasjon ligger 14 minutter gange unna.
                    </div>
                    <h2 className='subheader'>
                        Parkering
                    </h2>
                    <div className='text'>
                        På solstua finnes det omtrent 15 parkeringsplasser, i tillegg er det mulig å parkere ved Frognerseteren og gå til Solstua på 15-20 minutter.
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1941.9111742781122!2d10.663631700000002!3d59.973566399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464172842487cd97%3A0x29926059f9add4a6!2sSolstua!5e1!3m2!1sen!2sno!4v1710704115703!5m2!1sen!2sno" width="600" height="300" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="map-iframe"></iframe>
                </div>
                <div className="side-panel-travel"></div>
            </div>
        </div >
    )
}

export default Travel