import { Alert } from 'react-native';
import API from '../../configs/api';
import { setCart, setError, setLoading, store } from '../../modules';
import { getData, handleAsync, showMessage } from '../../utilities';

const { dispatch } = store;

/**
 * a Service for get cart
 */
export const getCart = async () =>
  getData('TOKEN').then(async (resToken) => {
    dispatch(setLoading(true));
    const [res, err] = await handleAsync(
      API.customer.getCart({
        headers: {
          Authorization: resToken.value,
        },
      }),
    );
    dispatch(setLoading(false));
    if (err !== undefined) {
      return dispatch(setError({ isError: true, message: err?.meta?.message }));
    }
    dispatch(setCart(res.data.cart));
    // if (res) showMessage(res?.meta?.message, 'success');
  });

/**
 * a Service for store/update cart
 */
export const storeOrUpdateCart = async (payload = {}) =>
  getData('TOKEN').then(async (resToken) => {
    dispatch(setLoading(true));
    const [res, err] = await handleAsync(
      API.customer.storeOrUpdateCart({
        headers: {
          Authorization: resToken.value,
        },
        params: payload,
      }),
    );
    if (err !== undefined && err.meta?.code === 410) {
      Alert.alert(
        'Konfirmasi',
        err.meta.message,
        [
          {
            text: 'Nanti',
            onPress: () => console.log('Ask me later pressed'),
          },
          {
            text: 'Batalkan',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          { text: 'OK', onPress: () => deleteCart() },
        ],
        { cancelable: false },
      );
    }
    dispatch(setLoading(false));
    if (res) showMessage(res?.meta?.message, 'success');
  });

/**
 * a Service for delete cart
 */
export const deleteCart = async () =>
  getData('TOKEN').then(async (resToken) => {
    dispatch(setLoading(true));
    const [res, err] = await handleAsync(
      API.customer.deleteCart({
        headers: {
          Authorization: resToken.value,
        },
      }),
    );
    if (err !== undefined) throw err;
    dispatch(setLoading(false));
    if (res) showMessage(res?.meta?.message, 'success');
  });
