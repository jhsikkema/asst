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
      

                <Container>
                <br /><br />
                <h1>The worlds most advanced A.I Asst.</h1>
                <p>AI assistant, or asst. for short, will transforms your productivity</p>
                <br /><br />
            <Row>
                <Col>
                    <Display header="Writing"
                    title="Christmas Card Writer"
                    text="The text for card 1 goes here"
                    theLink="/xmas-card-writer" />
                </Col>
                <Col>
                    <Display header="Writing"
                    title="Article Writer"
                    text="The text for card 1 goes here"
                    theLink="/article-writer" />
                </Col>
                <Col>
                    <Display header="Proofing"
                    title="Proofing Asst"
                    text="The text for card 1 goes here"
                    theLink="/article-proofer" />
                </Col>
            </Row>




            </Container>
            </div>
        )
    }
}

export default Home;