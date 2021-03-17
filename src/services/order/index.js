import API from '../../configs/api';
import {
  setAddress,
  setCart,
  setCurrentPage,
  setError,
  setLastPage,
  setLoading,
  setOrders,
  store,
} from '../../modules';
import { getData, handleAsync } from '../../utilities';

const { dispatch } = store;

export const getOrders = async (payload = {}) => {
  console.log(payload);
  getData('TOKEN').then(async (resToken) => {
    dispatch(setLoading(true));
    const [res, err] = await handleAsync(
      API.customer.getOrder({
        headers: {
          Authorization: resToken.value,
        },
        params: payload,
      }),
    );
    dispatch(setLoading(false));
    if (err) throw err;
    dispatch(setOrders(res.data.order.data));
    dispatch(setLastPage(res.data.order.last_page));
    dispatch(setCurrentPage(payload.page + 1));
  });
};

export const getOrder = async (payload = {}) => {
  console.log(payload);
  getData('TOKEN').then(async (resToken) => {
    const [res, err] = await handleAsync(
      API.customer.getOrder({
        headers: {
          Authorization: resToken.value,
        },
        params: payload,
      }),
    );
    if (err) throw err;
    dispatch(setAddress(res.data.address));
  });
};

export const storeOrder = async (payload = {}) => {
  console.log(payload);
  dispatch(setError({ isError: false, message: '' }));
  getData('TOKEN').then(async (resToken) => {
    const [res, err] = await handleAsync(
      API.customer.storeOrder({
        headers: {
          Authorization: resToken.value,
        },
        params: payload,
      }),
    );
    console.log(res);
    if (err)
      return dispatch(
        setError({ isError: true, message: err?.meta?.message ?? 'Terjadi Kesalahan' }),
      );
    dispatch(setCart({}));
    return dispatch(
      setError({
        isError: false,
        message: res?.meta?.message ?? 'Pemesanan anda berhasil',
      }),
    );
  });
};
