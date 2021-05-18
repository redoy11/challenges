import React from 'react';
import styled from 'styled-components';

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
}

/** constants */

/** the initial selected amount */
const INITIAL_SELECTED_AMOUNT = 10;

/** the default amount list */
const DEFAULT_DONATE_AMOUNTS = [10, 20, 50, 100, 500];

/** component */

const Card: React.FC<CardProps> = (props: CardProps) => {
  const { item } = props;

  /** states */

  /** manages the selected amount state */
  const [selectedAmount, setSelectedAmount] = React.useState<number>(
    INITIAL_SELECTED_AMOUNT
  );

  /** handlers */

  const handlePay = () => {
    /** TODO: write the method */
  };

  const payments = DEFAULT_DONATE_AMOUNTS.map((amount, index) => (
    <label key={index}>
      <input
        type="radio"
        name={item.id}
        checked={amount === selectedAmount}
        onClick={function () {
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

export default Card;
