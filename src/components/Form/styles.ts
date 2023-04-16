import styled from "styled-components";

const StyledForm = styled.form`
    display: grid;
    grid-gap: 30px;
    width: 100%;
    margin-bottom: 53px;
`;

const Title = styled.h2`
    font-size: 24px;
    font-weight: 700;
`

const StyledInput = styled.input`
    padding: 15px 0px;
    padding-left: 20px;
    font-size: 16px;
    line-height: 19.36px;
    border: 0px;
    border-radius: 10px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
`

const StyledButton = styled.button`
    padding: 15px 147px;
    font-size: 16px;
    line-height: 19.36px;
    color: #ffffff;
    background-color: #23C9FF;
    border: 0px;
    border-radius: 10px;
`

const ErrorMessage = styled.p`
    font-size: 12px;
    color: red;
`

export { StyledForm, Title, StyledButton, StyledInput, ErrorMessage };