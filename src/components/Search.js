import React,{Component} from 'react';

class Search extends Component{

    render(){
        return(
            <div>
                <div className="col-md-8 col-md-offset-2">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        ค้นหาเด็กในระบบ
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-md-2 col-md-offset-2">
                                <label style={{paddingTop:8}}>ค้นหาโดยรูปภาพ</label>
                            </div>
                            <div className="col-md-4">
                            <input type="file" className="form-control" style={{paddingLeft:7}}/>
                            </div>
                        </div>
                        <div className="row" style={{paddingTop:7}}>
                            <div className="col-md-2 col-md-offset-2">
                                <label style={{paddingTop:8}}>ค้นหาโดยชื่อ</label>
                            </div>
                            <div className="col-md-4">
                            <input className="form-control" style={{paddingLeft:7}}/>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Search;