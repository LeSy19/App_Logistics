import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { useRouter, Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const Register = () => {
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [address, setAddress] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();
  const scrollViewRef = useRef<ScrollView>(null);

  const handleLogin = () => {
    router.replace('/(tabs)');
  };

  const handleRegister = () => {
    router.replace('/(tabs)');
  };

  const handleScrollTo = (y: number) => {
    scrollViewRef.current?.scrollTo({ y, animated: true });
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <View style={styles.container}>
      {/* Logo nested within image and centered */}
      <View style={styles.viewContainer}>
        <Image style={styles.image} source={require('../../assets/images/image_5.png')} />
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../../assets/images/Remove-bg.ai_1727594388867 1.png')} />
        </View>
      </View>

      {/* Register */}
      <View style={styles.registerFormContainer}>
        <Text style={styles.title}>Sign Up</Text>

        {/* Form */}
        <TextInput
          placeholder="Full name"
          style={styles.input}
          value={fullname}
          onChangeText={setFullname}
        />
        <TextInput
          placeholder="Phone number"
          style={styles.input}
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />
        <TextInput
          placeholder="Email"
          style={styles.input}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          placeholder="Confirm password"
          style={styles.input}
          secureTextEntry={!showConfirmPassword}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TextInput
          placeholder="Address"
          style={styles.input}
          value={address}
          onChangeText={setAddress}
        />

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

       
        {/* Login */}
        <View style={styles.loginContainer}>
          <Text style={styles.text}>Do you have an account? </Text>
          <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.loginText}> Login now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewContainer: {
    height: 200,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height:200,
  },
  logoContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    bottom: 0,
  },
  logo: {
    width: 80,
    height: 80,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  label: {
    marginBottom: 10,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 15,
  },
  passwordInput: {
    flex: 1,
    padding: 10,
  },
  eyeIcon: {
    padding: 10,
  },
  button: {
    backgroundColor: '#99000C',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  text: {
    color: '#E70012',
  },
  loginText: {
    color: '#99000C',
    marginLeft: 5,
    fontWeight: 'bold',
  },
  
  registerFormContainer: {
    flex: 1,
    padding: 20,
    marginTop: -30, // Adjust as needed
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#fff',
  },
  
});

export default Register;
