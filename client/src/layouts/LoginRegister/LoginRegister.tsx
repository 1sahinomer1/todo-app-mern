import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        data-testid="toast"
      />
    </S.Container>
  );
};

export default LoginRegister;
