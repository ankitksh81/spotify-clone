import { PlayCircleOutline, Repeat, Shuffle, SkipNext, SkipPrevious } from '@material-ui/icons';
import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
                <h1>Album and song details</h1>
            </div>
            <div className="footer__center">
                <Shuffle className="footer__green" />
                <SkipPrevious className="footer__icon" />
                <PlayCircleOutline fontSize="large" className="footer__icon" />
                <SkipNext className="footer__icon" />
                <Repeat className="footer__green" />
            </div>
            <div className="footer__right">
                <h1>Volume controls</h1>
            </div>
        </div>
    );
}

export default Footer;