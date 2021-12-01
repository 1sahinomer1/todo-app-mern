import { layoutHeader } from 'constants/layouts/loginRegister';
import { layoutType } from 'utils/layoutType';

import * as S from './styles';

type LoginRegisterLayoutProps = {
  formType: string;
  children: JSX.Element;
};

const LoginRegister = ({ formType, children }: LoginRegisterLayoutProps) => {
  const { title, description } = layoutHeader[formType as keyof layoutType];

  return (
    <S.Container>
      <S.TopTextArea>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.TopTextArea>
      {children}
    </S.Container>
  );
};

export default LoginRegister;
