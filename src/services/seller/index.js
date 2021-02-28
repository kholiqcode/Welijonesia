import API from '../../configs/api';
import {
  setCurrentPage,
  setLastPage,
  setLoading,
  setSeller,
  setSellers,
  store,
} from '../../modules';
import { handleAsync } from '../../utilities';

const { dispatch } = store;

export const getSellers = async (payload = {}) => {
  dispatch(setLoading(true));
  console.log(payload);
  const [res, err] = await handleAsync(
    API.customer.getSeller({
      params: payload,
    }),
  );
  if (err) throw err;
  // console.log(res.data.seller.data);
  dispatch(setSellers(res.data.seller.data));
  dispatch(setLastPage(res.data.seller.last_page));
  dispatch(setCurrentPage(payload.page + 1));
  dispatch(setLoading(false));
};

export const getSeller = async (payload = {}) => {
  console.log(payload);
  const [res, err] = await handleAsync(
    API.customer.getSeller({
      params: payload,
    }),
  );
  if (err) throw err;
  dispatch(setSeller(res.data.seller));
};
