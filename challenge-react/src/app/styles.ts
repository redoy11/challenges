import styled from 'styled-components';

export const AppHeader = styled.div`
  display: flex;
  padding: 0 7%;
  background: white;
  align-items: center;
  justify-content: space-between;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;

  h1 {
    margin-left: 20px;
    color: #656e88;
  }

  p {
    margin-right: 20px;
    color: #cacaca;
  }

  span {
    font-size: 1.8rem;
    font-weight: 700;
    color: #656e88;
  }
`;

export const AppBody = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px 7%;
`;
