import React from 'react';

const InfoCard = (props) => {
    return (
        <div className='card'>
            <div className='inner-card'>
                <div className='card-icon-container'>
                    <img src={props.picture} alt="icon" />
                </div>
                <div className='card-header-container'>
                    {props.header}
                </div>
                <div className='card-text-container'>
                    {props.text}
                </div>
                <div className='card-button-container'>
                    <div class='info-button button button-small'>
                        <a href={props.link}>
                            Mer info
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCard