import styled from 'styled-components';
import { ReactComponent as SearchIconSvg } from '../../assets/icons/search.svg';

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const SearchIcon = styled(SearchIconSvg)`
  font-size: 0.9rem;
  position: absolute;
  left: 10px;
`;

export const Input = styled.input`
  padding: .4rem 1rem .4rem 2rem;
  border-radius: 20px;
  width: 12rem;
  font-size: 0.8rem;
  font-family: 'Montserrat-SemiBold';
  border: 0;
  outline: 0;
  ::placeholder {
    color: #333;
  }
`;
