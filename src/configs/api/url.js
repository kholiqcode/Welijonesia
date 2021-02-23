import appConfig from './constant';

export const config = appConfig;

const baseUrl = {
  customer: {
    login: `${config.url.api}/customer/login`,
    logout: `${config.url.api}/customer/logout`,
    register: `${config.url.api}/customer/register`,
    activation: `${config.url.api}/customer/verification`,
    resend: `${config.url.api}/customer/resend`,
    seller: `${config.url.api}/customer/seller`,
  },
};

export default baseUrl;
