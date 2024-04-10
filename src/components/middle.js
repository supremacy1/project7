import React from "react";
import middle from '../css/middle.css'
import Premium from '../images/Premium.svg'
import Vector from '../images/Vector (2).svg'

const Middle = () => {





    return(

        <>
        <div className="maincontainer">
        <h1>Choose Your Plan</h1>
        <h5>Let's choose the package that is best for you and explore it happily and cheerfully.</h5>
        </div>
       
        <div className="class">
            <div className="class1">
        <div className="anyher">           
            <ul>
            <img src={Premium} className="pp"></img>
            <h4>Free Plan</h4>
                <li>Unlimited Bandwitch</li>
                <li>Encrypted Connection</li>
                <li>No Traffic Logs</li>
                <li>Works on All Devices</li>
                <div className="bbt3">
                <h4>Free Plan</h4>
            <button className="bb1">Select</button>
            </div>
            </ul>           
            </div>
           </div>

           <div className="class2">
        <div className="anyher">     
            <ul>
            <img src={Premium} className="pp"></img>
            <h4>Standard Plan</h4>
                <li>Unlimited Bandwitch</li>
                <li>Encrypted Connection</li>
                <li>Yes Traffic Logs</li>
                <li>Works on All Devices</li>
                <li>Connect Anyware</li>
                <div className="bbt3">
                <h4>$9 / mo</h4>
            <button className="bb2">Select</button>
            </div>
            </ul>
            </div>
           </div>
           <div className="class3">
        <div className="anyher">
            
            
           
            <ul>
            <img src={Premium} className="pp"></img>
            <h4>Premium Plan</h4>
                <li>Unlimited Bandwitch</li>
                <li>Encrypted Connection</li>
                <li>Yes Traffic Logs</li>
                <li>Works on All Devices</li>
                <li>Connect Anyware</li>
                <li>Get New Features</li>
                <div className="bbt3">
                <h4>$12 / mo</h4>
            <button className="bb3">Select</button>
            </div>
            </ul>
            </div>
           </div>
           </div>
            <div className="mape">
            <h1>Huge Global Network of Fast VPN</h1>
            <h4>See LaslesVPN everywhere to make it easier for you when you move locations.</h4>
            <img src={Vector} className="mape" alt="ma"></img>
           </div>
           <div className="let"></div>

          {/* <div className="loop">
            <ul>
            <img src={Premium} className="pp"></img>
            <h4>Free Plan</h4>
                <li>Unlimited Bandwitch</li>
                <li>Encrypted Connection</li>
                <li>No Traffic Logs</li>
                <li>Works on All Devices</li>
              
                <h4>Free Plan</h4>
            <button className="b">Select</button>
         
            </ul>
            <ul>
            <img src={Premium} className="pp"></img>
            <h4>Standard Plan</h4>
                <li>Unlimited Bandwitch</li>
                <li>Encrypted Connection</li>
                <li>Yes Traffic Logs</li>
                <li>Works on All Devices</li>
                <li>Connect Anyware</li>
               
                <h4>$9 / mo</h4>
            <button className="b">Select</button>
         
            </ul>
            <ul>
            <img src={Premium} className="pp"></img>
            <h4>Premium Plan</h4>
                <li>Unlimited Bandwitch</li>
                <li>Encrypted Connection</li>
                <li>Yes Traffic Logs</li>
                <li>Works on All Devices</li>
                <li>Connect Anyware</li>
                <li>Get New Features</li>
                <h4>$12 / mo</h4>
            <button className="b">Select</button>
         
            </ul>
           </div> */}
           <div class="loop">
  <ul class="plan">
    <img src={Premium} class="pp"></img>
    <h4>Free Plan</h4>
    <li>Unlimited Bandwidth</li>
    <li>Encrypted Connection</li>
    <li>No Traffic Logs</li>
    <li>Works on All Devices</li>
    <h4>Free Plan</h4>
    <button class="b">Select</button>
  </ul>
  <ul class="plan">
    <img src={Premium} class="pp"></img>
    <h4>Free Plan</h4>
    <li>Unlimited Bandwidth</li>
    <li>Encrypted Connection</li>
    <li>No Traffic Logs</li>
    <li>Works on All Devices</li>
    <h4>Free Plan</h4>
    <button class="b">Select</button>
  </ul>
  <ul class="plan">
    <img src={Premium} class="pp"></img>
    <h4>Free Plan</h4>
    <li>Unlimited Bandwidth</li>
    <li>Encrypted Connection</li>
    <li>No Traffic Logs</li>
    <li>Works on All Devices</li>
    <h4>Free Plan</h4>
    <button class="b">Select</button>
  </ul>
</div>


        </>
    )
}
export default Middle;