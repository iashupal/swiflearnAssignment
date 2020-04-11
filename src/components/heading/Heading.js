import React from 'react';
import './Heading.css';
function Heading({heading, number, width}){
    return(
        <div className="heading__container" width={width}>
            <h1>{heading}</h1>
            <p>{number}</p>
        </div>
    );
}
export default Heading;