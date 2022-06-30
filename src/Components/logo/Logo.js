import React from "react";
import Tilt from 'react-tilt';
import './Logo.css'
import Love from './love.png'
 

const Logo = () => {
    return (
        <div className="ma4 ma0">
       <Tilt className="Tilt br2 shadow-2" options={{ max : 10 }} style={{ height: 200, width: 200 }} >
       <div className="Tilt-inner"><img style ={{paddingTop : "5px"}} alt="love" src= {Love}/>  </div>
       </Tilt>
        </div>
    )
}
export default Logo