import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { FONT_BOLD, PRIMARY, scaleSize, WHITE } from '../../../styles';
import { Button, Gap, Input } from '../../atoms';

const Header = ({ flat, title, type, autoFocusKeyboard }) => {
  const navigation = useNavigation();
  if (type === 'headerSearch') {
    return (
      <View style={styles.container}>
        <Gap width={5} />
        <Button btnIcon="back" onPress={() => navigation.goBack()} />
        <Gap width={5} />
        {!flat && (
          <View style={{ flex: 1 }}>
            <Input
              placeholder="Cari penjual atau sayur"
              variant="roundedPill"
              search
              rightIcon
              noBorder
              number
              onFocus={() => navigation.navigate('SearchCustomer')}
              spellCheck={false}
              autoCorrect={false}
              underlineColorAndroid="transparent"
              autoFocus={autoFocusKeyboard}
            />
          </View>
        )}
      </View>
    );
  }
  return (
    <View style={styles.container}>
      {type === 'headerSearch' ? (
        <View>
          <Gap width={5} />
          <Button btnIcon="back" onPress={() => navigation.goBack()} />
          <Gap width={5} />
        </View>
      ) : (
        <Text style={styles.appTitle(title)}>{title ?? 'WELIJONESIA'}</Text>
      )}

      {!flat && (
        <View style={{ flex: 3 }}>
          <Input
            placeholder="Cari penjual atau sayur"
            variant="roundedPill"
            search
            rightIcon
            noBorder
            number
            onFocus={() => navigation.navigate('SearchCustomer')}
            underlineColorAndroid="transparent"
            spellCheck={false}
            autoCorrect={false}
          />
        </View>
      )}
    </View>
  );
};

export default Header;

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    backgroundColor: PRIMARY,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    height: scaleSize(windowHeight * 0.1),
  },
  appTitle: (title) => ({
    ...FONT_BOLD(title ? 26 : 16),
    color: WHITE,
    paddingHorizontal: 10,
  }),
});
