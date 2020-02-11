import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const SearchIcon = styled.p`
  color: #333;
  font-size: 0.9rem;
  position: absolute;
  left: 10px;
  top: -10px;
`;

export const Input = styled.input`
  padding-left: 35px;
  border-radius: 20px;
  height: 25px;
  width: 12em;
  font-size: 0.9em;
  font-weight: 400;
  border: none;
  outline: none;
  ::placeholder {
    color: #333;
  }
`;
