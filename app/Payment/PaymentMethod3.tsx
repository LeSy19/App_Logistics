import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter, useNavigation } from 'expo-router';

const Payment = () => {

    const router = useRouter();
    const navigation = useNavigation();
    const [value, setValue] = useState<string | null>(null);

    const data = [
        { label: 'BIDV', value: 'bidv' },
        { label: 'MB Bank', value: 'mb' },
        { label: 'TP Bank', value: 'tp' },
    ];

    const handleRedirect = () => {
        router.push('../Home/Home');
    }

    useEffect(() => {
        // Set the header title
        navigation.setOptions({ title: 'Payment' });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <View style={styles.paymentMethod}>
                <Text style={styles.textLeft}>Payment Method: </Text>
                <Text style={styles.textRight}>Online Banking</Text>
            </View>

            <View style={styles.paymentMethod}>
                <Text style={styles.textLeft}>Order ID: </Text>
                <Text style={styles.textRight}>DH00012</Text>
            </View>

            <View style={styles.paymentMethod}>
                <Text style={styles.textLeft}>Amount: </Text>
                <Text style={styles.textRight}>1,000,000 VND</Text>
            </View>

            <View style={styles.content}>
                <Text style={styles.textLeft}>Description:</Text>
                <TextInput
                    placeholder='Transfer description'
                    style={styles.textContent}
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={handleRedirect}>
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
    },
    
    paymentMethod: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 5,
        paddingVertical: 10,
    },
    textLeft: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    textRight: {
        fontSize: 16,
    },
    content: {
        paddingVertical: 10,
    },
    textContent: {
        padding: 18,
        marginVertical: 20,
        backgroundColor: '#CCCCCC',
        borderRadius: 5,
    },
    button: {
        backgroundColor: '#99000C',
        padding: 17,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Payment;
