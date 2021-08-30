/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../components/Header';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1d3557',
    height: '100%',
  },
});

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Text>All</Text>
    </View>
  );
};

export default Home;
