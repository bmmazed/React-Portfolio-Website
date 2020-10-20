import React, { Component } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Footer from '../../footer/footer'
import '../about/about.scss'

class About extends Component {
    render() {
        return (
            <div>
                
                

                <Container className="aboutContainer">
                    <Row>
                        <Col className="col1">
                            <div className="myPhoto">
                                <img className="aboutImage" src={require("../../../images/myphoto.jpg")}
                                    alt="My Photo" style={{height: "55vh", marginTop: "3vh"}}
                                />
                            </div>
                        </Col>
                        <Col className="col2">
                            <h3 className="myDetailsHeader">About Me</h3>
                            <div className="myDetailsPara">
                                
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Viverra adipiscing at in tellus integer feugiat scelerisque. Ac felis donec et odio pellentesque. In fermentum et sollicitudin ac orci phasellus.<br />
                                    Ac turpis egestas integer eget aliquet nibh praesent tristique magna. In iaculis nunc sed augue lacus viverra vitae. Tristique senectus et netus et. Erat imperdiet sed euismod nisi. Et magnis dis parturient montes nascetur ridiculus mus. Risus viverra adipiscing at in tellus integer feugiat scelerisque varius. Duis ultricies lacus sed turpis tincidunt id aliquet. Eros donec ac odio tempor orci.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                
            
            <Footer />
            </div>
        );
    }
}

export default About;