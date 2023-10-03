import React from "react";
import mainbar from '../css/mainbar.css'
import logo from '../images/logo.svg'
import her from '../images/her.svg'
import loca from '../images/loca.svg'
import ser from '../images/ser.svg'
import images from '../images/images.jpg'
import download from '../images/download .png'
import bx from '../images/bx.svg'


const MainBoard = () => {




    return(
        <>
        
        <div className="content">
        <div className="container">
      <img src={logo} alt="Image" className="image" />
      <div className="text">
        <h2>LaslesVPN</h2>
      </div>
      </div>
           <div className="navbar">
           
      <ul className="nav-list">
        <li className="nav-item">About</li>
        <li className="nav-item">Features</li>
        <li className="nav-item">Pricing</li>
        <li className="nav-item">Testimonials</li>
        <li className="nav-item">Help</li>
      </ul>
      
    </div>
    <div className="buttons">
            <button type="text" className="b1">Sign in</button>
            <button type="text" className="b2">Sign Up</button>
            </div>
            </div>
            <div className="second">
                <h1>Want anything to be easy with <span>LaslesVPN.</span>
                <span><h5>Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</h5></span>
                </h1>          
    <img src={download} className="sond"></img>
            </div>
            <div className="but">
                <button className="bb">Get Started</button>
            </div><br></br>
        <div className="users">
        <div className="container">
      <img src={her} alt="Image" className="image" />
      <div className="text">
        <h2>50+<br></br><span>Users</span></h2>
        
      </div>
      </div>
      <div className="container">
      <img src={loca} alt="Image" className="image" />
      <div className="text">
        <h2>30+<br></br><span>Locations</span></h2>
      </div>
      </div>
      <div className="container">
      <img src={ser} alt="Image" className="image" />
      <div className="text">
        <h2>50+ <br></br><span>Server</span></h2>
       
      </div>
      </div>
           {/* <img src={her} className="user"></img> <h6>90+<br></br> <h4>Users</h4></h6>
           <img src={loca} className="user"></img><h6>30+<br></br> <h4>Locations</h4></h6>
           <img src={ser} className="user"></img><h6>50+ <br></br><h4>Servers</h4></h6> */}
        </div>
       <div className="plat">
        <img src={images} className="hot"></img>
        <div className="text">
            <h2>We Provide Many Features You Can Use</h2>
            <h4>You can explore the features that we provide with fun and have their own functions each feature.</h4>
           <ul>
           <li><img src={bx} alt="Image" className="ima" />Powerfull online protection.</li>
            <li><img src={bx} alt="Image" className="ima" />Internet without borders.</li>
            <li><img src={bx} alt="Image" className="ima" />Supercharged VPN</li>
            <li><img src={bx} alt="Image" className="ima" />No specific time limits.</li>
           </ul>

        </div>
       </div>
        </>
    )
}

export default MainBoard;