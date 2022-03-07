import React from 'react'
import "./Sidemenu.css";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import MinimizeIcon from "@material-ui/icons/Minimize";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
function Sidemenu() {
  return (
    <div>
    <div className="main-side-menu">
        <img className="set-img-profile-two" src="https://lh3.googleusercontent.com/a-/AOh14Gi0Gdkvta6uV2FMsM1Ku2dBVPhLcnILE8z8RFSL1w=s96-c-rg-br100"/>
    <div className="text-sohail">sohail khan</div>
    <div className="text-student">student</div>
    <div className="line-side">--------------------------------</div>
    <div className="connection-text">connections</div>
    <div className="grow-text">Grow your network</div>
    <div className="line-side">--------------------------------</div>
    <div className="connection-text">Access exclusive tools & insights</div>
    <div className="grow-text">Try Premium for free</div>
    <div className="line-side">--------------------------------</div>
    <div className="bookmark-margin">
    <BookmarkIcon/>
    <div className="grow-text-bookmark">My items</div>
    </div>
    </div>
    <div className="second-main-side-menu">
      <div className="recent">Recent</div>
      <div className="flex-hash">
        <div className="text-hash">#</div>
        <div className="job-interview"> Jobinterview</div>
      </div>
      <div className="flex-hash">
        <div className="text-hash">#</div>
        <div className="job-interview">entrepreneurship</div>
      </div>
      <div className="flex-hash">
        <div className="text-hash">#</div>
        <div className="job-interview">marketing</div>
      </div>
      <div className="flex-hash">
        <div className="text-hash">#</div>
        <div className="job-interview">programming</div>
      </div>
      <div className="flex-hash">
        <div className="text-hash">#</div>
        <div className="job-interview">businessintelligence</div>
      </div>
      <div className="group">Groups</div>
      <div className="event-flex-right">
        <div className="group">
          Events
        </div>
        <div className="minimize-icon"><MinimizeIcon/></div>
        </div>
        <div className="group">Followed Hashtag</div>
        
        <div className="flex-hash-two">
        <div className="text-hash">#</div>
        <div className="job-interview"> Jobinterview</div>
      </div>
      <div className="flex-hash">
        <div className="text-hash">#</div>
        <div className="job-interview">entrepreneurship</div>
      </div>
      <div className="flex-hash">
        <div className="text-hash">#</div>
        <div className="job-interview">marketing</div>
      </div>
      <div className="flex-downarrow">
      <div className="job-interview">Show more</div>
      <div className="downarrow">< KeyboardArrowDownIcon/></div>
    </div>
    <div className="line-side">--------------------------------</div>
    <div className="discover">Discover more</div>
    </div>
    </div>
  )
}

export default Sidemenu