import React from 'react';

const Gifts = () => {
    return (
        <div id='gifts'>
            <div className='half-height-page-container gifts'>
                <div className='padding-panel'></div>
                <div className='info-container'>
                    <h2 className='header'>Gaver</h2>
                    <span className='text'>Den største gaven er ditt nærvær, <br /> men hvis du likevel skulle ønske å gi oss noe har vi satt sammen en liten ønskeliste</span>
                    <button className='button button-large gifts-button'> <a href='https://www.thingstogetme.com/1090359afd1ac'>Ønskeliste</a></button>
                </div>
                <div className='padding-panel'></div>
            </div>
        </div>
    )
}

export default Gifts