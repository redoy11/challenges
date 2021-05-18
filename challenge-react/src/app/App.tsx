import React from 'react';
import fetch from 'isomorphic-fetch';
import { summaryDonations } from '../utils/helpers';
import Card, { CharityItem } from '../components/card/Card';

const App: React.FC = () => {
  const [charities, setCharities] = React.useState<CharityItem[]>([]);

  React.useEffect(() => {
    fetch('http://localhost:3001/charities')
      .then(function (resp) {
        return resp.json();
      })
      .then(function (data) {
        setCharities(data);
      });

    fetch('http://localhost:3001/payments')
      .then(function (resp) {
        return resp.json();
      })
      .then(function (data) {
        /** TODO: update donation count in store */
        summaryDonations(data.map((item) => item.amount));
      });
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
