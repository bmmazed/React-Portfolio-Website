import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../card/mycard.css'


class Mycard extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="cardView">
                <Container>
                    <Row >
                        <Col className="cardrow">
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src="https://scontent.fdac35-1.fna.fbcdn.net/v/t31.0-8/13919985_1088444411232909_2732871219779504251_o.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_ohc=xMzrpcOD7tUAX9uyevp&_nc_ht=scontent.fdac35-1.fna&oh=27d565751d3fbacc71e94a0f62d06ed9&oe=5FB1CA1F" />
                                <Card.Body>
                                    <Card.Title>Md. Mazed Hossain</Card.Title>
                                    <Card.Text>
                                    Hi, you can see more about me by click on profile button.
                                    </Card.Text>
                                    <Button href="https://www.facebook.com/bmdmazed/" target="_blank" variant="primary">Facebook</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="cardrow">
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src="https://scontent.fdac35-1.fna.fbcdn.net/v/t31.0-8/20934139_1180842972015323_1832041548184903367_o.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=BottOupehyYAX-5fliv&_nc_ht=scontent.fdac35-1.fna&oh=659f68716f02c20bda1ca9a6572397f1&oe=5FB2583F" />
                                <Card.Body>
                                    <Card.Title>Md. Emdadul Haque</Card.Title>
                                    <Card.Text>
                                    Hi, you can see more about me by click on profile button.
                                    </Card.Text>
                                    <Button href="https://www.facebook.com/EMDADUL.SUN" target="_blank" variant="primary">Facebook</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        
                        <Col className="cardrow">
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src="https://scontent.fdac35-1.fna.fbcdn.net/v/t1.0-9/78763188_2318918448212315_5701102901099757568_n.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=-DDPVVa7V0oAX9D-gEz&_nc_ht=scontent.fdac35-1.fna&oh=f15e82eb3c31ed3f1d831e8768d421fc&oe=5FB3D345" />
                                <Card.Body>
                                    <Card.Title>Md. Safayat Hosen Bhuiyan</Card.Title>
                                    <Card.Text>
                                    Hi, you can see more about me by click on profile button.
                                    </Card.Text>
                                    <Button href="https://www.facebook.com/sbshafayet" target="_blank" variant="primary">Facebook</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>

               

                
            </div>
         );
    }
}
 
export default Mycard;