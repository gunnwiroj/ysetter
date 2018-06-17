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
                                <label style={{paddingTop:5}}>เพศ</label>
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
                                <label style={{paddingTop:5}}>ชื่อ</label>
                            </div>
                            <div className="col-md-4">
                                <input className="form-control" />
                            </div>
                        </div>
                        <div className="row" style={{paddingBottom:7}}>
                            <div className="col-md-2 col-md-offset-2">
                                <label style={{paddingTop:5}}>สกุล</label>
                            </div>
                            <div className="col-md-4">
                                <input className="form-control" />
                            </div>
                        </div>
                        <div className="row" style={{paddingBottom:7}}>
                            <div className="col-md-2 col-md-offset-2">
                                <label style={{paddingTop:5}}>อาชีพ</label>
                            </div>
                            <div className="col-md-4">
                                <input className="form-control" />
                            </div>
                        </div>
                        <div className="row" style={{paddingBottom:7}}>
                            <div className="col-md-2 col-md-offset-2">
                                <label style={{paddingTop:5}}>รูป</label>
                            </div>
                            <div className="col-md-4">
                                <input type="file"className="form-control" />
                            </div>
                        </div>
                        <div className="row" style={{paddingBottom:7}}>
                            <div className="col-md-2 col-md-offset-2">
                                <label style={{paddingTop:5}}>เบอร์โทรศัพท์</label>
                            </div>
                            <div className="col-md-4">
                                <input className="form-control" />
                            </div>
                        </div>
                        <div className="row" style={{paddingBottom:7}}>
                            <div className="col-md-2 col-md-offset-2">
                                <label style={{paddingTop:5}}>สัญชาติ</label>
                            </div>
                            <div className="col-md-4">
                                <input className="form-control" />
                            </div>
                        </div>
                        <div className="row" style={{paddingBottom:7}}>
                            <div className="col-md-2 col-md-offset-2">
                                <label style={{paddingTop:5}}>เชื่อชาติ </label>
                            </div>
                            <div className="col-md-4">
                                <input className="form-control" />
                            </div>
                        </div>
                        <div className="row" style={{paddingBottom:7}}>
                            <div className="col-md-2 col-md-offset-2">
                                <label style={{paddingTop:5}}>แคมป์</label>
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