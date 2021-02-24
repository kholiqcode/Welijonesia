import API from '../../configs/api';
import { setLoading, setLogged, store } from '../../modules/redux';
import { getData, handleAsync, storeData } from '../../utilities';

const { dispatch } = store;

/**
 * a Service for login
 */
export const login = async (payload = {}) => {
  dispatch(setLoading(true));
  const [res, err] = await handleAsync(API.customer.login({ params: payload }));
  dispatch(setLoading(false));
  if (err) throw err;
  const { data } = res;
  const token = `Bearer ${res.data.token}`;
  storeData('TOKEN', { value: token });
  dispatch(setLogged(true));
  return data;
};

/**
 * a Service for login
 */
export const register = async (payload = {}) => {
  dispatch(setLoading(true));
  const [res, err] = await handleAsync(API.customer.register({ params: payload }));
  dispatch(setLoading(false));
  if (err) throw err;
  const { data } = res;
  console.log(data);
  const token = `Bearer ${res.data.token}`;
  storeData('TOKEN', { value: token });
  return data;
};

/**
 * a Service for activation
 */
export const activation = async (payload = {}) => {
  dispatch(setLoading(true));
  return getData('TOKEN').then(async (resToken) => {
    const [res, err] = await handleAsync(
      API.customer.activation({
        headers: {
          Authorization: resToken.value,
        },
        params: payload,
      }),
    );
    dispatch(setLoading(false));
    return [res, err];
  });
};

/**
 * a Service for resend activation
 */
export const resend = async (payload = {}) => {
  dispatch(setLoading(true));
  return getData('TOKEN').then(async (resToken) => {
    const [res, err] = await handleAsync(
      API.customer.resend({
        headers: {
          Authorization: resToken.value,
        },
        params: payload,
      }),
    );
    dispatch(setLoading(false));
    return [res, err];
  });
};

/**
 * a Service for logout
 */
export const logout = async () => {
  dispatch(setLoading(true));
  return getData('TOKEN').then(async (resToken) => {
    const [res, err] = await handleAsync(
      API.customer.logout({
        headers: {
          Authorization: resToken.value,
        },
      }),
    );
    dispatch(setLoading(false));
    return [res, err];
  });
};
