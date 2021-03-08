import API from '../../configs/api';
import { setProvince, setProvinces, store } from '../../modules';
import { handleAsync } from '../../utilities';

const { dispatch } = store;

export const getProvinces = async (payload = {}) => {
  console.log(payload);
  const [res, err] = await handleAsync(
    API.customer.getProvince({
      params: payload,
    }),
  );
  if (err) throw err;
  console.log(res.data);
  dispatch(setProvinces(res.data.province));
};

export const getProvince = async (payload = {}) => {
  console.log(payload);
  const [res, err] = await handleAsync(
    API.customer.getProvince({
      params: payload,
    }),
  );
  if (err) throw err;
  dispatch(setProvince(res.data.province));
};
