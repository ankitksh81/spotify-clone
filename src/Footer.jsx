import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
                <h1>Album and song details</h1>
            </div>
            <div className="footer__center">
                <h1>Player controls</h1>
            </div>
            <div className="footer__right">
                <h1>Volume controls</h1>
            </div>
        </div>
    );
}

export default Footer;