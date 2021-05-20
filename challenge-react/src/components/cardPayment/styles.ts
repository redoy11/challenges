import styled from 'styled-components';

export const CardPaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 0;
  top: 0;
  left: 0;
  overflow: hidden;
  border-radius: 7px;
  background: rgba(250, 250, 250, 0.96);
  height: 100%;
  z-index: 10;
  color: #656e88;

  label {
    margin-right: 7px;
  }

  input {
    cursor: pointer;
  }
`;

export const Row = styled.div`
  margin: 10px 0;
`;
