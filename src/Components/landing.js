import React from "react";

import Header from '../Components/header';
import Footer from '../Components/footer';


export default function Landing(props){

    return (

        <section className="topDivMain">

            <Header color="white" />

            <section id="topBarHeadlineDiv">

                <div id="topBarHeadlineContent">
                    Now Accepting Pre-enrollment Applications!
                </div>

            </section>

            <section className="sectionOne">

                <div id="logoHome"></div>

                <div id="underTextMain">

                        Sea Spray Schoolhouse is a Reggio-inspired preschool with child
                        directed learning in a nurturing environment. We believe that children are capable
                        beings who do their best learning when given the freedom to go at their own pace.
                        Our teachers are trained to stimulate their interests. We also strive to go beyond a
                        focus on social, emotional, and cognitive development to help children realize their
                        greater role as productive members of our community by emphasizing sustainable
                        practices and the importance of supporting local resources.

                </div>

                <div id="donateItem"><div id="donateItemC">Join our Newsletter</div></div>

            </section>

            <section className="sectionTwo">

                <h2 id="sectionTwoTitle">Find out more about our school</h2>
                <h4 id="sectionTwoUnder">Contact us to learn more about Sea Spray Schoolhouse</h4>

                <section id="contactUs">

                    <h2 className="genericTitle">Contact Us</h2>

                    <p className="genericUnder">Give us a call to find out more!</p>

                    <p className="genericUnder">(919) 360-2111</p>
                </section>

                <form id="moreInfoForm">

                    <label htmlFor="parentName">

                        Parent Name:

                        <input
                            className="infoFormInput"
                            name="parentName"
                            type="text"
                            placeholder="First Name"
                        />

                        <input
                            name="parentNameLast"
                            type="text"
                            placeholder="Last Name"
                        />

                    </label>

                    <label htmlFor="contactInfo">

                        Contact Information

                        <input
                            className="infoFormInput"
                            name="email"
                            type="email"
                            placeholder="Email"
                        />

                        <input
                            className="infoFormInput"
                            name="phone"
                            type="phone"
                            placeholder="Phone Number"
                        />

                    </label>

                    <button className="buttonBorder2">Submit</button>



                </form>

            </section>

            <Footer />

        </section>

    );
}