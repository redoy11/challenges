import React from 'react';
import {
  DEFAULT_COLOR,
  ERROR_COLOR,
  SUCCESS_COLOR,
} from '../../configs/constants';
import { ERROR_TYPE, SUCCESS_TYPE } from '../../store/ducks/donations';
import { MessageContainer } from './styles';

/** interface to describe the Message props */
interface MessageProps {
  type: SUCCESS_TYPE | ERROR_TYPE;
  message: string;
}

const Message: React.FC = (props: MessageProps) => {
  const { message, type } = props;

  let color = DEFAULT_COLOR;

  /** sets the message text color based on message type */
  if (type === SUCCESS_TYPE) {
    color = SUCCESS_COLOR;
  } else if (type === ERROR_TYPE) {
    color = ERROR_COLOR;
  }

  return message !== '' ? (
    <MessageContainer style={{ color }}>{message}</MessageContainer>
  ) : null;
};

export default Message;
