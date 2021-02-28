import API from '../../configs/api';
import { setProduct, setProducts, store } from '../../modules';
import { handleAsync } from '../../utilities';

const { dispatch } = store;

export const getProducts = async (payload = {}) => {
  console.log(payload);
  const [res, err] = await handleAsync(
    API.customer.getProduct({
      params: payload,
    }),
  );
  if (err) throw err;
  dispatch(setProducts(res.data.product.data));
};

export const getProduct = async (payload = {}) => {
  console.log(payload);
  const [res, err] = await handleAsync(
    API.customer.getProduct({
      params: payload,
    }),
  );
  if (err) throw err;
  dispatch(setProduct(res.data.product));
};
