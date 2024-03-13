import React from 'react';

const Gifts = () => {
    return (
        <div id='gifts'>
            <div className='half-height-page-container gifts'>
                <div className='padding-panel'></div>
                <div className='info-container centered-flex' style={{'align-items': 'center'}}>
                    <h2 className='header'>Gaver</h2>
                    <span className='subheading'>Den største gaven er ditt nærvær, <br /> men hvis du likevel skulle ønske å gi oss noe har vi satt sammen en liten ønskeliste her:</span>
                    <button className='button button-large gifts-button'>Ønskeliste</button>
                    <span className='subheading' style={{'padding-bottom': '20px'}}>Ellers er bidrag til bryllupsreisen alltid velkomment!</span>
                </div>
                <div className='padding-panel'></div>
            </div>
        </div>
    )
}

export default Gifts