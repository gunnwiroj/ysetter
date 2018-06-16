import React,{Component} from'react';
import Select from 'react-select';
const STATES = require('./data/province');
class Camp extends Component{
    render(){
        var poption=STATES['PV'];
        return(
            <div>
                <div className="container-fluid" style={{textAlign:"left"}}>
                    <div className="col-md-8 col-md-offset-2">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            ที่พักคนงาน
                        </div>
                        <div className="panel-body">
                            <div className="row" style={{paddingBottom:7}}>
                                <div className="col-md-2 col-md-offset-2">
                                    <label>ถนน</label>
                                </div>
                                <div className="col-md-4">
                                    <input className="form-control" />
                                </div>
                            </div>
                            <div className="row" style={{paddingBottom:7}}>
                                <div className="col-md-2 col-md-offset-2">
                                    <label>ซอย</label>
                                </div>
                                <div className="col-md-4">
                                    <input className="form-control" />
                                </div>
                            </div>
                            <div className="row" style={{paddingBottom:7}}>
                                <div className="col-md-2 col-md-offset-2">
                                    <label>เขต</label>
                                </div>
                                <div className="col-md-4">
                                    <input className="form-control" />
                                </div>
                            </div>
                            <div className="row" style={{paddingBottom:7}}>
                                <div className="col-md-2 col-md-offset-2">
                                    <label>แขวง</label>
                                </div>
                                <div className="col-md-4">
                                    <input className="form-control" />
                                </div>
                            </div>
                            <div className="row" style={{paddingBottom:7}}>
                                <div className="col-md-2 col-md-offset-2">
                                    <label>จังหวัด</label>
                                </div>
                                <div className="col-md-4">
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
            </div>
        );
    }
}

export default Camp;