import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, useWindowDimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const ForgotPassword = () => {
    const router = useRouter();

    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [secureTextEntryConfirm, setSecureTextEntryConfirm] = useState(true);

    const { width } = useWindowDimensions(); // Lấy chiều rộng của màn hình

    const handleSubmit = () => {
        if (newPassword === '' || confirmPassword === '') {
            Alert.alert('Notification', 'Please enter a new password and confirm it.');
            return;
        }
        if (newPassword !== confirmPassword) {
            Alert.alert('Notification', 'Passwords do not match.');
            return;
        }
        router.replace('./ComfirmEmail');
        Alert.alert('Notification', 'Password has been reset successfully.');
    };

    const isSmallScreen = width < 375; // Kiểm tra nếu màn hình nhỏ hơn 375px
    const isLargeScreen = width > 600; // Kiểm tra nếu màn hình lớn hơn 600px

    return (
        <View style={[styles.container, { padding: isSmallScreen ? 15 : 25 }]}>
            <Text style={[styles.title, { fontSize: isSmallScreen ? 20 : (isLargeScreen ? 28 : 24) }]}>Reset Password</Text>
            <Text style={[styles.subtitle, { fontSize: isSmallScreen ? 14 : 16 }]}>
                Please enter a new password and confirm it below
            </Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={[styles.input, { padding: isSmallScreen ? 8 : 10 }]}
                    placeholder="Enter new password"
                    secureTextEntry={secureTextEntry}
                    value={newPassword}
                    onChangeText={setNewPassword}
                />
                <TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)}>
                    <Ionicons name={secureTextEntry ? 'eye-off' : 'eye'} size={20} />
                </TouchableOpacity>
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={[styles.input, { padding: isSmallScreen ? 8 : 10 }]}
                    placeholder="Confirm new password"
                    secureTextEntry={secureTextEntryConfirm}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />
                <TouchableOpacity onPress={() => setSecureTextEntryConfirm(!secureTextEntryConfirm)}>
                    <Ionicons name={secureTextEntryConfirm ? 'eye-off' : 'eye'} size={20} />
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                style={[styles.button, { padding: isSmallScreen ? 15 : 20 }]}
                onPress={handleSubmit}
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
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 15,
        padding: 8,
    },
    input: {
        flex: 1,
        fontSize: 16,
        padding: 10,
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

export default ForgotPassword;
