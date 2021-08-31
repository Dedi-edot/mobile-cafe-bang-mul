/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';

const URL = 'http://10.0.2.2:2000';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1d3557',
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    padding: 10,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

const Home = () => {
  const dispatch = useDispatch();
  const product = useSelector(state => state.product);

  const fetchData = () => {
    axios
      .get(`${URL}/product`)
      .then(res => {
        dispatch({
          type: 'FETCH_DATA',
          payload: res.data,
        });
        // console.log(res.data);
      })
      .catch(() => {
        console.log('error');
      });
  };

  const renderProduct = () => {
    const dataProduct = product.product;
    return dataProduct.map((val, idx) => {
      return (
        <Card
          key={idx}
          img={val.image}
          title={val.name}
          price={val.price}
          desc={val.description}
        />
      );
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ScrollView>
      <Header />
      <View style={styles.container}>{renderProduct()}</View>
    </ScrollView>
  );
};

export default Home;
