import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import { FontAwesome, MaterialIcons, Entypo } from '@expo/vector-icons';
import TaskBar from './TaskBar/TaskBar';

const { width } = Dimensions.get('window');
const CAROUSEL_ITEM_WIDTH = 250;
const AUTO_SCROLL_INTERVAL = 3000; // 3 seconds

export default function HomeScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  const carouselItems = [
    { icon: "square", color: "#4A90E2", size: 50, order: "1st" },
    { icon: "arrow-up", color: "#D0021B", size: 40, order: "2nd" },
    { icon: "star", color: "#F5A623", size: 50, order: "3rd" },
    { icon: "heart", color: "#D0021B", size: 50, order: "4th" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentIndex < carouselItems.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(0);
      }
    }, AUTO_SCROLL_INTERVAL);

    return () => clearInterval(timer);
  }, [currentIndex]);

  useEffect(() => {
    scrollViewRef.current?.scrollTo({
      x: currentIndex * CAROUSEL_ITEM_WIDTH,
      animated: true,
    });
  }, [currentIndex]);

  return (
    <View style={styles.container}>
      {/* Header with logo */}
      <View style={styles.header}>
       
        {/* Carousel */}
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          style={styles.carousel}
          onMomentumScrollEnd={(event) => {
            const newIndex = Math.round(event.nativeEvent.contentOffset.x / CAROUSEL_ITEM_WIDTH);
            setCurrentIndex(newIndex);
          }}
        >
          {carouselItems.map((item, index) => (
            <View key={index} style={styles.carouselItem}>
              {item.icon === "square" && (
                <>
                  <FontAwesome name="circle" size={30} color="#50E3C2" />
                  <FontAwesome name="caret-up" size={40} color="#F5A623" />
                </>
              )}
              <Text style={styles.orderText}>{item.order}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Location and delivery point */}
      <View style={styles.locationContainer}>
        <View style={styles.locationRow}>
          <Entypo name="location-pin" size={24} color="#F5A623" />
          <Text style={styles.locationText}>Your location</Text>
          <MaterialIcons name="map" size={24} color="#4A90E2" style={styles.mapIcon} />
        </View>

        <View style={styles.locationRow}>
          <Entypo name="location" size={20} color="#9B9B9B" />
          <Text style={styles.locationText}>Delivery point</Text>
          <MaterialIcons name="map" size={24} color="#4A90E2" style={styles.mapIcon} />
        </View>

        <TouchableOpacity style={styles.addLocationButton}>
          <Text style={styles.addLocationText}>+ Add delivery point</Text>
        </TouchableOpacity>
      </View>

      {/* Available vehicles */}
      <View style={styles.vehicleContainer}>
        <TouchableOpacity style={styles.vehicleOption}>
         
          <FontAwesome name="truck" size={24} color="#333333" style={styles.vehicleIcon} />
          <Text style={styles.vehicleText}>Pickup truck</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.vehicleOption}>
         
          <FontAwesome name="truck" size={24} color="#333333" style={styles.vehicleIcon} />
          <Text style={styles.vehicleText}>Truck</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.vehicleOption}>
         
          <FontAwesome name="truck" size={24} color="#333333" style={styles.vehicleIcon} />
          <Text style={styles.vehicleText}>Container</Text>
        </TouchableOpacity>
      </View>

     <TaskBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    marginBottom: 30,
  },
  carousel: {
    height: 120,
  },
  carouselItem: {
    width: CAROUSEL_ITEM_WIDTH,
    height: 120,
    backgroundColor: '#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginRight: 10,
  },
  orderText: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  locationContainer: {
    padding: 20,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  locationText: {
    color: '#333333',
    marginLeft: 10,
  },
  mapIcon: {
    marginLeft: 'auto',
  },
  addLocationButton: {
    backgroundColor: '#E6E6E6',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  addLocationText: {
    color: '#4A90E2',
  },
  vehicleContainer: {
    paddingHorizontal: 20,
    marginTop: 40,
  },
  vehicleOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#F2F2F2',
    borderRadius: 5,
    marginBottom: 20,
    height: 70,
  },
  
  vehicleIcon: {
    marginRight: 30,
  },
  vehicleText: {
    fontSize: 16,
    color: '#333333',
  },
});
