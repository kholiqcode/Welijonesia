import React, { memo, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setCounterValue } from '../../../modules';
import { FONT_REGULAR, GRAY_THIN, PRIMARY } from '../../../styles';

const Counter = () => {
  const { counterValue } = useSelector((state) => state.globalReducer);
  const dispatch = useDispatch();

  const _handleOnPlus = () => {
    dispatch(setCounterValue(counterValue + 1));
  };

  const _handleOnMinus = () => {
    if (counterValue === 0) return;
    dispatch(setCounterValue(counterValue - 1));
  };

  useEffect(
    () => () => {
      dispatch(setCounterValue(0));
    },
    [],
  );
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={_handleOnMinus} style={styles.counterBtn}>
          <Text>-</Text>
        </TouchableOpacity>
        <Text style={styles.textCounter}>{counterValue}</Text>
        <TouchableOpacity onPress={_handleOnPlus} style={styles.counterBtn}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default memo(Counter);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 20,
  },
  counterBtn: {
    backgroundColor: PRIMARY,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCounter: {
    ...FONT_REGULAR(14),
    flex: 2,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderWidth: 1,
    borderColor: GRAY_THIN,
  },
});
