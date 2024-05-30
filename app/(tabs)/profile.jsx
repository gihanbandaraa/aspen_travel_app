import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { images } from '../../constants';

const profile = () => {
  return (
    <View style={styles.container}>
      <Image source={images.work} style={styles.image} />
      <Text style={styles.message}>This feature is under development. Check back soon!</Text>
    </View>
  );
};
export default profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200, // Adjust width as needed
    height: 200, // Adjust height as needed
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
    color: '#333',
  },
});




