import React from 'react';
import { summaryDonations } from '../utils/helpers';
import { GET, requestService } from '../utils/requests';
import Card, { CharityItem } from '../components/card/Card';
import {
  SERVER_CHARITIES_ENDPOINT,
  SERVER_PAYMENTS_ENDPOINT,
} from '../configs/endpoints';
import {
  getDonationCount,
  updateTotalDonateAction,
} from '../store/ducks/donations';
import { Store } from 'redux';
import { connect } from 'react-redux';
import { AppBody, AppHeader } from './styles';

/** interface to describe App props */
interface AppProps {
  total: number;
  updateTotalDonateActionCreator: typeof updateTotalDonateAction;
}

const App: React.FC<AppProps> = (props: AppProps) => {
  const { total, updateTotalDonateActionCreator } = props;

  /** manages the list of charities */
  const [charities, setCharities] = React.useState<CharityItem[]>([]);

  React.useEffect(() => {
    /** method to fetch existing charities from server */
    const fetchCharties = async () => {
      try {
        const charities = await requestService(GET, SERVER_CHARITIES_ENDPOINT);
        setCharities(charities);
      } catch (Exception) {
        console.error(Exception);
      }
    };

    /** method to fetch existing charities from server */
    const fetchPayments = async () => {
      try {
        const payments: any = await requestService(
          GET,
          SERVER_PAYMENTS_ENDPOINT
        );
        updateTotalDonateActionCreator(
          summaryDonations(payments.map((item) => item.amount))
        );
      } catch (Exception) {
        console.error(Exception);
      }
    };

    /** fetch existing data from server on initial load */
    fetchCharties();
    fetchPayments();
  }, []);

  return (
    <div>
      <AppHeader>
        <h1>Tamboon React</h1>
        <p>
          Total raised (THB): <span> {total}</span>
        </p>
      </AppHeader>
      <AppBody>
        {charities.map((charity: CharityItem, index: number) => (
          <Card key={index} item={charity} />
        ))}
      </AppBody>
    </div>
  );
};

/** connect the component to the store */

/** Interface to describe props from mapStateToProps */
interface DispatchedStateProps {
  total: number;
}

/** Map props to state  */
const mapStateToProps = (state: Partial<Store>): DispatchedStateProps => {
  const result = {
    total: getDonationCount(state),
  };
  return result;
};

/** map props to actions */
const mapDispatchToProps = {
  updateTotalDonateActionCreator: updateTotalDonateAction,
};

/** connect App to the redux store */
const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp;
