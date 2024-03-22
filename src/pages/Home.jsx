import React, { useState } from 'react';
import Modal from 'react-modal';
import Form from '../components/Form';

const Home = () => {

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true)
    }

    function closeModal() {
        setModalOpen(false);
    }

    return (
        <div id='home' className='app'>
            <div className='hero-section'>
                <div className='main-info-container-frame'>
                    <div className='main-info-container'>
                        <h1>David & Runa</h1>
                        <h2>Solstua, Thorleif Haugs vei 14, Oslo</h2>
                        <h2>12. oktober 2024, klokken 15:00</h2>
                        <div className='rsvp-button-container'>
                            <button className='button button-large' onClick={openModal}>
                                RSVP
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal isOpen={modalOpen}
                    onRequestClose={closeModal}
                    className={'ReactModal_Overlay ReactModalContent'}>
                <Form closeModal={closeModal}/>
            </Modal>
        </div>
    )
}

export default Home;