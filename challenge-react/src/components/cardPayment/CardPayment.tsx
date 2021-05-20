import React from 'react';
import { DEFAULT_DONATION_AMOUNTS } from '../../configs/constants';
import { DonateButton } from '../cardDisplay/styles';
import { CardPaymentContainer, Row } from './styles';

/** interface to describe CardPayment */
interface CardPaymentProps {
  id: string;
  selected: number;
  currency: string;
  onChangeHandler: (requested: number) => void;
  confirmHandler: () => void;
}

const CardPayment: React.FC<CardPaymentProps> = (props: CardPaymentProps) => {
  const { id, selected, currency, onChangeHandler, confirmHandler } = props;

  return (
    <CardPaymentContainer>
      <Row>Select the amount to donate ({currency})</Row>
      <Row>
        {DEFAULT_DONATION_AMOUNTS.map((amount, index) => (
          <label key={index}>
            <input
              type="radio"
              name={id}
              checked={amount === selected}
              onChange={function () {
                onChangeHandler(amount);
              }}
            />
            {amount}
          </label>
        ))}
      </Row>
      <Row>
        <DonateButton onClick={confirmHandler}>Pay</DonateButton>
      </Row>
    </CardPaymentContainer>
  );
};

export default CardPayment;
