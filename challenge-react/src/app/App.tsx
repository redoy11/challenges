import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { summaryDonations } from 'src/utils/helpers';

const Card = styled.div`
  margin: 10px;
  border: 1px solid #ccc;
`;

const App: React.FC = () => {
  const [charities, setCharities] = React.useState<any>([]);
  const [selectedAmount, setSelectedAmount] = React.useState<any>(10);

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

  const cards = charities.map(function (item, i) {
    const payments = [10, 20, 50, 100, 500].map((amount, j) => (
      <label key={j}>
        <input
          type="radio"
          name="payment"
          onClick={function () {
            setSelectedAmount(amount);
          }}
        />
        {amount}
      </label>
    ));

    return (
      <Card key={i}>
        <p>{item.name}</p>
        {payments}
        <button
          onClick={handlePay.call(self, item.id, selectedAmount, item.currency)}
        >
          Pay
        </button>
      </Card>
    );
  });

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
      {cards}
    </div>
  );
};

/**
 * Handle pay button
 * 
 * @param {*} The charities Id
 * @param {*} amount The amount was selected
 * @param {*} currency The currency
 * 
 * @example
 * fetch('http://localhost:3001/payments', {
      method: 'POST',
      body: `{ "charitiesId": ${id}, "amount": ${amount}, "currency": "${currency}" }`,
    })
 */
function handlePay(id, amount, currency) {
  /** TODO: write the method */
}

export default App;
