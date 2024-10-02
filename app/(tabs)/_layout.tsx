import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleLogin = () => {
    // Use replace instead of push to prevent going back to the login screen
    router.replace('/Home');
  };

  const handleSignUp = () => {
    router.push('/SignUp');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.inputPassword}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setShowPassword(!showPassword)}
        >
          <FontAwesome name={showPassword ? 'eye' : 'eye-slash'} size={20} color="gray" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or login with</Text>

      <View style={styles.socialIconsContainer}>
        <TouchableOpacity style={styles.iconCircle}>
          <FontAwesome name="facebook" size={24} color="blue" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconCircle}>
          <FontAwesome name="apple" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconCircle}>
          <FontAwesome name="google" size={24} color="red" />
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity>
          <Text style={styles.footerText}>Forgot password</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.footerText}>Don't have an account? Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    marginTop: 170,
    marginBottom: 70,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  passwordContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 50,
  },
  inputPassword: {
    flex: 1,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
  },
  loginButton: {
    width: '100%',
    height: 60,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orText: {
    fontSize: 16,
    marginBottom: 30,
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginBottom: 30,
  },
  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#e6e6e6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    bottom: 60,
  },
  footerText: {
    fontSize: 16,
    color: '#0066cc',
    textDecorationLine: 'underline',
    marginBottom: 20,
  },
});
