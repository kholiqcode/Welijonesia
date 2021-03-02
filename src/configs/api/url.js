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
    review: `${config.url.api}/customer/review`,
    favorit: `${config.url.api}/customer/favorit`,
    product: `${config.url.api}/customer/product`,
    cart: `${config.url.api}/customer/cart`,
  },
};

export default baseUrl;
