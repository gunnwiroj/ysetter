import React, { Component } from 'react';
import Education from './Education';
import Vaccine from './Vaccine';
class ChildForm extends Component {
    constructor(props){
        super(props);
        this.state={
            edustate:false,
            join:false
        }
        this.toHandlejoin = this.toHandlejoin.bind(this);
        this.handledate = this.handledate.bind(this);
        this.onChange = this.onChange.bind(this);
    }
handledate(e){
    let selectdate = (new Date(e.target.value)).toISOString();
    let today = (new Date()).toISOString();
    console.log(today,selectdate);
}

toHandlejoin(){
    this.setState({
        join: !this.state.join
    })
}

onChange = (fieldName) => {
    return (e) => {
        this.state = {
            [fieldName]: e.target.value
            
        }
        console.log([fieldName]);
    }
}
    render() {
        return (
            <div className="container-fluid" style={{ textAlign: "Left" }}>
                <form>
                    <div className="col-md-8 col-md-offset-2">
                    <div className="panel panel-default">
                        <div className="panel-heading">ข้อมูลของเด็ก</div>
                        <div className="panel-body">
                            <div className="row" style={{paddingBottom:7}}>
                                <div className="col-md-2 col-md-offset-2">
                                    <label style={{paddingTop:8}}>เพศ</label>
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
                                    <label style={{paddingTop:8}}>ชื่อ</label>
                                </div>
                                <div className="col-md-4">
                                    <input className="form-control" required />
                                </div>
                            </div>
                            <div className="row" style={{paddingBottom:7}}>
                                <div className="col-md-2 col-md-offset-2">
                                    <label style={{paddingTop:8}}>นามสกุล</label>
                                </div>
                                <div className="col-md-4">
                                    <input className="form-control" required />
                                </div>
                            </div>
                            <div className="row" style={{paddingBottom:7}}>
                                <div className="col-md-2 col-md-offset-2">
                                    <label style={{paddingTop:8}}>วันเกิด</label>
                                </div>
                                <div className="col-md-4">
                                    <input type="date" className="form-control" onChange={(e) => this.handledate(e)}/>
                                </div>
                            </div>
                            <div className="row" style={{paddingBottom:7}}>
                                <div className="col-md-2 col-md-offset-2">
                                    <label >สัญชาติ</label>
                                </div>
                                <div className="col-md-4">
                                    <input className="form-control" />
                                </div>
                            </div>
                            <div className="row" style={{paddingBottom:7}}>
                                <div className="col-md-2 col-md-offset-2">
                                    <label >เชื้อชาติ</label>
                                </div>
                                <div className="col-md-4">
                                    <input className="form-control" />
                                </div>
                            </div>
                            <div className="row" style={{paddingBottom:7}}>
                                <div className="col-md-2 col-md-offset-2">
                                    <label style={{paddingTop:8}}>แคมป์ที่อาศัย</label>
                                </div>
                                <div className="col-md-4">
                                    
                                </div>
                            </div>
                            <div className="row" style={{paddingBottom:7}}>
                                <div className="col-md-2 col-md-offset-2">
                                    <label style={{paddingTop:8}}>สถานะการติดตาม</label>
                                </div>
                                <div className="col-md-4">
                                    <input className="form-control" />
                                </div>
                            </div>
                            <div className="row" style={{paddingBottom:7}}>
                                <div className="col-md-2 col-md-offset-2">
                                    <label style={{paddingTop:8}}>รูป</label>
                                </div>
                                <div className="col-md-4">
                                    <input type="file" />
                                </div>
                            </div>
                            <div className="row" style={{paddingBottom:7}}>
                                <div className="col-md-4 col-md-offset-2">
                                    <input type="checkbox" checked={this.state.join} onChange={()=>this.toHandlejoin()}/>
                                    <label style={{paddingLeft:15}}>อยู่ในโครงการ Good Space</label>
                                </div>
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
