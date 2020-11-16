import React from "react";
import "../styles/datatable.css";

function DataTable() {
    return ( 
    <div class="dataTable">
    <div class="container-fluid" >
        <div class="row" style="border-style: solid; border-width: 3px;" >
            <div class="col colffset-1">
              <h4 class="tableInfo" style="text-align: center;">Image</h4>
            </div>
            <div class="col">
              <h4 class="tableInfo" style="text-align: center;">Name</h4>
            </div>
            <div class="col">
              <h4 class="tableInfo" style="text-align: center;">Phone</h4>
          </div>

          <div class="col">

              <h4 class="tableInfo" style="text-align: center;">Email</h4>
          </div>
          <div class="col">
              <h4 class="tableInfo" style="text-align: center;">
                  D.O.B.
              </h4>
          </div>
        </div>
      </div>
      <div class="container-fluid dataContainer">  
      <div class="row dataRow" style="border-style: ridge; border-width: 1px;">
          <div class="col colffset-1">
              <img src="https://dummyimage.com/1280X720/000/fff700.png" style="max-width: 100%;"></img>
          </div>
          <div class="col">
            <h4 class="tableInfo" style="text-align: center; max-width: 100%;">Johnny Bravo</h4>
          </div>
          <div class="col">
            <h4 class="tableInfo" style="text-align: center; max-width: 100%;">(562) 250-8932</h4>
        </div>

        <div class="col">

            <h4 class="tableInfo" style="text-align: center; max-width: 100%;">pandacakes@yahoo.com</h4>
        </div>
        <div class="col">
            <h4 class="tableInfo" style="text-align: center; max-width: 100%;">
                D.O.B.
            </h4>
        </div>
      </div>
    </div>
  </div>)
};

export default DataTable;