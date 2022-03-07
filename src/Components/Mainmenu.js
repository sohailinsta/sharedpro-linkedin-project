import React, {useState} from 'react'
import "./Mainmenu.css";
import CollectionsIcon from "@material-ui/icons/Collections";
import VideocamIcon from "@material-ui/icons/Videocam";
import DateRangeIcon from "@material-ui/icons/DateRange";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import PublicIcon from "@material-ui/icons/Public";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FavoriteIcon from "@material-ui/icons/Favorite";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import CommentIcon from "@material-ui/icons/Comment";
import ShareIcon from "@material-ui/icons/Share";
import SendIcon from "@material-ui/icons/Send";

function Mainmenu() {
        const[likeone, setLikeone] = useState(437)
        const[liketwo, setLiketwo] = useState(753)
        const[likethree, setLikethree] = useState(1257)
        const[likefour, setLikefour] = useState(151)
        const[likefive, setLikefive] = useState(3599)
        const[commentsone, setcommentsone] = useState(39)
        const[commentstwo, setcommentstwo] = useState(14)
        const[commentsthree, setcommentsthree] = useState(9)
        const[commentsfour, setcommentsfour] = useState(15)
        const[commentsfive, setcommentsfive] = useState(99)
        
        const incrementlikes = () => {
            setLikeone(likeone +1)
            setLiketwo(liketwo +1)
            setLikethree(likethree +1)
            setLikefour(likefour +1)
            setLikefive(likefive +1)
        }

        const incrementcomments = () =>{
            setcommentsone(commentsone +1)
            setcommentstwo(commentstwo +1)
            setcommentsthree(commentsthree +1)
            setcommentsfour(commentsfour +1)
            setcommentsfive(commentsfive +1)
        }

  return (
      <div className="main-content">
    <div className="main-menu"> 
    <div className="margin-img-input">
        <img className="img-set-main" src="https://lh3.googleusercontent.com/a-/AOh14Gi0Gdkvta6uV2FMsM1Ku2dBVPhLcnILE8z8RFSL1w=s96-c-rg-br100"/>
        <input className="input-box-one"  type="text" placeholder="Start a post"/>
        </div>
        <div className="photo-video-event">
        <div className="icon-photo"><CollectionsIcon/>
        <div className="text-photo">Photo</div>
        </div>
        <div className="photo-video-event-two">
        <div className="icon-photo"><VideocamIcon/>
        <div className="text-photo">Video</div>
        </div>
        </div>
        <div className="photo-video-event-two">
        <div className="icon-photo"><DateRangeIcon/>
        <div className="text-photo">Event</div>
        </div>
        </div>
        <div className="photo-video-event-two">
        <div className="icon-photo"><CalendarViewDayIcon/>
        <div className="text-photo">Write Article</div>
        </div>
        </div>
        </div>
        </div>
        
    <div className="margin-line-flex">
    <div className="line-side-three">-----------------------------------------------------------------------</div>
    <div className="sort-text">Sort by:</div>
    <div className="top-text">Top</div>
    <div className="arrow-hover"><ArrowDropDownIcon/></div>
    </div>
    

    <div className="second-main-lovely">
        <div className="flex-img-lovely">
       <img className="set-img-lovely" src="https://media-exp1.licdn.com/dms/image/C4D0BAQFbJbgVOfBgxA/company-logo_100_100/0/1519913425502?e=1654732800&v=beta&t=LxxVPxLwa-UiMMB-rF4Dl_iXTmKiG_3Vh68C2zzG6vw"/>
        <div className="text-lovely-heading">Lovely Professional University
        
            <div className="text-followers">147,405 followers</div>
            <div className="public-icon">
                <div>2w -</div>
            <div className="icon-public"><PublicIcon/></div>
            </div>
            </div>
            <div className="horiz-icon"><MoreHorizIcon/></div>
        </div>
        <div className="title-lovely">Admire the never-ending magnificence of our #BeautifulLPUCampus!
Stumble upon this awe-inspiring picture and tell us why you love it in the comments.</div>
        <img className="main-img-lovely" src="https://media-exp1.licdn.com/dms/image/C4D22AQE4WgOskiocIw/feedshare-shrink_800/0/1645418102806?e=1649289600&v=beta&t=ol1Ei0Row0lkG0rhQdmvMDX_aG15HrXCwulpZp5lxfg"/>
        <div className="flex-like-icon-text">
        <div className="like-icons"><FavoriteIcon/></div>
        <div className="like-icons"><EmojiEmotionsIcon/></div>
        <div className="like-icons"><ThumbUpIcon/></div>
        <div className="like-post">Satinder Pal Singh and {likeone} others</div>
       <div className="comments-text"> {commentsone} comments</div>
        </div>
        <div className="line-side">-------------------------------------------------------------------------------------</div>
        
        <div className="profile-display-flex-again">

        <div className="photo-video-event">
        <div className="icon-photo"><ThumbUpIcon onClick={incrementlikes}/>
        <div className="text-photo">Like</div>
        </div>
        </div>

        <div className="photo-video-event-two-three">
        <div className="icon-photo"><CommentIcon onClick={incrementcomments}/>
        <div className="text-photo">Comments</div>
        </div>
        </div>
        
        <div className="photo-video-event-two-three">
        <div className="icon-photo">< ShareIcon/>
        <div className="text-photo">Share</div>
        </div>
        </div>
        
        <div className="photo-video-event-two-three">
        <div className="icon-photo"><SendIcon/>
        <div className="text-photo">Send</div>
        </div>
        </div>
        </div>
        </div>
        

        <div className="second-main-nikhil">
        <div className="flex-img-lovely">
            <img className="set-img-nikhil" src="https://media-exp1.licdn.com/dms/image/C5603AQEaWRSv1cHcKQ/profile-displayphoto-shrink_100_100/0/1646275051423?e=1652313600&v=beta&t=wxyfJhE_4rJyJe8FV3l4RRc1BJqKsIxVlt2jJ7vwrRQ"/>
        <div className="text-lovely-heading">Nikhil Kumar
        
            <div className="text-followers">Associate Software Engineer at Tata Consultancy Services</div>
            <div className="public-icon">
                <div>4d -</div>
            <div className="icon-public"><PublicIcon/></div>
            </div>
            </div>
            <div className="horiz-icon"><MoreHorizIcon/></div>
        </div>
        <div className="title-lovely">Thank you TCS for the love and support.. #thankyou Tata Consultancy Services</div>
        <img className="main-img-lovely" src="https://media-exp1.licdn.com/dms/image/C5622AQGx5JWGu0pv2Q/feedshare-shrink_800/0/1646216855242?e=1649289600&v=beta&t=d5kxiXSptw6wqNMJJISmg9QLqX8EZMqp5ONXWtOuPVg"/>
        <div className="flex-like-icon-text">
        <div className="like-icons"><FavoriteIcon/></div>
        <div className="like-icons"><EmojiEmotionsIcon/></div>
        <div className="like-icons"><ThumbUpIcon/></div>
        <div className="like-post">Josh Praneeth Ambati and {liketwo} others</div>
       <div className="comments-text"> {commentstwo} comments</div>
        </div>
        <div className="line-side">-------------------------------------------------------------------------------------</div>
        
        <div className="profile-display-flex-again">

        <div className="photo-video-event">
        <div className="icon-photo"><ThumbUpIcon onClick={incrementlikes}/>
        <div className="text-photo">Like</div>
        </div>
        </div>

        <div className="photo-video-event-two-three">
        <div className="icon-photo"><CommentIcon onClick={incrementcomments}/>
        <div className="text-photo">Comments</div>
        </div>
        </div>
    
        <div className="photo-video-event-two-three">
        <div className="icon-photo">< ShareIcon/>
        <div className="text-photo">Share</div>
        </div>
        </div>

        <div className="photo-video-event-two-three">
        <div className="icon-photo"><SendIcon/>
        <div className="text-photo">Send</div>
        </div>
        </div>
        </div>
        </div>
        
    
        <div className="second-main-anaya">
        <div className="flex-img-lovely">
            <img className="set-img-nikhil" src="https://media-exp1.licdn.com/dms/image/C4E03AQEEyklwsy0ccA/profile-displayphoto-shrink_100_100/0/1608721609045?e=1652313600&v=beta&t=6yJRoIEo_yeV-NXBBpMhBoJ8l9hcyilizwheEB1aVHY"/>
        <div className="text-lovely-heading">Ananya Sharma
        
            <div className="text-followers">Consultancy Acquisition Specialist at Google</div>
            <div className="public-icon">
                <div>2d -</div>
            <div className="icon-public"><PublicIcon/></div>
            </div>
            </div>
            <div className="horiz-icon"><MoreHorizIcon/></div>
        </div>
        <div className="title-lovely">That amazing feeling of going to the Google office for the first time. 😀

Felt incredible to work from office after two long years! :)</div>
        <img className="main-img-lovely" src="https://media-exp1.licdn.com/dms/image/C4D22AQGvJCgjtqO_OQ/feedshare-shrink_800/0/1646323939016?e=1649289600&v=beta&t=7gAmhZm1ZXks3SX4kQBzTnABdAZSTxR0WmsjIoTc8mg"/>
        <div className="flex-like-icon-text">
        <div className="like-icons"><FavoriteIcon/></div>
        <div className="like-icons"><EmojiEmotionsIcon/></div>
        <div className="like-icons"><ThumbUpIcon/></div>
        <div className="like-post">Vrijraj Singh and {likethree} others</div>
       <div className="comments-text"> {commentsthree} comments</div>
        </div>
        <div className="line-side">-------------------------------------------------------------------------------------</div>
        
        <div className="profile-display-flex-again">

        <div className="photo-video-event">
        <div className="icon-photo"><ThumbUpIcon onClick={incrementlikes}/>
        <div className="text-photo">Like</div>
        </div>
        </div>

        <div className="photo-video-event-two-three">
        <div className="icon-photo"><CommentIcon onClick={incrementcomments}/>
        <div className="text-photo">Comments</div>
        </div>
        </div>
       
        <div className="photo-video-event-two-three">
        <div className="icon-photo">< ShareIcon/>
        <div className="text-photo">Share</div>
        </div>
        </div>
        

        <div className="photo-video-event-two-three">
        <div className="icon-photo"><SendIcon/>
        <div className="text-photo">Send</div>
        </div>
        </div>
       </div>
       </div>


        <div className="second-main-video">
        <div className="flex-img-lovely">
            <img className="set-img-nikhil" src="https://media-exp1.licdn.com/dms/image/C5103AQGw28HVYQwC2g/profile-displayphoto-shrink_100_100/0/1529640662714?e=1652313600&v=beta&t=Tw_VDcG-CiKdhaAabe7jd2J9K3GXBXVF4AbcUyObdko"/>
        <div className="text-lovely-heading">Malina SareshWala
        
            <div className="text-followers">Workday Consultant at Tata Consultancy Services</div>
            <div className="public-icon">
                <div>2d -</div>
            <div className="icon-public"><PublicIcon/></div>
            </div>
            </div>
            <div className="horiz-icon"><MoreHorizIcon/></div>
        </div>
        <div className="title-lovely">Thankyou for having wonderful leaders at TCS Human Capital Practice and team members for recognising the efforts and providing wonderful opportunities! #thankyou</div>
        <iframe className="main-img-lovely" controls src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe>
        <div className="flex-like-icon-text">
        <div className="like-icons"><FavoriteIcon/></div>
        <div className="like-icons"><EmojiEmotionsIcon/></div>
        <div className="like-icons"><ThumbUpIcon/></div>
        <div className="like-post">Sumit Nagpal and {likefour} others</div>
       <div className="comments-text">{commentsfour} comments</div>
        </div>
        <div className="line-side">-------------------------------------------------------------------------------------</div>
        
        <div className="profile-display-flex-again">

        <div className="photo-video-event">
        <div className="icon-photo"><ThumbUpIcon onClick={incrementlikes}/>
        <div className="text-photo">Like</div>
        </div>
        </div>

        <div className="photo-video-event-two-three">
        <div className="icon-photo"><CommentIcon onClick={incrementcomments}/>
        <div className="text-photo">Comments</div>
        </div>
        </div>
       
        <div className="photo-video-event-two-three">
        <div className="icon-photo">< ShareIcon/>
        <div className="text-photo">Share</div>
        </div>
        </div>
        

        <div className="photo-video-event-two-three">
        <div className="icon-photo"><SendIcon/>
        <div className="text-photo">Send</div>
        </div>
        </div>
        </div>        
        </div>

        <div className="second-main-lovely">
        <div className="flex-img-lovely">
            <img className="set-img-nikhil" src="https://media-exp1.licdn.com/dms/image/C4D0BAQFrneGmixiXDw/company-logo_100_100/0/1522154995700?e=1654732800&v=beta&t=LG7Bl8ePgKkYfCxcQg2BFNuP-8hNt1tJC0uNUuY_nRw"/>
        <div className="text-lovely-heading">Korsit International Technology
        
            <div className="text-followers">47,405 followers</div>
            <div className="public-icon">
                <div>3D -</div>
            <div className="icon-public"><PublicIcon/></div>
            </div>
            </div>
            <div className="horiz-icon"><MoreHorizIcon/></div>
        </div>
        <div className="title-lovely">And just like that the #KorsitFamily celebrated Carnival again after two years and one thing we can tell you is... we had a world of fun! 🥳🥂</div>
        <img className="main-img-lovely" src="https://media-exp1.licdn.com/dms/image/C4E22AQFXuviturIkIQ/feedshare-shrink_800/0/1642064361426?e=1649289600&v=beta&t=RkjFKMAva9llrSNPFaAMy9ls4UJSQVzRqxCkqw5rnD8"/>
        <div className="flex-like-icon-text">
        <div className="like-icons"><FavoriteIcon/></div>
        <div className="like-icons"><EmojiEmotionsIcon/></div>
        <div className="like-icons"><ThumbUpIcon/></div>
        <div className="like-post">Robert Patricia and {likefive} others</div>
       <div className="comments-text"> {commentsfive} comments</div>
        </div>
        <div className="line-side">-------------------------------------------------------------------------------------</div>
        
        <div className="profile-display-flex-again">

        <div className="photo-video-event">
        <div className="icon-photo"><ThumbUpIcon onClick={incrementlikes}/>
        <div className="text-photo">Like</div>
        </div>
        </div>

        <div className="photo-video-event-two-three">
        <div className="icon-photo"><CommentIcon onClick={incrementcomments}/>
        <div className="text-photo">Comments</div>
        </div>
        </div>
       
        <div className="photo-video-event-two-three">
        <div className="icon-photo">< ShareIcon/>
        <div className="text-photo">Share</div>
        </div>
        </div>

        <div className="photo-video-event-two-three">
        <div className="icon-photo"><SendIcon/>
        <div className="text-photo">Send</div>
        </div>
        </div>
        </div>
        </div>
  </div>

  )
}
export default Mainmenu