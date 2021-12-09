import styled from 'styled-components';
import { ForwardedRef } from 'react';

import { Eye, HidedEye } from 'icons';

import { colors } from 'theme';

interface InputContainerProps {
  hasValue?: string;
  error: string | undefined;
}
interface InputProps {
  ref: ForwardedRef<HTMLInputElement> | any;
}

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const InputContainer = styled.div<InputContainerProps>`
  position: relative;
  border-radius: 15px;
  border: 2px solid
    ${(p) =>
      p.error
        ? colors.failedValite
        : p.hasValue
        ? colors.successValidate
        : colors.primaryColor};

  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
export const StyledEye = styled(Eye)`
  position: absolute;
  right: 10px;
  cursor: pointer;
`;
export const StyledHiddenEye = styled(HidedEye)`
  position: absolute;
  right: 10px;
  cursor: pointer;
`;
export const StyledInput = styled.input<InputProps>`
  padding: 13px 25px;
  border: none;
`;
export const Error = styled.p`
  color: red;
`;
export const Label = styled.h3`
  color: ${colors.primaryColor};
  font-weight: 600;
  margin: 5px 0;
`;
