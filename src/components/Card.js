/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    height: 300,
    width: 180,
    borderRadius: 5,
    overflow: 'hidden',
    marginVertical: 10,
    marginHorizontal: 6,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
  },
  price: {
    fontWeight: 'bold',
  },
  btn: {
    backgroundColor: '#a8dadc',
    alignItems: 'center',
    borderRadius: 5,
    height: 25,
    justifyContent: 'center',
  },
  content: {
    padding: 5,
    height: 110,
    justifyContent: 'space-between',
  },
  img: {
    width: 185,
    height: 185,
  },
});

const Card = ({img, title, price, desc}) => {
  return (
    <View style={styles.card}>
      <View>
        <Image
          source={{
            uri: img,
          }}
          style={styles.img}
        />
      </View>
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>Rp. {price}</Text>
          <Text style={styles.desc}>{desc}</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.btn}>
            <Text>Add to cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Card;
