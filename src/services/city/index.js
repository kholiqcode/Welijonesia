import API from '../../configs/api';
import { setCities, setCity, store } from '../../modules';
import { handleAsync } from '../../utilities';

const { dispatch } = store;

export const getCities = async (payload = {}) => {
  console.log(payload);
  const [res, err] = await handleAsync(
    API.customer.getCity({
      params: payload,
    }),
  );
  if (err) throw err;
  dispatch(setCities(res.data.city));
};

export const getCity = async (payload = {}) => {
  console.log(payload);
  const [res, err] = await handleAsync(
    API.customer.getCity({
      params: payload,
    }),
  );
  if (err) throw err;
  dispatch(setCity(res.data.city));
};
