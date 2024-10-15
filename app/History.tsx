import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Image, SafeAreaView, TextInput } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import TaskBar from './TaskBar/TaskBar';

interface OrderItemProps {
  date: string;
  status: string;
  pickupLocation: string;
  deliveryLocation: string;
  weight: string;
  dimensions: string;
}

const OrderItem: React.FC<OrderItemProps> = ({ date, status, pickupLocation, deliveryLocation, weight, dimensions }) => (
  <ThemedView style={styles.orderItem}>
    <View style={styles.dateContainer}>
      <ThemedText>{date}</ThemedText>
    </View>
    <View style={styles.infoContainer}>
      <View style={styles.infoRow}>
        <ThemedText>Status:</ThemedText>
        <ThemedText style={styles.textValue}>{status}</ThemedText>
      </View>
      <View style={styles.infoRow}>
        <ThemedText>Pickup Location:</ThemedText>
        <ThemedText style={styles.textValue}>{pickupLocation}</ThemedText>
      </View>
      <View style={styles.infoRow}>
        <ThemedText>Delivery Location:</ThemedText>
        <ThemedText style={styles.textValue}>{deliveryLocation}</ThemedText>
      </View>
      <View style={styles.infoRow}>
        <ThemedText>Weight:</ThemedText>
        <ThemedText style={styles.textValue}>{weight}</ThemedText>
      </View>
      <View style={styles.infoRow}>
        <ThemedText>Dimensions:</ThemedText>
        <ThemedText style={styles.textValue}>{dimensions}</ThemedText>
      </View>
    </View>
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button}>
        <ThemedText style={styles.buttonText}>Rate</ThemedText>
      </TouchableOpacity>
      <TouchableOpacity>
        <ThemedText style={styles.textViewDetails}>View Details</ThemedText>
      </TouchableOpacity>
    </View>
  </ThemedView>
);

export default function History() {
  // Mock data for frontend development
  const orders: OrderItemProps[] = [
    {
      date: '2023-06-01',
      status: 'Delivered',
      pickupLocation: '123 Main St, City A',
      deliveryLocation: '456 Elm St, City B',
      weight: '10 kg',
      dimensions: '30x40x50 cm',
    },
    {
      date: '2023-05-28',
      status: 'In Transit',
      pickupLocation: '789 Oak St, City C',
      deliveryLocation: '101 Pine St, City D',
      weight: '5 kg',
      dimensions: '20x30x40 cm',
    },
    {
      date: '2023-05-25',
      status: 'Pending',
      pickupLocation: '222 Maple Ave, City E',
      deliveryLocation: '333 Cedar Blvd, City F',
      weight: '15 kg',
      dimensions: '40x50x60 cm',
    },
  ];

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
       

        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
           {/* Search Bar */}
        
          <View style={styles.searchContainer}>
            <View style={styles.searchBar}>
              <TextInput placeholder="Search" style={styles.searchInput} />
              <TouchableOpacity style={styles.searchButton}>
                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/54/54481.png' }} style={styles.searchIcon} />
              </TouchableOpacity>
            </View>
            <Image source={require('../assets/images/Group28.png')} style={styles.searchRightIcon} />
          </View>
        
          {orders.map((order, index) => (
            <OrderItem key={index} {...order} />
          ))}
        </ScrollView>
        <TaskBar />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    padding: 20,
    paddingBottom: 80, // Add extra padding at the bottom to ensure content is not covered by TaskBar
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  orderItem: {
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 8,
  },
  
  infoContainer: {
    flexDirection: 'column',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  textValue: {
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  button: {
    backgroundColor: '#660008',
    padding: 8,
    borderRadius: 4,
    alignItems: 'center',
    height: 40,
    width: 120,
  },
  buttonText: {
    color: 'white',
  },
  textViewDetails: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
    color: '#009DF6',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  searchBar: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 8,
    padding: 10,
    height: 45,
    flex: 1,
    marginRight: 10,
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
    width: 30,
    height: 30,
    alignSelf: 'center',
  },
});
