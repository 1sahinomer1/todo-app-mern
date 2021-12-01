import * as S from './styles';

interface ButtonProps {
  children: string;
}

const Button = ({ children, ...props }: ButtonProps) => {
  return <S.Button>{children}</S.Button>;
};

export default Button;
