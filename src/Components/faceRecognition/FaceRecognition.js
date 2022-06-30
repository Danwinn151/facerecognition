import React from "react";

const FaceRecognition = ({ ImageUrl }) => {
    return (
        <div className="center ma">
          <div className="mt2 absolute">
        <img alt= "elon" src={ImageUrl} width = '400px' height={'auto'}/>
          </div>
        </div>
    )
}

export default FaceRecognition