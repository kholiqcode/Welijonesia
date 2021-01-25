import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { boxShadow, GRAY_DARK, WHITE } from '../../../styles';
import { BottomTabItem } from '../../atoms';

const BottomTabNavigator = ({ state, descriptors, navigation }) => (
  <View style={styles.containerWrapper}>
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <BottomTabItem
            key={index}
            title={label}
            active={isFocused}
            onPress={onPress}
            onLongPress={onLongPress}
          />
        );
      })}
    </View>
  </View>
);

export default BottomTabNavigator;

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: WHITE,
    borderRadius: 30,
    marginHorizontal: 10,
    marginBottom: 5,
    marginTop: 5,
    ...boxShadow(GRAY_DARK, { height: 1, width: 1 }, 4, 0.1),
  },
  containerWrapper: {
    position: 'absolute',
    bottom: 10,
    width,
  },
});
