import React,{Component} from 'react';
class index extends Component{
    render(){
        return(
            <div>
                <div className="col-md-10 col-md-offset-1">
                    <div className="panel panel-default">
                        <div className="panel-heading" style={{textAlign:"Left"}}>
                            ข้อมูลเด็กในโครงการ
                        </div>
                        <div className="panel-body" >
                            <table className="table table-hover">
                                    <th style={{textAlign:"center"}}>#</th>
                                    <th style={{textAlign:"center"}}>ชื่อ-สกุล</th>
                                    <th style={{textAlign:"center"}}>สถานที่ศึกษา</th>
                                    <th style={{textAlign:"center"}}>ระดับชั้น</th>
                                    <th style={{textAlign:"center"}}>อยู่ในโครงการ GoodSpace</th>
                                    <th style={{textAlign:"center"}}>สถานะการติดตาม</th>
                                    <th style={{textAlign:"center"}}>สถานะการรับวัคซีนช่วง 0-4 ปี</th>
                               
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>asdasdas</td>
                                        <td>asdasdasd</td>
                                        <td>asdasdas</td>
                                        <td>asdasd</td>
                                        <td>asdasdasd</td>
                                        <td>asdasdasd</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {/*end child table*/}
                <div className="col-md-10 col-md-offset-1">
                    <div className="panel panel-default">
                        <div className="panel-heading" style={{textAlign:"Left"}}>
                            ข้อมูลผู้ปกครองในโครงการ
                        </div>
                        <div className="panel-body" >
                            <table className="table table-hover">
                                    <th style={{textAlign:"center"}}>#</th>
                                    <th style={{textAlign:"center"}}>ชื่อ-สกุล</th>
                                    <th style={{textAlign:"center"}}>จำนวนผู้ติดตาม</th>
                                    <th style={{textAlign:"center"}}>สัญชาติ</th>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>asdasdas</td>
                                        <td>asdasdasd</td>
                                        <td>asdasdas</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {/*end parent component*/}
                <div className="col-md-10 col-md-offset-1">
                    <div className="panel panel-default">
                        <div className="panel-heading" style={{textAlign:"Left"}}>
                            วิเคราะห์ข้อมูล
                        </div>
                        <div className="panel-body" >
                           <h3>still no idea but must have</h3>
                        </div>
                    </div>
                </div>
                {/*end concusion for project*/}
            </div>
        )
    }
}

export default index;