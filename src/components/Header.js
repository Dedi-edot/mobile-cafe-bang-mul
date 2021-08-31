/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
    justifyContent: 'space-between',
  },
  navbarBrand: {
    flexDirection: 'row',
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
  txtCart: {
    color: '#f8961e',
    fontWeight: 'bold',
  },
  btnCart: {},
});

const Header = ({cart, onCart}) => {
  return (
    <View style={styles.container}>
      <View style={styles.navbarBrand}>
        <Text style={styles.txtBrand}>Cafe Bang Mul</Text>
        {!onCart ? (
          <>
            <TouchableOpacity style={styles.btnCart} onPress={() => cart()}>
              <Ionicons name="cart" size={40} color="#f8961e" />
            </TouchableOpacity>
            <Text style={styles.txtCart}>Cart</Text>
          </>
        ) : null}
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
