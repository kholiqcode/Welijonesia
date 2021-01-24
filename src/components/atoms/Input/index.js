import React, { useEffect } from 'react';

import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react/cjs/react.development';
import { ICHide, ICHome, ICShow } from '../../../assets';
import { FONT_MEDIUM, FONT_REGULAR, GRAY_THIN, PRIMARY, WHITE } from '../../../styles';

const Input = ({
  ref,
  value,
  underlineColorAndroid,
  textContentType,
  autoCompleteType,
  autoCapitalize,
  placeholder,
  keyboardType,
  onChangeText,
  secureTextEntry,
  keyboardShouldPersistTaps,
  disable,
  variant,
  hidePassword,
  onPress,
}) => {
  const [border, setBorder] = useState(GRAY_THIN);
  const [radius, setRadius] = useState(30 / 2);

  const onFocusForm = () => {
    setBorder(PRIMARY);
  };

  const onBlurForm = () => {
    setBorder(GRAY_THIN);
  };

  useEffect(() => {
    switch (variant) {
      case 'roundedPill':
        setRadius(30);
        break;
      default:
        setRadius(30 / 2);
        break;
    }
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        ref={ref}
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        value={value}
        autoCapitalize={autoCapitalize}
        underlineColorAndroid={underlineColorAndroid}
        textContentType={textContentType}
        autoCompleteType={autoCompleteType}
        placeholder={placeholder}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        secureTextEntry={hidePassword}
        editable={!disable}
        selectTextOnFocus={!disable}
        keyboardShouldPersistTaps={keyboardShouldPersistTaps}
        style={styles.input(border, radius)}
      />
      {secureTextEntry && (
        <TouchableOpacity style={styles.iconWrapper} onPress={onPress}>
          {!hidePassword ? <ICShow height={24} width={24} /> : <ICHide height={24} width={24} />}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  input: (border, radius) => ({
    backgroundColor: WHITE,
    borderWidth: 1,
    borderColor: border,
    borderRadius: radius,
    paddingHorizontal: 15,
    paddingVertical: 8,
    ...FONT_MEDIUM(14),
    justifyContent: 'center',
  }),
  iconWrapper: {
    position: 'absolute',
    right: 10,
    paddingVertical: 8,
  },
});
