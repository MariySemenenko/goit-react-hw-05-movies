import styled from '@emotion/styled';

export const Form = styled.form`
  margin-top: 20px;
`;

export const Input = styled.input`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  color: cornflowerblue;
  outline: none;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 0 8px cornflowerblue;
  &:hover {
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), 0 0 8px cornflowerblue;
  }
`;

export const Button = styled.button`
  margin-left: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  color: cornflowerblue;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 0 8px cornflowerblue;

  &:hover {
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), 0 0 8px cornflowerblue;
  }

  &:active {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1), 0 0 4px cornflowerblue;
  }
`;
