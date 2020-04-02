import styled from 'styled-components';

export const DurationContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const VolumeContainer = styled(DurationContainer)`
  max-width: 10rem;
  margin-left: auto;
`;

export const VolumeIconContainer = styled(DurationContainer)`
  margin: 0 0.5rem;

  :hover {
    svg {
      fill: #fff;
    }
  }
`;

export const ProgressBar = styled.input`
  --value: ${({ value }) => value};
  --step: ${({ maxValue }) => 100 / (maxValue || 100)};

  height: 4px;
  width: 100%;
  border-radius: 2px;
  background-color: #404040;
  -webkit-appearance: none;
  border: 0;
  outline: 0;
  background-image: linear-gradient(
    to right,
    #b3b3b3 calc(var(--value) * calc(var(--step) * 1%)),
    #404040 0
  );

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    background-color: #b3b3b3;
    border: 0;
    border-radius: 50%;
    width: 4px;
    height: 4px;
    z-index: 100;
    transform: translateX(-20%);
  }
`;

export const ProgressBarContainer = styled.div`
  width: 100%;
  display: flex;

  :hover {
    ${ProgressBar} {
      background-image: linear-gradient(
        to right,
        #1db954 calc(var(--value) * calc(var(--step) * 1%)),
        #404040 0
      );

      ::-webkit-slider-thumb {
        transform: translateX(0);
        width: 12px;
        height: 12px;
        background-color: #fff;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
      }
    }
  }
`;

export const ProgressBarTime = styled.span`
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0.015rem;
  min-width: 40px;
  text-align: center;
`;
