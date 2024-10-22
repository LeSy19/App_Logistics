import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router'; // Import useRouter from 'expo-router'

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter(); // Initialize useRouter

  
  return (
    <View style={styles.container}>
      {/* Logo nested within image and centered */}
      <View style={styles.viewContainer}>
        <Image style={styles.image} source={require('../../assets/images/image_5.png')} />
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../../assets/images/Remove-bg.ai_1727594388867 1.png')} />
        </View>
      </View>
    
      {/* Login */}
      <View style={styles.loginFormContainer}>
        <Text style={styles.title}>Login</Text>

        {/* Form */}
        <TextInput
          placeholder="Enter email"
          style={styles.input}
          keyboardType="email-address"
        />
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Enter password"
            secureTextEntry={!showPassword}
            style={styles.inputPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Text style={styles.eyeIcon}>{showPassword ? '👀' : '👁'}</Text>
          </TouchableOpacity>
        </View>

        {/* Forgot password */}
        <TouchableOpacity onPress={() => router.replace('../Account/ForgotPassword')}>
          <Text style={styles.forgotPassword}>Forgot password</Text>
        </TouchableOpacity>

        {/* Login button */}
        <TouchableOpacity style={styles.loginButton} onPress={() => router.replace('../Home/Home')}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        {/* Or */}
        
        <Text style={styles.or}>or</Text>
        

        {/* Other login buttons */}
        <TouchableOpacity style={styles.socialButton}>
          <Image style={styles.socialIcon} source={require('../../assets/images/icon_facebook.png')} />
          <Text>Login with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image style={styles.socialIcon} source={require('../../assets/images/icon_google.png')} />
          <Text>Login with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image style={styles.socialIcon} source={require('../../assets/images/icon_apple.png')} />
          <Text>Login with Apple ID</Text>
        </TouchableOpacity>

        {/* Register */}
        <View style={styles.registerContainer}>
          <Text style={styles.text}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => router.replace('../Account/SignUp')}>
            <Text style={styles.registerText}>Sign up now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 30,
  },
  input: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 10,
    marginBottom: 30,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
  },
  inputPassword: {
    flex: 1,
    padding: 15,
  },
  eyeIcon: {
    paddingRight: 10,
    fontSize: 18,
  },
  forgotPassword: {
    textAlign: 'right',
    color: 'red',
    marginTop: 10,
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#b71c1c',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center', // Changed to center text vertically
    marginBottom: 10,
    height: 60,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18, // Changed to center text horizontally
  },
  or: {
    textAlign: 'center',
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  
  socialButton: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  socialIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  text: {
    color: '#E70012',
  },
  registerText: {
    color: '#99000C',
    fontWeight: 'bold',
  },
  loginFormContainer: {
    flex: 1,
    padding: 20,
    marginTop: -30, // Push login form over viewContainer
    borderTopLeftRadius: 30, // Border-radius on top
    borderTopRightRadius: 30, // Border-radius on top
    backgroundColor: '#fff',
  },
});
