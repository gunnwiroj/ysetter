import React, { Component } from 'react';

class Vaccine extends Component{
    render(){
        return(
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        ประวัติวัคซีน
                    </div>
                    <div className="panel-body">
                    <div className="row">
                            <div className="col-md-3">
                                <label>สถานะการรับวัคซีนช่วงอายุ 0-4 ปี</label>
                            </div>
                            <div className="col-md-6">
                                <input className="form-control" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Vaccine;