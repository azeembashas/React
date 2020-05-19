import React, { Component } from 'react'

 class BapInformation extends Component {
    render() {
        return (
             <div className="container mt-2">
              <div className="row justify-content-center">
                <div className="col-md-6">
                       <br/>
                    <form className="form-horizontal"> 
                    <p className="h1">BAP Information</p>
                    <div className="form-group row">
                        <input type="text" className="form-control" id="coOrdinates" placeholder="2019.1212"/>
                        <input type="text" className="form-control" id="user" placeholder="user1"/>
                        <input type="text" className="form-control" id="pointA" placeholder="1"/>
                        <input type="text" className="form-control" id="pointB" placeholder="1"/>
                        <input type="text" className="form-control" id="pointB" placeholder="plotdata"/>
                    </div>
                    <div className="form-group row">
                        <div className="col-xs-4 mr-3">
                        <button type="button" className="btn btn-outline-dark">Show Map</button>
                        </div>
                        <div className="col-xs-4 mr-3">
                        <button type="button" className="btn btn-outline-dark">Close Map</button>
                        </div>
                        <div className="col-xs-4 mr-3">
                        <button type="button" className="btn btn-outline-dark">Select Plots</button>
                        </div>
                    </div>
                    </form>
               </div>
               </div>
              </div>
        )
    }
}

export default BapInformation


