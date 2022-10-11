import React from 'react';
import { Card, Button } from 'react-bootstrap';
import resumeImage from "../../assets/resume-screenshot.PNG"

function Resume() {

    const openResume = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className='flex-row space-between'>
            <Card style={{ width: "20rem" }}>
                <Card.Img src={resumeImage} />
                <Card.Body>
                    <Card.Title>
                        Resume
                    </Card.Title>
                    <Card.Text>
                        To view or download my resume, please click below.
                    </Card.Text>
                    <Button style={{ background: "#134074" }} onClick={() => openResume('https://docs.google.com/document/d/1vKrmU_ZgulN3jtH8SumNYrzjr6eDmSFpDuqG7EO13kY/edit?usp=sharing')}>Resume</Button>
                </Card.Body>

            </Card>
            <Card style={{ color: "#134074" }}>
                <Card.Header>
                    Front-end Proficiencies
                </Card.Header>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">HTML</li>
                    <li className="list-group-item">CSS</li>
                    <li className="list-group-item">JavaScript</li>
                    <li className="list-group-item">JQuery</li>
                    <li className="list-group-item">Responsive Design</li>
                    <li className="list-group-item">React</li>
                    <li className="list-group-item">Bootstrap</li>
                </ul>
            </Card>

            <Card style={{ color: "#134074" }}>
                <Card.Header>
                    Back-end Proficiencies
                </Card.Header>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">APIs</li>
                    <li className="list-group-item">Node</li>
                    <li className="list-group-item">Express</li>
                    <li className="list-group-item">MySQL, Sequelize</li>
                    <li className="list-group-item">MongoDB, Mongoose</li>
                </ul>
            </Card>
        </div>
    )
}



export default Resume;