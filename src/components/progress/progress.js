import React, { Component } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import ProgressBar from 'react-bootstrap/ProgressBar'
import '../progress/progress.css'

class Myprogress extends Component {
    state = {  }
    render() { 

        return ( 
            <div className="progress-area">

                <h3 className="progreHeading">My Skills</h3>


                <Container>

                    <Row>
                        <Col className="col1" sm={2}><p>HTML5 :</p></Col>
                        <Col className="col2" sm={10}><ProgressBar animated  variant="success"  now={85} label={"85%"} /></Col>
                    </Row>
                    <Row>
                        <Col className="col1" sm={2}><p>CSS3 :</p></Col>
                        <Col className="col2" sm={10}><ProgressBar animated  variant="success"  now={80} label={"80%"} /></Col>
                    </Row>
                    <Row>
                        <Col className="col1" sm={2}><p>JavaScript :</p></Col>
                        <Col className="col2" sm={10}><ProgressBar animated  variant="info"  now={70} label={"70%"} /></Col>
                    </Row>
                    <Row>
                        <Col className="col1" sm={2}><p>REST :</p></Col>
                        <Col className="col2" sm={10}><ProgressBar animated  variant="info"  now={75} label={"75%"} /></Col>
                    </Row>
                    <Row>
                        <Col className="col1" sm={2}><p>Postman :</p></Col>
                        <Col className="col2" sm={10}><ProgressBar animated  variant="info"  now={70} label={"70%"} /></Col>
                    </Row>
                    <Row>
                        <Col className="col1" sm={2}><p>React:</p></Col>
                        <Col className="col2" sm={10}><ProgressBar animated  variant="success"  now={85} label={"85%"} /></Col>
                    </Row>

                </Container>
                

            </div>
         );
    }
}
 
export default Myprogress;