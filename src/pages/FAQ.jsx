import React from 'react';
import ListElement from '../components/ListElement';

const FAQ = () => {
    return (
        <div id='faq' className='app'>
            <div className='page-container'>
                <div className='padding-panel'></div>
                <div className="info-container">
                    <h2 className='header'>FAQ</h2>
                    <ListElement
                        header='Hvordan sier jeg ifra om jeg kommer?'
                        time=''
                        text='Bare gå til toppen av denne nettsiden, trykk på knappen som er merket med RSVP, fyll ut skjema og trykk send!'
                    />
                    <ListElement
                        header='Hvordan sier jeg ifra om matallergier eller intoleranser?'
                        time=''
                        text='Vi vil gjerne legge til rette for at alle får noe de kan spise i bryllupet, derfor vil vi at  
                        du melder ifra om eventuelle allergier eller intoleranser enten gjennom RSVP-skjema her på nettsiden 
                        eller til oss på epost bryllup@runaogdavid.no.'
                    />
                    <ListElement
                        header='Hva slags vær bør jeg planlegge for?'
                        time=''
                        text='Oktober i Norge er som kjent uforutsigbart, dersom det blir regn flytter vi vielsen inn, men ta med en varm jakke.'
                    />
                    <ListElement
                        header='Jeg har meldt ifra om at jeg kommer, men så kan jeg ikke likevel, hva gjør jeg?'
                        time=''
                        text='Ting kan skje. Så hvis du finner ut at du ikke kan komme likevel etter allerede å 
                        ha meldt ifra at du kommer er det bare å sende oss en epost på bryllup@runaogdavid.no eller 
                        fylle ut et nytt skjema ved å trykke på RSVP-knappen helt øverst og huke av at du ikke kommer. 
                        Legg gjerne inn en kommentar slik at vi vet at det ikke er en feil, men at du faktisk ikke kommer.'
                    />
                    <ListElement
                        header='Hvordan sier melder jeg meg frivillig til å holde en tale eller bidra med annen underholdning?'
                        time=''
                        text='Vi kjenner mange talentfulle og kule mennesker og setter stor pris på alle bidrag, så send oss gjerne en 
                        epost dersom du ønsker å bidra på noen måte!'
                    />
                    <ListElement
                        header='Jeg har lyst til å kjøpe en gave som ikke står på ønskelisten, er det greit?'
                        time=''
                        text='Selvsagt! Vi føler i utgangspunktet ikke at gaver er en nødvendighet, men synes det er hyggelig 
                        med alt du har lyst til å gi oss. Enten dette er noe fra listen, noe du har funnet som fikk deg til å tenke 
                        på oss eller noe du har laget spesielt til oss.'
                    />
                    <ListElement
                        header='De tingene som er igjen på ønskelisten er i dyreste laget, hva gjør jeg?'
                        time=''
                        text='Det viktigste for oss er at du kommer, med eller uten gave, så hvis budsjettet ikke strekker til er det 
                        bare å møte opp med et smil og en klem i stedet. Hvis du likevel føler at du må ha med en gave kan du godt gi oss 
                        din favorittbok eller du kan hjelpe oss med å ta bilder under selskapet.'
                    />
                    <ListElement
                        header='Hva hvis jeg har andre spørsmål som det ikke er svart på her?'
                        time=''
                        text='Hvis du ikke har funnet svaret på spørsmålet ditt her vil vi gjerne at du sender oss en epost 
                        på bryllup@runaogdavid.no med det du lurer på, så skal vi svare så godt vi kan!'
                    />
                </div>
                <div className='side-panel'></div>
            </div>
        </div>
    )
}

export default FAQ