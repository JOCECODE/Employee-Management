import React from 'react';
import "../styles/input.css";

function Input( { inputChange} ){
    return (<div>
<div className="container-fluid inputBackground">
          <div className="row padding">
              <div className="col-sm-3"></div>
            <div className="col-sm-6 inputWidth">
                <form className="form">
                    <input
                      className="form-control"
                      type="search"
                      placeholder="type name of Employee"
                      aria-label="Search"
                      onChange={e => inputChange(e)}
                    />
                  </form>
              </div>
              <div className="col-sm-3"></div>
          </div>
      </div>
    </div>);
}

export default Input;