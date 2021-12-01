import styled from 'styled-components';

import { colors } from 'theme';

export const Redirect = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;
export const LinkText = styled.p`
  color: ${colors.primaryColor};
  cursor: pointer;
  font-weight: bold;
`;
export const Form = styled.form`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
`;
