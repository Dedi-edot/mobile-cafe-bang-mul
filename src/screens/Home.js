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
        console.log(res.data.length);
      })
      .catch(() => {
        console.log('Fetch error');
      });
  };

  useEffect(() => {
    fetchData();
    console.log(product.product[0]);
  }, []);

  return (
    <ScrollView>
      <Header />
      <View>{/* <Text>{product[0].id}</Text> */}</View>
      <View style={styles.container}>
        <Card
          img={product.product[0].image}
          title={product.product[0].name}
          price={product.product[0].price}
          desc={product.product[0].description}
        />
        <Card
          img={product.product[1].image}
          title={product.product[1].name}
          price={product.product[1].price}
          desc={product.product[1].description}
        />
        <Card
          img={product.product[2].image}
          title={product.product[2].name}
          price={product.product[2].price}
          desc={product.product[2].description}
        />
        <Card
          img={product.product[3].image}
          title={product.product[3].name}
          price={product.product[3].price}
          desc={product.product[3].description}
        />
      </View>
    </ScrollView>
  );
};

export default Home;
