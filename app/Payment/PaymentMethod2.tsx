import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useRouter, useNavigation } from 'expo-router';
import { Dropdown } from 'react-native-element-dropdown';

const Payment = () => {

    const router = useRouter();
    const navigation = useNavigation();
    const [value, setValue] = useState<string | null>(null);

    const data = [
        { label: 'BIDV', value: 'bidv' },
        { label: 'MB Bank', value: 'mb' },
        { label: 'TP Bank', value: 'tp' },
    ];

    useEffect(() => {
        // Set the header title
        navigation.setOptions({ title: 'Payment' });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Dropdown
                style={styles.dropDown}
                data={data}
                labelField="label"
                valueField="value"
                placeholder="Select a bank"
                value={value}
                onChange={item => {
                    setValue(item.value);
                }}
            />

            <View style={styles.paymentMethod}>
                <TextInput
                    placeholder='Account number'
                    style={styles.informationText}
                    keyboardType='numeric'
                />
            </View>

            <View style={styles.paymentMethod}>
                <TextInput
                    placeholder='Account holder'
                    style={styles.informationText}
                />
            </View>

            <View style={styles.paymentMethod}>
                <TextInput
                    placeholder='Amount'
                    style={styles.informationText}
                    keyboardType='numeric'
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={() => router.push('./PaymentMethod3')}>
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
    dropDown: {
        padding: 15,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#CCCCCC',
        marginBottom: 15,
    },
    paymentMethod: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 15,
        padding: 18,
        backgroundColor: '#F2F2F2',
    },
    informationText: {
        fontSize: 16,
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

export default Payment;
