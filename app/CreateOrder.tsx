import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import Entypo from '@expo/vector-icons/Entypo';

const CreateOrder = () => {
    const [date, setDate] = useState('');
    const [describe, setDescribe] = useState('');
  const [size, setSize] = useState('');
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.inputContainer}>

      <Entypo name="location-pin" size={30} color="black" />

        <TextInput
          placeholder="Your location " 
          value={location}
          onChangeText={setLocation}
          style={styles.input}
        />

        <TextInput
          placeholder="Delivery address"
          value={address}
          onChangeText={setAddress}
          style={styles.input}
          keyboardType="email-address"
        />


        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonAddress}>Add address</Text>
        </TouchableOpacity>


        <TextInput
          placeholder="Full name"
          value={name}
          onChangeText={setName}
          style={styles.input}
          keyboardType="phone-pad"
        />

        <TextInput
          placeholder="Phone number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          style={styles.input}
        />

        <TextInput
          placeholder="Size"
          value={size}
          onChangeText={setSize}
          style={styles.input}
        />

        <TextInput
          placeholder="Delivery date"
          value={date}
          onChangeText={setDate}
          style={styles.input}
        />

        <TextInput
          placeholder="Describe"
          value={describe}
          onChangeText={setDescribe}
          style={styles.input}
        />

      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Create orders</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  inputContainer: {
    marginTop: 20,
  },
  buttonContainer: {
    marginTop: 30,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    marginBottom: 50,
    fontSize: 20,
    padding: 10,
  },
  button: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonAddress: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default CreateOrder;
