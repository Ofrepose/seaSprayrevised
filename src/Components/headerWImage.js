import React from "react";
import {Link, NavLink} from 'react-router-dom';



export default function Header(props){

    const topLinks = {
        fontFamily: 'gPro',
        letterSpacing: '2px',
        fontSize: '17.5px',
        transition: '.10s all ease-in-out',
        fontWeight: '400',
        lineHeight: '60px',
        color:props.color
    }

    return(
        <header>

            {/*<div className="headerBackdrop"></div>*/}

            <div className="leftSide">

                <div id="logo"></div>

                <div className="contactTop">(919) 360-2111</div>


            </div>

            <div className="rightSide">

                <NavLink to={'/'} style={topLinks}>Home</NavLink>

                <div style={topLinks}>Newsletter</div>

                <NavLink to={'/enrollment'} style={topLinks}>Enrollment</NavLink>

                <NavLink to={'employment'} style={topLinks}>Employment</NavLink>

                <div style={topLinks}>Contact</div>

            </div>

        </header>
    )


}