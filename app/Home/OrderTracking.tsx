import React, { useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image, useWindowDimensions } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import TaskBar from '../TaskBar/TaskBar';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useNavigation } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';

interface OrderItemProps {
  OrderID: string;
  DeliveryLocation: string;
  DeliveryTime: string;
}

const OrderItem: React.FC<OrderItemProps> = ({ OrderID, DeliveryLocation, DeliveryTime }) => (
  <ThemedView style={styles.orderItem}>
    <ThemedText>Shipping Code: {OrderID}</ThemedText>
    <ThemedText>Current Location: {DeliveryLocation}</ThemedText>

    <View style={styles.buttonContainer}>
      <ThemedText style={styles.deliveryTime}>{DeliveryTime}</ThemedText>
      <TouchableOpacity style={styles.button}>
        <ThemedText style={styles.buttonText}>Contact</ThemedText>
      </TouchableOpacity>
    </View>
  </ThemedView>
);

export default function Order() {
  const navigation = useNavigation();
  const { width, height } = useWindowDimensions(); // Use useWindowDimensions instead of Dimensions.get

  useEffect(() => {
    // Set the header title
    navigation.setOptions({ title: 'Order Tracking' });
  }, [useNavigation]);

  const orders: OrderItemProps[] = [
    {
      OrderID: 'HD00001',
      DeliveryLocation: '144, Le Van Viet, Tang Nhon Phu A, Thu Duc',
      DeliveryTime: '13:00 12/10/2024'
    },
  ];

  const orderStatus = [
    { status: 'Processing', date: '12.10.2024', description: 'We have received the order', icon: 'shopping-cart', color: 'red' },
    { status: 'Order Confirmed', date: '12.10.2024', description: 'We have confirmed the order', icon: 'file-alt', color: 'red' },
    { status: 'Package Received', date: '13.10.2024', description: 'The package has been received', icon: 'check-circle', color: 'red' },
    { status: 'In Transit', date: '', description: 'Estimated 3 hours', icon: 'truck', color: 'gray' },
    { status: 'Delivered', date: '13.10.2024', description: 'Delivered on', icon: 'check-square', color: 'gray' },
  ];

  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaView style={styles.safeArea} edges={['bottom']}>
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
          {orders.map((order, index) => (
            <OrderItem key={index} {...order} />
          ))}
          <Text style={styles.title}>Order Tracking</Text>

          <View style={styles.statusContainer}>
            {orderStatus.map((item, index) => (
              <View key={index} style={styles.statusRow}>
                <View style={styles.iconContainer}>
                  <FontAwesome5 name={item.icon} size={33} color={item.color} />
                  {index < orderStatus.length - 1 && (
                    <View style={[styles.line, { backgroundColor: item.color }]} />
                  )}
                </View>

                <View style={styles.textContainer}>
                  <Text style={[styles.statusText, { color: item.color }]}>{item.status}</Text>
                  <Text style={styles.description}>{item.description} {item.date && `on ${item.date}`}</Text>
                </View>
              </View>
            ))}
          </View>

          <Text style={styles.locationTitle}>Order Location</Text>
          <Image source={require('../../assets/images/Frame523.png')} style={styles.mapImage} />
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView >
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
    width: '30%', // Percentage-based width to adjust for all screen sizes
    height: 35,
    backgroundColor: 'red',
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
  },
  deliveryTime: {
    alignSelf: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  statusContainer: {
    borderLeftWidth: 2,
    borderLeftColor: '#ccc',
    paddingLeft: 20,
    marginHorizontal: 20,
  },
  statusRow: {
    flexDirection: 'row',
    marginBottom: 24,
    flexWrap: 'wrap', // Allow wrapping of text if space is limited
  },
  iconContainer: {
    alignItems: 'center',
    marginRight: 16,
  },
  line: {
    width: 2,
    height: 24,
    marginTop: 4,
  },
  textContainer: {
    flex: 1,
  },
  statusText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    color: '#666',
  },
  locationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  mapImage: {
    width: '100%', // Full width for images
    height: 200,
    resizeMode: 'cover',
  },
});
