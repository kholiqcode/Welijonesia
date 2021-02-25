import API from '../../configs/api';
import { handleAsync } from '../../utilities';

export const getReview = async (payload = {}) => {
  console.log(payload);
  const [res, err] = await handleAsync(
    API.customer.getReview({
      params: payload,
    }),
  );
  return [res, err];
};
