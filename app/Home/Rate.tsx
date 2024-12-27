import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, TextInput, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TaskBar from '../TaskBar/TaskBar';
import { useNavigation, useRouter } from 'expo-router';

const { width, height } = Dimensions.get('window'); // Get device dimensions

export default function Account() {
    const router = useRouter();
    const [text, setText] = useState('');
    const navigation = useNavigation();

    useEffect(() => {
        // Set the header title
        navigation.setOptions({ title: 'Rating' });
    }, [useNavigation]);

    const handleAddMedia = () => {
        // Handle adding image/video (can open camera or photo library)
        console.log('Add Image/Video Pressed');
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                {/* View 1: Hello User + Icon */}
                <View style={styles.row}>
                    <Image
                        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/149/149071.png' }}
                        style={styles.profileImage}
                    />
                    <View />
                    <Text style={styles.greeting}>Le Van Sy</Text>
                    <View />
                </View>

                <View style={styles.rateStar}>
                    <Text style={styles.rateText}>How do you feel about our service?</Text>
                    <View style={styles.starContainer}>
                        {[...Array(5)].map((_, index) => (
                            <Ionicons key={index} name="star-outline" size={50} color="#FFD700" style={styles.star} />
                        ))}
                    </View>

                    <View>
                        <Text style={styles.rateText}>Add Image/Video</Text>
                        <TouchableOpacity style={styles.addButton} onPress={handleAddMedia}>
                            <View style={styles.graySquare}>
                                <Ionicons name="add" size={30} color="#FFFFFF" />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <Text style={styles.rateText}>Comments</Text>
                        <TextInput
                            style={styles.textarea}
                            multiline
                            numberOfLines={4} // Initial display lines
                            onChangeText={setText}
                            value={text}
                            placeholder="Enter content here..."
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollViewContent: {
        padding: width * 0.05, // Responsive padding based on screen width
        paddingBottom: 80, // Additional padding at the bottom for TaskBar space
    },
    row: {
        alignItems: 'center',
        marginBottom: height * 0.03, // Responsive margin
    },
    profileImage: {
        width: width * 0.25, // 25% of screen width
        height: width * 0.25, // 25% of screen width
        borderRadius: width * 0.125, // Half of width for rounded corners
    },
    greeting: {
        fontSize: width * 0.06, // Responsive font size
        fontWeight: 'bold',
        marginVertical: 5,
    },
    rateStar: {
        flex: 1,
        padding: width * 0.05, // Responsive padding
        marginBottom: height * 0.02, // Responsive margin
    },
    rateText: {
        fontSize: width * 0.04, // Responsive font size
    },
    starContainer: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    star: {
        marginHorizontal: 10,
        marginBottom: 15,
    },
    addButton: {
        padding: width * 0.05, // Responsive padding
    },
    graySquare: {
        width: width * 0.15,  // 15% of screen width
        height: width * 0.15, // 15% of screen width
        backgroundColor: '#808080', // Gray color
        justifyContent: 'center', // Center content
        alignItems: 'center', // Center content
        borderRadius: 8, // Add rounded corners if needed
    },
    textarea: {
        height: height * 0.2, // 20% of screen height for textarea
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        padding: width * 0.03, // Responsive padding
        textAlignVertical: 'top', // Align text from the top
        marginTop: height * 0.02, // Responsive margin
        backgroundColor: '#D9D9D9',
    },
});
