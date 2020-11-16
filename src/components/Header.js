import React from 'react';
import "../styles/Header.css";

function Header() {
  return (
    <div className="header">
        
    <div className="container-fluid">
    <div className="row background">
        <div className="col-sm-12">
            
            <h2 className="employeeBack">
            Employee Directory 
            <p className="filterFont">
                Click on the name to filter A-Z or Z-A!!!
            </p>
            </h2>
        </div>
    </div>
</div>
  
<div className="container-fluid secBackground">
    <div className="row">
        <div className="col-sm-12">
            <br/>
        </div>
    </div>
</div>

  </div>
  );
}
export default Header;
