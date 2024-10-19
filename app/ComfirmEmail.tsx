import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const ConfirmEmail = () => {
    const [code, setCode] = useState(['', '', '', '']); // Mảng để lưu trữ từng ký tự mã
    const router = useRouter();
  
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Verify Your Email</Text>
            <Text style={styles.subtitle}>Enter the 4-digit code sent to sy@gmail.com</Text>

            <View style={styles.inputContainer}>
                {code.map((digit, index) => (
                    <TextInput
                        key={index}
                        id={`input-${index}`}
                        style={styles.input}
                        keyboardType="numeric"
                        maxLength={1}
                        value={digit}
                        // Không xử lý sự kiện nhập mã
                    />
                ))}
            </View>

            <Text style={styles.resendText}>Resend code after: 00:45</Text>

            <TouchableOpacity style={styles.button} onPress={() => router.replace('/(tabs)')}>
                <Text style={styles.buttonText}>Confirm</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        backgroundColor: '#f5f5f5',
        marginTop: 70,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    input: {
        width: 60,
        height: 60,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        textAlign: 'center',
        fontSize: 24,
    },
    resendText: {
        fontSize: 16,
        marginVertical: 10,
        color: "#99000C",
        textAlign: 'center',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#99000C',
        padding: 20,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ConfirmEmail;
