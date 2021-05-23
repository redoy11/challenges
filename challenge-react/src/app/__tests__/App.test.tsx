/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import App from '../App';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { AppBody, AppHeader } from '../styles';

/** disables the warning of wrapping async fetch update on unmount state */
const waitForComponentToPaint = async (wrapper: any) => {
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
    wrapper.update();
  });
};

describe('App', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('renders without crashing', async () => {
    (global as any).fetch = jest.fn(() => {
      return Promise.resolve(
        Promise.resolve({
          json: () => Promise.resolve([]),
          ok: true,
        })
      );
    });

    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );

    /** checks whether the App header is present */
    expect(wrapper.find(AppHeader)).toHaveLength(1);

    /** checks whether the App Body is present */
    expect(wrapper.find(AppBody)).toHaveLength(1);

    await waitForComponentToPaint(wrapper);
    wrapper.unmount();
  });
});
