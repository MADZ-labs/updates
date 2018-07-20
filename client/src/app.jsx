import './styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
const sampleData = require('../../sampleData.js');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: sampleData[0],
    };
  }

  render() {
    return  (
      <div></div>
    )
  }
};

ReactDOM.render(<App />, document.querySelector('#app'));
