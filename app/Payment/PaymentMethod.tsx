import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter, useNavigation } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

// Get the screen width and height
const { width, height } = Dimensions.get('window');

const PaymentMethod = () => {
  const router = useRouter();
  const navigation = useNavigation();

  useEffect(() => {
    // Set the header title
    navigation.setOptions({ title: 'Payment Method' });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Payment Methods</Text>

      {/* Credit Card Payment Method */}
      <View style={styles.paymentMethod}>
        <FontAwesome name="credit-card" size={24} color="black" />
        <Text style={styles.methodText}>Credit Card</Text>
      </View>

      {/* E-Wallet Payment Method */}
      <View style={styles.paymentMethod}>
        <FontAwesome name="money" size={24} color="black" />
        <Text style={styles.methodText}>E-Wallet</Text>
      </View>

      {/* Online Banking Payment Method */}
      <View style={styles.paymentMethod}>
        <FontAwesome name="bank" size={24} color="black" />
        <Text style={styles.methodText}>Online Banking</Text>
      </View>

      {/* Continue Button */}
      <TouchableOpacity style={styles.button} onPress={() => router.push('./PaymentMethod2')}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width * 0.05, // 5% padding on the sides
    paddingVertical: height * 0.03,  // 3% padding on top/bottom
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: width * 0.05,  // Dynamic font size based on screen width
    fontWeight: 'bold',
    marginBottom: height * 0.02,  // Margin based on screen height
  },
  paymentMethod: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: height * 0.02,  // Margin between items
    padding: width * 0.04,  // Padding based on screen width
    backgroundColor: '#CCCCCC',
  },
  methodText: {
    fontSize: width * 0.04,  // Dynamic font size based on screen width
    marginLeft: width * 0.05, // Margin between icon and text
  },
  button: {
    backgroundColor: '#99000C',
    paddingVertical: height * 0.02,  // Padding based on screen height
    paddingHorizontal: width * 0.2,  // Padding based on screen width
    borderRadius: 5,
    alignItems: 'center',
    marginTop: height * 0.05, // Margin from the last element
  },
  buttonText: {
    color: '#ffffff',
    fontSize: width * 0.045,  // Dynamic font size based on screen width
    fontWeight: 'bold',
  },
});

export default PaymentMethod;
