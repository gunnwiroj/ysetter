import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Nav extends Component {


    render(

    ) {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a href="/" >
                            <img alt="k" src="https://th1-cdn.pgimgs.com/cms/news/2017/10/Sansiri-Logo-e1507516139823.original.jpg" style={{ width: 60,paddingTop:8,paddingBottom:8 }} />
                        </a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar" style={{paddingLeft:10}}>
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

