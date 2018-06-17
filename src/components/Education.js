import React,{ Component } from 'react';
import EDU from './data/educate';
import Select from 'react-select';
class Education extends Component{
    constructor(props){
        super(props);
        this.state={
            schoolName:'',
            lastLevel:'',
            yearStart:'',
            yearEnd:'',
            country:'',
        }
        this.handleChange2 = this.handleChange2.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    handleChange2 = (lastLevel) => {
        this.setState({ lastLevel });
            // selectedOption can be null when the `x` (close) button is clicked
    }

    onChange = (fieldName) => {
        return (e) => {
            this.setState({
                [fieldName]: e.target.value
                
            })
            console.log([fieldName]);
        }
    }

    render(){
        var eduoption = EDU['Edu']
        const { lastLevel } = this.state;
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
                                <input className="form-control" type="input" onChange={this.onChange("schoolName")} />
                            </div>
                        </div>
                        <div className="row" style={{paddingBottom:7}}>
                            <div className="col-md-2 col-md-offset-2">
                                <label style={{paddingTop:8}}>การศึกษาสูงสุด</label>
                            </div>
                            <div className="col-md-4">
                                <Select
                                    options = {eduoption}
                                    value={lastLevel}
                                    onChange={this.onChange}
                                />
                            </div>
                        </div>
                        <div className="row" style={{paddingBottom:7}}>
                            <div className="col-md-2 col-md-offset-2">
                                <label style={{paddingTop:8}}>ปีเริ่มการศึกษา</label>
                            </div>
                            <div className="col-md-4">
                                <input type="input" className="form-control" onChange={this.onChange("yearStart")}/>
                            </div>
                        </div>
                        <div className="row" style={{paddingBottom:7}}>
                            <div className="col-md-2 col-md-offset-2">
                                <label style={{paddingTop:8}}>ปีที่คาดว่าจะจบ</label>
                            </div>
                            <div className="col-md-4">
                                <input type="input" className="form-control" onChange={this.onChange("yearEnd")}/>
                            </div>
                        </div>
                        <div className="row" style={{paddingBottom:7}}>
                            <div className="col-md-2 col-md-offset-2">
                                <label style={{paddingTop:8}}>ประเทศ</label>
                            </div>
                            <div className="col-md-4">
                                <input type="input" className="form-control" onChange={this.onChange("country")}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Education;