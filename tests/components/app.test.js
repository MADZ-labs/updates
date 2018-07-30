import React from 'react';
import { shallow } from 'enzyme';
import App from '../../client/src/app';
import Milestone from '../../client/src/components/milestone';

jest.mock('react-dom');

describe('App component', () => {
  it('is rendered', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('renders a milestone component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Milestone).exists()).toBeTruthy();
  });
});
