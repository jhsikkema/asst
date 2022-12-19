import React from "react";
import { Component } from "react";
import Display from "./Display"; 
import { Container, Row, Col, Carousel } from "react-bootstrap";
import cimage1 from '../cimage1.png'

class Home extends Component {
    render() {
        return (
            <div>
                
         
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src={cimage1} alt="Whatever we use" />
                    </Carousel.Item>
                </Carousel>
                <br /><br />
            
                <Container>
            <Row>
                <Col>
                    <Display header="Xmas Card Writer"
                    title="Title one goes here"
                    text="The text for card 1 goes here"
                    theLink="/xmas-card-writer" />
                </Col>
                <Col>
                    <Display header="Article Writer"
                    title="Title one goes here"
                    text="The text for card 1 goes here"
                    theLink="/xmas-card-writer" />
                </Col>
                <Col>
                    <Display header="Tweet Writer"
                    title="Title one goes here"
                    text="The text for card 1 goes here"
                    theLink="/xmas-card-writer" />
                </Col>
            </Row>




            </Container>
            </div>
        )
    }
}

export default Home;