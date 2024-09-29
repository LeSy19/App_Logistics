import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TaskBar from './TaskBar/TaskBar';
import { useRouter } from 'expo-router';

const Account = () => {
  const router = useRouter();

  const handleEditInformation = () => {
    router.push('/EditInformation');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* View 1: Hello User + Icon */}
        <View style={styles.row}>
          <Text style={styles.greeting}>Hello User</Text>
          <Ionicons name="person" size={30} color="black" />
        </View>

        {/* Hàng 2 - 5: Name, Email, Phone Number, Address */}
        <View style={styles.infoRow}>
          <Text>Name</Text>
          <View style={styles.underline} />
        </View>
        <View style={styles.infoRow}>
          <Text>Email</Text>
          <View style={styles.underline} />
        </View>
        <View style={styles.infoRow}>
          <Text>Phone Number</Text>
          <View style={styles.underline} />
        </View>
        <View style={styles.infoRow}>
          <Text>Address</Text>
          <View style={styles.underline} />
        </View>

        {/* Button Edit Information */}
        <TouchableOpacity style={styles.button} onPress={handleEditInformation}>
          <Text style={styles.buttonText}>Edit Information</Text>
        </TouchableOpacity>

        {/* Line separator */}
        <View style={styles.separator} />

        {/* View 2: General */}
        <Text style={styles.sectionTitle}>General</Text>
        <TouchableOpacity style={styles.optionRow}>
          <Text>Favorite</Text>
          <Ionicons name="chevron-forward" size={20} color="black" />
        </TouchableOpacity>
        <View style={styles.underline} />
        <TouchableOpacity style={styles.optionRow}>
          <Text>Payment</Text>
          <Ionicons name="chevron-forward" size={20} color="black" />
        </TouchableOpacity>
        <View style={styles.underline} />
        <TouchableOpacity style={styles.optionRow}>
          <Text>Setting</Text>
          <Ionicons name="chevron-forward" size={20} color="black" />
        </TouchableOpacity>
        <View style={styles.underline} />

        {/* View 3: Help */}
        <Text style={styles.sectionTitle}>Help</Text>
        <TouchableOpacity style={styles.optionRow}>
          <Text>Help Center</Text>
          <Ionicons name="chevron-forward" size={20} color="black" />
        </TouchableOpacity>
        <View style={styles.underline} />
        <TouchableOpacity style={styles.optionRow}>
          <Text>About Us</Text>
          <Ionicons name="chevron-forward" size={20} color="black" />
        </TouchableOpacity>
        <View style={styles.underline} />
        <TouchableOpacity style={styles.optionRow}>
          <Text>Share Feedback</Text>
          <Ionicons name="chevron-forward" size={20} color="black" />
        </TouchableOpacity>
        <View style={styles.underline} />

        {/* Button Driver Registration */}
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Driver Registration</Text>
        </TouchableOpacity>
      </ScrollView>
      
      <TaskBar/>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  infoRow: {
    marginBottom: 10,
  },
  underline: {
    height: 1,
    backgroundColor: '#ccc',
    marginTop: 5,
  },
  separator: {
    borderBottomWidth: 2,
    borderBottomColor: '#000',
    marginBottom: 10,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Account;