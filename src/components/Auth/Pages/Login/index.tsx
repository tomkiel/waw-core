import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BackIcon } from '@fluentui/react-icons';

import * as authActions from '../../../../store/ducks/auth/actions';
import { IAuth, IAuthState } from '../../../../store/ducks/auth/types';
import { ApplicationState } from '../../../../store';

import './login.scss';

export default function Login(): React.ReactElement {
  useEffect(() => {
    document.title = 'Login';
  }, []);
  const status: IAuthState = useSelector((state: ApplicationState) => state.auth);
  const [inputs, setInputs] = useState<IAuth>({
    username: '',
    password: '',
  });
  const { username, password } = inputs;
  const dispatch = useDispatch();

  function handleChange(e: any) {
    const { name, value } = e.target;
    setInputs((input: IAuth) => ({ ...input, [name]: value }));
  }

  function toConfirmPassword() {
    dispatch(authActions.authUserExistsRequest(inputs.username));
  }

  function changePasswordInputView(view: boolean) {
    dispatch(authActions.authViewPasswordInput(view));
  }

  function handleLoginAction() {
    dispatch(authActions.authRequest(inputs));
  }

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="login-header">
          <a href="d#" className="logo-url-action">
            <img src="logod.png" alt="App Logo" />
          </a>
        </div>
        <div className="login-content">
          <div className={`login-username animate ${status.viewPasswordInput ? 'inactive' : 'active'}`}>
            <div className="input input-username">
              <h4>Entrar</h4>
              <input type="text" className="text-box" placeholder="Usuário ou e-mail" name="username" value={username} onChange={handleChange} />
              {status.error && <span className="error-message">Essa conta não existe!</span>}
            </div>
            <div className="create-account">
              <span>Não tem uma conta?</span>
              <a href="http://#" className="a-link">Crie uma!</a>
            </div>
            <div className="help">
              <a href="http://#">Redefinir senha?</a>
              <a href="http://#">Precisa de ajuda?</a>
            </div>
            <div className="to-action to-password">
              <button className="primary" type="submit" onClick={() => toConfirmPassword()}>
                Próximo
              </button>
            </div>
          </div>
          <div className={`login-confirm animate ${status.viewPasswordInput ? 'active' : 'inactive'}`}>
            <div className="back-to-username">
              <button className="navigate transparent" type="button" onClick={() => changePasswordInputView(false)}>
                <BackIcon />
              </button>
              <span className="username">
                {status.username}
              </span>
            </div>
            <div className="input input-password">
              <h4>Insira sua senha</h4>
              <input type="password" className="text-box" placeholder="Senha de acesso" name="password" value={password} onChange={handleChange} />
              {status.error && <span className="error-message">Sua conta ou senha está incorreta!</span>}
            </div>
            <div className="help">
              <a href="http://#">Esqueceu a senha?</a>
            </div>
            <div className="to-action to-confirm">
              <button className="primary" type="submit" onClick={() => handleLoginAction()}>
                Entrar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="help-footer">
        <div className="help-content">
          <a href="http://#">Termos de uso</a>
          <a href="http://#">Política de privacidade</a>
        </div>
      </div>
    </div>
  );
};
