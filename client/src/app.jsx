import './styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return <span>Hello React</span>
  }
};

ReactDOM.render(<App />, document.querySelector('#app'));