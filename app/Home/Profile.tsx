import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, useWindowDimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';

export default function YourProfile () {

  const navigation = useNavigation();
  const { width, height } = useWindowDimensions(); // Use useWindowDimensions for responsiveness

  useEffect(() => {
    navigation.setOptions({ title: 'Your Profile' });
  }, [useNavigation]);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* View 1: Hello User + Icon */}
        <View style={styles.row}>
          <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/149/149071.png' }} style={[styles.profileImage, { width: width * 0.3, height: width * 0.3 }]} />
          <View />
          <Text style={[styles.greeting, { fontSize: width * 0.08 }]}>Le Van Sy</Text>
          <Text style={[styles.phoneNumber, { fontSize: width * 0.05 }]}>0905008230</Text>
          <View />
        </View>
        <View style={styles.optionContainer}>
          <TouchableOpacity style={styles.optionRow}>
            <TouchableOpacity style={styles.information}>
              <Ionicons name="mail" size={width * 0.05} color="black" style={styles.iconOption} />
              <Text style={[styles.textOption, { fontSize: width * 0.04 }]}>Email</Text>
            </TouchableOpacity>
            <Text style={[styles.textInformation, { fontSize: width * 0.04 }]}>syle@gmail.com</Text>

            <TouchableOpacity style={styles.information}>
              <Ionicons name="call" size={width * 0.05} color="black" style={styles.iconOption} />
              <Text style={[styles.textOption, { fontSize: width * 0.04 }]}>Phone Number</Text>
            </TouchableOpacity>
            <Text style={[styles.textInformation, { fontSize: width * 0.04 }]}>0905008230</Text>

            <TouchableOpacity style={styles.information}>
              <Ionicons name="location" size={width * 0.05} color="black" style={styles.iconOption} />
              <Text style={[styles.textOption, { fontSize: width * 0.04 }]}>Address</Text>
            </TouchableOpacity>
            <Text style={[styles.textInformation, { fontSize: width * 0.04 }]}>12 Nguyen Huu Tho</Text>
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
    borderRadius: 25,
  },
  greeting: {
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
    padding: 20,
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
  },
  information: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  textInformation: {
    marginLeft: 10,
    fontSize: 16,
  },
  iconOption: {
    color: '#666666',
  },
  textOption: {
    marginLeft: 10,
    fontSize: 16,
    color: '#4D4D4D',
  },
});
