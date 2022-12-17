let api = ""; //"http://localhost:6068";

// let dimeDocsHost = "https://dime-xai.github.io";
let kolloqeDocsHost = "https://kolloqe.github.io";

export const configs = {
  api: api,
  explainEndpoint: `${api}/api/dime/explain`,
  abortExplainEndpoint: `${api}/api/dime/abort`,
  statsEndpoint: `${api}/api/dime/stats`,
  modelEndpoint: `${api}/api/dime/model`,
  explanationEndpoint: `${api}/api/dime/explanation`,
  visualizationEndpoint: `${api}/api/dime/explanation/visualize`,
  configEndpoint: `${api}/api/dime/configs`,

  // dimeDocsHost: `${dimeDocsHost}/`,
  // dimeDocsMatrix: `${dimeDocsHost}/compatibility-matrix`,
  // dimeDocsDIET: `${dimeDocsHost}/custom-diet`,
  // dimeConfigs: `${dimeDocsHost}/dime-configs`,
  // dimeVersion: `1.0.0`,
  // dimeGitHub: `https://www.github.com/dime-xai`,
  
  kolloqeDocsHost: `${kolloqeDocsHost}/`,
  kolloqeDocsMatrix: `${kolloqeDocsHost}/compatibility-matrix`,
  kolloqeDocsXAI: `${kolloqeDocsHost}/dev-console/evaluating/xai`,
  kolloqeVersion: `1.0.0`,
  kolloqeGitHub: `https://www.github.com/kolloqe`,

  snackbarVerticalPosition: "bottom",
  snackbarHorizontalPostion: "left",
  getModelListEnpoint: `${api}/api/rasac/config/update`,
  getLatestModelEndpoint: `${api}/api/rasac/model/latest`,
  getModelCurveDatapointsEndpoint: `${api}/api/rasac/model/curve/`,
  getIntentsEndpoint: `${api}/api/rasac/intent`,
  deleteModelEndpoint: `${api}/api/rasac/model/`,
  downloadModelEndpoint: `${api}/api/rasac/download/`,
  trainModelEndpoint: `${api}/api/rasac/config/update`,
  getModelConfigEndpoint: `${api}/api/rasac/model/config/`,
  abortTrainEndpoint: `${api}/api/rasac/config/abort`,
  getModelNamesEndpoint: `${api}/api/rasac/model/all`,
  annotationsUIEndpoint: `${api}/annotations_ui`,
  saveAnnotatedNLUFilesEndpoint: `${api}/api/siena/save`,
  exportAnnotatedNLUFilesEndpoint: `${api}/api/siena/export`,
  exportKBEndpoint: `${api}/api/siena/knowledge/export`,
  importKBEndpoint: `${api}/api/siena/knowledge/upload`,
};

export const docLinks = {
  pipelineConfig: `${kolloqeDocsHost}/dev-console/building/pipeline-config`,
  policyConfig: `${kolloqeDocsHost}/dev-console/building/policy-config`
}

export const localStorageKeys = {
  kolloqeWidgetOpen: "kolloqeWidgetOpen",
  kolloqeChatSession: "kolloqeChatSession",
  kolloqeLocalChatSession: "kolloqeLocalChatSession",
  kolloqeSelectedLang: "kolloqeSelectedLang"
}

export const webchatConfigs = {
  initPayload: "/get_started",
  urlEndpoint: "http://localhost:5005",
  socketPath: "/socket.io/",
  title: "Kolloqe ⚡",
  customData: {"language": "en"},
  docViewer: true,
  subtitle: null,
  inputTextFieldHint: "Type a message",
  hideWhenNotConnected: true,
  // connectOn
  // onSocketEvent: {
  //   'bot_uttered': () => console.log('the bot said something'),
  //   'connect': () => console.log('connection established'),
  //   'disconnect': () => doSomeCleanup(),
  // },
  embedded: false,
  showFullScreenButton: false,
  displayUnreadCount: false,
  showMessageDate: false,
  // customMessageDelay
  // params: {
  //   images: {
  //     dims: {
  //       width: 300,
  //       height: 200
  //     }
  //   }
  // },
  storage: "local",
  customComponent: null,
  onWidgetEvent: {},
  linkRegex: /(\[[^[\]]+\]\([^()\s]+\))/g,
  subLinkRegex: /\[([^[\]]+)\]\(([^()\s]+)\)/g,
}

export const kolloqe_ascii = `
█▄▀ █▀█ █░░ █░░ █▀█ █▀█ █▀▀
█░█ █▄█ █▄▄ █▄▄ █▄█ ▀▀█ ██▄
`;


// https://dev.to/rajeshroyal/reactjs-disable-consolelog-in-production-and-staging-3l38
export const GlobalDebug = (function () {
  var savedConsole = console;
  /**
  * @param {boolean} debugOn
  * @param {boolean} suppressAll
  */
  return function (debugOn, suppressAll) {
    var suppress = suppressAll || false;
    if (debugOn === false) {
      // supress the default console functionality
      // eslint-disable-next-line
      console = {};
      console.log = function () { };
      // supress all type of consoles
      if (suppress) {
        console.info = function () { };
        console.warn = function () { };
        console.error = function () { };
      } else {
        console.info = savedConsole.info;
        console.warn = savedConsole.warn;
        console.error = savedConsole.error;
      }
    } else {
      // eslint-disable-next-line
      console = savedConsole;
    }
  };
})();
