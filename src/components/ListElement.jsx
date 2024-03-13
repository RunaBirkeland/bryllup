import React from 'react';

const ListElement = (props) => {
    return (
        <div className='list-element-container'>
            <div className='list-element'>
               <div className='list-element-header'>
                    <div className='list-element-headline'>
                        {props.header}
                    </div>
                    <div className='list-element-time'>
                        {props.time}
                    </div>
               </div>
               <div className='list-element-text'>
                    {props.text}
               </div>
            </div>
        </div>
    )
}

export default ListElement