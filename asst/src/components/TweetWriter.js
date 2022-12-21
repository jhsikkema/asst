import React from "react"
import { Component } from "react"
import axios from 'axios';
const { Configuration, OpenAIApi } = require('openai');
const API_KEY = process.env.REACT_APP_OPENAI_API_KEY



class Tweet extends Component {
    state = {
      completion: []
    }
  
    componentDidMount() {
      const data = {
        model: 'text-davinci-003',
        prompt: 'Write an article about Brexit:',
        temperature: 1,
        max_tokens: 50,
      };
      
      axios.post('https://api.openai.com/v1/completions', data, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + API_KEY,
        },
      })
        .then(response => {
          // handle success
          this.setState({ completion: [...this.state.completion, response.data.choices[0].text] })
        })
        .catch(error => {
          // handle error
          console.log(error);
        });
    }
  
    render() {
      return (
        <div>
          {this.state.completion.map((completion, index) => (
            <div key={index}>{completion}</div>
          ))}
        </div>
      )
    }
  }
  
  export default Tweet;