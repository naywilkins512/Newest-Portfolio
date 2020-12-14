import React, { useEffect } from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import {gsap, TimelineLite, Power3} from 'gsap';

function Hero() {


    let tl= new TimelineLite({delay: 0.3  })

    useEffect(() => {
        
        tl.from('.display', {opacity: 0, ease: Power3.easeOut, delay: 0.1},'Start')
        
    }, []);


    return (

        <Container fluid="true">
            <Row>
                <Col>
                    <Jumbotron className="jumbo">
                        <h1 className="center display">HELLO,<br/>I'M<br/>NAY!</h1>
                        
                    </Jumbotron>
                </Col>
            </Row>
        </Container>

    )
}
export default Hero;