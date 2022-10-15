
import './App.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faWhatsapp,faFacebook,faInstagram,faTwitter,faYoutube,faLinkedin} from '@fortawesome/free-brands-svg-icons'
import Nevbar from './component/Nevbar';
// import data from "./data.json";
// import img7 from "./images/image 275.jpg"
import data from "./data1.json"
import img6 from "./images/why-standing-let-us-dance-good-looking-feminine-trendy-woman-with-dark-skin-curly-hair-stylish-yellow-overalls-moving-rhythm-music-holding-smartphone-listening-songs-earphones_1-removebg-preview 1.jpg"
import { useEffect, useState } from 'react';

function App() {
// const [data,setData]=useState([])
// async function fechdata(){
//   const data1=await fetch("http://localhost:3500/data")
//   const resp=await data1.json()
//   setData(resp)
// }
//   useEffect(
//     ()=>{
//         fechdata()
//     },[]
//   )
  console.log(data)
  console.log(data[0])
  
  return (
    <div className="App">
      <Nevbar/>

      <section className='section-first'>
        <div className="first-home-half-container">
                      <div className="home-content-left">
                        {data && data.map((item,i)=>{
                          return(
                            <div className="all-home-side-content">

                            <p className='home-para1'>{item.heroSection.title}</p>
                            <h1 className='home-headding1'>{item.heroSection.heading}</h1>
                            <p className='home-para2'>{item.heroSection.description}</p>
                       <div className="home-servis-box">
                       {window.innerWidth<900?<p className='home-ervice-para'> Select your location</p>:<p className='home-ervice-para'> Where do you need a service?</p>}
                        <select>
                          <option value="" disabled selected>Select your city</option>
                          {
                            item.heroSection.form.map((e)=>{
                              return(
                                <option value={e.dropdownItem}>{e.dropdownItem}</option>
                              )
                            })
                          }
                       
                        </select>
                       </div>
                       
                          </div>
                          )
                        })}
                       
                      </div>
        </div>
        <div className="first-hopme-secondHaf-container">
          <div className="sec-h-child">
            <img src={img6} alt="image 5"  />
          </div>
          <div className="sec-h-child">
            <h4 className='heding-sec'>Why People Choose Us</h4>
            <ul className='ul-in-child'>
              <li>Affordable Rates</li>
              <li>On Time Service</li>
              <li>Verified Professionals</li>
              <li>Excellent Service</li>
            </ul>
          </div>
        </div>

      </section>
   


      { data && data.map(
                    (e)=>{
                      return(
   <section className='second-section'>
    <div className="sec-child-sec">

                <div className="seco-section-content">
                <h4 className='heding--firstchild'>{e.banner4.title}</h4>
               
                        <p className='sec-section-para'>{e.banner4.description}</p>
                 
               
                </div>
                 
    </div>
    <div className="sec-child-sec">

<img src={e.banner4.imgs[0]} width="247px" height="152px" alt="" />
<img src={e.banner4.imgs[1]} width="247px" height="152px" alt="" />
<img src={e.banner4.imgs[2]} width="247px" height="152px" alt="" />
<img src={e.banner4.imgs[3]} width="247px" height="152px" alt="" />

    </div>
   </section>

)
}
)
}






   <footer className='footer'>
<div className="footer-rows">
  <div className="footer-box">
    <span>TOP LOCATIONS</span>
  </div>
  <div className="footer-box">
  Noida • Delhi • Gurgaon • Ghaziabad • Faridabad • Agra • Ahmedabad • Amritsar • Aurangabad • Bangalore • Bhopal • Bhubaneswar • Chandigarh • Chennai • Coimbatore • Dehradun • Greater Noida • Guwahati • Gwalior • Hyderabad • Indore • Jabalpur • Jaipur • Jamshedpur • Kanpur • Kochi • Kolkata • Kota • Lucknow • Ludhiana • Meerut • Mohali • Mumbai • Navi Mumbai • Mysore • Nagpur • Nashik • Patna • Panipat • Prayagraj • Pune • Raipur • Ranchi • Surat • Thiruvananthapuram • Vadodara • Varanasi • Vijayawada • Visakhapatnam
  </div>
</div>
<div className="footer-rows">
  <div className="footer-box">
    <span>Contact Us</span>
  </div>
  <div className="footer-box">
    <div className="footer-contact-no">Phone : +91 782 762 1417</div>
    <div className="footer-contact-no">Email : support@roservicecenter.live</div>
  </div>
</div>
<div className="footer-rows">
  <div className="footer-box">
    <div className="foot-thi-contect">About us</div>
    <div className="foot-thi-contect">Blog</div>
    <div className="foot-thi-contect">Naare me</div>
    <div className="foot-thi-contect">Terms & Conditions</div>
    <div className="foot-thi-contect">Privacy Policy</div>
    <div className="foot-thi-contect">Contact Us</div>
  </div>
 
</div>
<div className="footer-rows">
  <div className="footer-box">
<FontAwesomeIcon icon={faWhatsapp} className="footer-icon"/>
<FontAwesomeIcon icon={faFacebook} className="footer-icon"/>
<FontAwesomeIcon icon={faInstagram} className="footer-icon"/>
<FontAwesomeIcon icon={faTwitter} className="footer-icon"/>
<FontAwesomeIcon icon={faYoutube} className="footer-icon"/>
<FontAwesomeIcon icon={faLinkedin} className="footer-icon"/>
  </div>
  <div className="footer-box">© 2021 OyeBusy Technologies Pvt. Ltd.</div>
</div>
   </footer>
    </div>
  );
}

export default App;
