import styled from 'styled-components';

export const FormContainerDiv = styled.div`
  width: 30%;
  margin: 0 auto;
  border: 2px solid lightgrey;
  border-radius: 5px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const StyledInput = styled.input`
  &:nth-child(1) {
    width: 40%;
    margin: 30px auto 10px;
    padding: 8px;
    border: none;
    border-bottom: 1px solid grey;
    font-size: 16px;
  }

  &:nth-child(2) {
    width: 40%;
    margin: 10px auto 10px;
    padding: 8px;
    border: none;
    border-bottom: 1px solid grey;
    font-size: 16px;
  }
`;

export const StyledButton = styled.button`
  width: 60%;
  background-color: dodgerblue;
  color: #fff;
  font-size: 16px;
  margin: 20px auto 20px;
  padding: 10px;
  border: none;
  border-radius: 5px;
`;