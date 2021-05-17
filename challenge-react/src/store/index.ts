import { createStore } from 'redux';
import donation, { reducerName as donationReducer } from './ducks/donations';

/** reducers */

/** initial reducers in the reducer registry */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const defaultReducers: any = {};

/** add donation reducer to registry */
defaultReducers[donationReducer] = donation;

/** store */

/** create the redux store */
const store = createStore(defaultReducers);

export default store;
