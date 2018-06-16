import React,{ Component } from 'react';

class Education extends Component{
    render(){
        return(
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading">ข้อมูลการศึกษา</div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-md-3">
                                <label>โรงเรียน</label>
                            </div>
                            <div className="col-md-6">
                                <input className="form-control" type="input" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <label>การศึกษาสูงสุด</label>
                            </div>
                            <div className="col-md-6">
                                <input type="input" className="form-control" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <label>ปีเริ่มการศึกษา</label>
                            </div>
                            <div className="col-md-6">
                                <input type="input" className="form-control" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <label>ปีที่คาดว่าจะจบ</label>
                            </div>
                            <div className="col-md-6">
                                <input type="input" className="form-control"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <label>ประเทศ</label>
                            </div>
                            <div className="col-md-6">
                                <input type="input" className="form-control" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Education;