import React from 'react'
import {Header} from "../Header";
import {Jumbotron, Button, Grid, Row, Col} from 'react-bootstrap';


const experinceArray = [
    {
        companyName: 'Michigan State University',
        jobTitle: 'iOS Design Lab Swift Coach',
        location: 'East Lansing, MI',

        startDate: 'June 2018',
        endDate: 'Present',
        bullets: [
            'Initiative of the Associate Provost to provide computational and critical thinking, and collaboration skills to the first cohort of students with the goal of expanding it to all students.',

            'Designed one of a kind learning experience at Michigan State University for other students to learn problem solving, teamwork, design, and coding in a non-traditional classroom setting.',

            'Lead team of students to identify a real-world problem and solve using Apple’s Challenge Based Curriculum, while instructing on iOS development using Swift.',

            'Educated students about the importance of accessibility and provided instruction in mobile application accessibility auditing.',

            'Developed iPhone application using Swift for MSU Museum to make exhibits more accessible. Created web interface using React for Museum employees to dynamically update content in iPhone application.',

            'Developed an application to teach other developers how to create accessible user interfaces.'

        ],

    },
    {
        companyName: 'Michigan State University College of Arts & Letters',
        jobTitle: 'Web Development and Accessibility Intern',
        location: 'East Lansing, MI',

        startDate: 'May 2017',
        endDate: 'Present',
        bullets: [
            'Performed accessibility audits and remediation for university-wide products and worked with external product vendors to ensure product accessibility.',

            'Implemented card sorting and analytics to test viability on various web designs.',

            'Created accessibility review protocols and a disability tip sheet to assist others in creating accessible materials for students, faculty, and other individuals.',

            'Managed websites upstanding to WCAG 2.0 & 2.1 AA & AAA using custom WordPress and other CMS platforms.',

            'Acted as a leader among other undergraduate team members including training and support of their projects.',



        ],

    },
    {
        companyName: 'JDM Systems Consultants',
        jobTitle: 'Software Development Intern',
        location: 'Farmington Hills, MI',

        startDate: 'June 2018',
        endDate: 'August 2018',
        bullets: [
            'Worked on a development team of five, utilizing git version control.',

            'Developed software to automate IoT products while dynamically generating documentation using JavaScript.',

            'Automated protocol buffer generation for connected systems.',

            'Managed project using Jira to collaborate with other developers on tasks.',

            'Scripted and edited tutorial videos demonstrating how to build complicated message hierarchy for connected devices.',

            'Integrated Java, Springboot server with custom OpenSSL certificates.'



        ],

    }
];



class ResumePage extends React.Component{


    render(){

        let experienceList = experinceArray.map((experince, i)=>{

            const bulletPoints = experince.bullets.map((bullet, i)=>{

                return(
                    <li key={i}>{bullet}</li>
                )
            })


            return(
                <div key={i}>
                    <h3>{experince.companyName}</h3>

                    <p>{experince.jobTitle}</p>

                    <i>{experince.startDate} - {experince.endDate}</i>


                    <ul>
                        {bulletPoints}
                    </ul>

                </div>
            )
        })




        return(
            <div>
                <Header h1={'Resume'}/>

                <Jumbotron className="white">
                    <div className="container ">
                        <a href={'/andersonDayResume.docx'} download>Download Resume</a>

                            <h2>Experinces</h2>
                        {experienceList}

                        <Row>
                            <h2>Education</h2>
                            <b>Michigan State University</b>
                            <p>B.A. Experience Architecture (December 2019)</p>
                        </Row>

                        <Row>
                            <h2>Skills</h2>
                            <ul>
                                <li>Website development: HTML, CSS, SCSS, JavaScript, React, Node, Express, Redux</li>

                                <li>Application development: Swift, iOS Accessibility</li>

                                <li>Accessibility: WCAG 2.0, 2.1, Section 508, and Apple Voiceover</li>

                                <li>Universal Design: user research, user interface design, and prototyping</li>

                                <li>Public Speaking, leadership, communication, mentorship, critical thinking, and teaching</li>

                            </ul>
                        </Row>

                        <Row>
                            <h2>Relevant Projects</h2>
                            <ul>
                                <li>Ignite UX Michigan Presentation: “An Introduction to Web Accessibility” (2019)</li>
                                <li>Accessible Learning Conference Presentation: “An Introduction to Web Accessibility” (2018), “The Importance of Accessibility” (2017)</li>
                                <li>Accessible UI iOS App with Swift (2018)</li>
                                <li>Web Developer Intern for USA Digital Media (2018)</li>
                                <li>Experience Architecture Club Co-Founder (2017-18)</li>
                                <li>Web Director for VIM Magazine (2017-18)</li>

                            </ul>
                        </Row>


                    </div>
                </Jumbotron>
            </div>
        )
    }
}



export default ResumePage;