import React from 'react';
import { shallow } from 'enzyme';
import App from '../../client/src/app';
import Milestone from '../../client/src/components/milestone';

jest.mock('react-dom');

describe('App component', () => {
  const wrapper = shallow(<App />);
  it('is rendered', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('renders a milestone component', () => {
    expect(wrapper.find(Milestone).exists()).toBeTruthy();
  });
});
