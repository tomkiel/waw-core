import React, { useEffect, useState } from 'react';
import { BackIcon } from '@fluentui/react-icons';

import { User } from '../../store/ducks/users/types';

interface OwnProps {
  user: User;
}

export default function Login({ user }: OwnProps): JSX.Element {
  useEffect(() => {
    document.title = 'Login';
  });

  const [viewPasswordInput, setviewPasswordInput] = useState(false);

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="login-header">
          <a href="d#" className="logo-url-action">
            <img src="logod.png" alt="App Logo" />
          </a>
        </div>
        <div className="login-content">
          <div className={`login-username animate ${viewPasswordInput ? 'inactive' : 'active'}`}>
            <div className="input-username">
              <h4>Entrar</h4>
              <input type="text" className="text-box" />
            </div>
            <div className="create-account">
              <span>Não tem uma conta?</span>
              <a href="http://#" className="a-link">Crie uma!</a>
            </div>
            <div className="help">
              <a href="http://#">Redefinir senha?</a>
            </div>
            <div className="help">
              <a href="http://#">Precisa de ajuda?</a>
            </div>
            <div className="to-password">
              <button className="primary" type="submit" onClick={() => setviewPasswordInput(!viewPasswordInput)}>
                Próximo
              </button>
            </div>
          </div>
          <div className={`login-confirm animate ${viewPasswordInput ? 'active' : 'inactive'}`}>
            <div className="back-to-username">
              <button className="navigate transparent" type="button" onClick={() => setviewPasswordInput(!viewPasswordInput)}>
                <BackIcon />
              </button>
              <span className="username">email@email.com</span>
            </div>
            <div className="input-password">
              <h4>Senha</h4>
              <input type="password" className="text-box" />
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
}
