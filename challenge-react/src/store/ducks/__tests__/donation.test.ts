/* eslint-disable @typescript-eslint/no-explicit-any */
import store from '../..';
import {
  ERROR_TYPE,
  getDonationCount,
  getDonationMessage,
  resetDonationAction,
  SUCCESS_TYPE,
  updateMessageAction,
  updateTotalDonateAction,
} from '../donations';

describe('ducks/donations', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    (store as any).dispatch(resetDonationAction());
  });

  it('selectors work for empty initialState', () => {
    expect(getDonationCount((store as any).getState())).toEqual(0);
    expect(getDonationMessage((store as any).getState()).description).toEqual(
      ''
    );
    expect(getDonationMessage((store as any).getState()).type).toEqual(
      SUCCESS_TYPE
    );
  });

  it('updates the total donations count correctly', () => {
    (store as any).dispatch(updateTotalDonateAction(10));
    expect(getDonationCount((store as any).getState())).toEqual(10);
    (store as any).dispatch(updateTotalDonateAction(30));
    expect(getDonationCount((store as any).getState())).toEqual(40);
  });

  it('updates the message object correctly', () => {
    (store as any).dispatch(
      updateMessageAction('negative message', ERROR_TYPE)
    );
    expect(getDonationMessage((store as any).getState())).toEqual({
      description: 'negative message',
      type: ERROR_TYPE,
    });
    (store as any).dispatch(
      updateMessageAction('positive message', SUCCESS_TYPE)
    );
    expect(getDonationMessage((store as any).getState())).toEqual({
      description: 'positive message',
      type: SUCCESS_TYPE,
    });
  });
});
