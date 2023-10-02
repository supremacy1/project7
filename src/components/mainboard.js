import React from "react";
import mainbar from '../css/mainbar.css'
import logo from '../images/logo.svg'
import her from '../images/her.svg'
import loca from '../images/loca.svg'
import ser from '../images/ser.svg'
import images from '../images/images.jpg'
import download from '../images/download .png'


const MainBoard = () => {




    return(
        <>
        <div className="content">
            <div className="head">
           <img src={logo} className="logo" alt="logo"></img> <h1>LaslesVPN</h1>
           </div>
           <div className="navbar">
           
      <ul className="nav-list">
        <li className="nav-item">Home</li>
        <li className="nav-item">About</li>
        <li className="nav-item">Services</li>
        <li className="nav-item">Contact</li>
      </ul>
      
    </div>
    <div className="buttons">
            <button type="text" className="b1">Sign in</button>
            <button type="text" className="b2">Sign Up</button>
            </div>
            </div>
            <div className="second">
                <h1>Want anything to be easy with LaslesVPN.</h1>
            <h5>Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</h5>
    <img src={download} className="sond"></img>
            </div>
            <div className="but">
                <button className="bb">Get Started</button>
            </div><br></br>
        <div className="users">
           <img src={her} className="user"></img> <h6>90+<br></br> <h4>Users</h4></h6>
           <img src={loca} className="user"></img><h6>30+<br></br> <h4>Locations</h4></h6>
           <img src={ser} className="user"></img><h6>50+ <br></br><h4>Servers</h4></h6>
        </div>
       <div className="plat">
        <img src={images} className="hot"></img>
        <div className="text">
            <h2>We Provide Many Features You Can Use</h2>
            <h4>You can explore the features that we provide with fun and have their own functions each feature.</h4>
           <ul>
            <li>Powerfull online protection.</li>
            <li>Internet without borders.</li>
            <li>Supercharged VPN</li>
            <li>No specific time limits.</li>
           </ul>

        </div>
       </div>
        </>
    )
}

export default MainBoard;