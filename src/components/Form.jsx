import React, { useState } from 'react';

const Form = () => {

    const [heading, setHeading] = useState('Kan du komme?');
    const [name, setName] = useState("");
    const [attending, setAttending] = useState(false);
    const [dietary, setDietary] = useState("");
    const [comments, setComments] = useState("");
    const [result, setResult] = useState("");
    const [hideForm, setHideForm] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setResult("Sender....");
        const formData = new FormData(event.target);

        formData.append("access_key", "afc455f6-a8d2-4828-9e2e-fe13b6cc014d");
        formData.append("name", name);
        formData.append("attending", attending);
        formData.append("dietary", dietary);
        formData.append("comments", comments);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Ditt svar er mottatt");
            setHeading('Takk!');
            setHideForm(true);
            event.target.reset();

        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className='side-image-container'></div>
            <div className='form-content'>
                <h2>{heading}</h2>
                {!hideForm &&
                    <label className='label label-input'>Skriv inn navnet ditt eller deres:
                        <input
                            type='text'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </label>
                }
                {!hideForm &&
                    <label className='label label-radio'>
                        <input
                            type='radio'
                            value={attending}
                            onClick={(e) => setAttending(true)}
                        />
                        Jeg/Vi kommer!
                    </label>
                }
                {!hideForm &&
                    <label className='label label-radio'>
                        <input
                            type='radio'
                            value={attending}
                            onClick={(e) => setAttending(false)}
                        />
                        Jeg/Vi kan dessverre ikke
                    </label>
                }
                {!hideForm &&
                    <label className='label label-input'>Eventuelle kostholdsbehov:
                        <input
                            type='text'
                            value={dietary}
                            onChange={(e) => setDietary(e.target.value)}
                        />
                    </label>
                }
                {!hideForm &&
                    <label className='label label-input'>Andre kommentarer:
                        <input
                            type='text'
                            value={comments}
                            onChange={(e) => setComments(e.target.value)}
                        />
                    </label>
                }
                {!hideForm &&
                    <input className='submit' type='submit' value="Send" />
                }
                <span style={{ color: 'white' }}>{result}</span>
            </div>
        </form>
    )
}

export default Form;