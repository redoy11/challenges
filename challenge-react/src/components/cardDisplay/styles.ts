import styled from 'styled-components';

export const CardDisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardDescription = styled.div`
  display: flex;
  align-items: center;
  min-height: 100px;
  padding: 0 20px;
  justify-content: space-between;
  color: #656e88;
`;

export const DonateButton = styled.button`
  margin-left: 20px;
  padding: 7px;
  color: white;
  background: #656e88;
  border: 1px solid #656e88;
  border-radius: 5px;
  min-width: 60px;

  &:hover {
    cursor: pointer;
    background: #4388e7;
    border: 1px solid #4388e7;
  }
`;
