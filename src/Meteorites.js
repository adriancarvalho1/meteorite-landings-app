import {React, useState} from 'react';
import Modal from 'react-modal'
import Maps from './Maps'


const Meteorites = ({name, recclass, mass, year, fall, lat, long}) => {
    const fullyear = year.slice(0,4)
    const [modalIsOpen, setModalIsOpen] = useState(false);
   
    return (
        <div className="meteorite-card">
            <h2>{name}</h2>
            <p>Class: {recclass}</p>
            <p>Mass: {mass}</p>
            <p>Fall: {fall}</p>
            <p>Latitute: {lat}</p>
            <p>Longitute: {long}</p>
            <p>Year: {fullyear}</p>
            <button onClick={()=> setModalIsOpen(true)}>
            OPEN MAP
            </button>
            <Modal appElement={document.querySelector('#root')} isOpen={modalIsOpen} onRequestClose={()=> setModalIsOpen(false)} style={{content: {padding: '0', margin: '0'}}}>
               {(lat !== "0.000000" && long !== "0.000000") ?  <Maps lat={lat} long={long}/> : <div className="error-message">Sorry, location not found! :(</div>}
            </Modal>
        </div>
    )
}

export default Meteorites;