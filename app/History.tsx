import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
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
    <ThemedText style={styles.date}>{date}</ThemedText>
    <ThemedText style={styles.status}>{status}</ThemedText>
    <ThemedText>Pickup: {pickupLocation}</ThemedText>
    <ThemedText>Delivery: {deliveryLocation}</ThemedText>
    <ThemedText>Weight: {weight}</ThemedText>
    <ThemedText>Dimensions: {dimensions}</ThemedText>
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button}>
        <ThemedText style={styles.buttonText}>Rate</ThemedText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <ThemedText style={styles.buttonText}>View Details</ThemedText>
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
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
        {orders.map((order, index) => (
          <OrderItem key={index} {...order} />
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
  },
  scrollViewContent: {
    padding: 16,
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
  date: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  status: {
    fontStyle: 'italic',
    marginBottom: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  button: {
    backgroundColor: '#4A90E2',
    padding: 8,
    borderRadius: 4,
    flex: 1,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
});
