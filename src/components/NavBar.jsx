import React from 'react';
import { Link } from "react-router-dom";
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';

function NavBar() {
  return (
    <div className="nav-bar">
          <SportsEsportsIcon/>
          <Link to="/">
            <h2>Games Database</h2>
          </Link>
          <SportsEsportsIcon/>
    </div>
  );
}

export default NavBar;
