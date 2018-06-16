import React, { Component } from 'react';

class Vaccine extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            vaccinecheck:false,
        }
        this._checkhandle = this._checkhandle.bind(this);
    }
    _checkhandle(e){
       this.setState({
           vaccinecheck: !this.state.vaccinecheck,
       })
       console.log(this.state.vaccinecheck)
    }
    render(){
        return(
            <div className="col-md-8 col-md-offset-2">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        ประวัติวัคซีน
                    </div>
                    <div className="panel-body">
                    <div className="row">
                            <div className="col-md-6 col-md-offset-2 ">
                            <input type="checkbox" checked={this.state.vaccinecheck} onChange={(e)=>this._checkhandle(e)}/>
                            <label style={{paddingLeft:15}}>สถานะการรับวัคซีนช่วงอายุ 0-4 ปี</label>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Vaccine;