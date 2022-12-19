import React from "react"
import { Component } from "react"
import { Container, Form, Button, Card } from "react-bootstrap";
const { Configuration, OpenAIApi } = require("openai");


class ArticleWriter extends Component {


    constructor() {
        super()
        this.state = {
            heading: 'The response from the AI will be shown here...',
            response: '.......... the AI is pondering world domination'
        }
    }


    onFormSubmit = e => {
        //start by preveting default page refresh
        e.preventDefault()


        const formData = new FormData(e.target),
        formDataObj = Object.fromEntries(formData.entries())
        console.log(formDataObj.articleName)

        this.setState({
            heading: `AI Article Writer Draft for: ${formDataObj.articleName}`,
            response: 'The response from the OpenAI will be shown here'
        })
    }







    render() {
        return (
            <div>
                


            <Container>
                <h1>Write your article now</h1>
                <br /><br />
                <h2>Use the AI to create a unique and interesting article</h2>

                <br /><br />

                <Form onSubmit={this.onFormSubmit}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>
                            What subject would you like to write your article about?
                        </Form.Label>
                        <Form.Control
                            type="text"
                            name="articleName"
                            placeholder="Enter your article title" />

                            <Form.Text className="text-muted">
                                Enter as much information as possible for a more accurate article
                            </Form.Text>
                    </Form.Group>

                    <Button variant="primary" size="lg" type="submit">
                        Write your AI Article now
                    </Button>

                </Form>

                <br /><br />

                <Card>
                    <Card.Body>
                        <Card.Title>
                            <h1>{this.state.heading}</h1></Card.Title>
                   
                            <hr />
                            <br />

                        <Card.Text>
                           {this.state.response}
                        </Card.Text>
                    </Card.Body>    
                </Card>


            </Container>




            </div>
        )
    }
}

export default ArticleWriter;