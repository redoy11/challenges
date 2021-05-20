import React from 'react';
import { CardDescription, CardDisplayContainer, DonateButton } from './styles';

/** interface to describe CardDisplay props */
interface CardDisplayProps {
  name: string;
  image: string;
  donateHandler: () => void;
}

const CardDisplay: React.FC<CardDisplayProps> = (props: CardDisplayProps) => {
  const { name, image, donateHandler } = props;
  return (
    <CardDisplayContainer>
      <div>
        <img src={`/images/${image}`} width="300" height="200" alt="" />
      </div>
      <CardDescription>
        <p>{name}</p>
        <DonateButton onClick={donateHandler}>Donate</DonateButton>
      </CardDescription>
    </CardDisplayContainer>
  );
};

export default CardDisplay;
