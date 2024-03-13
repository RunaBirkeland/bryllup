import React, { useState } from 'react';

const Form = () => {

    const [name, setName] = useState("");
    const [dietary, setDietary] = useState("");
    const [comments, setComments] = useState("");

    const handleSubmit = () => {
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className='side-image-container'></div>
            <div className='form-content'>
            <h2>Kan du komme?</h2>
            <label className='label label-input'>Skriv inn navnet ditt:
                <input
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <label className='label label-radio'>
                <input
                    type='radio'
                    />
                Jeg kommer!
            </label>
            <label className='label label-radio'>
                <input
                    type='radio'
                    />
                Jeg kan dessverre ikke
            </label>
            <label className='label label-input'>Eventuelle kostholdsbehov:
                <input
                    type='text'
                    value={dietary}
                    onChange={(e) => setDietary(e.target.value)}
                />
            </label>
            <label className='label label-input'>Andre kommentarer:
                <input
                    type='text'
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                />
            </label>
            <input type='submit' />
            </div>
        </form>
    )
}

export default Form;