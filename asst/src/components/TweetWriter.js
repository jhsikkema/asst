import React from "react"
import { Component } from "react"
const { Configuration, OpenAIApi } = require('openai');


const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);



class Tweet extends Component {


    render() {
        

        
        return (
            <div>
                
                <h1>This is the Tweet Writer</h1>
            </div>
        )

        
        
    }
}

export default Tweet;