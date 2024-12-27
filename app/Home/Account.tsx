import React, {useEffect} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TaskBar from '../TaskBar/TaskBar';
import { useNavigation, useRouter } from 'expo-router';

export default function Account () {
  const router = useRouter();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: 'Account' });
  }, [useNavigation]);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.row}>
          <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/149/149071.png' }} style={styles.profileImage} />
          <Text style={styles.greeting}>Le Van Sy</Text>
          <Text style={styles.phoneNumber}>0904308230</Text>
        </View>
        <View style={styles.optionContainer}>
          <TouchableOpacity style={styles.optionRow} onPress={() => router.push('./Profile')}>
            <Ionicons name="person" size={20} color="black" style={styles.iconOption} />
            <Text style={styles.textOption}>Your Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionRow} onPress={() => router.push('./Notification')}>
            <Ionicons name="notifications" size={20} color="black" style={styles.iconOption} />
            <Text style={styles.textOption}>Notifications</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionRow}>
            <Ionicons name="settings" size={20} color="black" style={styles.iconOption} />
            <Text style={styles.textOption}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionRow}>
            <Ionicons name="language" size={20} color="black" style={styles.iconOption} />
            <Text style={styles.textOption}>Language</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionRow} onPress={() => router.replace('/(tabs)')}>
            <Ionicons name="log-out" size={20} color="black" style={styles.iconOption} />
            <Text style={styles.textOption}>Log Out</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionRow}>
            <Ionicons name="information-circle" size={20} color="black" style={styles.iconOption} />
            <Text style={styles.textOption}>About Us</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionRow}>
            <Ionicons name="help-circle" size={20} color="black" style={styles.iconOption} />
            <Text style={styles.textOption}>Help</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TaskBar />
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    padding: width > 430 ? 40 : 20,
    paddingBottom: 80,
  },
  row: {
    alignItems: 'center',
    marginBottom: width > 430 ? 40 : 20,
  },
  profileImage: {
    width: width > 430 ? 150 : 110,
    height: width > 430 ? 150 : 110,
    borderRadius: 25,
  },
  greeting: {
    fontSize: width > 430 ? 30 : 24,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  phoneNumber: {
    fontSize: width > 430 ? 18 : 16,
  },
  optionContainer: {
    flex: 1,
    marginVertical: 10,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: width > 430 ? 30 : 20,
    backgroundColor: '#D9D9D9',
    marginVertical: 5,
    borderRadius: 10,
  },
  iconOption: {
    color: '#666666'
  },
  textOption: {
    marginLeft: 10,
    fontSize: width > 430 ? 18 : 16,
    color: '#4D4D4D'
  },
});
