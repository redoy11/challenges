import React from 'react';
import { mount } from 'enzyme';
import CardDisplay from '../CardDisplay';
import { CardDisplayContainer } from '../styles';

describe('CardDisplay', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('renders without crashing', async () => {
    const props = {
      name: 'paper-ranger',
      image: 'paper-ranger.jpg',
      donateHandler: jest.fn(),
    };
    const wrapper = mount(<CardDisplay {...props} />);

    /** checks whether the card display container is present */
    expect(wrapper.find(CardDisplayContainer)).toHaveLength(1);

    wrapper.unmount();
  });
});
