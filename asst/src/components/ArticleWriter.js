import React from 'react'
import { Component } from 'react'
import { Container, Form, Button, Card } from 'react-bootstrap';
const { Configuration, OpenAIApi } = require('openai');



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
        


        const configuration = new Configuration({
            apiKey: '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',
        });
        
        const openai = new OpenAIApi(configuration);
        
        openai.createCompletion("text-davinci-003", {
            prompt: `Write a detailed, smart, informative article about the following topic ${formDataObj.articleName}`,
            temperature: 0.73,
            max_tokens: 1372,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        })
        .then((response) => {
            this.setState({
                heading: `AI artcle writer draft for: ${formDataObj.articleName}`,
                response: `${response.data.choices[0].text}`
            })
        });

        
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
                            placeholder="Enter your article topic" />

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
