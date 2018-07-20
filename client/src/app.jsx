import './styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Update from './components/update.jsx';
import Milestone from './components/milestone.jsx';
import Divider from './components/divider.jsx';
import helpers from '../../helpers/helpers.js';
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
      return <Update key={i} update={update} />
    });

    var updatesWithDividers = [];
    for (var i = 0; i < updates.length; i++) {
      if (i > 0 && !updates[i].props.month && !updates[i - 1].props.month && (updates[i].props.update.date.getMonth() < updates[i - 1].props.update.date.getMonth() || updates[i].props.update.date.getFullYear() < updates[i - 1].props.update.date.getFullYear())) {
        updatesWithDividers = updates.splice(i, 0, <Divider key={'divider' + i} month={`${helpers.monthNumberToString(updates[i].props.update.date.getMonth(), true)} ${updates[i].props.update.date.getFullYear()}`} />);
      };
    };

    if (updatesWithDividers.length === 0) {
      updatesWithDividers = updates;
    };

    return (
      <div>
        {updatesWithDividers}
        <Milestone project={this.state.project} />
      </div>
    )
  }
};

ReactDOM.render(<App />, document.querySelector('#app'));
