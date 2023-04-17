import styled from "styled-components";

const ExpensesItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  border-bottom: 2px solid #CCD5FF;
`;

const ItemRightSide = styled.div`
    display: flex;
    justify-content: space-between;
`

const ExpenseName = styled.p`
    font-size: 16px;
`

const DeleteButton = styled.button`
    margin-left: 20px;
    font-size: 16px;
    background-color: #ffffff;
    border: 0px;
    color: #C884A6;
`

export { ExpensesItemWrapper, ItemRightSide, ExpenseName, DeleteButton } ;