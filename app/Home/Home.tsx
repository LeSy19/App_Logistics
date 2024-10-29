import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import TaskBar from '../TaskBar/TaskBar';
import { useNavigation, useRouter } from 'expo-router';
const HomeScreen = () => {
  const router = useRouter();
  const navigation = useNavigation();

  useEffect(() => {
    // Set the header title
    navigation.setOptions({ title: 'Home' });
}, [useNavigation]);

const handleCreateOrder = () => {
  router.push('../Home/CreateOrder');
}

const handleOrderTracking = () => {
  router.push('../Home/OrderTracking');
}
  return (
    <View style={{ flex: 1, backgroundColor: '#f0f0f0' }}>
      <ScrollView>
      <View style={styles.container}>
        {/* Header Section */}
        <View style={styles.header}>
          <View style={styles.leftSection}>
            <TouchableOpacity style={styles.personButton} onPress={() => router.push('../Home/Account')}>
              <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/149/149071.png' }} style={styles.personIcon} />
            </TouchableOpacity>
            <View style={styles.addressRow}>
              <Text style={styles.addressLabel}>Address</Text>
              <Text style={styles.addressValue}>288, Do Xuan Hop</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.notificationButton} onPress={() => router.push('./Notification')}>
            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1827/1827392.png' }} style={styles.notificationIcon} />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchBar}>
          <TextInput placeholder="Recent shipment" style={styles.searchInput} />
          <TouchableOpacity style={styles.searchButton}>
            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/54/54481.png' }} style={styles.searchIcon} />
          </TouchableOpacity>
        </View>

        {/* Order Position Section */}
        <View style={styles.orderPosition}>

          <View style={styles.orderHeader}>
            <View style={styles.orderLeft}>
              <Text style={styles.orderTitle}>Order Position</Text>
              <Text style={styles.orderSubtitle}>Please enter your shipment number</Text>
            </View>
            <View style={styles.orderRight}>
              <TouchableOpacity>
                <Image source={require('../../assets/images/Remove-bg.ai_1727594388867 1.png')} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.orderInputContainer}>
            <TextInput placeholder="Your position" style={styles.orderInput} />
            <TouchableOpacity style={styles.scanButton}>
              <Image source={require('../../assets/images/scan.png')} style={styles.scanIcon} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Pickup & Delivery Section */}
        <View style={styles.deliverySection}>
          <View style={styles.delivery}>
            <Text style={styles.deliveryLabel}>Pickup</Text>
            <Text style={styles.deliveryValue}>288, Do Xuan Hop</Text>
          </View>
          <View style={styles.delivery}>
            <Text style={styles.deliveryLabel}>Delivery</Text>
            <Text style={styles.deliveryValue}>141, Le Van Viet</Text>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionButton}>
            <Image source={require('../../assets/images/image17.png')} />
            <Text style={styles.actionText}>Check Goods</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={handleCreateOrder}>
            <Image source={require('../../assets/images/TaoDon.png')} />
            <Text style={styles.actionText}>Create Order</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={handleOrderTracking}>
            <Image source={require('../../assets/images/TraCuu.png')} />
            <Text style={styles.actionText}>Track</Text>
          </TouchableOpacity>
        </View>

        {/* Vehicle Options */}
        <View style={styles.vehicleSection}>
          <Text style={styles.sectionTitle}>Vehicle Options</Text>
          <View style={styles.vehicleRow}>
            <TouchableOpacity style={styles.vehicleItem}>
              <Text style={styles.vehicleText}>Pickup Truck</Text>
              <Image source={require('../../assets/images/XeBanTai.png')} style={styles.vehicleIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.vehicleItem}>
            <Text style={styles.vehicleText}>Truck</Text>
            <Image source={require('../../assets/images/XeTai.png')} style={styles.vehicleIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.vehicleRow}>
            <TouchableOpacity style={styles.vehicleItem}>
            <Text style={styles.vehicleText}>Container</Text>
            <Image source={require('../../assets/images/Container.png')} style={styles.vehicleIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.vehicleItem}>
            <Text style={styles.vehicleText}>Other</Text>
            <Image source={require('../../assets/images/Khac.png')} style={styles.vehicleIcon} />
            </TouchableOpacity>
          </View>
          
        </View>

        
      </View>
      </ScrollView>
      <TaskBar/>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    marginBottom: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 30,
  },
  leftSection: {
    flexDirection: 'row', // Arrange icon and text side by side
    alignItems: 'center', // Center icon and text vertically
  },
  personButton: {
    padding: 10,
  },
  personIcon: {
    width: 40,
    height: 40,
  },
  addressText: {
    fontSize: 16,
  },
  notificationButton: {
    padding: 10,
  },
  notificationIcon: {
    alignItems: 'flex-end',
    width: 24,
    height: 24,
  },
  searchBar: {
    flexDirection: 'row',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    height: 45,
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
  orderPosition: {
    backgroundColor: '#99000C',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    height: 200,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  orderLeft: {
    alignItems: 'flex-start',
  },
  orderRight: {
    alignItems: 'flex-end',
  },
  orderTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orderSubtitle: {
    color: '#fff',
    fontSize: 14,
  },
  orderInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginTop: 20,
  },
  orderInput: {
    flex: 1,
  },
  scanButton: {
    padding: 10,
  },
  scanIcon: {
    width: 24,
    height: 24,
  },
  deliverySection: {
    marginBottom: 20,
    backgroundColor: '#CCCCCC',
    padding: 20,
    borderRadius: 10,
  },
  addressRow: {
    alignItems: 'flex-start',
  },
  addressLabel: {
    fontSize: 14,
    color: '#888',
  },
  addressValue: {
    fontSize: 14,
  },
  delivery: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  deliveryLabel: {
    fontSize: 16,
    marginBottom: 10,
  },
  deliveryValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginHorizontal: 5,
    alignItems: 'center',
    borderRadius: 8,
  },
  actionText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 5,
  },
  vehicleSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  vehicleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  vehicleItem: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 8,
    marginHorizontal: 5,
    
  },
  vehicleText: {
    fontSize: 18,
    marginBottom: 15,
  },
  vehicleIcon: {
    width: '50%',
    height: 40,
  },
});

export default HomeScreen;
