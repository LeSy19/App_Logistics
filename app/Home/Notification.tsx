import React, {useEffect} from 'react';
import { StyleSheet, ScrollView, SafeAreaView, View, TouchableOpacity, Image, TextInput, Text, Dimensions } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import TaskBar from '../TaskBar/TaskBar';
import { useNavigation } from 'expo-router';

const {width, height} = Dimensions.get('window');

interface NotificationItemProps {
  status: string;
  time?: string;
}

const NotificationItem: React.FC<NotificationItemProps> = ({ status, time }) => (
  <ThemedView style={styles.notificationItem}>
    <View style={styles.textHeader}>
      <ThemedText style={styles.textLabel}>Order Status Update</ThemedText>
      <ThemedText style={styles.time}>{time}</ThemedText>
    </View>
    <ThemedText style={styles.status}>{status}</ThemedText>
  </ThemedView>
);

export default function Notification() {

  const navigation = useNavigation();

  useEffect(() => {
    // Set the header title
    navigation.setOptions({ title: 'Notification' });
}, [useNavigation]);

  const notifications: NotificationItemProps[] = [
    {
      status: 'Your order has been delivered to Phuoc Kien Commune, Nha Be.',
      time: '10:01',
    },
    {
      status: 'Your order has been delivered to Phuoc Kien Commune, Nha Be.',
      time: '10:01',
    },
    {
      status: 'Your order has been delivered to Phuoc Kien Commune, Nha Be.',
      time: '10:01',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <TextInput placeholder="Search" style={styles.searchInput} />
            <TouchableOpacity style={styles.searchButton}>
              <Image source={require('../../assets/images/search.png')} style={styles.searchIcon} />
            </TouchableOpacity>
          </View>
          <Image source={require('../../assets/images/Group28.png')} style={styles.searchRightIcon} />
        </View>
        <View style={styles.textSee}>
          <Text style={styles.textLeft}>Unread</Text>
          <Text style={styles.textRight}>See All</Text>
        </View>
        <View style={styles.separator} />
        {notifications.map((notification, index) => (
          <NotificationItem key={index} {...notification} />
        ))}
      </ScrollView>
      <TaskBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  notificationItem: {
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  textHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textLabel: {
    fontSize: width < 460 ? 18 : 20,
    fontWeight: 'bold',
  },
  status: {
    fontSize: width < 460 ? 16 : 18,
    marginBottom: 8,
  },
  time: {
    fontSize: width < 460 ? 14 : 16,
    color: '#666',
    marginBottom: 8,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  searchBar: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 8,
    padding: 10,
    height: width < 460 ? 50 : 60,
    flex: 1,
    marginRight: width < 460 ? 10 : 15,
  },
  searchInput: {
    flex: 1,
  },
  searchButton: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchIcon: {
    width: 20,
    height: 20,
    alignSelf: 'center',
  },
  searchRightIcon: {
    width: width < 460 ? 30 : 40,
    height: width < 460 ? 30 : 40,
    alignSelf: 'center',
  },
  textSee: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  textLeft: {
    fontSize: width < 460 ? 14 : 16,
    color: '#009DF6',
  },
  textRight: {
    fontSize: width < 460 ? 14 : 16,
    color: '#009DF6',
  },
  separator: {
    borderBottomWidth: 1, // Thickness of the line
    borderBottomColor: '#ccc', // Color of the line
    marginVertical: 5, // Space between the line and other elements
  },
});
