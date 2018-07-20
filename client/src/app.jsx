import './styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Update from './components/update.jsx';
import Milestone from './components/milestone.jsx';
import Divider from './components/divider.jsx';
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
      if (i > 0 && (update.date.getMonth() < reversedUpdates[i - 1].date.getMonth() || update.date.getFullYear() < reversedUpdates[i - 1].date.getFullYear())) {
        return (
          <div key={i}>
            <Divider month={`${monthNumberToWordShortened(reversedUpdates[i - 1].date.getMonth())} ${reversedUpdates[i - 1].date.getFullYear()}`} />
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

const monthNumberToWordShortened = (num) => {
  if (num === 0) {
    return 'Jan'
  } else if (num === 1) {
    return 'Feb'
  } else if (num === 2) {
    return 'Mar'
  } else if (num === 3) {
    return 'Apr'
  } else if (num === 4) {
    return 'May'
  } else if (num === 5) {
    return 'Jun'
  } else if (num === 6) {
    return 'Jul'
  } else if (num === 7) {
    return 'Aug'
  } else if (num === 8) {
    return 'Sep'
  } else if (num === 9) {
    return 'Oct'
  } else if (num === 10) {
    return 'Nov'
  } else {
    return 'Dec'
  };
};

ReactDOM.render(<App />, document.querySelector('#app'));
