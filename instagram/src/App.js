import React from 'react';
import data from '../dummy-data.js'
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      PostContainer: data
    };
  }

  render() {
    return (
      <div className="App">
        <PostContainer post={this.state.post} />
      </div>
    );
  }
}


export default App;
