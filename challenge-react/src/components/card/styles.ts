import styled from 'styled-components';

export const CardContainer = styled.div`
  margin: 20px;
  width: 300px;
  height: 300px;
  position: relative;
  background: white;
  border-radius: 7px;
  overflow: hidden;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  }
`;

export const CancelButton = styled.button`
  z-index: 20;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  cursor: pointer;
  color: #656e88;
  border: unset;
  background: unset;

  &:hover {
    color: #4388e7;
    background: #eaeaea;
  }
`;
