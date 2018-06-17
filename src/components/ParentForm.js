import React,{Component} from 'react';
import ChildForm from './ChildForm'
class ParentForm extends Component{

    constructor(props){
        super(props);
        this.state={
            firstname:'',
            lastname:'',
            gender:'',
            jobType:'',
            photo:'',
            telephoe:'',
            nationality:'',
            race:'',
            camps:'',
            followers:''
        }
    }

    onChange = (fieldName) => {
        return (e) => {
            this.state = {
                [fieldName]: e.target.value
                
            }
            console.log([fieldName]);
        }
    }

    render(){
        return(
            <div>
            <div className="col-md-8 col-md-offset-2">
            <div className="container-fluid" style={{textAlign:"left"}}>
                <form className="panel panel-default">
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
                                <input className="form-control" onChange={this.onChange("firstname")}/>
                            </div>
                        </div>
                        <div className="row" style={{paddingBottom:7}}>
                            <div className="col-md-2 col-md-offset-2">
                                <label style={{paddingTop:5}}>สกุล</label>
                            </div>
                            <div className="col-md-4">
                                <input className="form-control" onChange={this.onChange("lastname")}/>
                            </div>
                        </div>
                        <div className="row" style={{paddingBottom:7}}>
                            <div className="col-md-2 col-md-offset-2">
                                <label style={{paddingTop:5}}>อาชีพ</label>
                            </div>
                            <div className="col-md-4">
                                <input className="form-control" onChange={this.onChange("jobtype")}/>
                            </div>
                        </div>
                        <div className="row" style={{paddingBottom:7}}>
                            <div className="col-md-2 col-md-offset-2">
                                <label style={{paddingTop:5}}>รูป</label>
                            </div>
                            <div className="col-md-4">
                                <input type="file"className="form-control" onChange={this.onChange("photo")}/>
                            </div>
                        </div>
                        <div className="row" style={{paddingBottom:7}}>
                            <div className="col-md-2 col-md-offset-2">
                                <label style={{paddingTop:5}}>เบอร์โทรศัพท์</label>
                            </div>
                            <div className="col-md-4">
                                <input className="form-control" onChange={this.onChange("telephone")}/>
                            </div>
                        </div>
                        <div className="row" style={{paddingBottom:7}}>
                            <div className="col-md-2 col-md-offset-2">
                                <label style={{paddingTop:5}}>สัญชาติ</label>
                            </div>
                            <div className="col-md-4">
                                <input className="form-control" onChange={this.onChange("nationality")}/>
                            </div>
                        </div>
                        <div className="row" style={{paddingBottom:7}}>
                            <div className="col-md-2 col-md-offset-2">
                                <label style={{paddingTop:5}}>เชื่อชาติ </label>
                            </div>
                            <div className="col-md-4">
                                <input className="form-control" onChange={this.onChange("race")}/>
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
                </form>
            </div>
            </div>
                <ChildForm/>
            </div>
        );
    }
}

export default ParentForm;