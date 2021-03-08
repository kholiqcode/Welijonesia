import API from '../../configs/api';
import { setDistrict, setDistricts, store } from '../../modules';
import { handleAsync } from '../../utilities';

const { dispatch } = store;

export const getDistricts = async (payload = {}) => {
  console.log(payload);
  const [res, err] = await handleAsync(
    API.customer.getDistrict({
      params: payload,
    }),
  );
  if (err) throw err;
  dispatch(setDistricts(res.data.district));
};

export const getDistrict = async (payload = {}) => {
  console.log(payload);
  const [res, err] = await handleAsync(
    API.customer.getDistrict({
      params: payload,
    }),
  );
  if (err) throw err;
  dispatch(setDistrict(res.data.district));
};
