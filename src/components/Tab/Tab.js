import React from 'react';
import './Tab.css';

function Tab({text, onClick, selected}){
    return(
        <div className={`tabContainer ${selected ? 'active' : ''}`} onClick={onClick}>
        <p  className="tab__text">
            {text}
        </p>
        </div>
    );
}

Tab.defaultProps = {
    selected: false
}
export default Tab;