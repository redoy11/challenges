import React from 'react';
import { mount } from 'enzyme';
import Message from '../Message';
import { SUCCESS_TYPE } from '../../../store/ducks/donations';

describe('Message', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('renders without crashing', async () => {
    const wrapper = mount(<Message type={SUCCESS_TYPE} message="testing" />);
    wrapper.unmount();
  });
});
