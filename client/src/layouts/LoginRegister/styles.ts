import styled from 'styled-components';

import { colors } from 'theme';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const TopTextArea = styled.div`
  color: ${colors.primaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 25px;
  line-height: 33px;
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 25px;
`;
