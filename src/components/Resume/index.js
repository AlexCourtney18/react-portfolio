import React from 'react';
import { Card, Button } from 'react-bootstrap';
import resumeImage from "../../assets/resume-screenshot.png"

function Resume() {

    return (
        <div>
            <Card style={{ width: "18rem;" }}>
                <Card.Img src={resumeImage} />
                <Card.Body>
                    <Card.Title>
                        Resume
                    </Card.Title>
                    <Card.Text>
                        To view or download my resume, please click below.
                    </Card.Text>
                    <Button style={{ color: "#134074" }}>Resume</Button>
                </Card.Body>

            </Card>
            <Card>
                <Card.Header>
                    Front-end Proficiencies
                </Card.Header>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">HTML</li>
                    <li class="list-group-item">CSS</li>
                    <li class="list-group-item">JavaScript</li>
                    <li class="list-group-item">JQuery</li>
                    <li class="list-group-item">Responsive Design</li>
                    <li class="list-group-item">React</li>
                    <li class="list-group-item">Bootstrap</li>
                </ul>
            </Card>

            <Card>
                <Card.Header>
                    Back-end Proficiencies
                </Card.Header>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">APIs</li>
                    <li class="list-group-item">Node</li>
                    <li class="list-group-item">Express</li>
                    <li class="list-group-item">MySQL, Sequelize</li>
                    <li class="list-group-item">MongoDB, Mongoose</li>
                </ul>
            </Card>
        </div>
    )
}



export default Resume;