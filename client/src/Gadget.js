import React, { Component } from "react";


class Gadget extends Component {
    render () {
        return (
            <div className = "gadget">
               <div className = "gadgetUl">
                   <p className = "whiteText bolder">Zoom</p>
                   <p className = "gadgetHeader">OPEN</p>
                   <p className = "whiteText">1.2193</p>
                   <p className = "gadgetHeader">HIGH</p>
                   <p className = "lightBlue">1.2345</p>
                   <p className = "gadgetHeader">CURRENT</p>
                   <p className = "yellowText">1.2346</p>
                   <p className = "gadgetHeader">low</p>
                   <p className = "whiteText">1.0192</p>
               </div> 
            </div>
        )
    }
}

export default Gadget; 