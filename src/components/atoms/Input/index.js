import React, { useEffect } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react/cjs/react.development';
import { ICDown, ICHide, ICMore, ICSearch, ICShow } from '../../../assets';
import { FONT_MEDIUM, GRAY_THIN, PRIMARY, WHITE } from '../../../styles';

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
  select,
  rightIcon,
  search,
  noBorder,
  more,
  multiline,
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

  const Icon = () => {
    if (select) return <ICDown height={24} width={24} />;
    if (more) return <ICMore height={24} width={24} />;
    if (search) return <ICSearch height={24} width={24} />;
    if (secureTextEntry) {
      if (hidePassword) return <ICShow height={24} width={24} />;
      if (!hidePassword) return <ICHide height={24} width={24} />;
    }
  };

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
        style={styles.input(border, radius, noBorder)}
        numberOfLines={multiline ?? 1}
        multiline
        returnKeyType={search ? 'search' : 'done'}
      />
      {rightIcon && (
        <TouchableOpacity style={styles.iconWrapper} onPress={onPress}>
          <Icon />
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
  input: (border, radius, noBorder) => ({
    backgroundColor: WHITE,
    borderWidth: noBorder ? 0 : 1,
    borderColor: border,
    borderRadius: radius,
    paddingStart: 15,
    paddingVertical: 8,
    ...FONT_MEDIUM(14),
    justifyContent: 'center',
    paddingEnd: 40,
  }),
  iconWrapper: {
    position: 'absolute',
    right: 10,
    paddingVertical: 8,
  },
});
