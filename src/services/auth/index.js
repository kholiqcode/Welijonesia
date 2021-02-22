import API from '../../configs/api';
import { setLoading, store } from '../../modules/redux';
import { getData, handleAsync, showMessage, storeData } from '../../utilities';

const { dispatch } = store;

/**
 * a Service for login
 */
export const login = async (payload = {}) => {
  dispatch(setLoading(true));
  const [res, err] = await handleAsync(API.customer.login({ params: payload }));
  dispatch(setLoading(false));
  if (err) throw err;
  const { meta, data } = res;
  const token = `Bearer ${res.data.token}`;
  storeData('token', { value: token });
  showMessage(meta.message, 'success');
  return data;
};

/**
 * a Service for login
 */
export const register = async (payload = {}) => {
  dispatch(setLoading(true));
  const [res, err] = await handleAsync(API.customer.register({ params: payload }));
  dispatch(setLoading(false));
  if (err) return showMessage(err.meta.message ?? 'Registrasi Gagal');
  const { meta, data } = res;
  const token = `Bearer ${res.data.token}`;
  storeData('token', { value: token });
  showMessage(meta.message, 'success');
  return data;
};

/**
 * a Service for logout
 */
export const logout = async () => {
  dispatch(setLoading(true));
  getData('token').then(async (resToken) => {
    const [res, err] = await handleAsync(
      API.customer.logout({
        headers: {
          Authorization: resToken.value,
        },
      }),
    );
    dispatch(setLoading(false));
    if (err) return showMessage(err.meta.message ?? 'Terjadi Kesalahan');
    const { meta, data } = res;
    showMessage(meta.message, 'success');
    return data;
  });
};
