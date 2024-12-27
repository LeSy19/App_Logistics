import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, useWindowDimensions, Platform } from 'react-native';
import { useRouter } from 'expo-router';

const ConfirmEmail = () => {
    const [code, setCode] = useState(['', '', '', '']); // Mảng để lưu trữ từng ký tự mã
    const router = useRouter();
    const { width, height } = useWindowDimensions(); // Lấy chiều rộng và chiều cao màn hình

    // Điều chỉnh các giá trị khi màn hình nhỏ
    const isSmallScreen = width < 375; // Nếu màn hình nhỏ hơn 375px, coi là màn hình nhỏ
    const isLargeScreen = width > 600; // Nếu màn hình lớn hơn 600px, coi là màn hình lớn

    return (
        <View style={[styles.container, { padding: isSmallScreen ? 15 : 25 }]}>
            <Text style={[styles.title, { fontSize: isSmallScreen ? 20 : (isLargeScreen ? 28 : 24) }]}>
                Verify Your Email
            </Text>
            <Text style={[styles.subtitle, { fontSize: isSmallScreen ? 14 : 16 }]}>
                Enter the 4-digit code sent to sy@gmail.com
            </Text>

            <View style={[styles.inputContainer, { justifyContent: isSmallScreen ? 'space-around' : 'space-between' }]}>
                {code.map((digit, index) => (
                    <TextInput
                        key={index}
                        id={`input-${index}`}
                        style={[styles.input, { width: isSmallScreen ? '20%' : (isLargeScreen ? 80 : 60), height: isSmallScreen ? 50 : 60 }]}
                        keyboardType="numeric"
                        maxLength={1}
                        value={digit}
                        onChangeText={(text) => {
                            const newCode = [...code];
                            newCode[index] = text;
                            setCode(newCode);
                        }}
                    />
                ))}
            </View>

            <Text style={[styles.resendText, { fontSize: isSmallScreen ? 14 : 16 }]}>
                Resend code after: 00:45
            </Text>

            <TouchableOpacity
                style={[styles.button, { padding: isSmallScreen ? 15 : 20 }]}
                onPress={() => router.replace('/(tabs)')}
            >
                <Text style={[styles.buttonText, { fontSize: isSmallScreen ? 14 : 16 }]}>Confirm</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        marginTop: 70,
    },
    title: {
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        marginBottom: 15,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        textAlign: 'center',
        fontSize: 24,
    },
    resendText: {
        color: "#99000C",
        textAlign: 'center',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#99000C',
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontWeight: 'bold',
    },
});

export default ConfirmEmail;
