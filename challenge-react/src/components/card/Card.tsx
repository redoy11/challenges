import React from 'react';
import {
  DEFAULT_DONATION_AMOUNTS,
  INITIAL_SELECTED_DONATION_AMOUNT,
} from '../../configs/constants';
import styled from 'styled-components';
import { POST, requestService } from '../../utils/requests';
import { SERVER_PAYMENTS_ENDPOINT } from '../../configs/endpoints';
import { connect } from 'react-redux';
import { updateTotalDonateAction } from '../../store/ducks/donations';

/** interface to describe the Charity item object */
export interface CharityItem {
  id: string;
  name: string;
  image: string;
  currency: string;
}

/** styles */
const CardContainer = styled.div`
  margin: 10px;
  border: 1px solid #ccc;
`;

/** interfaces */

/** interface to describe the Card props */
interface CardProps {
  item: CharityItem;
  updateTotalDonateActionCreator: typeof updateTotalDonateAction;
}

/** component */

const Card: React.FC<CardProps> = (props: CardProps) => {
  const { item, updateTotalDonateActionCreator } = props;

  /** states */

  /** manages the selected amount state */
  const [selectedAmount, setSelectedAmount] = React.useState<number>(
    INITIAL_SELECTED_DONATION_AMOUNT
  );

  /** handlers */

  const handlePay = async () => {
    try {
      await requestService(POST, SERVER_PAYMENTS_ENDPOINT, {
        charitiesId: item.id,
        amount: selectedAmount,
        currency: item.currency,
      });
      updateTotalDonateActionCreator(selectedAmount);
    } catch (exception) {
      console.error(exception);
    }
  };

  const payments = DEFAULT_DONATION_AMOUNTS.map((amount, index) => (
    <label key={index}>
      <input
        type="radio"
        name={item.id}
        checked={amount === selectedAmount}
        onChange={function () {
          setSelectedAmount(amount);
        }}
      />
      {amount}
    </label>
  ));

  return (
    <CardContainer>
      <p>{item.name}</p>
      {payments}
      <button onClick={handlePay}>Pay</button>
    </CardContainer>
  );
};

/** connect the component to the store */

/** map props to actions */
const mapDispatchToProps = {
  updateTotalDonateActionCreator: updateTotalDonateAction,
};

/** connect Card to the redux store */
const ConnectedCard = connect(null, mapDispatchToProps)(Card);

export default ConnectedCard;
