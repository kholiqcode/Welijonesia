import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { ICDown, ICHide, ICMore, ICSearch, ICShow } from '../../../assets';
import { BLACK, FONT_MEDIUM, GRAY_DARK, GRAY_THIN, PRIMARY, WHITE } from '../../../styles';

const Input = ({
  forwardedRef,
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
  numberOfLines,
  onFocus,
  spellCheck,
  autoCorrect,
  autoFocus,
}) => {
  const [border, setBorder] = useState(GRAY_THIN);
  const [radius, setRadius] = useState(30 / 2);

  const onFocusForm = () => {
    setBorder(PRIMARY);
    if (onFocus !== undefined) onFocus();
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
        ref={forwardedRef}
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        value={value}
        autoCapitalize={autoCapitalize}
        underlineColorAndroid={underlineColorAndroid}
        textContentType={textContentType}
        autoCompleteType={autoCompleteType}
        placeholder={placeholder}
        placeholderTextColor={GRAY_DARK}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        secureTextEntry={hidePassword}
        editable={!disable}
        selectTextOnFocus={!disable}
        keyboardShouldPersistTaps={keyboardShouldPersistTaps}
        style={styles.input(border, radius, noBorder)}
        numberOfLines={numberOfLines}
        multiline={multiline}
        returnKeyType={search ? 'search' : 'done'}
        spellCheck={spellCheck}
        autoCorrect={autoCorrect}
        autoFocus={autoFocus}
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
    paddingHorizontal: 15,
    paddingVertical: 8,
    ...FONT_MEDIUM(12),
    justifyContent: 'center',
    paddingEnd: 40,
    color: BLACK,
  }),
  iconWrapper: {
    position: 'absolute',
    right: 10,
    paddingVertical: 8,
  },
});
