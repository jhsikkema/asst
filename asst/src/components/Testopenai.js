import React, { Component } from 'react';
import React from 'react'
const { Configuration, OpenAIApi } = require('openai');


class MyComponent extends Component {
    openAiRequest() {
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "https://api.openai.com/v1/completions");
      xhr.setRequestHeader("User-Agent", "MyApp/1.0");
      // ...
      xhr.send();
    }
  
    render() {
      return <div>My Component</div>
    }
  }
  
  export default MyComponent;