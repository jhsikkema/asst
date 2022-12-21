import React, { useState } from "react";
import { Component } from 'react'
import { Container, Form, Button, Card } from 'react-bootstrap';
import axios from "axios";

const { Configuration, OpenAIApi } = require('openai');
const API_KEY = process.env.REACT_APP_OPENAI_API_KEY

const ArticleWriter = () => {

        const [heading, setHeading] = useState("The response from the AI will be shown here...");
        const [response, setResponse] = useState(".......... the AI is pondering world domination");

    function onFormSubmit(e) {
        //start by preveting default page refresh
        e.preventDefault();


        const formData = new FormData(e.target),
        formDataObj = Object.fromEntries(formData.entries())
        
        

        const configuration = new Configuration({
            apiKey: process.env.REACT_APP_OPENAI_API_KEY,
        });
        
        const openai = new OpenAIApi(configuration);

        const data = {
            model: 'text-davinci-003',
            prompt: `Write a detailed, smart, informative article about the following topic ${formDataObj.articleName}`,
            temperature: 0.73,
            max_tokens: 300,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        }

        axios.post("https://api.openai.com/v1/completions", data, {
            headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + API_KEY,
            },
            
        })
        .then(response => {
            console.log(response.data);
            setHeading(`AI artcle writer draft for: ${formDataObj.articleName}`);
            setResponse(`${response.data.choices[0].text}`);
        })
        .catch(error => {
            console.log(error);
        });

        
    }
 
    return (
        <div>
                
            <Container>
                <h1>Write your article now</h1>
                <br /><br />
                <h2>Use the AI to create a unique and interesting article</h2>

                <br /><br />

                <Form onSubmit={onFormSubmit}>

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
                            <h1>{heading}</h1></Card.Title>
                   
                            <hr />
                            <br />

                        <Card.Text>
                           {response}
                        </Card.Text>
                    </Card.Body>    
                </Card>


            </Container>




            </div>
    );
};

export default ArticleWriter;