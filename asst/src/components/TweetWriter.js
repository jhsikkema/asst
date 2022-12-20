import React from "react"
import { Component } from "react"
import axios from 'axios';
const { Configuration, OpenAIApi } = require('openai');
const apiKey = process.env.OPENAI_API_KEY;

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});


class Tweet extends Component {
    state = {
      completion: ''
    }
  
    componentDidMount() {
      const data = {
        model: 'text-davinci-003',
        prompt: 'Write a short poem about Michael Moss',
        temperature: 0,
        max_tokens: 7,
      };
      
      axios.post('https://api.openai.com/v1/completions', data, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer' + apiKey,
        },
      })
        .then(response => {
          // handle success
          this.setState({ completion: response.data })
        })
        .catch(error => {
          // handle error
          console.log(error);
        });
    }
  
    render() {
      return (
        <div>
          {this.state.completion}
        </div>
      )
    }
  }
  
  export default Tweet;