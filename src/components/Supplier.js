import React, { Component } from 'react';
import Select from 'react-select';
import STATES from './data/province'
class Supplier extends Component {
    constructor(props){
        super(props);
        this.state={
            firstname:'',
            lastname:'',
            province:'',
            telephone:'',
            email:'',
        }
    }

    onChange = (fieldName) => {
        return (e) => {
            this.setState({
                [fieldName]: e.target.value
                
            })
            console.log([fieldName]);
        }
    }

    render() {
        const poption = STATES['PV'];
        return (
            <div className="container-fluid" style={{ textAlign: "left" }}>
                <div className="col-md-8 col-md-offset-2">
                <div className="panel panel-default">
                    <div className="panel-heading">ข้อมูลผู้ประสานงาน/ผู้รับเหมา</div>
                    <div className="panel-body">
                        <div className="row" style={{paddingBottom:7}}>
                            <div className="col-md-2 col-md-offset-2">
                                <label style={{paddingTop:5}}>โครงการที่ดูแล</label>
                            </div>
                            <div className="col-md-4">
                                <input className="form-control"/>
                            </div>
                        </div>
                        <div className="row" style={{paddingBottom:7}}>
                            <div className="col-md-2 col-md-offset-2">
                                <label style={{paddingTop:5}}>ช่ือ</label>
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
                                <label style={{paddingTop:5}}>เบอร์ติดต่อ</label>
                            </div>
                            <div className="col-md-4">
                                <input className="form-control" onChange={this.onChange("telephone")}/>
                            </div>
                        </div>
                        <div className="row" style={{paddingBottom:7}}>
                            <div className="col-md-2 col-md-offset-2">
                                <label style={{paddingTop:5}}>จังหวัด</label>
                            </div>
                            <div className="col-md-4">
                                <Select
                                    searchable={true}
                                    option={poption}
                                />
                            </div>
                        </div>
                        <div className="row" style={{paddingBottom:7}}>
                            <div className="col-md-2 col-md-offset-2">
                                <label style={{paddingTop:5}}>E-mail</label>
                            </div>
                            <div className="col-md-4">
                                <input className="form-control" onChange={this.onChange("email")}/>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Supplier;