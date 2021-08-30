/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#1d3557',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: 'white',
    width: '70%',
    borderRadius: 5,
    padding: 10,
  },
  header: {
    fontSize: 24,
    alignSelf: 'center',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
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
    width: 70,
    height: 30,
    borderRadius: 5,
    alignItems: 'center',
    padding: 5,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center',
  },
  txtbtn: {
    fontWeight: 'bold',
    color: 'white',
  },
});

const Register = () => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.header}>Cafe Bang Mul</Text>
          <Text style={styles.label}>Username</Text>
          <TextInput style={styles.input} />
          <Text style={styles.label}>Password</Text>
          <TextInput secureTextEntry style={styles.input} />
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.txtbtn}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Register;
