import styled from 'styled-components';

export const DownloadContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
  height: 80%;
`;

export const DownloadImage = styled.img``;

export const DownloadTitle = styled.h1`
  font-size: 28px;
  line-height: 1.6;
  font-weight: 600;
  letter-spacing: -0.36px;
  color: #fff;
  margin: 16px 0;
`;

export const DownloadSubtitle = styled.h2`
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.015em;
  font-weight: 400;
  margin-bottom: 24px;
`;

export const DownloadButton = styled.a`
  background-color: #1db954;
  transition: all 33ms cubic-bezier(0.3, 0, 0, 1);
  will-change: transform;
  white-space: nowrap;
  padding: 8px 34px;
  display: inline-block;
  cursor: pointer;
  text-align: center;
  font-size: 12px;
  line-height: 18px;
  font-weight: 700;
  letter-spacing: 1.76px;
  text-transform: uppercase;
  border: 2px solid transparent;
  border-radius: 500px;
  color: #fff;
`;
