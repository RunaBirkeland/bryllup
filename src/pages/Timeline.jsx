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
                        text='Vi håper på å kunne holde vielsen utendørs i nedre del av hagen på Solstua, men dersom været skulle være i mot oss flytter vi den inn. Ankom gjerne litt før for å kunne sikre en god plass og husk å ta med en varm jakke.'
                    />
                    <ListElement
                        header='Champagne og mingling'
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
                        text='Når vi er vel bespist går selskapet over i en mer festlig fase med live-musikk, dans og andre aktiviteter.'
                    />
                    <ListElement
                        header='Nattmat'
                        time='Klokken 23:00'
                        text='På dette tidspunktet begynner vi sikkert å bli sultne igjen og litt varm nattmat vil derfor serveres.'
                    />
                    <ListElement
                        header='Båltenning'
                        time='Klokken 01:00'
                        text='Vi beveger oss ut i hagen igjen, tenner bål og serverer gløgg.'
                    />
                </div>
                <div className='padding-panel'></div>
            </div>
        </div>
    )
}

export default Timeline