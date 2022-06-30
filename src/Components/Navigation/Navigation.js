import React from "react";

const Navigation = ({ onRouteChange, isSignedIn}) => {
    if(isSignedIn) {
        return (
        <nav style= {{display: "flex", justifyContent: "space-between"}}>
             <p href="#" className="f3 link din black  pa3 underline  pointer">Home</p>
           <p onClick={() => onRouteChange("signout")} className="f3 link din black  pa3 underline  pointer">Sign Out</p>
        </nav>
        )
    }
    else if (isSignedIn === false) {
        return(
        <nav style= {{display: "flex", justifyContent: "flex-end"}}>
        <p onClick={() => onRouteChange('signin')} className="f3 link din black  pa3 underline  pointer">Sign in</p>
        <p onClick={() => onRouteChange("register")} className="f3 link din black  pa3 underline  pointer">Register</p>
     </nav>
        )
    }
}
export default Navigation