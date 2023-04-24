import styled from "styled-components";

const BudgetWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 32px 20px;
  background-color: #7cc6fe;
  border-radius: 10px;
`;

const BudgetButton = styled.button`
  padding: 10px 30px;
  background-color: #ffffff;
  font-size: 14px;
  border: 0px;
  border-radius: 10px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 500;
`;

const BudgetForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  width: 100%;
`;

const BudgetInput = styled.input`
  font-size: 20px;
  background-color: #7cc6fe;
  color: rgba(255, 255, 255, 0.6);
  border: 0px;
`;

export { BudgetWrapper, BudgetButton, Title, BudgetForm, BudgetInput };
