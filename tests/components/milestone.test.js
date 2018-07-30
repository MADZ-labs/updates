import React from 'react';
import { shallow } from 'enzyme';
import Milestone from '../../client/src/components/milestone';
import sampleData from '../../sampleData';

jest.mock('react-dom');

describe('Milestone component', () => {
  const wrapper = shallow(<Milestone project={sampleData[0]} />);
  it('is rendered', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
