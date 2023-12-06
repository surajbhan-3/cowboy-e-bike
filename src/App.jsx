import "./App.css";
import logo from "./assets/logo.svg"
import playImage from "./assets/play.svg"
import cycle from "./assets/classic_black.webp"
import guardian from "./assets/the-guardian-logo.svg"
import tnw from "./assets/tnw-logo.svg"
import engadget from "./assets/Engadget-Logo.svg"
import star from "./assets/star.svg"
function App() {
  return (
    <div className="App">
      <div className="play-div">
       <img src={playImage} alt="" />

      </div>
      <div className="navbar">
         <div className="navbar-wrapper">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="middle-sign">
                <div className="inn-div">
                  <div className="div-1inn"></div>
                  <div className="div-2inn"></div>
                </div>
            </div>
            <div className="item-list">
               <div className="bikes">Bikes</div>
               <div className="about-us">About us</div>
               <div className="sands">Services & Support</div>
            </div>
         </div>
      </div>
      <div className="main-div">
        <div className="left-div">
          <div className="top-div">
             <div className="heading">
             <h1 id="take">Take the <br />
              Streets. <span id="cowboy-text">Cowboy 3</span>
             </h1> 
             </div>
             <div className="content">
               <p>Shift Your ride, not gears. <span id="ease">Ease your path towards the fastest  way to move in the city. Free your mind  as the bike adapts intiutively to power the speed you need</span>
               </p> 

             </div>

             <div className="btns-div">
              <button className="btn-1">Book a test ride</button>
              <button className="btn-2">Configure yours</button>
             </div>
              

          </div>
          <div className="bottom-div">

            <div className="image-div">
              <img src={cycle} alt="" />
               
            </div>
            <div className="image-text">

              <div className="i-text">
                <img src={guardian} alt="" />
              </div>
              <div className="i-text">
                <img src={tnw} alt="" />
              </div>
              <div className="i-text">
                <img src={engadget} alt="" />
              </div>

            </div>

          </div>
        </div>
        <div className="right-div">
          <img src={cycle} alt="" />
          <div className="review-div">
                 <div className="inner-review">
                   <div className="symbol">
                     <div>
                     <img src={star}  alt="" />
                     </div>
                     <div>
                     <img src={star}  alt="" />
                     </div>
                     <div>
                     <img src={star}  alt="" />
                     </div>
                     <div>
                     <img src={star}  alt="" />
                     </div>
                     <div>
                     <img src={star}  alt="" />
                     </div>
                      
                   </div>
                   <p>1000+ reviews</p>
                 </div>
             
          </div>
          <div className="stat-div">
            <div className="stat-1">
              <h2>25 km/h</h2>
              <p>Assist Speed</p>
            </div>
            <div className="stat-1">
              <h2>70 km</h2>
              <p>Bettary Range</p>
            </div>
            <div className="stat-1">
              <h2>3.5h</h2>
              <p>Charging Time</p>
            </div>
            <div className="stat-1">
              <h2>16.9 Kg</h2>
              <p>Weight</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
