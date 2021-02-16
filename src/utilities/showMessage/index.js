import { showMessage as showToast } from 'react-native-flash-message';

const showMessage = (message, type = 'danger') => {
  showToast({
    message,
    type: type === 'success' ? 'success' : 'danger',
    backgroundColor: type === 'success' ? '#1ABC9C' : '#D9435E',
  });
};

export default showMessage;
