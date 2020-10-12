import React from 'react';
import Header from "./Header.jsx";
import './Body.css';

function Body({ spotify }) {
    return (
        <div className="body">
            <Header spotify={spotify} />
        </div>
    );
}

export default Body;