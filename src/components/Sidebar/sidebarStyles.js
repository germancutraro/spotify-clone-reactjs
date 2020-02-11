import styled from 'styled-components';

export const SideContainer = styled.div`
  width: 150px;
  height: 100vh;
  background-color: #121212;
  display: flex;
  justify-content: flex-start;
`;

export const Items = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem;
  height: 2em;
  width: 100%;
  cursor: pointer;
`;

export const ItemText = styled.p`
  color: #b3b3b3;
  font-size: 0.9rem;
  font-weight: 700;
  padding: 0.6em;
  &:hover {
    color: #fff;
  }
`;
