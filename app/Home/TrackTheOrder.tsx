import React, { useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, useWindowDimensions } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import TaskBar from '../TaskBar/TaskBar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { router, useNavigation } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context'; // Update import

interface OrderItemProps {
  ShippingCode: string;
  Status: string;
  Delivery: string;
  CurrentLocation: string;
  DeliveryTime: string;
  NgayDuTinGiaohang: string;
  onPress: () => void;  // Thêm thuộc tính onPress
}

const OrderItem: React.FC<OrderItemProps> = ({ ShippingCode, Status, Delivery, CurrentLocation, DeliveryTime, NgayDuTinGiaohang, onPress }) => (
  <ThemedView style={styles.orderItem}>
    <ThemedText>{ShippingCode}</ThemedText>
    <ThemedView style={styles.row}>
      <ThemedText style={styles.textLeft}>Status:</ThemedText>
      <ThemedView style={styles.status}>
        <ThemedText style={styles.textRight}>{Status}</ThemedText>
      </ThemedView>
    </ThemedView>
    <ThemedView style={styles.row}>
      <ThemedText style={styles.textLeft}>Delivery:</ThemedText>
      <ThemedText style={styles.textRight}>{Delivery}</ThemedText>
    </ThemedView>
    <ThemedView style={styles.row}>
      <ThemedText style={styles.textLeft}>CurrentLocation:</ThemedText>
      <ThemedText style={styles.textRight}>{CurrentLocation}</ThemedText>
    </ThemedView>
    <ThemedView style={styles.row}>
      <ThemedText style={styles.textLeft}>DeliveryTime:</ThemedText>
      <ThemedText style={styles.textRight}>{DeliveryTime}</ThemedText>
    </ThemedView>
    <ThemedView style={styles.row}>
      <ThemedText style={styles.textLeft}>Ngày dự tín giao hàng:</ThemedText>
      <ThemedText style={styles.textRight}>{NgayDuTinGiaohang}</ThemedText>
    </ThemedView>
    
    <View style={styles.rowButton}>
      <TouchableOpacity onPress={onPress}>
        <ThemedText style={styles.buttonText}>Order Details</ThemedText>
      </TouchableOpacity>
    </View>
  </ThemedView>
);

export default function Order() {
  const navigation = useNavigation();
  const { width, height } = useWindowDimensions();  // Get screen dimensions

  useEffect(() => {
    navigation.setOptions({ title: 'Tracking' });
  }, [navigation]);

  const handleOrderTracking = () => {
    router.push('./OrderTracking');
  }

  const orders: OrderItemProps[] = [
    {
      ShippingCode: 'DC001',
      Status: 'In Transit',
      Delivery: 'Nhà Bè',
      CurrentLocation: 'Ho Chi Minh City',
      DeliveryTime: '12:00 20/11/2024',
      NgayDuTinGiaohang: '20/11/2024',
      onPress: handleOrderTracking,  // Truyền hàm vào đây
    },
    {
      ShippingCode: 'DC002',
      Status: 'Delivered',
      Delivery: 'Quận 1',
      CurrentLocation: 'Ho Chi Minh City',
      DeliveryTime: '10:00 19/11/2024',
      NgayDuTinGiaohang: '19/11/2024',
      onPress: handleOrderTracking,
    },
    // Add more orders as needed
  ];

  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaView style={styles.safeArea} edges={['bottom']}>
        <ScrollView style={styles.scrollView} contentContainerStyle={[styles.scrollViewContent, { paddingBottom: height * 0.1 }]}>
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
  },
  orderItem: {
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  status: {
    backgroundColor: '#5EF845',
    borderRadius: 10,
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLeft: {
    flex: 1,
    textAlign: 'left',
  },
  textRight: {
    flex: 1,
    textAlign: 'right',
    marginRight: 20,
  },
  rowButton: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 10,
    marginRight: 20,
  },
  buttonText: {
    color: '#007CC2',
    textAlign: 'right',
  },
});
