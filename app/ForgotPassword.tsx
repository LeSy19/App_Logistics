import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const ForgotPassword = () => {

    const router = useRouter();

    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [secureTextEntryConfirm, setSecureTextEntryConfirm] = useState(true);

    const handleSubmit = () => {
        if (newPassword === '' || confirmPassword === '') {
            Alert.alert('Notification', 'Please enter a new password and confirm it.');
            return;
        }
        if (newPassword !== confirmPassword) {
            Alert.alert('Notification', 'Passwords do not match.');
            return;
        }
        else{
            router.replace('/ComfirmEmail');
        }
        // Handle new password confirmation here
        Alert.alert('Notification', 'Password has been reset successfully.');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Reset Password</Text>
            <Text style={styles.subtitle}>Please enter a new password and confirm it below</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
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
                    style={styles.input}
                    placeholder="Confirm new password"
                    secureTextEntry={secureTextEntryConfirm}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />
                <TouchableOpacity onPress={() => setSecureTextEntryConfirm(!secureTextEntryConfirm)}>
                    <Ionicons name={secureTextEntryConfirm ? 'eye-off' : 'eye'} size={20} />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleSubmit} >
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
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 15,
        padding: 8,
    },
    input: {
        flex: 1,
        padding: 10,
    },
    button: {
        backgroundColor: '#99000C',
        padding: 20,
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
