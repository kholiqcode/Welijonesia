import API from '../../configs/api';
import { setLoading, store } from '../../modules/redux';
import { handleAsync } from '../../utilities';

const { dispatch } = store;

export const getSeller = async (payload = {}) => {
  dispatch(setLoading(true));
  console.log(payload);
  const [res, err] = await handleAsync(
    API.customer.getSeller({
      params: payload,
    }),
  );
  if (err) throw err;
  dispatch(setLoading(false));
  return [res, err];
};
