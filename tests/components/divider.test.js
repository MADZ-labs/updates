import React from 'react';
import { shallow } from 'enzyme';
import Divider from '../../client/src/components/divider';

jest.mock('react-dom');

describe('Divider component', () => {
  const wrapper = shallow(<Divider month="Jul 2018" />);
  it('is rendered', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
