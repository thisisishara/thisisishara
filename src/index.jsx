import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import { webchatConfigs } from './configs';
 
const root = ReactDOM.createRoot(document.getElementById('reactFrontendContainer'));
root.render(
  <React.StrictMode>
    {/* <App
      notify={false}
      appTheme={window.appTheme || "dark"}
      appEnv={window.appEnv || "prod"}
      appSinhala={Boolean(window.appSinhala) || true}
      appKeyboard={window.appKeyboard || "prod"}
      webchatConfigs={{ 
        initPayload: window.webchatInitPayload || webchatConfigs.initPayload, 
        urlEndpoint: window.webchatURLEndpoint || webchatConfigs.urlEndpoint,
        socketPath: window.webchatSocketPath || webchatConfigs.socketPath,
        customData: webchatConfigs.customData,
        title: window.webchatTitle || webchatConfigs.title,
        subtitle: window.webchatSubtitle || webchatConfigs.subtitle,
        docViewer: window.webchatDocViewer || webchatConfigs.docViewer,
        hint: window.webchatInputHint || webchatConfigs.inputTextFieldHint,
        embedded: window.webchatEmbedded || webchatConfigs.embedded,
        fullScreen: window.webchatFullScreenButton || webchatConfigs.showFullScreenButton,
        unreadCount: window.webchatUnreadCount || webchatConfigs.displayUnreadCount,
        messageDate: window.webchatMessageDate || webchatConfigs.showMessageDate,
        storage: window.webchatStorage || webchatConfigs.storage,
      }}
    /> */}
  </React.StrictMode>
);