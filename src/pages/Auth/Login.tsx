import React from 'react';

interface LoginData {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  return (
    <div className="login-page">
      <div className="login-box">
        <div className="login-header">
          <a href="d#" className="logo-url-action">
            <img src="logod.png" alt="App Logo" />
          </a>
        </div>
        <div className="login-content">
          <div className="input-username">
            <h4>Entrar</h4>
            <input type="text" className="text-box"></input>
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
            <button className="primary" type="submit">
              Próximo
            </button>
          </div>
        </div>
      </div>
      <div className="help-footer">
        <div className="help-content">
          <a href="http://#">Termos de uso</a>
          <a href="http://#">Poítica de privacidade</a>
        </div>
      </div>
    </div>
  );
}

export default Login;