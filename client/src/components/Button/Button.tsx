import * as S from './styles';

interface ButtonProps {
  children: string;
}

const Button = ({ children, ...props }: ButtonProps) => {
  return <S.Button {...props}>{children}</S.Button>;
};

export default Button;
