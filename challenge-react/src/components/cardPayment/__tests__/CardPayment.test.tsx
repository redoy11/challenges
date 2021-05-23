import React from 'react';
import { mount } from 'enzyme';
import CardPayment from '../CardPayment';
import { CardPaymentContainer } from '../styles';

describe('CardPayment', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('renders without crashing', async () => {
    const props = {
      id: 1,
      selected: 10,
      currency: 'THB',
      onChangeHandler: jest.fn(),
      confirmHandler: jest.fn(),
    };
    const wrapper = mount(<CardPayment {...props} />);

    /** checks whether the card payment container is present */
    expect(wrapper.find(CardPaymentContainer)).toHaveLength(1);

    wrapper.unmount();
  });
});
