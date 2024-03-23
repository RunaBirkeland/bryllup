import React from "react";
import ListElement from "../components/ListElement";

const Timeline = () => {
    return (
        <div id='timeline' className="app">
            <div className="page-container">
                <div className='left-image-container'></div>
                <div className="info-container">
                    <h2 className="header">Bryllupsdagen</h2>
                    <ListElement
                        header='Vielse'
                        time='Klokken 15:00'
                        text='Vi håper på å kunne holde vielsen utendørs i nedre del av hagen på Solstua, men dersom været skulle være i 
                        mot oss flytter vi den inn. Ankom gjerne litt før for å kunne sikre en god plass, og ta gjerne med utesko og en varm jakke.'
                    />
                    <ListElement
                        header='Mingling'
                        time='Klokken 15:30'
                        text='Etter vielsen beveger vi oss opp mot huset og det vil bli servert lette forfriskninger.'
                    />
                    <ListElement
                        header='Middag'
                        time='Klokken 17:00'
                        text='Middagen vil bestå av en buffet av diverse retter som serveres med vin, øl og alkoholfrie alternativer.'
                    />
                    <ListElement
                        header='Fest'
                        time='Klokken 20:00'
                        text='Etter middag og taler går selskapet over i en mer festlig fase med musikk, dans og andre aktiviteter.'
                    />
                    <ListElement
                        header='Nattmat'
                        time='Klokken 23:00'
                        text='Når det nærmer seg midnatt er det sikkert på tide med litt mat igjen.'
                    />
                    <span className="footnote">*Eventuelle endringer i planen vil dukke opp her slik at du kan holde deg oppdatert.</span>
                </div>
                <div className='padding-panel'></div>
            </div>
        </div>
    )
}

export default Timeline