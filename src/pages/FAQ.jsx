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
                        du melder ifra om allergier eller intoleranser gjennom RSVP-skjema her på nettsiden 
                        eller til oss på epost bryllup@runaogdavid.no.'
                    />
                    <ListElement
                        header='Hva slags vær bør jeg planlegge for?'
                        time=''
                        text='Oktober i Norge er som kjent uforutsigbart, dersom det blir mye regn flytter vi vielsen inn, men ta med en varm jakke og utesko i tilfelle vielsen blir ute i sølevær.'
                    />
                    <ListElement
                        header='Jeg kan ikke lenger komme, hva gjør jeg?'
                        time=''
                        text='Ting kan skje. Hvis du senere finner ut at du ikke kan komme er det bare å sende oss en epost på bryllup@runaogdavid.no.'
                    />
                    <ListElement
                        header='Hva hvis jeg vil bidra med en tale eller annen underholding?'
                        time=''
                        text='Vi kjenner mange talentfulle og kule mennesker og setter stor pris på alle bidrag, så send oss gjerne en 
                        epost på bryllup@runaogdavid.no dersom du ønsker å bidra på noen måte!'
                    />
                    <ListElement
                        header='Har dere reservert rom på Voksenåsen Hotell?'
                        time=''
                        text='Da vi skrev invitasjonene holdt vi på å inngå en avtale med Voksenåsen Hotell for reservasjon av et visst antall 
                        rom for de av gjestene som måtte trenge det, men vi valgte til slutt å ikke skrive under på denne da vi så at rommene 
                        ville være billigere uten en slik avtale.'
                    />
                    <ListElement
                        header='Hva gjør jeg hvis de tingene som er igjen på ønskelisten er i dyreste laget?'
                        time=''
                        text='Det viktigste for oss er at du kommer, med eller uten gave. Hvis du likevel føler at du må ha med en gave kan du godt gi oss 
                        din favorittbok, lage noe, eller du kan hjelpe oss med å ta bilder under selskapet.'
                    />
                    <ListElement
                        header='Hva hvis jeg har andre spørsmål som det ikke er svart på her?'
                        time=''
                        text='Da sender du oss en epost på bryllup@runaogdavid.no med det du lurer på, så skal vi svare så godt vi kan!'
                    />
                </div>
                <div className='side-panel'></div>
            </div>
        </div>
    )
}

export default FAQ