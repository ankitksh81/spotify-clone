import React from 'react';
import Header from "./Header.jsx";
import './Body.css';
import { useDataLayerValue } from './DataLayer';
import { Favorite, MoreHoriz, MoreVert, PlayCircleFilled } from '@material-ui/icons';

function Body({ spotify }) {
    const [{ discover_weekly }, dispatch] = useDataLayerValue();

    return (
        <div className="body">
            <Header spotify={spotify} />

            <div className="body__info">
                <img src={discover_weekly?.images[0].url} />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>

                <div className="body__songs">
                    <div className="body__icons">
                        <PlayCircleFilled />
                        <Favorite fontSize="large"/>
                        <MoreHoriz />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Body;