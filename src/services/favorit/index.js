import API from '../../configs/api';
import { getData, handleAsync } from '../../utilities';

/**
 * a Service for activation
 */
export const storeOrUpdate = async (payload = {}) =>
  getData('TOKEN').then(async (resToken) => {
    const [res, err] = await handleAsync(
      API.customer.storeOrUpdateFavorit({
        headers: {
          Authorization: resToken.value,
        },
        params: payload,
      }),
    );
    return [res, err];
  });
