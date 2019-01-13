import React, { Component } from "react";


class Gadget extends Component {
    render () {
        return (
            <div className = "gadget">
               <ul className = "gadgetUl">
                   <li className = "whiteText bolder">Zoom</li>
                   <li className = "gadgetHeader">OPEN</li>
                   <li className = "whiteText">1.2193</li>
                   <li className = "gadgetHeader">HIGH</li>
                   <li className = "lightBlue">1.2345</li>
                   <li className = "gadgetHeader">CURRENT</li>
                   <li className = "yellowText">1.2346</li>
                   <li className = "gadgetHeader">low</li>
                   <li className = "whiteText">1.0192</li>
               </ul> 
            </div>
        )
    }
}

export default Gadget; 