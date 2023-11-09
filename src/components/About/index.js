import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

const About = () => {
    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        strArray={['A','b','o','u','t',' ','m','e','']}
                        /* idx means delay, so 15 is 1.5 seconds delay */
                        idx={15}
                    />
                </h1>
                <p>
                <h2>
                    Daniel 'Hyowon' Cho
                    Email: Daniel.Hyowon.Cho@gmail.com
                    Phone: 267 918-0342
                </h2>
                </p>
                <p>
                    <h2>
                        Objective
                    </h2>
                    Highly motivated and skilled computer science
                    undergraduate with a passion for software development
                    searching for a challenging role in a reputable
                    organization where I can utilize my technical skills to
                    design and develop responsive, efficient, and
                    high-quality programs/applications.
                </p>
                <p>
                    <h2>
                        Relevant Work Projects
                    </h2>
                    Developed website for local rock-climbing gym using Django Framework,
                    Python, NoSQL, CSS, HTML, and JavaScript under a team following Agile and
                    Scrum Methodologies; Developed GPS social media app for Android and IOS
                    using Flutter Framework, Flask, MongoDB, Python, and Dart  
                </p>
                <p>
                    <h2>
                        Education
                    </h2>
                    Associates of Science General Engineering Fall 2017- Fall 2021
                    Rowan College at Burlington County
                    Dean’s List 2019 and 2021
                    Graduated with 3.55 GPA
                    Bachelor of Science Computer Science Spring 2022-Spring 2023
                    Rowan University
                </p>
                <p>
                    <h2>
                        Skills
                    </h2>
                    Agile & Scrum Method, Compiler Programming, C#, C++, CSS, Dart, Databases
                    (MongoDB, MySQL, SQL, Workbench), Flutter, Full Stack, HTML, Java, JS,
                    Leetcode, Microsoft Office Suite, Mobile App Development, Payroll Processing
                    Python, React, Software Development, SCSS, Web Development
                </p>
                <p>
                    <h2>
                        Work History
                    </h2>
                    JULY 2015 - PRESENT
                    Payroll Specialist/Accounting | ACCU Staffing Services | Cherry Hill, NJ
                    Key responsibilities: Supervised a high-volume number of monetary transactions;
                    Communicated regularly with various clients regarding policy and regulations;
                    Generated proficiency in Microsoft Applications, particularly Excel Workbooks;
                    Troubleshoot data issues for company employees; Managed processing of
                    government files, verifying authenticity of IDs and documents provided
                </p>
            </div>
        </div>
    )
}

export default About