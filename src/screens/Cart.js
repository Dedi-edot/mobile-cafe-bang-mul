/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Header from '../components/Header';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#1d3557',
    alignItems: 'center',
    padding: 20,
  },
  box: {
    backgroundColor: 'white',
    width: '70%',
    borderRadius: 5,
    padding: 10,
  },
  labelTotal: {
    fontSize: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 5,
    borderRadius: 5,
    fontSize: 16,
  },
  btn: {
    backgroundColor: '#4895ef',
    borderRadius: 5,
    alignItems: 'center',
    padding: 3,
    width: 20,
  },
  txtbtn: {
    fontWeight: 'bold',
    color: 'white',
  },
  btnCheckOut: {
    alignSelf: 'center',
    marginBottom: 10,
    backgroundColor: '#3a0ca3',
    width: '100%',
    height: 30,
    borderRadius: 5,
    alignItems: 'center',
    padding: 5,
  },
  btnLabel: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sum: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#6930c3',
    marginTop: 5,
    height: 35,
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  barAddMin: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 50,
  },
});

const Cart = () => {
  return (
    <View>
      <Header onCart={true} />
      <View style={styles.container}>
        <View style={styles.box}>
          <TouchableOpacity style={styles.btnCheckOut}>
            <Text style={styles.btnLabel}>Checkout</Text>
          </TouchableOpacity>
          <View style={styles.total}>
            <Text style={styles.labelTotal}>Total</Text>
            <Text style={{...styles.labelTotal, fontWeight: 'bold'}}>
              Rp. 70000
            </Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={{padding: 5}}>
            <Text>Product Title</Text>
          </View>
          <View style={styles.sum}>
            <Text>Rp. 70000 x 1</Text>
            <Text style={{fontWeight: 'bold'}}>Rp. 70000</Text>
          </View>
          <View style={styles.btnBar}>
            <View style={styles.barAddMin}>
              <TouchableOpacity style={styles.btn}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>-</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>+</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <Text style={{color: 'white', fontWeight: 'bold'}}>Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Cart;
