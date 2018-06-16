import React, { Component } from 'react';
import Education from './Education';
import Vaccine from './Vaccine';
class ChildForm extends Component {
    constructor(props){
        super(props);
        this.state={
            edustate:false,
        }
    }
handledate(e){
    let selectdate = (new Date(e.target.value)).toISOString();
    let today = (new Date()).toISOString();
    console.log(today,selectdate);
}
    render() {
        return (
            <div className="container-fluid" style={{ textAlign: "Left" }}>
                <h3>Form</h3>
                <form>
                    <div className="panel panel-default">
                        <div className="panel-heading">ข้อมูลของเด็ก</div>
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-md-3">
                                    <label>เพศ</label>
                                </div>
                                <div className="col-md-6">
                                    <select className="form-control">
                                        <option>ชาย</option>
                                        <option>หญิง</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <label >ชื่อ</label>
                                </div>
                                <div className="col-md-6">
                                    <input className="form-control" required />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <label>สกุล</label>
                                </div>
                                <div className="col-md-6">
                                    <input className="form-control" required />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <label>วันเกิด</label>
                                </div>
                                <div className="col-md-6">
                                    <input type="date" className="form-control" onChange={(e) => this.handledate(e)}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <label >สัญชาติ</label>
                                </div>
                                <div className="col-md-6">
                                    <input className="form-control" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <label >เชื้อชาติ</label>
                                </div>
                                <div className="col-md-6">
                                    <input className="form-control" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <label>แคมป์ที่อาศัย</label>
                                </div>
                                <div className="col-md-6">
                                    <input className="form-control" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <label>สถานะการติดตาม</label>
                                </div>
                                <div className="col-md-6">
                                    <input className="form-control" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <label>รูป</label>
                                </div>
                                <div className="col-md-6">
                                    <input type="file" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <label>อยู่ในโครงการ Good Space</label>
                                </div>
                                <div className="col-md-6">
                                    <input className="form-control" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Education/>
                    <Vaccine/>
                </form>
            </div>
        );
    }
}

export default ChildForm;