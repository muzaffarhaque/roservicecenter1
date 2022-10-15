import React, { useState } from 'react'
import '../component/Nevbar.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faPhone} from '@fortawesome/free-solid-svg-icons'
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import img1 from "../images/Vector.png"
import img2 from "../images/Vector 439.jpg"
import img3 from "../images/call.jpg"






export default function Nevbar() {

const [move,setMove]=useState(true)
let [val,setVal]=useState(0)
    window.onscroll = function() {
        scrollFunction()
    };
    
 

    function scrollFunction() {
        if (window.innerWidth > 700) {
            var scroll_current = window.pageYOffset 
            console.log(scroll_current)
    
            if (scroll_current > val) {
                
                setMove(false)
            } else {
                setMove(true)
    
            }
    
            setVal(scroll_current)
            console.log(val,"after")
        }
    }



    return ( <> 
  
    < input type = "checkbox" id = 'so' />
     <label htmlFor="so">
        <FontAwesomeIcon icon={faBars} className="icon1"/>
    </label> 
    {move?
    < div className = 'header' >

    <div className="mubile-header">
        <div className="mubile-icon">
            <span>
                <img src={img2} width="30px" height="40px" alt=""/>
            </span>
            <span>
                RO SERVICE CENTER
            </span>
        </div>
        <div className="mubile-icon">
            {/* <img src={img1} width="35vw" height="35vw" alt="whats app icon"/> */}
            <FontAwesomeIcon icon={faWhatsapp} className="icon5"/>
            {/* <img src={img3} width="28" height="29" alt="whats app icon"/> */}
            <FontAwesomeIcon icon={faPhone} className="icon4"/>
        </div>
    </div>


     <ul className='unorder-list'>
        <li>APPLIANCES CARE</li>
        <li>HOME CARE</li>
        <li>GADGET CCRE</li>
        <li>BEAUTY CARE</li>
        <li>FITNESS CARE</li>
        <li>BUSNESS CART</li>
        <li>ALL SERVICES</li>
        <li>BLOG</li>
        <li>
            <ol className='header-hepline-box'>
                <li>
                    <FontAwesomeIcon icon={faPhone} className="icon2"/>&nbsp;&nbsp; Service Helpline
                </li>
                <li>786 568 986</li>
            </ol>
        </li>
        <li><img src={img1} width="28" height="29" alt="whats app icon"/></li>
    </ul>
    
 </div>:undefined}
   
    </>)
}
