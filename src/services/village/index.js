import API from '../../configs/api';
import { setVillage, setVillages, store } from '../../modules';
import { handleAsync } from '../../utilities';

const { dispatch } = store;

export const getVillages = async (payload = {}) => {
  console.log(payload);
  const [res, err] = await handleAsync(
    API.customer.getVillage({
      params: payload,
    }),
  );
  if (err) throw err;
  dispatch(setVillages(res.data.village));
};

export const getVillage = async (payload = {}) => {
  console.log(payload);
  const [res, err] = await handleAsync(
    API.customer.getVillage({
      params: payload,
    }),
  );
  if (err) throw err;
  dispatch(setVillage(res.data.village));
};
