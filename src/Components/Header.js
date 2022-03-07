import React from 'react'
import "./Header.css";
import HomeIcon from "@material-ui/icons/Home";
import WidgetsIcon from "@material-ui/icons/Widgets";
import WorkIcon from "@material-ui/icons/Work";
import MessageIcon from "@material-ui/icons/Message";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

function Header() {
  return (
    <div className="main-header">
        <div className="flex">
         <img className="set-img-style" src="https://cdn-icons-png.flaticon.com/512/174/174857.png"/>
            <SearchBar/>
           
               <div className="home">
                <div className="icon-home"><HomeIcon/></div>
                <div className="home-text">Home</div>
                </div>
            <div className="network">
                <div className="icon-network"><WidgetsIcon/></div>
                <div className="network-text">My Network</div>
            </div>

            <div className="job">
                <div className="icon-network"><WorkIcon/></div>
                <div className="job-text">Jobs</div>
            </div>

            <div className="message">
                <div className="icon-message"><MessageIcon/></div>
                <div className="message-text">Messaging</div>
            </div>

            <div className="message">
                <div className="icon-message"><NotificationsIcon/></div>
                <div className="Notifications-text">Notifications</div>
            </div>

            <div className="profile">
                <Link to="/login">
                <img className="set-img-profile" src="https://lh3.googleusercontent.com/a-/AOh14Gi0Gdkvta6uV2FMsM1Ku2dBVPhLcnILE8z8RFSL1w=s96-c-rg-br100"/>
                <div className="profile-text">
                    Me
                </div>
                </Link>
                </div>

                <div className="network-two">
                <div className="icon-network-two"><MenuIcon/></div>
                <div className="network-text-two">Work</div>
            </div>
            <div className="premium">
            <div className="premium-text">Try Premium for</div>
            <div className="premium-text-free">free</div>
            </div>
            </div>
      </div>
  )
}

export default Header