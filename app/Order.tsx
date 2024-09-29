import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { View } from 'react-native';
import TaskBar from './TaskBar/TaskBar';

export default function Order() {
  return (
    <View>
      <TaskBar/>
    </View>
  );
}

