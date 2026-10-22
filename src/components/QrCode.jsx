import React from 'react';
import '../styles/Qr.css'
import qrImage from '../assets/image-qr-code.png'

export default function QrCode() {
    return (
        <div className='qr-container'>
            <div className='qr-card'>
                <img src={qrImage} alt="Qr Code" />
                <h2>Improve your front-end skills by building projects</h2>
                <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </div>

        </div>
    )
}