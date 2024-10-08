import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import TaskBar from './TaskBar/TaskBar';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

interface OrderItemProps {
  ShippingCode: string;
  Status: string;
  CurrentLocation: string;
  DeliveryTime: string;
}

const OrderItem: React.FC<OrderItemProps> = ({ ShippingCode, Status, CurrentLocation, DeliveryTime }) => (
  <ThemedView style={styles.orderItem}>
    <ThemedText>Shipping Code: {ShippingCode}</ThemedText>
    <ThemedText>Status: {Status}</ThemedText>
    <ThemedText>Current Location: {CurrentLocation}</ThemedText>
    <ThemedText>Delivery Time: {DeliveryTime}</ThemedText>
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button}>
        <ThemedText style={styles.buttonText}>Order Details</ThemedText>
      </TouchableOpacity>
    </View>
  </ThemedView>
);

export default function Order() {
  const orders: OrderItemProps[] = [
    {
      ShippingCode: '1233',
      Status: 'In Transit',
      CurrentLocation: 'Ho Chi Minh City',
      DeliveryTime: '12:00 20/11/2024'
    },
    {
      ShippingCode: '1234',
      Status: 'In Transit',
      CurrentLocation: 'Hanoi',
      DeliveryTime: '14:30 21/11/2024'
    },
    {
      ShippingCode: '1235',
      Status: 'Delivered',
      CurrentLocation: 'Da Nang',
      DeliveryTime: '09:45 19/11/2024'
    },
    {
      ShippingCode: '1236',
      Status: 'Processing',
      CurrentLocation: 'Can Tho',
      DeliveryTime: '16:15 22/11/2024'
    },
  ];

  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaView style={styles.safeArea} edges={['bottom']}>
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
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
  safeArea: {
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  button: {
    backgroundColor: 'orange',
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
