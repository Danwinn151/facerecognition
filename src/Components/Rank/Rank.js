import React from "react";

const Rank = ({name, entries}) => {
    return (
        <div className="tc shadow-5">
           <div className="white f3">
           {name} <p>your current entry is </p>
           </div>
           <div className="white f1">
             {entries}
           </div>
        </div>
    )
}
export default Rank