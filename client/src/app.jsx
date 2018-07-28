import './styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Update from './components/update.jsx';
import Milestone from './components/milestone.jsx';
import Divider from './components/divider.jsx';
import helpers from '../../helpers/helpers';

const sampleData = require('../../sampleData.js');

const AppDiv = styled.div`

`;

const Timeline = styled.div`
  position: absolute;
  margin: 50px auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 1px;
  background: #eee;
  z-index: -1;
`;

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
        let updateProp = {};
        if (i === 0) {
          const { update } = updates[0].props;
          updateProp = update;
        } else {
          const { update } = updates[i - 1].props;
          updateProp = update;
        }
        updates.splice(i, 0, <Milestone
          key={`milestone ${i}`}
          project={project}
          update={updateProp}
        />);
        break;
      }
    }

    for (let i = 0; i < updates.length; i += 1) {
      // puts divider after milestone if milestone is the most recent update
      if (i === 0 && updates[i].props.project
        && (updates[i + 1].props.update.date.getMonth()
        < updates[i].props.project.endingDate.getMonth()
        || updates[i + 1].props.update.date.getFullYear()
        < updates[i].props.project.endingDate.getFullYear())) {
        updates.splice(i + 1, 0, <Divider
          key={`divider ${i}`}
          month={`${helpers.monthNumberToString(updates[i].props.update.date.getMonth(), true)}
          ${updates[i].props.update.date.getFullYear()}`}
        />);
      // puts divider before updates if they are earlier in time by a month or year
      } else if (i > 0 && !updates[i].props.month && !updates[i - 1].props.month
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
      <AppDiv>
        {updates}
        <Milestone project={project} />
        <Timeline />
      </AppDiv>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));
