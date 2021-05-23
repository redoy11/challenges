import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../../store';
import Card from '../Card';
import { CardContainer } from '../styles';

describe('Card', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('renders without crashing', async () => {
    const props = {
      item: {
        id: 1,
        name: 'Baan Kru Noi',
        image: 'baan-kru-noi.jpg',
        currency: 'THB',
      },
    };
    const wrapper = mount(
      <Provider store={store}>
        <Card {...props} />
      </Provider>
    );

    /** checks whether the card payment container is present */
    expect(wrapper.find(CardContainer)).toHaveLength(1);

    wrapper.unmount();
  });
});
