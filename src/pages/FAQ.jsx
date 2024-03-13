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
                        header='Hva skal jeg ha på meg?'
                        time=''
                        text='Det viktigste for oss er at du er komfortabel og føler deg fin! Hvis du likevel ønsker deg litt veiledning kan du gå for en semiformell stil.'
                    />
                    <ListElement
                        header='Hva slags vær bør jeg planlegge for?'
                        time=''
                        text='Oktober i Norge er som kjent uforutsigbart, dersom det blir regn flytter vi vielsen inn, men ta med en varm jakke.'
                    />
                </div>
                <div className='side-panel'></div>
            </div>
        </div>
    )
}

export default FAQ