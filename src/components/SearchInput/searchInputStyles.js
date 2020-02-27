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
  color: #000;
  padding: 6px 48px;
  height: 40px;
  line-height: 40px;
  width: 100%;
  border: 0;
  border-radius: 500px;
  outline: none;
  font-size: 14px;
  letter-spacing: 0.015em;
`;
