import React, { useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import TaskBar from '../TaskBar/TaskBar';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import { useNavigation } from 'expo-router';



interface OrderItemProps {
  OrderID: string;
  DeliveryLocation: string;
  DeliveryTime: string;
}

const OrderItem: React.FC<OrderItemProps> = ({ OrderID, DeliveryLocation, DeliveryTime }) => (
  <ThemedView style={styles.orderItem}>
    <ThemedText>Shipping Code: {OrderID}</ThemedText>
    <ThemedText>Current Location: {DeliveryLocation}</ThemedText>
    <ThemedText>Delivery Time: {DeliveryTime}</ThemedText>
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button}>
        <ThemedText style={styles.buttonText}>Contact</ThemedText>
      </TouchableOpacity>
    </View>
  </ThemedView>
);

export default function Order() {
    const navigation = useNavigation();

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

  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaView style={styles.safeArea} edges={['bottom']}>
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
          {orders.map((order, index) => (
            <OrderItem key={index} {...order} />
          ))}
                  <View style={styles.row}>
                  <Text style={styles.order}>Order Tracking</Text>
                  </View>

                  <View style={styles.row}>
                  <AntDesign name="shoppingcart" size={70} color="black" />
                  <Ionicons name="document-text-outline" size={70} color="black" />
                  <AntDesign name="checkcircleo" size={70} color="black" />
                  <AntDesign name="inbox" size={70} color="black" />
                  <Feather name="truck" size={70} color="black" />
                  </View>
                  <View style={styles.row}>
                    <Text style={styles.handle}>Handle</Text>
                    <Text style={styles.confirm}>Confirm order</Text>
                    <Text style={styles.received}>Goods received</Text>
                    <Text style={styles.delivery}>Shipping</Text>
                    <Text style={styles.delivery}>Delivered</Text>
                  </View>
                  <View style={styles.row}>
                    <Text style={styles.delivered1}>Received the order on October 12, 2024</Text>
                    <Text style={styles.delivered2}>Confirmed the order on October 12, 2024</Text>
                    <Text style={styles.delivered3}>Received the order on October 13, 2024</Text>
                    <Text style={styles.delivered}>Estimated 3 hours</Text>
                    <Text style={styles.delivered}>Delivered on October 13, 2024</Text>
                  </View>
                  <Text style={styles.order}>Order location</Text>
        </ScrollView>
        <TaskBar />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  received: {
    fontSize: 30,
    color: 'red',
  },

  confirm: {
    fontSize: 30,
    color: 'red',
  },
  handle: {
    fontSize: 30,
    color: 'red',
  },
  delivered1: {
    fontSize: 20,
    color: 'red',
  },
  delivered2: {
    fontSize: 20,
    color: 'red',
  },
  delivered3: {
    fontSize: 20,
    color: 'red',
  },
  delivered: {
    fontSize: 20,
  },
  delivery: {
    fontSize: 30,
  },
  separator: {
    borderBottomWidth: 2,
    borderBottomColor: '#000',
    marginBottom: 10,
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  
  order: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  
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
    backgroundColor: 'red',
    padding: 8,
    borderRadius: 4,
    flex: 1,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
});