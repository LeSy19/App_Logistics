import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, usePathname } from 'expo-router';

const TaskBar = () => {
  const router = useRouter();
  const currentPath = usePathname();

  const tabs = [
    { name: 'Home', icon: 'home-outline', route: '/Home' },
    { name: 'History', icon: 'time-outline', route: '/History' },
    { name: 'Order', icon: 'cart-outline', route: '/Order' },
    { name: 'Notification', icon: 'notifications-outline', route: '/Notification' },
    { name: 'Account', icon: 'person-outline', route: '/Account' },
  ];

  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const isActive = currentPath === tab.route;
        return (
          <TouchableOpacity
            key={tab.name}
            style={styles.tabItem}
            onPress={() => router.push(tab.route as never)}
          >
            <Ionicons 
              name={tab.icon as keyof typeof Ionicons.glyphMap} 
              size={24} 
              color={isActive ? '#007AFF' : '#8E8E93'} 
            />
            <Text style={[styles.tabText, isActive && styles.activeTabText]}>
              {tab.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    height: 60,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    width: Dimensions.get('window').width,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    fontSize: 12,
    color: '#8E8E93',
    marginTop: 4,
  },
  activeTabText: {
    color: '#007AFF',
  },
});

export default TaskBar;
