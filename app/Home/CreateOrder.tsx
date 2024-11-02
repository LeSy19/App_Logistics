import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation, useRouter } from 'expo-router';
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
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: 'Create Order' });
  }, [useNavigation]);

  const handlePayment = () => {
    router.push('../Payment/PaymentMethod');
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={100} // Điều chỉnh khoảng cách cho phù hợp
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
    flex: 1, // Đảm bảo container chiếm toàn bộ không gian
  },
  scrollViewContainer: {
    padding: 20,
  },
  inputContainer: {},
  inputHeader: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    padding: 12,
  },
  inputLocation: {
    flex: 1,
    fontSize: 20,
    padding: 10,
  },
  location: {
    position: 'absolute',
    right: 10,
    top: '70%',
    transform: [{ translateY: -15 }],
    alignItems: 'center',
    justifyContent: 'center',
  },
  addAddress: {
    flexDirection: 'row',
    alignContent: 'space-between',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  buttonAddress: {
    flexDirection: 'row',
    width: 131,
    height: 28,
    backgroundColor: 'red',
    borderRadius: 29,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginRight: 5,
  },
  textButtonAddress: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
  },
  iconImage: {
    flexDirection: 'row',
    alignContent: 'flex-end',
  },
  iconImageItem: {
    width: 45,
  },
  informationContainer: {
    marginTop: 10,
  },
  information: {
    padding: 23,
    backgroundColor: '#D9D9D9',
    borderRadius: 8,
    marginVertical: 6,
  },
  buttonContainer: {
    marginTop: 30,
  },
  button: {
    backgroundColor: 'red',
    padding: 20,
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
    color: '#999',
    fontSize: 16,
    marginBottom: 5,
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
