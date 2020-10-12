import React from 'react';
import './Header.css';
import { Avatar } from "@material-ui/core";
import { SearchRounded } from '@material-ui/icons';

function Header() {
    return(
        <div className="header">
            <div className="header__left">
                <SearchRounded />
                <input
                    placeholder="Search for Artists, Songs, or Podcasts"
                    type="text" />
            </div>

            <div className="header__right">
                <Avatar scr="" alt="profile" />
                <h4>Ankit</h4>
            </div>
        </div>
    );
}

export default Header;