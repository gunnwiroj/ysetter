import React,{Component} from'react';
import Select from 'react-select';
import Axios from 'axios';
const STATES = require('./data/province');

class Camp extends Component{
    constructor(props) {
        super(props);
        this.state = {
            hasGoodSpace:''
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange = (fieldName) => {
        return (e) => {
            this.state = {
                [fieldName]: e.target.value
                
            }
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
        const options = [
            {value:true , label:'ใช่'},
            {value:false, label:'ไม่'}
        ]
        return(
            <div>
                <div className="container-fluid" style={{textAlign:"left"}}>
                    <div className="col-md-8 col-md-offset-2">
                        <form className="panel panel-default" onSubmit={this.onSubmit}>
                            <div className="panel-heading">
                                ที่พักคนงาน
                            </div>
                            <div className="panel-body">
                                <div className="row" style={{paddingBottom:7}}>
                                    <div className="col-md-2 col-md-offset-2">
                                        <label style={{paddingTop:8}}>ถนน</label>
                                    </div>
                                    <div className="col-md-4">
                                        <input className="form-control" required onChange={this.onChange("street")}/>
                                    </div>
                                </div>
                                <div className="row" style={{paddingBottom:7}}>
                                    <div className="col-md-2 col-md-offset-2">
                                        <label style={{paddingTop:8}}>ซอย</label>
                                    </div>
                                    <div className="col-md-4">
                                        <input className="form-control" />
                                    </div>
                                </div>
                                <div className="row" style={{paddingBottom:7}}>
                                    <div className="col-md-2 col-md-offset-2">
                                        <label style={{paddingTop:8}}>จังหวัด</label>
                                    </div>
                                    <div className="col-md-4">
                                        <Select
                                            options={poption}
                                            searchable={true}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-md-offset-2">
                                    <label>อยู่ในโครงการ Good Space</label>
                                    <Select
                                        options={options}
                                        onChange={this.handleChange}
                                        value={selectOption}

                                    />
                                </div>
                                <div className="col-md-6" style={{textAlign:"right"}}>
                                    <button className="btn btn-default" type="submit">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Camp;