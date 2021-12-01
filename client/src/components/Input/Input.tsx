import { forwardRef, useState } from 'react';

import * as S from './styles';

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  hasValue: string;
  error?: string | undefined;
  label?: string;
  type?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, hasValue, type, error, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(type);

    return (
      <S.InputWrapper>
        <S.Label>{label}</S.Label>
        <S.InputContainer hasValue={hasValue} error={error}>
          <S.StyledInput type={showPassword} ref={ref} {...props} />
          {type === 'password' ? (
            showPassword === 'password' ? (
              <S.StyledEye
                data-testid="eye"
                onClick={() => setShowPassword('text')}
              />
            ) : (
              <S.StyledHiddenEye
                data-testid="hiddedEye"
                onClick={() => setShowPassword('password')}
              />
            )
          ) : null}
        </S.InputContainer>
        <S.Error>{error}</S.Error>
      </S.InputWrapper>
    );
  }
);

export default Input;
