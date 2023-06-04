import './infoBox.css'
import React from 'react';

function InfoBox() {
    return(
        <div className='box'>
            <ul className='info'>
                <li>Adresse du shop</li>
                <span className='split'></span>
                <li>Numéro de téléphone</li>
                <span className='split'></span>
                <li className='mail'>sangdebene.paca@gmail.com</li>
                <span className='split'></span>
                <li>Horraires :</li>
                <li>Mar. au Sam. : 11h - 20h</li>
                <li>Lun. et Dim. : Sur RDV</li>
            </ul>
        </div>
    )
}

export default InfoBox;