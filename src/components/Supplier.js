import React,{Component} from 'react';

class Supplier extends Component{
    
    
    render(){
        return(
            <div className="container-fluid" style={{textAlign:"left"}}>
                <div className="panel panel-default">
                    <div className="panel-heading">ข้อมูลผู้ประสานงาน/ผู้รับเหมา</div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-md-3">
                                <label>โครงการที่ดูแล</label>
                            </div>
                            <div className="col-md-6">
                                <input className="form-control" />
                            </div>
                        </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <label>ช่ือ</label>
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
                                    <label>เบอร์ติดต่อ</label>
                                </div>
                                <div className="col-md-6">
                                    <input className="form-control" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <label>E-mail</label>
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

export default Supplier;