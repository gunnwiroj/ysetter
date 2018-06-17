import React,{Component} from 'react';
import Select from 'react-select';
import Axios from 'axios';
const STATES = require('./data/province');
class Project extends Component{
    
    constructor(props){
        super(props);
        this.state ={
            nameTH:'',
            nameEN:'',
            province:'',
            timestart:'',
            timeend:'',
        }
        this.handleChange2 = this.handleChange2.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange = (fieldName) => {
        return (e) => {
            this.state = {
                [fieldName]: e.target.value
                
            }
            console.log([fieldName]);
        }
    }

    handleChange2 = (province) => {
        this.setState({ province });
            // selectedOption can be null when the `x` (close) button is clicked
            if (province) {
            console.log(`Selected: ${province.label}`);
            }
      }
    
    onSubmit = async (e) => {
    e.preventDefault();
    //Body
    try {
        let response = await Axios.post('', {

        }, {
            headers: {
                ContentType: "application/json"
            }
        });
        response = response.data;


    } catch(e) {
        console.log(e);
    }
    return false;
    }

    render(){
        var poption=STATES['PV'];
        const { province } = this.state;
        return(
            <div>
                <form className="panel panel-default" onSubmit={this.onSubmit} style={{textAlign:"Left"}}>
                    <div className="panel-heading">
                        โครงการ
                    </div>
                    <div className="panel-body">
                        <div className="row" style={{paddingBottom:7}}>
                            <div className="col-md-2 col-md-offset-2">
                                ชื่อโครงการ
                            </div>
                            <div className="col-md-4">
                                <input className="form-control" onChange={this.onChange("nameTH")}/>
                            </div>
                        </div>
                        <div className="row" style={{paddingBottom:7}}>
                            <div className="col-md-2 col-md-offset-2">
                                Project Name
                            </div>
                            <div className="col-md-4">
                                <input className="form-control" onChange={this.onChange("nameEN")}/>
                            </div>
                        </div>
                        <div className="row" style={{paddingBottom:7}}>
                            <div className="col-md-2 col-md-offset-2">
                                จังหวัด
                            </div>
                            <div className="col-md-4">
                                <Select
                                    options={poption}
                                    searchable={true}
                                    value={province}
                                    onChange={this.handleChange2}
                                />
                            </div>
                        </div>
                        <div className="row" style={{paddingBottom:7}}>
                            <div className="col-md-2 col-md-offset-2">
                                วันเริ่มโครงการ
                            </div>
                            <div className="col-md-4">
                                <input className="form-control" type="date" onChange={this.onChange("startdate")}/>
                            </div>
                        </div>
                        <div className="row" style={{paddingBottom:7}}>
                            <div className="col-md-2 col-md-offset-2">
                                วันสิ้นสุด
                            </div>
                            <div className="col-md-4">
                                <input className="form-control" type="date"onChange={this.onChange("enddate")}/>
                            </div>
                        </div>
                        <div className="col-xs-6" style={{textAlign:"right"}}>
                                <button className="btn btn-default" type="submit">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Project;