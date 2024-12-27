import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard, Image, Dimensions } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons'; // Import icon library
import TaskBar from '../TaskBar/TaskBar';
import { useNavigation } from 'expo-router';

const Message = () => {

    const navigation = useNavigation();
    const { width, height } = Dimensions.get('window'); // Get the dimensions of the window

    useEffect(() => {
        // Set the header title and add icon
        navigation.setOptions({
            headerTitle: () => (
                <View style={styles.headerContainer}>
                    <Image source={require('../../assets/images/image.png')} style={styles.circleImage} />
                    <View style={styles.nameContainer}>
                        <Text style={styles.headerTitle}>Nguyen Nam</Text>
                        <Text style={styles.subHeaderTitle}>Driver</Text>
                    </View>
                </View>
            ),
            headerStyle: {
                backgroundColor: 'white',
            },
            headerTintColor: 'black',
            headerRight: () => (
                <View style={styles.callContainer}>
                    <TouchableOpacity style={styles.callButton}>
                        <FontAwesome name="phone" size={24} color="#009DF6" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.callButton}>
                        <FontAwesome name="video-camera" size={24} color="#009DF6" />
                    </TouchableOpacity>
                </View>
            ),
        });
    }, [navigation]);

    useEffect(() => {
        // Set the header title
        navigation.setOptions({ title: 'Message' });
    }, [useNavigation]);

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0} // Adjust offset so the keyboard doesn't cover the input
        >
            <ScrollView contentContainerStyle={styles.messagesContainer}>
                <View style={styles.textLeft}>
                    <Text style={styles.textContent}>
                        Hello Hau! If you have any questions about the product/service (company),
                        please leave a message, and we will respond shortly. Thank you!
                    </Text>
                    <Text style={styles.time}>12:01 15/03/2024</Text>
                </View>
                <View style={styles.textRight}>
                    <Text style={styles.textContent}>ABC Service</Text>
                    <Text style={styles.time}>12:01 15/03/2024</Text>
                </View>
                <View style={styles.textLeft}>
                    <Text style={styles.textContent}>
                        Hello Hau! If you have any questions about the product/service (company),
                        please leave a message, and we will respond shortly. Thank you!
                    </Text>
                    <Text style={styles.time}>12:01 15/03/2024</Text>
                </View>
                <View style={styles.textRight}>
                    <Text style={styles.textContent}>ABC Service</Text>
                    <Text style={styles.time}>12:01 15/03/2024</Text>
                </View>
            </ScrollView>

            <View style={styles.inputContent}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter message..."
                />
                <TouchableOpacity style={styles.icon}>
                    <FontAwesome name="smile-o" size={30} color="#FDE613" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon}>
                    <MaterialIcons name="camera-alt" size={30} color="#009DF6" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon}>
                    <MaterialIcons name="mic" size={30} color="#009DF6" />
                </TouchableOpacity>
            </View>

            <TaskBar />

        </KeyboardAvoidingView>
    );
};

export default Message;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    circleImage: {
        width: 40,
        height: 40,
        borderRadius: 25,
        overflow: 'hidden',
    },
    nameContainer: {
        justifyContent: 'center',
        marginLeft: 7,
    },
    headerTitle: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold'
    },
    subHeaderTitle: {
        color: 'black',
        fontSize: 14,
    },
    callContainer: {
        flexDirection: 'row',
        marginLeft: 10,
    },
    callButton: {
        marginHorizontal: 10,
    },
    messagesContainer: {
        padding: 20,
    },
    textLeft: {
        alignSelf: 'flex-start',
        backgroundColor: '#B3B3B3',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 12,
        marginBottom: 20,
        marginHorizontal: 15,
    },
    textRight: {
        alignSelf: 'flex-end',
        backgroundColor: '#FF8089',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 12,
        marginBottom: 20,
    },
    textContent: {
        fontSize: 18,
    },
    time: {
        fontSize: 10,
        alignSelf: 'flex-end',
    },
    inputContent: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderTopWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#fff',
        marginBottom: 50,
    },
    input: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 16,
        backgroundColor: '#f2f2f2',
        borderRadius: 20,
        marginRight: 10,
        fontSize: 16,
    },
    icon: {
        marginHorizontal: 5,
    },
});
