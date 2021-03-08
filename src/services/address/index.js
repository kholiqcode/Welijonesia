import API from '../../configs/api';
import { setAddress, setAddresses, setError, store } from '../../modules';
import { getData, handleAsync } from '../../utilities';

const { dispatch } = store;

export const getAddresses = async (payload = {}) => {
  console.log(payload);
  getData('TOKEN').then(async (resToken) => {
    const [res, err] = await handleAsync(
      API.customer.getAddress({
        headers: {
          Authorization: resToken.value,
        },
        params: payload,
      }),
    );
    if (err) throw err;
    console.log(res.data);
    dispatch(setAddresses(res.data.address));
  });
};

export const getAddress = async (payload = {}) => {
  console.log(payload);
  getData('TOKEN').then(async (resToken) => {
    const [res, err] = await handleAsync(
      API.customer.getAddress({
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

export const storeAddress = async (payload = {}) => {
  console.log(payload);
  getData('TOKEN').then(async (resToken) => {
    const [res, err] = await handleAsync(
      API.customer.storeAddress({
        headers: {
          Authorization: resToken.value,
        },
        params: payload,
      }),
    );
    if (err) return setError({ isError: true, message: err?.meta?.message ?? 'Terjadi Kesalahan' });
    return setError({
      isError: false,
      message: res?.meta?.message ?? 'Alamat berhasil ditambahkan',
    });
  });
};
