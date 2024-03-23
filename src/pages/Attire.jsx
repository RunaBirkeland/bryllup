import React from 'react';

const Gifts = () => {
    return (
        <div id='attire'>
            <div className='half-height-page-container attire'>
                <div className='side-panel'></div>
                <div className='info-container'>
                    <h2 className='header'>Antrekk</h2>
                    <span className='text'>
                        Det viktigste for oss er at du føler deg fin! 
                        Hvis du likevel ønsker deg tips, råd
                        eller inspirasjon er det bare å lese videre.
                        </span>
                        <span className='text'>
                        Rent praktisk kan det være lurt å huske på at vi 
                        planlegger utendørs vielse i oktober. Det kan derfor 
                        være fornuftig å ha en litt varm jakke utenpå finklærne 
                        og et skoskift, særlig hvis været er vått.
                        </span>
                        <span className='text'>
                        For dem som ønsker seg en kleskode å orientere seg etter 
                        har vi lagt oss et sted i mellom <span className='italic-text'>dress </span>
                        og <span className='italic-text'>mørk dress</span>.
                        </span>
                        <span className='text'>
                        Hvis man i tillegg er typen som liker å følge et tema eller 
                        bare vil ha en unnskyldning til å kjøpe seg noe nytt, kan man ta 
                        utgangspunkt i fargetemaet vårt:
                        </span>
                        <div className='colour-palette'/>
                </div>
                <div className='padding-panel'></div>
            </div>
        </div>
    )
}

export default Gifts