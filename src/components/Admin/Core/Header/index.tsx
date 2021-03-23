/* eslint-disable object-curly-newline */
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  ArrowUpRightIcon,
  ClosePaneIcon,
  ContactIcon,
  RingerIcon,
  SettingsIcon,
} from '@fluentui/react-icons';

import { DashIcon } from '../../../Icons';

import * as globalActions from '../../../../store/ducks/global/actions';
import * as authActions from '../../../../store/ducks/auth/actions';
import { ApplicationState } from '../../../../store';
import { IGlobalState } from '../../../../store/ducks/global/types';

import './header.scss';

interface IHeader {
  color: string;
}

export default function Header({ color }: IHeader): React.ReactElement {
  useEffect(() => {
    document.title = 'Home';
  }, []);

  const history = useHistory();
  const services = [
    { id: 1, label: 'E-mails', icon: 'assets/images/enviar.svg', route: '/' },
    { id: 2, label: 'Sites', icon: 'assets/images/empilhados.svg', route: 'websites' },
    { id: 3, label: 'Bancos de dados', icon: 'assets/images/servidor-sql.svg', route: '/' },
    { id: 4, label: 'Arquivos', icon: 'assets/images/pasta.svg', route: '/' },
    { id: 5, label: 'Relatórios', icon: 'assets/images/grafico.svg', route: '/' },
    { id: 6, label: 'Financeiro', icon: 'assets/images/dolar.svg', route: '/' },
    { id: 7, label: 'Ajuda', icon: 'assets/images/socorro.svg', route: '/' },
  ];

  const globalState: IGlobalState = useSelector((state: ApplicationState) => state.global);
  const dispatch = useDispatch();

  function toggleLeftSidebar(): void {
    dispatch(globalActions.viewLeftSidebarAction(!globalState.viewLeftSidebar));
  }

  function toggleUserSidebar(): void {
    dispatch(globalActions.viewUserSidebarAction(!globalState.viewUserSidebar));
  }

  function toRoute(route: string) {
    history.push(route);
  };

  function toLogout() {
    dispatch(authActions.authLogoutRequest());
  };

  return (
    <div className={`header ${color}`}>
      <nav className="navHeader">
        <div className="navBrand">
          <div className="dashAction">
            <button type="button" className="openDash" onClick={() => toggleLeftSidebar()}>
              <DashIcon />
            </button>
          </div>
          <div className="brandText">
            <div className="container">
              <button type="button" className="anchor" onClick={() => toRoute('/admin')}>
                <span> awadmin host</span>
              </button>
            </div>
          </div>
          <div className={`dashOptionsList animate ${globalState.viewLeftSidebar ? 'active' : 'hidden'}`}>
            <div className="dashBar">
              <div className="dashItem">
                <button type="button" className="openDash" onClick={() => toggleLeftSidebar()}>
                  <DashIcon />
                </button>
              </div>
              <div className="dashItem">
                <button type="button" className="openDashFullScreen">
                  <span>awadmin</span>
                  <ArrowUpRightIcon />
                </button>
              </div>
            </div>

            <div className="dashMain">
              <div className="dashTitle">
                <span>Meus serviços</span>
              </div>
              <div className="listApps">

                {services.map((service) => (
                  <button type="button" className="app" onClick={() => toRoute(service.route)} key={service.id}>
                    <img className="appIcon" src={service.icon} alt={service.label} />
                    <span className="appLabel">{service.label}</span>
                  </button>
                ))}

              </div>
              <div className="dashCopyright">
                <a href="http://#" className="copyrightAnchor">© 2020 awadmin/Regis Tomkiel</a>
              </div>
            </div>

          </div>
        </div>

        <div className="navActions">
          <div />
          <div className="appActions">
            <div className="item">
              <button type="button">
                <div className="icon navSettings">
                  <SettingsIcon />
                </div>
              </button>
            </div>
            <div className="item">
              <button type="button">
                <div className="icon navNotifications">
                  <RingerIcon />
                </div>
              </button>
              <div className="navNotificationStatus">
                <span className="ntiCounter">9</span>
              </div>
            </div>
            <div className={`item user ${globalState.viewUserSidebar ? 'active' : 'hidden'}`}>
              <button type="button" onClick={() => toggleUserSidebar()}>
                <div className="icon userIcon">
                  <ContactIcon />
                </div>
              </button>
              <div className="userStatus" />
              <div className={`userSidebar ${globalState.viewUserSidebar ? 'active' : 'hidden'}`}>
                <div className="userSidebarHeader">
                  <h1 className="titleSidebar">Minha conta</h1>
                  <div className="closeSidebar">
                    <button type="button" onClick={() => toggleUserSidebar()}>
                      <ClosePaneIcon />
                    </button>
                  </div>
                </div>
                <div className="sidebarContent">
                  <div className="sidebarAvatar">
                    <div className="icon">
                      <ContactIcon />
                    </div>
                  </div>
                  <div className="sidebarResume">
                    <span className="userName">User Name</span>
                    <span className="userEmail">user@email.com</span>
                    <div className="moreInfos">
                      <button type="button" className="anchor" onClick={() => toRoute('profile')}>
                        Meu perfil
                      </button>
                      <button type="button" className="anchor" onClick={() => toRoute('account')}>
                        Minha Conta
                      </button>
                      <button type="button" className="anchor" onClick={() => toLogout()}>
                        Sair
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
