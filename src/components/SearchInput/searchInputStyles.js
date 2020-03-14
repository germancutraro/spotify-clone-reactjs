import styled from 'styled-components';
import { ReactComponent as SearchIconSvg } from '../../assets/icons/search.svg';
import { ReactComponent as CancelIconSvg } from '../../assets/icons/cancel.svg';

export const SearchFullContainer = styled.div`
  margin-right: 1rem;
  width: 100%;
`;

export const SearchContainer = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 360px;
`;

export const SearchIcon = styled(SearchIconSvg)`
  position: absolute;
  left: 12px;
`;

export const CancelIcon = styled(CancelIconSvg)`
  position: absolute;
  right: 12px;
`;

export const Input = styled.input`
  color: #000;
  padding: 0.375rem 3rem;
  height: 40px;
  line-height: 40px;
  width: 100%;
  border: 0;
  border-radius: 100px;
  outline: none;
  font-size: 13.5px;
  font-weight: 400;
  letter-spacing: 0.015rem;
  ::placeholder {
    color: #757575;
  }
`;
