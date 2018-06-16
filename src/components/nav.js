import React,{Component} from 'react';
import { Link } from 'react-router-dom';
class Nav extends Component{
    
    
    render(
        
    ){
        return(
            <nav className="navbar navbar-default" style={{paddingTop:5,paddingButton:5}}>
                <div className="container-fluid">
                    <div className="navbar-header">
                        <img alt="k" src="https://th1-cdn.pgimgs.com/cms/news/2017/10/Sansiri-Logo-e1507516139823.original.jpg" style={{width:60}}/>
                    </div>
                    <div className="navbar navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li>
                                <Link to="/childform">เพิ่มเด็ก</Link>
                            </li>
                            <li>
                                <Link to="/parentform">เพิ่มผู้ปกครอง</Link>
                            </li>
                            <li>
                                <Link to="/supplier">เพิ่มผู้ประสานงาน</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            
        )
    }
}

export default Nav;

