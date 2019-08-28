import React from 'react';
import './spinner.css';

const Spinner = () => {
    return(
    <div className="lds-css">
      <div className="lds-flickr">
        <div className="ng-scope"></div>
        <div></div>
      </div>
    </div>
    )
}

export default Spinner;