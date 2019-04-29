import React from 'react';
import data from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer'

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
