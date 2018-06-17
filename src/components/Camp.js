import React,{Component} from'react';
import Select from 'react-select';
import Axios from 'axios';
const STATES = require('./data/province');

class Camp extends Component{
    constructor(props) {
        super(props);
        this.state = {
            hasGoodSpace:'',
            selectedOption:'',
            province:'',

        };
        this.onChange = this.onChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption});
            // selectedOption can be null when the `x` (close) button is clicked
            if (selectedOption) {
            console.log(`Selected: ${selectedOption.label}`);
            }
      }

      handleChange2 = (province) => {
        this.setState({ province });
            // selectedOption can be null when the `x` (close) button is clicked
            if (province) {
            console.log(`Selected: ${province.label}`);
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
        const { selectedOption } = this.state;
        const { province } = this.state;
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
                                        <label style={{paddingTop:8}}>ที่อยู่</label>
                                    </div>
                                    <div className="col-md-4">
                                        <input className="form-control" required onChange={this.onChange("street")}/>
                                    </div>
                                </div>
                                <div className="row" style={{paddingBottom:7}}>
                                    <div className="col-md-2 col-md-offset-2">
                                        <label style={{paddingTop:8}}>แขวง</label>
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
                                            value={province}
                                            onChange={this.handleChange2}
                                        />
                                    </div>
                                </div>
                                <div className="row" style={{paddingButtom:7}}>
                                <div className="col-md-2 col-md-offset-2">
                                    <label style={{paddingTop:8}}>อยู่ในโครงการ Good Space</label>
                                </div>
                                <div className="col-md-4">
                                <Select
                                        options={options}
                                        onChange={this.handleChange}
                                        value={selectedOption}
                                    />
                                </div>
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