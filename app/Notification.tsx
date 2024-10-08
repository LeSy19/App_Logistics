import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import TaskBar from './TaskBar/TaskBar';

interface NotificationItemProps{
  status: string;
  time: string;
  orderInfo: string;
}

const NotificationItem: React.FC<NotificationItemProps> = ({ status, time, orderInfo }) => (
  <ThemedView style={styles.notificationItem}>
    <ThemedText style={styles.status}>{status}</ThemedText>
    <ThemedText style={styles.time}>{time}</ThemedText>
    <ThemedText style={styles.orderInfo}>{orderInfo}</ThemedText>
  </ThemedView>
);

export default function Notification() {
  const notifications: NotificationItemProps[] = [
    {
      status: 'Order Delivered',
      time: '10:30 AM',
      orderInfo: 'Order #12345 has been successfully delivered',
    },
    {
      status: 'Order in Transit',
      time: '09:15 AM',
      orderInfo: 'Order #67890 is on the way',
    },
    {
      status: 'New Order',
      time: '08:00 AM',
      orderInfo: 'Order #54321 has just been created',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  notificationItem: {
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  status: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  time: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  orderInfo: {
    fontSize: 16,
  },
});
