import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useRouter, useNavigation } from 'expo-router';
import { Dropdown } from 'react-native-element-dropdown';
import { StatusBar } from 'expo-status-bar';

// Get screen dimensions for responsive styling
const { width, height } = Dimensions.get('window');

const Payment = () => {
  const router = useRouter();
  const navigation = useNavigation();
  const [value, setValue] = useState<string | null>(null);

  const data = [
    { label: 'BIDV', value: 'bidv' },
    { label: 'MB Bank', value: 'mb' },
    { label: 'TP Bank', value: 'tp' },
  ];

  useEffect(() => {
    // Set the header title
    navigation.setOptions({ title: 'Payment' });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      {/* Dropdown for selecting bank */}
      <Dropdown
        style={styles.dropDown}
        data={data}
        labelField="label"
        valueField="value"
        placeholder="Select a bank"
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
      />

      {/* Account Number Input */}
      <View style={styles.paymentMethod}>
        <TextInput
          placeholder='Account number'
          style={styles.informationText}
          keyboardType='numeric'
        />
      </View>

      {/* Account Holder Input */}
      <View style={styles.paymentMethod}>
        <TextInput
          placeholder='Account holder'
          style={styles.informationText}
        />
      </View>

      {/* Amount Input */}
      <View style={styles.paymentMethod}>
        <TextInput
          placeholder='Amount'
          style={styles.informationText}
          keyboardType='numeric'
        />
      </View>

      {/* Continue Button */}
      <TouchableOpacity style={styles.button} onPress={() => router.push('./PaymentMethod3')}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width * 0.05,  // 5% of screen width for horizontal padding
    paddingVertical: height * 0.03,   // 3% of screen height for vertical padding
    backgroundColor: '#f5f5f5',
  },
  dropDown: {
    padding: width * 0.04,  // Dynamic padding based on screen width
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#CCCCCC',
    marginBottom: height * 0.02, // Dynamic margin based on screen height
  },
  paymentMethod: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: height * 0.02,  // Margin between input fields
    padding: width * 0.04,  // Dynamic padding based on screen width
    backgroundColor: '#F2F2F2',
  },
  informationText: {
    fontSize: width * 0.04, // Dynamic font size based on screen width
    flex: 1,
  },
  button: {
    backgroundColor: '#99000C',
    paddingVertical: height * 0.02,  // Dynamic padding based on screen height
    paddingHorizontal: width * 0.2,  // Padding based on screen width
    borderRadius: 5,
    alignItems: 'center',
    marginTop: height * 0.05,  // Margin from the last input field
  },
  buttonText: {
    color: '#ffffff',
    fontSize: width * 0.045,  // Dynamic font size based on screen width
    fontWeight: 'bold',
  },
});

export default Payment;
