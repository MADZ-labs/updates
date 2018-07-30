import React from 'react';
import { shallow } from 'enzyme';
import Update from '../../client/src/components/update';
import sampleData from '../../sampleData';

jest.mock('react-dom');

describe('Update component', () => {
  const wrapper = shallow(<Update update={sampleData[0].updates[0]} highlightColor="red" />);
  it('is rendered', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
