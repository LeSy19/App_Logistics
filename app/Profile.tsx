import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TaskBar from './TaskBar/TaskBar';


export default function YourProfile () {
  

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
        <TouchableOpacity style={styles.optionRow}>
          <TouchableOpacity style={styles.information}>
            <Ionicons name="mail" size={20} color="black" style={styles.iconOption} />
            <Text style={styles.textOption}>Email</Text>
          </TouchableOpacity>
          <Text style={styles.textInformation}>syle@gmail.com</Text>

          <TouchableOpacity style={styles.information}>
            <Ionicons name="call" size={20} color="black" style={styles.iconOption} />
            <Text style={styles.textOption}>Phone Number</Text>
          </TouchableOpacity>
          <Text style={styles.textInformation}>0905008230</Text>

          <TouchableOpacity style={styles.information}>
            <Ionicons name="location" size={20} color="black" style={styles.iconOption} />
            <Text style={styles.textOption}>Address</Text>
          </TouchableOpacity>
          <Text style={styles.textInformation}>12 Nguyen Huu Tho</Text>
           </TouchableOpacity>
        </View>

      </ScrollView>

      
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
    padding: 30,
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
  },
  information: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  textInformation: {
    // marginLeft: 30,
    fontSize: 16,
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

