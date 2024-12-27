import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image, KeyboardAvoidingView, Platform, Dimensions } from 'react-native';
import { useNavigation, useRouter } from 'expo-router';
import Entypo from '@expo/vector-icons/Entypo';

const { width, height } = Dimensions.get('window'); // Lấy kích thước màn hình

const CreateOrder = () => {
  const [date, setDate] = useState('');
  const [describe, setDescribe] = useState('');
  const [size, setSize] = useState('');
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const router = useRouter();
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: 'Create Order' });
  }, [navigation]);

  const handlePayment = () => {
    router.push('../Payment/PaymentMethod');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={100}
    >
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.inputContainer}>
          <View style={styles.inputHeader}>
            <TextInput
              placeholder="Your location"
              style={styles.inputLocation}
            />
            <Entypo name="location-pin" size={30} color="black" style={styles.location} />
          </View>

          <View style={styles.inputHeader}>
            <TextInput
              placeholder="Delivery address"
              style={styles.inputLocation}
            />
          </View>

          <View style={styles.addAddress}>
            <TouchableOpacity style={styles.buttonAddress}>
              <Entypo name="plus" size={16} color="white" style={styles.icon} />
              <Text style={styles.textButtonAddress}>Add address</Text>
            </TouchableOpacity>
            <View style={styles.iconImage}>
              <Image source={require('../../assets/images/Group37.png')} style={styles.iconImageItem} />
              <Image source={require('../../assets/images/Group38.png')} style={styles.iconImageItem} />
            </View>
          </View>

          <View style={styles.informationContainer}>
            <View style={styles.information}>
              <TextInput
                placeholder="Full name"
                value={name}
                onChangeText={setName}
              />
            </View>
            <View style={styles.information}>
              <TextInput
                placeholder="Phone number"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
              />
            </View>
            <View style={styles.information}>
              <TextInput
                placeholder="Size"
                value={size}
                onChangeText={setSize}
              />
            </View>
            <View style={styles.information}>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Delivery Date</Text>
                <View style={styles.dateInputContainer}>
                  <TextInput
                    placeholder="DD"
                    value={day}
                    onChangeText={setDay}
                    style={styles.dateInput}
                    keyboardType="numeric"
                    maxLength={2}
                  />
                  <TextInput
                    placeholder="MM"
                    value={month}
                    onChangeText={setMonth}
                    style={styles.dateInput}
                    keyboardType="numeric"
                    maxLength={2}
                  />
                  <TextInput
                    placeholder="YYYY"
                    value={year}
                    onChangeText={setYear}
                    style={styles.dateInput}
                    keyboardType="numeric"
                    maxLength={4}
                  />
                </View>
              </View>
            </View>
            <View style={styles.information}>
              <TextInput
                placeholder="Describe"
                value={describe}
                onChangeText={setDescribe}
              />
            </View>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handlePayment}>
            <Text style={styles.buttonText}>Create orders</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    padding: 16,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputHeader: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  inputLocation: {
    flex: 1,
    fontSize: 16,
    padding: 10,
  },
  location: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -15 }],
  },
  addAddress: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonAddress: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 25,
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  icon: {
    marginRight: 5,
  },
  textButtonAddress: {
    color: 'white',
    fontSize: 12,
  },
  iconImage: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconImageItem: {
    width: 40,
    height: 40,
    marginLeft: 10,
  },
  informationContainer: {
    marginTop: 10,
  },
  information: {
    backgroundColor: '#D9D9D9',
    borderRadius: 8,
    marginVertical: 5,
    padding: 20,
  },
  buttonContainer: {
    marginTop: 30,
  },
  button: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 16,
    color: '#999',
    marginBottom: 8,
  },
  dateInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    padding: 10,
    marginRight: 10,
  },
});

export default CreateOrder;