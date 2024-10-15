import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TaskBar from './TaskBar/TaskBar';
import { useRouter } from 'expo-router';

export default function Account () {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* View 1: Hello User + Icon */}
        <View style={styles.row}>
          <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/149/149071.png' }} style={styles.profileImage} />
          <View />
          <Text style={styles.greeting}>Le Van Sy</Text>
          <Text style={styles.phoneNumber}>0905008230</Text>
          <View />
        </View>
        <View style={styles.optionContainer}>
          <TouchableOpacity style={styles.optionRow} onPress={() => router.push('/Profile')}>
            <Ionicons name="person" size={20} color="black" style={styles.iconOption} />
            <Text style={styles.textOption}>Your Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionRow}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    padding: 20,
    paddingBottom: 80, // Add some bottom padding to account for the TaskBar
  },
  row: {

    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 25,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  phoneNumber: {
    fontSize: 16,
  },
  optionContainer: {
    flex: 1,
    marginVertical: 10,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#D9D9D9',
    marginVertical: 5,
    borderRadius: 10,
  },
  iconOption: {
    color: '#666666'
  },
  textOption: {
    marginLeft: 10,
    fontSize: 16,
    color: '#4D4D4D'
  },
});

