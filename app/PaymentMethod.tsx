import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useRouter, useNavigation } from 'expo-router';

const ForgotPassword = () => {

    const router = useRouter();
    const navigation = useNavigation();

    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [secureTextEntryConfirm, setSecureTextEntryConfirm] = useState(true);

    useEffect(() => {
        // Set the header title
        navigation.setOptions({ title: 'Payment Method' });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Payment Methods</Text>

            <View style={styles.paymentMethod}>
                <FontAwesome name="credit-card" size={24} color="black" />
                <Text style={styles.methodText}>Credit Card</Text>
            </View>

            <View style={styles.paymentMethod}>
                <FontAwesome name="money" size={24} color="black" />
                <Text style={styles.methodText}>E-Wallet</Text>
            </View>

            <View style={styles.paymentMethod}>
                <FontAwesome name="bank" size={24} color="black" />
                <Text style={styles.methodText}>Online Banking</Text>
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        backgroundColor: '#f5f5f5',
        // marginTop: 70,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    paymentMethod: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 15,
        padding: 15,
        backgroundColor: '#CCCCCC'
    },
    methodText: {
        fontSize: 14,
        marginLeft: 20,
    },
    button: {
        backgroundColor: '#99000C',
        padding: 17,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ForgotPassword;
