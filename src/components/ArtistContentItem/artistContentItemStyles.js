import styled, { css } from 'styled-components';
import { EllipsisTwoLines } from '../Text/textStyles';

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  cursor: pointer;

  ${({ hasAnimation = true }) =>
    hasAnimation &&
    css`
      :hover img {
        filter: brightness(0.3);
      }
    `} :hover [data-value='play'] {
    display: flex;
  }
`;

export const ImageContainer = styled.div`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  height: 0;
  width: 100%;
  padding-top: 100%;
  position: relative;
  background-color: #333;

  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  transition: all 0.3s cubic-bezier(0.3, 0, 0, 1);
`;

export const PlayIconContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  border: 1px solid rgba(255, 255, 255, 0.3);
  width: 4rem;
  height: 4rem;
  display: none;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  transition: all 0.3s cubic-bezier(0.3, 0, 0, 1);
  box-shadow: inset 0 0 0 1px #fff, 0 0 0 1px transparent;

  :hover {
    transform: translateY(-50%) scale(1.06);
  }
`;

export const Title = styled.h3`
  ${EllipsisTwoLines}
  margin: .75rem 0 .25rem;
  width: 100%;
  text-align: center;
  font-size: 14px;
  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
`;
