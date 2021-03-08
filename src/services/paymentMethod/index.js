import API from '../../configs/api';
import { setPaymentMethod, setPaymentMethods, store } from '../../modules';
import { getData, handleAsync } from '../../utilities';

const { dispatch } = store;

export const getPaymentMethods = async (payload = {}) => {
  console.log(payload);
  const [res, err] = await handleAsync(
    API.customer.getPaymentMethod({
      params: payload,
    }),
  );
  if (err) throw err;
  console.log(res.data);
  dispatch(setPaymentMethods(res.data.paymentMethod));
};

export const getPaymentMethod = async (payload = {}) => {
  console.log(payload);
  const [res, err] = await handleAsync(
    API.customer.getPaymentMethod({
      params: payload,
    }),
  );
  if (err) throw err;
  dispatch(setPaymentMethod(res.data.paymentMethod));
};
