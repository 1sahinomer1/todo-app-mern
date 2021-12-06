import { Door } from 'icons';
import styled from 'styled-components';
import { colors } from 'theme';

export const Navbar = styled.div`
  background-color: ${colors.primaryColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;
export const StyledDoor = styled(Door)`
  cursor: pointer;
`;
