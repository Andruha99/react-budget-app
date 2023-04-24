import styled from "styled-components";

const RemainingCard = styled.div`
  width: 100%;
  padding: 38px 20px;
  font-size: 20px;
  font-weight: 500;
  line-height: 24.2px;
  background-color: #ccd5ff;
  border-radius: 10px;
`;

const OverSpendingCard = styled.div`
  width: 100%;
  padding: 38px 20px;
  font-size: 20px;
  font-weight: 700;
  line-height: 24.2px;
  background-color: #ff0000;
  color: #ffffff;
  border-radius: 10px;
`;

export { RemainingCard, OverSpendingCard };
