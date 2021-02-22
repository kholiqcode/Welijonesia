import { showMessage } from 'react-native-flash-message';
import API from '../../configs/api';
import { setLoading, store } from '../../modules/redux';
import { handleAsync } from '../../utilities';

const { dispatch } = store;

const getSellerAction = async () => {
  dispatch(setLoading(true));
  const [res, err] = await handleAsync(API.getSeller());
  if (err) return showMessage(err.meta.message);

  const { data, meta } = res;
  console.log(data);
  dispatch(setLoading(false));
  // storeData('token', { value: token });
  showMessage(meta.message, 'success');
  return data;
};

export { getSellerAction };
