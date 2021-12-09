import { ButtonHTMLAttributes, FC } from 'react';
import * as S from './styles';

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  onClick,
  ...props
}) => {
  return (
    <S.Button onClick={onClick} {...props}>
      {children}
    </S.Button>
  );
};

export default Button;
