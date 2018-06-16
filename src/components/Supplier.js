import React, { Component } from 'react';
import Select from 'react-select';
import STATES from './data/province'
class Supplier extends Component {


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
                                <label>โครงการที่ดูแล</label>
                            </div>
                            <div className="col-md-4">
                                <input className="form-control" />
                            </div>
                        </div>
                        <div className="row" style={{paddingBottom:7}}>
                            <div className="col-md-2 col-md-offset-2">
                                <label>ช่ือ</label>
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
                                <label>เบอร์ติดต่อ</label>
                            </div>
                            <div className="col-md-4">
                                <input className="form-control" />
                            </div>
                        </div>
                        <div className="row" style={{paddingBottom:7}}>
                            <div className="col-md-2 col-md-offset-2">
                                <label>จังหวัด</label>
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
                                <label>E-mail</label>
                            </div>
                            <div className="col-md-4">
                                <input className="form-control" />
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