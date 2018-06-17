import React,{ Component } from 'react';
import EDU from './data/educate';
import Select from 'react-select';
class Education extends Component{
    render(){
        const eduoption = EDU['Edu']
        return(
            <div className="col-md-8 col-md-offset-2">
                <div className="panel panel-default">
                    <div className="panel-heading">ข้อมูลการศึกษา</div>
                    <div className="panel-body">
                        <div className="row" style={{paddingBottom:7}}>
                            <div className="col-md-2 col-md-offset-2">
                                <label style={{paddingTop:8}}>โรงเรียน</label>
                            </div>
                            <div className="col-md-4">
                                <input className="form-control" type="input" />
                            </div>
                        </div>
                        <div className="row" style={{paddingBottom:7}}>
                            <div className="col-md-2 col-md-offset-2">
                                <label style={{paddingTop:8}}>การศึกษาสูงสุด</label>
                            </div>
                            <div className="col-md-4">
                                <Select
                                    options = {eduoption}
                                />
                            </div>
                        </div>
                        <div className="row" style={{paddingBottom:7}}>
                            <div className="col-md-2 col-md-offset-2">
                                <label style={{paddingTop:8}}>ปีเริ่มการศึกษา</label>
                            </div>
                            <div className="col-md-4">
                                <input type="input" className="form-control" />
                            </div>
                        </div>
                        <div className="row" style={{paddingBottom:7}}>
                            <div className="col-md-2 col-md-offset-2">
                                <label style={{paddingTop:8}}>ปีที่คาดว่าจะจบ</label>
                            </div>
                            <div className="col-md-4">
                                <input type="input" className="form-control"/>
                            </div>
                        </div>
                        <div className="row" style={{paddingBottom:7}}>
                            <div className="col-md-2 col-md-offset-2">
                                <label style={{paddingTop:8}}>ประเทศ</label>
                            </div>
                            <div className="col-md-4">
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