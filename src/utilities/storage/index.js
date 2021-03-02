import AsyncStorage from '@react-native-async-storage/async-storage';
import showMessage from '../showMessage';

export const storeData = async (storageKey, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(storageKey, jsonValue);
  } catch (e) {
    showMessage('Sepertinya ada yang salah.');
    console.log('Gagal menyimpan di localstorage');
  }
};

export const getData = async (storageKey) => {
  try {
    const jsonValue = await AsyncStorage.getItem(storageKey);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    showMessage('Sepertinya ada yang salah.');
    console.log('Gagal mengambil data dari localstorage');
  }
};

export const removeData = (arrData = ['TOKEN']) => {
  AsyncStorage.multiRemove(arrData);
};
