import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Transition, Transitioning } from 'react-native-reanimated';
import data from './data';

const transition = (
  <Transition.Together>
    <Transition.In type="fade" durationMs={200} />
    <Transition.Change />
    <Transition.Out type="fade" durationMs={200} />
  </Transition.Together>
);

export default function Cart() {
  const [currentIndex, setCurrentIndex] = React.useState(null);
  const ref = React.useRef();

  return (
    <Transitioning.View ref={ref} transition={transition} style={styles.container}>
      {data.map(({ bg, color, category, subCategories }, index) => (
        <TouchableOpacity
          key={category}
          onPress={() => {
            ref.current.animateNextTransition();
            setCurrentIndex(index === currentIndex ? null : index);
          }}
          style={styles.cardContainer}
          activeOpacity={0.9}
        >
          <View style={[styles.card, { backgroundColor: bg }]}>
            <Text style={[styles.heading, { color }]}>{category}</Text>
            {index === currentIndex && (
              <View style={styles.subCategoriesList}>
                {subCategories.map((subCategory) => (
                  <Text key={subCategory} style={[styles.body, { color }]}>
                    {subCategory}
                  </Text>
                ))}
              </View>
            )}
          </View>
        </TouchableOpacity>
      ))}
    </Transitioning.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderRadius: 15,
  },
  cardContainer: {
    // flexGrow: 1,
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 16,
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: -2,
    backgroundColor: 'blue',
  },
  body: {
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: 'red',
  },
  subCategoriesList: {
    marginTop: 40,
  },
});
