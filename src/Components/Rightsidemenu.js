import React from 'react'
import "./Rightsidemenu.css";
import PriorityHighIcon from "@material-ui/icons/PriorityHigh";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
function Rightsidemenu() {
  return (
    <div className="main-right-side-menu">
     <div className="right-side-menu">
         <div className="linkedin">
           Linkedin News
         </div>
         <div className="priority-icon"><PriorityHighIcon/></div>
         </div>
         <ul className="main-list">
           <li className="list-text">Shane Warne to receive state funeral</li>
           <div className="text-top-news">Top news</div>
        </ul>
        <ul className="main-list">
           <li className="list-text">India's most liveable societies</li>
           <div className="text-top-news">2d ago . 17,574</div>
        </ul>
        <ul className="main-list">
           <li className="list-text">From gig Workers to Shareholders</li>
           <div className="text-top-news">Top news</div>
        </ul>
        <ul className="main-list">
           <li className="list-text">Over 50 and seeking work? Read this</li>
           <div className="text-top-news">2d ago . 14,684 readers</div>
        </ul>
        <div className="flex-downarrow-two">
      <div className="job-interview">Show more</div>
      <div className="downarrow">< KeyboardArrowDownIcon/></div>
    </div>
    <div className="second-right-side-menu">
      <img className="img-set-second-right-side-menu" src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAACeUyGWuWBhQQLyxe1gEMEaZgw.png"/>
    </div>

    <div className="margin-about">
      <div className="text-about">About</div>
      <div className="text-about">Accessibility</div>
      <div className="text-about">Help Center</div>
    </div>

    <div className="margin-about-two-privacy">
      <div className="flex-privacy">
      <div className="text-about">privacy & Terms</div>
      < KeyboardArrowDownIcon/>
      </div>
      <div className="text-about-ad">Ad Choices</div>
    </div>

    <div className="margin-about-two-privacy">
      <div className="text-about-advertising">Advertising</div>
      <div className="flex-privacy">
      <div className="text-about">Business Services</div>
      < KeyboardArrowDownIcon/>
      </div>
    </div>

    <div className="margin-about-three-privacy">
      <div className="text-about">Get the Linkedin app</div>
      <div className="text-about">More</div>
    </div>
         </div>
  )
}

export default Rightsidemenu