import React,{Component} from'react';
import Select from 'react-select';
const STATES = require('./data/province');
class Camp extends Component{
    render(){
        var poption=STATES['PV'];
        return(
            <div>
                <div className="container-fluid" style={{textAlign:"left"}}>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            ที่พักคนงาน
                        </div>
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-md-3">
                                    <label>ถนน</label>
                                </div>
                                <div className="col-md-6">
                                    <input className="form-control" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <label>ซอย</label>
                                </div>
                                <div className="col-md-6">
                                    <input className="form-control" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <label>เขต</label>
                                </div>
                                <div className="col-md-6">
                                    <input className="form-control" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <label>แขวง</label>
                                </div>
                                <div className="col-md-6">
                                    <input className="form-control" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <label>จังหวัด</label>
                                </div>
                                <div className="col-md-6">
                                    <Select
                                        options={poption}
                                        searchable={true}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Camp;