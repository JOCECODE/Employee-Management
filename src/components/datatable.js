import React from "react";
import "../styles/dataTable.css";

function DataTable() {
    return ( 
    <>
    {/* DataTable headers for the columns */}
    <div className="container-fluid" >
        <div className="row borderRow">
            <div className="col colffset-1">
              <h4 className="tableInfo">Image</h4>
            </div>
            <div className="col">
              <h4 className="tableInfo">Name</h4>
            </div>
            <div className="col">
              <h4 className="tableInfo">Phone</h4>
          </div>

          <div className="col">

              <h4 className="tableInfo">Email</h4>
          </div>
          <div className="col">
              <h4 className="tableInfo">
                  D.O.B.
              </h4>
          </div>
        </div>
      </div>
    
     {/* DataTable to be populated from the api */}
      <div className="container-fluid dataContainer">  
      <div className="row dataRow">
          <div className="col colffset-1">
              <img className="images" alt="Employee Profile Pic" src="https://dummyimage.com/1280X720/000/fff700.png"></img>
          </div>
          <div className="col">
            <h4 className="tableInfo">Johnny Bravo</h4>
          </div>
          <div className="col">
            <h4 className="tableInfo">(562) 250-8932</h4>
        </div>

        <div className="col">

            <h4 className="tableInfo">pandacakes@yahoo.com</h4>
        </div>
        <div className="col">
            <h4 className="tableInfo">
                11/30/2020
            </h4>
        </div>
      </div>
    </div>
  </>
  )
};

export default DataTable;