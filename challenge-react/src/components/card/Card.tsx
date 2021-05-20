import React from 'react';
import { INITIAL_SELECTED_DONATION_AMOUNT } from '../../configs/constants';
import { POST, requestService } from '../../utils/requests';
import { SERVER_PAYMENTS_ENDPOINT } from '../../configs/endpoints';
import { connect } from 'react-redux';
import { updateTotalDonateAction } from '../../store/ducks/donations';
import { CancelButton, CardContainer } from './styles';
import CardDisplay from '../cardDisplay/CardDisplay';
import CardPayment from '../cardPayment/CardPayment';

/** interface to describe the Charity item object */
export interface CharityItem {
  id: string;
  name: string;
  image: string;
  currency: string;
}

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

  /** manages where the payment container is visible or not */
  const [isPaymentVisible, setIsPaymentVisible] =
    React.useState<boolean>(false);

  /** handlers */

  /** commits the payment to the server */
  const handlePay = async () => {
    try {
      await requestService(POST, SERVER_PAYMENTS_ENDPOINT, {
        charitiesId: item.id,
        amount: selectedAmount,
        currency: item.currency,
      });
      updateTotalDonateActionCreator(selectedAmount);
      setIsPaymentVisible(false);
      setSelectedAmount(INITIAL_SELECTED_DONATION_AMOUNT);
    } catch (exception) {
      console.error(exception);
    }
  };

  /** displays the payment container */
  const displayPaymentHandler = () => {
    setIsPaymentVisible(true);
  };

  /**
   * sets the requested amount as selected amount
   * @param requestedAmount - the requested amount to set
   */
  const onChangeHandler = (requestedAmount: number) =>
    setSelectedAmount(requestedAmount);

  /** hides the payment container */
  const hidePaymentDisplay = () => {
    setIsPaymentVisible(false);
    setSelectedAmount(INITIAL_SELECTED_DONATION_AMOUNT);
  };

  return (
    <CardContainer>
      {isPaymentVisible && (
        <React.Fragment>
          <CancelButton onClick={hidePaymentDisplay}>x</CancelButton>
          <CardPayment
            id={item.id}
            currency={item.currency}
            selected={selectedAmount}
            onChangeHandler={onChangeHandler}
            confirmHandler={handlePay}
          />
        </React.Fragment>
      )}
      <CardDisplay
        name={item.name}
        image={item.image}
        donateHandler={displayPaymentHandler}
      />
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
