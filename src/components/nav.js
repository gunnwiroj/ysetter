import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Nav extends Component {


    render(

    ) {
        return (
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a href="/" >
                            <img alt="k" src="https://th1-cdn.pgimgs.com/cms/news/2017/10/Sansiri-Logo-e1507516139823.original.jpg" style={{ width: 60,paddingTop:8 }} />
                        </a>
                    </div>
                    <div class="collapse navbar-collapse" id="myNavbar" style={{paddingLeft:10}}>
                        <ul class="nav navbar-nav">
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

