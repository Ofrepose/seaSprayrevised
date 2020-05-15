import React from 'react';

import Header from './headerWImage';
import Footer from "./footer";


export default function Employment(props){
    return(
        <div>

            <Header color='black' />

            <section className="employmentDiv">

                <div id="logoBadge" />

                <div className="basicDivTitleLarge">Join Our Team</div>

                <div className="basicDivContentRegular">

                    Sea Spray Schoolhouse is a new childcare facility opening September 2020.
                    <br /> <br />
                    We are a Reggio-inspired preschool, with a desire to implement gentle discipline styles.
                    We will be holding early childhood book club meetings and a variety of trainings in order to prepare our staff.
                    <br /> <br />
                    We are looking for nurturing teachers with prior experience or a natural ability and desire to learn.
                    NC Early Childhood Credentials are preferred, but not a requirement.
                    <br /> <br />
                    Please send an email with your resume and cover letter attached to Alison.Schon@SeaSpraySchoolhouse.com

                </div>

            </section>

            <Footer />

        </div>
    )
}