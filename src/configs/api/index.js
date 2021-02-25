import ApiRequest from './request';
import baseUrl from './url';

const API = {};

// Customer
API.customer = {
  login: ApiRequest.post(baseUrl.customer.login),
  logout: ApiRequest.post(baseUrl.customer.logout),
  register: ApiRequest.post(baseUrl.customer.register),
  activation: ApiRequest.post(baseUrl.customer.activation),
  resend: ApiRequest.post(baseUrl.customer.resend),
  getSeller: ApiRequest.get(baseUrl.customer.seller),
  getReview: ApiRequest.get(baseUrl.customer.review),
  storeOrUpdateFavorit: ApiRequest.post(baseUrl.customer.favorit),
};

export default API;
