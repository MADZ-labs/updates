import './styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Update from './components/update';
import Milestone from './components/milestone';
import Divider from './components/divider';
import helpers from '../../helpers/helpers';

const sampleData = require('../../sampleData.js');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: sampleData[0],
    };
  }

  render() {
    const { project } = this.state;
    const reversedUpdates = project.updates.slice(0).reverse();
    const updates = reversedUpdates.map(update => <Update key={update} update={update} />);

    for (let i = 0; i < updates.length; i += 1) {
      if (updates[i].props.update.date < new Date()
      && updates[i].props.update.date < project.endingDate) {
        updates.splice(i, 0, <Milestone
          key={`milestone ${i}`}
          project={project}
          update={updates[i]}
        />);
        break;
      }
    }

    for (let i = 0; i < updates.length; i += 1) {
      if (i > 0 && !updates[i].props.project && !updates[i - 1].props.project
        && !updates[i].props.month && !updates[i - 1].props.month
        && (updates[i].props.update.date.getMonth() < updates[i - 1].props.update.date.getMonth()
        || updates[i].props.update.date.getFullYear()
        < updates[i - 1].props.update.date.getFullYear())) {
        updates.splice(i, 0, <Divider
          key={`divider ${i}`}
          month={`${helpers.monthNumberToString(updates[i].props.update.date.getMonth(), true)}
          ${updates[i].props.update.date.getFullYear()}`}
        />);
      }
    }

    return (
      <div>
        {updates}
        <Milestone project={project} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));
