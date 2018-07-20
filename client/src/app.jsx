import './styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Update from './components/update.jsx'
const sampleData = require('../../sampleData.js');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: sampleData[0],
    };
  }

  render() {
    const updates = this.state.project.updates.slice(0).reverse().map((update, i) => {
      return <Update key={i} update={update} />
    });

    return  (
      <div>
        {updates}
      </div>
    )
  }
};

ReactDOM.render(<App />, document.querySelector('#app'));
