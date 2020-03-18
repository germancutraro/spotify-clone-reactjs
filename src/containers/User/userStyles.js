import styled from 'styled-components';

export const UserContainer = styled.div`
  padding: 0 2rem 2rem;
`;

export const UserHeader = styled.header`
  display: flex;
  flex-direction: column;
  padding: 2rem 5rem;
  align-items: center;
`;

export const UserImage = styled.img`
  background-color: #282828;
  height: 200px;
  width: 200px;
  margin: 10px 0;
  border-radius: 100%;
  object-fit: cover;
`;

export const UserName = styled.h1`
  color: #fff;
  text-align: center;
  font-size: 2.25rem;
  line-height: 44px;
  letter-spacing: -0.005rem;
  font-weight: 900;
  margin-top: 2rem;
`;
