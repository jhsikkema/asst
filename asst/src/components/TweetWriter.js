
import React, { useState } from "react";
import { Component } from 'react'
import { Container, Form, Button, Card, Row, Col, Alert, FormControl } from 'react-bootstrap';
import axios from "axios";
import ProgressBar from 'react-bootstrap/ProgressBar';

const { Configuration, OpenAIApi } = require('openai');
const API_KEY = process.env.REACT_APP_OPENAI_API_KEY


const Tweet = () => {
  const [heading, setHeading] = useState("The response from the AI will be shown here...");
  const [response, setResponse] = useState(".......... the AI is pondering world domination");
  const [copySuccess, setCopySuccess] = useState("");
  const [tweetSuccess, setTweetSuccess] = useState("");
  const [tweetType, setTweetType] = useState("");

  const [progress, setProgress] = useState(0);
  const [showProgressBar, setShowProgressBar] = useState(false);
  const [showResponseCard, setShowResponseCard] = useState(false);
  const [buttonText, setButtonText] = useState("Write Tweet");

function onFormSubmit(e) {
  //start by preveting default page refresh
  e.preventDefault();
  setShowProgressBar(true);
  const formData = new FormData(e.target),
  formDataObj = Object.fromEntries(formData.entries())
  setProgress(10);
  setTweetType(formDataObj.tweetType);
        
  const configuration = new Configuration({
      apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });
  setProgress(20);
  
  const openai = new OpenAIApi(configuration);
  setProgress(30);

  const data = {
      model: 'text-davinci-003',
      prompt: `Write a ${formDataObj.tweetType} about the following topics and concepts ${formDataObj.tweetIdea}`,
      temperature: 0.73,
      max_tokens: 480,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
  }
  setProgress(40);

  axios.post("https://api.openai.com/v1/completions", data, {
      headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + API_KEY,
      },
      
  })
  .then(response => {
      console.log(response.data);
      let tweetResponse;
      if (tweetType === 'tweet') {
        tweetResponse = response.data.choices[0].text
      } else {
        // create the tweet thread response
        let tweetThreadResponse = '';
        response.data.choices.forEach((tweet, index) => {
          tweetThreadResponse += `${index + 1}. ${tweet.text}\n`;
        })
        tweetResponse = tweetThreadResponse;
      }
      setHeading(`Draft Tweet: ${formDataObj.tweetIdea}`);
      setResponse(tweetResponse);
      setProgress(100);
      setShowResponseCard(true);
      setButtonText("Redraft Tweet");
  })
  .catch(error => {
      console.log(error);
  });
  
}

const copyToClipboard = (e) => {
  navigator.clipboard.writeText(response);
  setCopySuccess("Copied!");
};

const postTweet = (e) => {
  axios.post("https://api.twitter.com/1.1/statuses/update.json", {
    status: tweetType === 'tweet' ? response : `${response}\n\n#Thread` 
  })
  .then(response => {
      console.log(response.data);
      setTweetSuccess("Tweet Posted!");
  })
  .catch(error => {
      console.log(error);
  });
}

return (
  <div>
          
      <Container>
      <Row className="mt-5">
      <Col md={{ span: 8, offset: 2 }}>


          <h1>Tweet Writer Asst</h1>
          <br /><br />
          <h2>Enter ideas and Asst will do the rest</h2>

          <br /><br />

          <Form onSubmit={onFormSubmit}>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                 
                  <Form.Control as="textArea"
                      type="text"
                      name="tweetIdea"
                      style={{height: "200px"}}
                      placeholder="Enter your tweet ideas, for example: The importance of technology in education" />

                      <Form.Text className="text-muted">
 Enter as much information as possible for a more accurate tweet
                      </Form.Text>

                      <Form.Group>
                        <Form.Control as="select" name="tweetType" onChange={e => setTweetType(e.target.value)}>
                          <option>tweet</option>
                          <option>tweet thread</option>
                        </Form.Control>
                      </Form.Group>
              </Form.Group>

              <Button variant="dark gradient" size="lg" type="submit">
              {buttonText}
              </Button>

              {showProgressBar && <ProgressBar style={{width: "400px", height: "40px", marginLeft: "auto", marginRight: "auto", marginTop: "1rem"}} variant="success" now={progress} label={`${Math.round(progress)}%`} />}
{progress === 100 && setTimeout(() => setShowProgressBar(false), 1000)}
              
          </Form>

          <br /><br />

          {showResponseCard ? (
          <Card>
              <Card.Body>
                  <Card.Title>
                      <h3> {heading} </h3></Card.Title>
             
                      <hr />
                      <br />

                  <Card.Text>
                   {response} 
                  </Card.Text>

                  {progress === 100 && <Button variant="dark" size="lg" onClick={copyToClipboard}>
                      Copy To Clipboard
                  </Button>} <br/> <br/> <br/> 
                  {progress === 100 && <Button variant="dark" size="lg" onClick={postTweet}>
                      Post Tweet
                  </Button>}
                  {copySuccess && <Alert style={{marginTop: "1rem" }} variant="success">{copySuccess}</Alert>} <br />
                  {tweetSuccess && <Alert style={{marginTop: "1rem" }} variant="success">{tweetSuccess}</Alert>}
              </Card.Body>    
          </Card>
          ) : (
          null
          )}
          </Col>
    </Row>
      </Container>

      </div>
);
};
export default Tweet