import React from 'react';
import InfoCard from '../components/InfoCard';
import carIcon from '../images/car.png';
import subwayIcon from '../images/subway.png';
import taxiIcon from '../images/taxi.png';

const Travel = () => {

    return (
        <div id='travel' className='travel'>
            <div className='page-content'>
                <div className='centered-headline'>
                    <h2 className='header'>
                        Reise
                    </h2>
                    <span className='subheading'>Har du først kommet deg til Oslo er det enkelt å komme seg til Solstua på en av de følgende måtene:</span>
                </div>
                <div className='cards-container'>
                    <div className='single-card-container'>
                        <InfoCard
                            picture={carIcon}
                            header='Bil'
                            text='Den enkleste måten å komme seg til Solstua med bil på er å kjøre til voksenkollen t-banestasjon og følge skiltingen derfra.'
                            link='https://www.google.com'
                        />
                    </div>
                    <div className='single-card-container'>
                        <InfoCard
                            picture={subwayIcon}
                            header='Bil'
                            text='Den enkleste måten å komme seg til Solstua med bil på er å kjøre til voksenkollen t-banestasjon og følge skiltingen derfra.'
                            link='https://www.google.com'
                        />
                    </div>
                    <div className='single-card-container'>
                        <InfoCard
                            picture={taxiIcon}
                            header='Bil'
                            text='Den enkleste måten å komme seg til Solstua med bil på er å kjøre til voksenkollen t-banestasjon og følge skiltingen derfra.'
                            link='https://www.google.com'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Travel