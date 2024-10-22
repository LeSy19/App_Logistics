import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TaskBar from '../TaskBar/TaskBar';
import { useNavigation, useRouter } from 'expo-router';

export default function Account() {
    const router = useRouter();

    const [text, setText] = useState('');

    const navigation = useNavigation();

  useEffect(() => {
    // Set the header title
    navigation.setOptions({ title: 'Rating' });
}, [useNavigation]);

    const handleAddMedia = () => {
        // Xử lý thêm hình ảnh/video (có thể mở máy ảnh hoặc thư viện ảnh)
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
                    <Text style={styles.rateText}>Bạn cảm thấy dịch vụ của chúng tôi như thế nào?</Text>
                    <View style={styles.starContainer}>
                        <Ionicons name="star-outline" size={50} color="#FFD700" style={styles.star} />
                        <Ionicons name="star-outline" size={50} color="#FFD700" style={styles.star} />
                        <Ionicons name="star-outline" size={50} color="#FFD700" style={styles.star} />
                        <Ionicons name="star-outline" size={50} color="#FFD700" style={styles.star} />
                        <Ionicons name="star-outline" size={50} color="#FFD700" style={styles.star} />
                    </View>

                    <View>
                        <Text style={styles.rateText}>Thêm hình ảnh/video</Text>
                        <TouchableOpacity style={styles.addButton} onPress={handleAddMedia}>
                            <View style={styles.graySquare}>
                                <Ionicons name="add" size={30} color="#FFFFFF" />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <Text style={styles.rateText}>Nhận xét</Text>
                        <TextInput
                            style={styles.textarea}
                            multiline
                            numberOfLines={4} // Số dòng hiển thị ban đầu
                            onChangeText={setText}
                            value={text}
                            placeholder="Nhập nội dung ở đây..."
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
        padding: 20,
        paddingBottom: 80, // Thêm một số padding ở dưới để dành chỗ cho TaskBar
    },
    row: {
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImage: {
        width: 110,
        height: 110,
        borderRadius: 25,
    },
    greeting: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    rateStar: {
        flex: 1,
        padding: 15,
        marginBottom: 15,
    },
    rateText: {
        fontSize: 15,
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
        padding: 15,
    },
    graySquare: {
        width: 60,  // Chiều rộng của hình vuông
        height: 60, // Chiều cao của hình vuông
        backgroundColor: '#808080', // Màu xám
        justifyContent: 'center', // Căn giữa nội dung
        alignItems: 'center', // Căn giữa nội dung
        borderRadius: 8, // Thêm bo góc nếu cần
    },
   
    textarea: {
        height: 100, // Chiều cao của textarea
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        textAlignVertical: 'top', // Căn văn bản từ trên cùng
        marginTop: 10,
        backgroundColor: '#D9D9D9'
    },
});
