import styled from 'styled-components';
import { ReactComponent as PlayIcon } from '../../assets/icons/play.svg';
import { EllipsisTwoLines } from '../Text/textStyles';

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

export const ImageContainer = styled.div`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  height: 0;
  width: 100%;
  padding-top: 100%;
  position: relative;
  background-color: #333;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
`;

export const PlayIconContainer = styled(PlayIcon)``;

export const Title = styled.h3`
  ${EllipsisTwoLines}
  margin: .75rem 0 .25rem;
  width: 100%;
  text-align: center;
  font-size: 14px;
`;
