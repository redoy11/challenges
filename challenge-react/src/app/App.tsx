import React from 'react';
import { summaryDonations } from '../utils/helpers';
import { GET, requestService } from '../utils/requests';
import Card, { CharityItem } from '../components/card/Card';
import {
  SERVER_CHARITIES_ENDPOINT,
  SERVER_PAYMENTS_ENDPOINT,
} from '../configs/endpoints';

const App: React.FC = () => {
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
        summaryDonations(payments.map((item) => item.amount));
      } catch (Exception) {
        console.error(Exception);
      }
    };

    /** fetch existing data from server on initial load */
    fetchCharties();
    fetchPayments();
  }, []);

  const style = {
    color: 'red',
    margin: '1em 0',
    fontWeight: 'bold',
    fontSize: '16px',
    textAlign: 'center',
  };

  /** Todo: connect with the store */
  const donate = 0;
  const message = '';

  return (
    <div>
      <h1>Tamboon React</h1>
      <p>All donations: {donate}</p>
      <p style={style}>{message}</p>
      {charities.map((charity: CharityItem, index: number) => (
        <Card key={index} item={charity} />
      ))}
    </div>
  );
};

export default App;
