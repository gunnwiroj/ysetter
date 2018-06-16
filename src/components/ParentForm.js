import React,{Component} from 'react';
import ChildForm from './ChildForm'
class ParentForm extends Component{
    render(){
        return(
            <div>
            <div className="col-md-8 col-md-offset-2">
            <div className="container-fluid" style={{textAlign:"left"}}>
                <div className="panel panel-default">
                    <div className="panel-heading">ข้อมูลผู้ปกครอง</div>
                    <div className="panel-body">
                        <div className="row" style={{paddingBottom:7}}>
                            <div className="col-md-2 col-md-offset-2">
                                <label>เพศ</label>
                            </div>
                            <div className="col-md-4">
                                <select className="form-control">
                                    <option>ชาย</option>
                                    <option>หญิง</option>
                                </select>
                            </div>
                        </div>

                        <div className="row" style={{paddingBottom:7}}>
                            <div className="col-md-2 col-md-offset-2">
                                <label>ชื่อ</label>
                            </div>
                            <div className="col-md-4">
                                <input className="form-control" />
                            </div>
                        </div>
                        <div className="row" style={{paddingBottom:7}}>
                            <div className="col-md-2 col-md-offset-2">
                                <label>สกุล</label>
                            </div>
                            <div className="col-md-4">
                                <input className="form-control" />
                            </div>
                        </div>
                        <div className="row" style={{paddingBottom:7}}>
                            <div className="col-md-2 col-md-offset-2">
                                <label>อาชีพ</label>
                            </div>
                            <div className="col-md-4">
                                <input className="form-control" />
                            </div>
                        </div>
                        <div className="row" style={{paddingBottom:7}}>
                            <div className="col-md-2 col-md-offset-2">
                                <label>รูป</label>
                            </div>
                            <div className="col-md-4">
                                <input type="file"className="form-control" />
                            </div>
                        </div>
                        <div className="row" style={{paddingBottom:7}}>
                            <div className="col-md-2 col-md-offset-2">
                                <label>เบอร์โทรศัพท์</label>
                            </div>
                            <div className="col-md-4">
                                <input className="form-control" />
                            </div>
                        </div>
                        <div className="row" style={{paddingBottom:7}}>
                            <div className="col-md-2 col-md-offset-2">
                                <label>สัญชาติ</label>
                            </div>
                            <div className="col-md-4">
                                <input className="form-control" />
                            </div>
                        </div>
                        <div className="row" style={{paddingBottom:7}}>
                            <div className="col-md-2 col-md-offset-2">
                                <label>เชื่อชาติ </label>
                            </div>
                            <div className="col-md-4">
                                <input className="form-control" />
                            </div>
                        </div>
                        <div className="row" style={{paddingBottom:7}}>
                            <div className="col-md-2 col-md-offset-2">
                                <label>แคมป์</label>
                            </div>
                            <div className="col-md-4">
                                <input className="form-control" />
                            </div>
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