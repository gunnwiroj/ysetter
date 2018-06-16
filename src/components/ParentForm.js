import React,{Component} from 'react';
import ChildForm from './ChildForm'
class ParentForm extends Component{
    render(){
        return(
            <div>
            <div className="container-fluid" style={{textAlign:"left"}}>
                <div className="panel panel-default">
                    <div className="panel-heading">ข้อมูลผู้ปกครอง</div>
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
                                <label>ชื่อ</label>
                            </div>
                            <div className="col-md-6">
                                <input className="form-control" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <label>สกุล</label>
                            </div>
                            <div className="col-md-6">
                                <input className="form-control" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <label>อาชีพ</label>
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
                                <input type="file"className="form-control" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <label>เบอร์โทรศัพท์</label>
                            </div>
                            <div className="col-md-6">
                                <input className="form-control" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <label>สัญชาติ</label>
                            </div>
                            <div className="col-md-6">
                                <input className="form-control" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <label>เชื่อชาติ </label>
                            </div>
                            <div className="col-md-6">
                                <input className="form-control" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <label>แคมป์</label>
                            </div>
                            <div className="col-md-6">
                                <input className="form-control" />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <ChildForm/>
            </div>
        );
    }
}

export default ParentForm;