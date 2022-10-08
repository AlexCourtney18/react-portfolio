import React from 'react';
import { Card, Button } from 'react-bootstrap';
import resumeImage from "../../assets/resume-screenshot.PNG"

function Resume() {

    return (
        <div>
            <Card style={{ width: "18rem" }}>
                <Card.Img src={resumeImage} />
                <Card.Body>
                    <Card.Title>
                        Resume
                    </Card.Title>
                    <Card.Text>
                        To view or download my resume, please click below.
                    </Card.Text>
                    <Button style={{ background: "#134074" }}>Resume</Button>
                </Card.Body>

            </Card>
            <Card>
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

            <Card>
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