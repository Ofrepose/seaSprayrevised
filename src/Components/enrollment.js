import React from 'react';

import Header from './headerWImage';
import Footer from './footer';


export default  function Enrollment(props){

    return(
        <section id="topDivMainEnrollment">

            <Header color='white' />
            <section className="sectionOne">

                <div className="title">Enrollment</div>

                <div className="underTitle">

                    Thank you for your interest in Sea Spray Schoolhouse.
                    <br /> <br />
                    We are currently accepting free pre-enrollment applications for children 12 weeks - 5 years old.
                    <br /> <br />
                    A pre-enrollment application helps us to gauge interest in the area and guarantees your child a spot at our school until June 2021.
                    <br /> <br /><br /> <br />


                    All applications will incur a $60 fee if applying after June 1, 2020.

                </div>

                <div className="buttonDiv">
                    <div id="donateItem"><div id="donateItemC">Pre-Enrollment</div></div>
                </div>

            </section>



            <Footer />

        </section>

    )
}