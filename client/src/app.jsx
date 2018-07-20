import './styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Update from './components/update.jsx';
import Milestone from './components/milestone.jsx';
import Divider from './components/divider.jsx';
import monthNumberToString from '../../helpers/monthNumberToString.js';
const sampleData = require('../../sampleData.js');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: sampleData[0],
    };
  }

  render() {
    const reversedUpdates = this.state.project.updates.slice(0).reverse();
    const updates = reversedUpdates.map((update, i) => {
      if (i > 0 && update.date.getMonth() < reversedUpdates[i - 1].date.getMonth()) {
        return (
          <div key={i}>
            <Divider month={`${monthNumberToString(reversedUpdates[i - 1].date.getMonth(), true)} ${reversedUpdates[i - 1].date.getFullYear()}`} />
            <Update update={update} />
          </div>
        )
      } else {
        return <Update key={i} update={update} />
      };
    });

    return  (
      <div>
        {updates}
        <Milestone project={this.state.project} />
      </div>
    )
  }
};

ReactDOM.render(<App />, document.querySelector('#app'));
