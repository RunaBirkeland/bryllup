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
                        og et skoskift, særlig hvis været er litt vått.
                        </span>
                        <span className='text'>
                        For dem som ønsker seg en kleskode å orientere seg etter 
                        har vi lagt oss et sted i mellom <span className='italic-text'>dress </span>
                        og <span className='italic-text'>mørk dress, </span>men det 
                        viktigste er som nevnt at du føler deg vel.
                        </span>
                        <span className='text'>
                        Hvis man i tillegg er av typen som liker å få et tema å følge eller 
                        bare vil ha en unnskyldning til å kjøpe seg noe nytt, kan man for 
                        eksempel ta utgangspunkt i fargetemaet vårt som består av burgunder, 
                        lys rosa, grønt, gull, sort og kremhvit.
                        </span>
                        <div className='colour-palette'/>
                </div>
                <div className='padding-panel'></div>
            </div>
        </div>
    )
}

export default Gifts