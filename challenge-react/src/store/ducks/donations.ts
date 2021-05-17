import { AnyAction, Store } from 'redux';

/** interface to describe the donation state */
export interface DonationState {
  donate: number;
  message: string;
}

/** The reducer name */
export const reducerName = 'donation';

/** actions types */

/** UPDATE_TOTAL_DONATE action types */
export const UPDATE_TOTAL_DONATE = 'opn/reducer/donation/UPDATE_TOTAL_DONATE';

/** UPDATE_MESSAGE action types */
export const UPDATE_MESSAGE = 'opn/reducer/donation/UPDATE_MESSAGE';

/** action creators interfaces */

/** interface for UPDATE_TOTAL_DONATE action */
export interface UpdateTotalDonateAction extends AnyAction {
  amount: number;
  type: typeof UPDATE_TOTAL_DONATE;
}

/** interface for UPDATE_MESSAGE action */
export interface UpdateMessageAction extends AnyAction {
  message: string;
  type: typeof UPDATE_MESSAGE;
}

/** Create type for donation reducer actions */
export type DonationActionTypes =
  | UpdateTotalDonateAction
  | UpdateMessageAction
  | AnyAction;

/** action creators */

/**
 * updates the totatl donations count by the provided amount
 * @param {number} amount - the amount that needs to be added
 * @returns {UpdateTotalDonateAction} - an action to increment the donation count by the passed amount
 */
export const updateTotalDonateAction = (
  amount: number
): UpdateTotalDonateAction => ({
  amount,
  type: UPDATE_TOTAL_DONATE,
});

/**
 * sets the requested message on store
 * @param message - the message to be set
 * @returns {UpdateMessageAction} - an action to set the message to the store
 */
export const updateMessageAction = (message: string): UpdateMessageAction => ({
  message,
  type: UPDATE_MESSAGE,
});

/** the reducer */

/** initial Donation state */
const initialState: DonationState = { donate: 0, message: '' };

/** the donation reducer function */
export default function reducer(
  state: DonationState = initialState,
  action: DonationActionTypes
): DonationState {
  switch (action.type) {
    case UPDATE_TOTAL_DONATE:
      return Object.assign({}, state, {
        donate: state.donate + action.amount,
      });
    case UPDATE_MESSAGE:
      return Object.assign({}, state, {
        message: action.message,
      });
    default:
      return state;
  }
}

/** selectors */

/**
 * returns the existing donation count
 * @param {Partial<Store>} state - the existing store state
 * @returns {number} - the existing donation in store
 */
export function getDonationCount(state: Partial<Store>): number {
  return state[reducerName].donation;
}

/**
 * returns the existing message
 * @param {Partial<Store>} state - the existing store state
 * @returns {string} - the existing message in store
 */
export function getDonationMessage(state: Partial<Store>): string {
  return state[reducerName].message;
}
