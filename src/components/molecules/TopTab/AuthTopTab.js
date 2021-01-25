import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import {
  BLACK,
  FONT_MEDIUM,
  FONT_REGULAR,
  GRAY_THIN,
  PRIMARY,
  SECONDARY,
  WHITE,
} from '../../../styles';

const AuthTopTab = ({ state, descriptors, navigation, position }) => (
  <View
    style={{
      flexDirection: 'row',
      borderWidth: 1,
      borderRadius: 30,
      borderColor: GRAY_THIN,
    }}
  >
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
        <TouchableOpacity
          key={index}
          accessibilityRole="button"
          accessibilityState={isFocused ? { selected: true } : {}}
          accessibilityLabel={options.tabBarAccessibilityLabel}
          testID={options.tabBarTestID}
          onPress={onPress}
          onLongPress={onLongPress}
          style={{
            flex: 1,
            backgroundColor: isFocused ? PRIMARY : WHITE,
            paddingVertical: 8,
            borderRadius: 30,
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              ...FONT_MEDIUM(14),
              color: isFocused ? WHITE : SECONDARY,
            }}
          >
            {label}
          </Text>
        </TouchableOpacity>
      );
    })}
  </View>
);

export default AuthTopTab;
