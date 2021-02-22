import ApiRequest from './request';
import baseUrl from './url';

const API = {};

// Customer
API.customer = {
  login: ApiRequest.post(baseUrl.customer.login),
  logout: ApiRequest.post(baseUrl.customer.logout),
  register: ApiRequest.post(baseUrl.customer.register),
  getSeller: ApiRequest.get(baseUrl.customer.seller),
};

export default API;
