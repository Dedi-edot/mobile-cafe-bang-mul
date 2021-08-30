/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3a0ca3',
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-between',
    padding: 5,
  },
  navbarRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navbarBrand: {
    justifyContent: 'center',
  },
  txtBrand: {
    color: 'white',
    fontSize: 24,
  },
  label: {
    color: 'white',
    marginRight: 5,
  },
});

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navbarBrand}>
        <Text style={styles.txtBrand}>Cafe Bang Mul</Text>
      </View>
      <View style={styles.navbarRight}>
        <Text style={styles.label}>Hello, Admin</Text>
        <TouchableOpacity>
          <Text style={{color: '#00b4d8'}}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
