import React from 'react';
import footer from '../css/foot.css'; // Import your CSS file
import bx from '../images/bx.svg'
import group from '../images/Group 1300.svg'
import eva from '../images/eva.svg'
import eclipe from '../images/Ellipse.svg'
import backarrow from '../images/backarrow.svg'
import ecli from '../images/Elli.svg'
import log from '../images/logo.svg'
import facebook from '../images/Facebook.svg'
import twinter from '../images/Twitter.svg'
import insta from '../images/Instagram.svg'
import inst from '../images/ant.svg'
import rect from '../images/Rectangle 275.png'

const Footer = () => {
  return (
    <>
      <div className='footercontainer'>
        <div className='header'>
          <h1>Trusted by Thousands of Happy Customer</h1>
          <p>These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</p>
        </div>

        <div className='profile-container'>
          <div className="profile-box">
            <img src={bx} alt="Profile" className="profile-image" />
            <div className="profile-info">
              <h2>Viezh Robert<span><h5>Warsaw, Poland</h5></span></h2>
              <p>“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</p>
            </div>
            <img src={inst} className='f2'></img><h5 className='fat1'>4.5</h5>
            <div className='pro1'>
              <img src={bx} alt="Profile" className="profile-image" />
              <div className="profile-info ">
                <h2>Yessica Christy<span><h5>Shanxi, China</h5></span></h2>
                <p>“I like it because I like to travel far and still can connect with high speed.”.</p>
              </div>
              <img src={inst} className='f3'></img><h5 className='fat3'>4.5</h5>
            </div>
            <div className='pr2'>
              <img src={bx} alt="Profile" className="profile-image" />
              <div className="prof">
                <h2>Kim Young Jou<span><h5>Seoul,South Korea</h5></span></h2>
                <p>“This is very unusual for my business that currently requires a virtual private network that has high security.”.</p>
              </div>
              <img src={inst} className='f1'></img><h5 className='fat'>4.5</h5>
            </div>
          </div>
          <div className='port'>
            <img src={group} className='so'></img>
            <div className='arrows'>
              <img src={backarrow} className='el'></img>
              <img src={ecli} className='aro'></img>
              <img src={eclipe} className='elip'></img>
              <img src={eva} className='eva'></img>
            </div>
            {/* <div className='arrow'>
          <img src={eclipe} className='elip'></img>
          <img src={eva} className='eva'></img>
        </div> */}
          </div>
          <div className='footwear'>
            <h1>Subscribe Now for Get Special Features!<span><p>Let's subscribe with us and find the fun.</p></span></h1>

            <div className='btn'>
              <button className='btn-text'> Subscribe Now</button>
            </div>
          </div>
          <div className='advert'>
            <div className='adcontent'>
              <div className="cont">
                <div className="tex">
                  <img src={log} alt="Image" className="iage" />
                  <h2>Lasles<span>VPN</span></h2>
                </div>
                <ul className='headers'>
                  <h1>Product</h1>
                  <li>Download</li>
                  <li>Pricing</li>
                  <li>Location</li>
                  <li>Server</li>
                  <li>Countries</li>
                  <li>Blog</li>
                </ul>
                <ul className='headers'>
                  <h1>Engage</h1>
                  <li>LaslesVPN</li>
                  <li>FAQ</li>
                  <li>Tutorials</li>
                  <li>About Us</li>
                  <li>Privacy Policy</li>
                  <li>Tearms of Service</li>

                </ul>
                <div className='wat'>
                  <ul className='headers'>
                    <h1>Earn Money</h1>
                    <li>Affliate</li>
                    <li>Become Partner</li>
                  </ul>
                </div>
              </div>
              <div className='p'>
                <p>LaslesVPN is a private virtual network that has unique features and has high security.</p>
                <div className='footmage'>
                  <img src={facebook} className='face'></img>
                  <img src={twinter} className='face'></img>
                  <img src={insta} className='face'></img>
                  <img src={rect} className='face'></img>

                  <h3>©2020Lasles<span>VPN</span></h3>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Footer;
