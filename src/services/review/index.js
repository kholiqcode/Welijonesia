import API from '../../configs/api';
import { setReviews, store } from '../../modules';
import { handleAsync } from '../../utilities';

const { dispatch } = store;

export const getReviews = async (payload = {}) => {
  console.log(payload);
  const [res, err] = await handleAsync(
    API.customer.getReview({
      params: payload,
    }),
  );
  if (err) throw err;
  dispatch(setReviews(res.data.review.data));
};
