const activeConfig = 'dev';

const constants = {
  dev: {
    url: {
      api: 'http://192.168.100.143:8000',
      assets: '',
      origin: '',
    },
  },

  production: {
    url: {
      api: '',
      assets: '',
      origin: '',
    },
  },
};

const appConfig = constants[activeConfig];

export default appConfig;
