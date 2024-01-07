import React, { createContext, useState, useEffect } from 'react';
import {
  ScreenSpinner,
  AdaptivityProvider,
  AppRoot,
  ConfigProvider,
  Div,
  Group,
  Header,
  ModalPage,
  ModalRoot,
  Panel,
  PanelHeader,
  SimpleCell,
  SplitCol,
  SplitLayout,
  useAdaptivity,
  View,
  ViewWidth
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';


import Home from './panels/Home';
import SiteLogo from './assets/img/logo.svg';

export const AppContext = createContext({});

export const App = () => {
  const { viewWidth } = useAdaptivity();
  const isDesktop = viewWidth >= ViewWidth.TABLET;
  const [activePanel, setActivePanel] = useState('home');
  const [activeModal, setActiveModal] = useState({ modalId: null });

  const modalRoot = (
    <ModalRoot activeModal={activeModal.modalId}>
      <ModalPage
        id="imagePreview"
        onClose={() => setActiveModal({ modalId: null })}
      >
        test
      </ModalPage>
    </ModalRoot>
  );

  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <SplitLayout
            style={{ justifyContent: 'center' }}
            header={<PanelHeader separator={false} />}
            modal={modalRoot}
          >
            {isDesktop && (
              <SplitCol
                fixed
                width={320}
                maxWidth={320}
                spaced={viewWidth && viewWidth > ViewWidth.MOBILE}
              >
                <View activePanel="side">
                  <Panel id="side">
                    <PanelHeader>
                      <Div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          color: 'black',
                          cursor: 'pointer'
                        }}
                        onClick={() => setActivePanel('home')}
                      >
                        <img
                          style={{ padding: '0 10px 0 0' }}
                          width={24}
                          src={SiteLogo}
                          alt="Site logo"
                        />
                        YurtBlog
                      </Div>
                    </PanelHeader>
                    <Group mode="plain" header={<Header mode="secondary">Views</Header>}>
                      <SimpleCell onClick={() => setActivePanel('home')}>Home</SimpleCell>
                      <SimpleCell onClick={() => setActivePanel('notImplemented')}>Test</SimpleCell>
                      <SimpleCell>Hello</SimpleCell>
                      <SimpleCell>Hello</SimpleCell>
                      <SimpleCell>World</SimpleCell>
                    </Group>
                  </Panel>
                </View>
              </SplitCol>
            )}
          </SplitLayout>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};
