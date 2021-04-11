import React, { useEffect, useState } from 'react';
import { ChevronLeftIcon, ContactIcon } from '@fluentui/react-icons';

import './profile.scss';
import { Header } from '../../Core';

export default function Profile(): React.ReactElement {
  useEffect(() => {
    document.title = 'Profile';
  }, []);

  const [activeItem, setActiveItem] = useState('profile');

  return (
    <div className="appContainer">
      <Header color="profile" />
      <div className="profileContent">
        <div className="leftSidebarMenuActions">
          <button className="titleOptions" type="button">
            <ChevronLeftIcon />
            <span>Opções do perfil</span>
          </button>
          <div className="menuOptions">
            <ul>
              <li>
                <button type="button">
                  <ContactIcon />
                  Meu perfil
                </button>
              </li>
              <li>
                <button type="button">
                  <ContactIcon />
                  Alertas
                </button>
              </li>
              <li>
                <button type="button">
                  <ContactIcon />
                  Token e API
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="rightProfileContent">
          <div className="contentBox boxShadow">
            <div className="leftInputOptions">
              <h3>Meu Perfil</h3>
              <div className="inputForms">
                <label htmlFor="name">
                  Nome
                  <input type="text" id="name" className="text-box" />
                </label>
                <label htmlFor="lastName">
                  Sobrenome
                  <input type="text" id="lastName" className="text-box" />
                </label>
              </div>
              <div className="inputForms">
                <label htmlFor="email">
                  E-mail
                  <input type="text" id="email" className="text-box" />
                </label>
              </div>
              <div className="inputForms">
                <label htmlFor="phone_number">
                  Telefone
                  <input type="text" id="phone_number" className="text-box" />
                </label>
                <label htmlFor="alternative_phone_number">
                  Telefone Alternativo
                  <input type="text" id="alternative_phone_number" className="text-box" />
                </label>
              </div>
              <div className="inputForms">
                <label htmlFor="genre">
                  Gênero
                  <input type="text" id="genre" className="text-box" />
                </label>
              </div>
              <div className="inputForms">
                <label htmlFor="zip_code">
                  CEP
                  <input type="text" id="zip_code" className="text-box" />
                </label>
              </div>
              <div className="inputForms">
                <label htmlFor="street">
                  Endereço
                  <input type="text" id="street" className="text-box" />
                </label>
                <label htmlFor="house_number">
                  Número
                  <input type="text" id="house_number" className="text-box" />
                </label>
              </div>
              <div className="inputForms">
                <label htmlFor="apt_number">
                  Número Apartamento
                  <input type="text" id="apt_number" className="text-box" />
                </label>
                <label htmlFor="address_complement">
                  Complemento
                  <input type="text" id="address_complement" className="text-box" />
                </label>
              </div>
              <div className="inputForms">
                <label htmlFor="city">
                  Cidade
                  <input type="text" id="city" className="text-box" />
                </label>
                <label htmlFor="state">
                  Estado
                  <input type="text" id="state" className="text-box" />
                </label>
              </div>
              <div className="inputForms">
                <label htmlFor="country">
                  País
                  <input type="text" id="country" className="text-box" />
                </label>
              </div>
            </div>
            <div className="rightProfileAvatar">
              <button type="button" className="transparent changeAvatarImage">
                <img src="../../../../assets/images/avatar.webp" alt="Avatar" />
              </button>
              <button type="button" className="primary changeAvatar boxShadow">Alterar imagem</button>
              <button type="button" className="danger removeAvatar boxShadow">Remover imagem</button>
            </div>
            <div className="saveAction">
              <button type="button" className="primary saveProfile boxShadow">
                Salvar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
