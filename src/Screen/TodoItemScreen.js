import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, ImageBackground, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import CheckBox from '@react-native-community/checkbox';

import HeaderComponent from '../Components/HeaderComponent';
import InputComponent from '../Components/InputComponent';
import ButtonComponent from '../Components/ButtonComponent';
import { toggleTodo, updateTodo } from '../redux/reducers/todoReducer';
import { useNavigation } from '@react-navigation/native';
const TodoScreen = ({ route }) => {
  const { item } = route.params;
  const dispatch = useDispatch();
  const [newTitle, setNewTitle] = useState(item.title);
  const [newDescription, setNewDescription] = useState(item.description);

  useEffect(() => {
    setNewTitle(item.title);
    setNewDescription(item.description);
  }, [item]);
  const navigation = useNavigation();
  const handleSave = useCallback(() => {
    if (newTitle.trim() === '' || newDescription.trim() === '') {
      Alert.alert('Thông báo', 'Vui lòng nhập tiêu đề và mô tả.');
      return;
    }

    dispatch(
      updateTodo({
        id: item.id,
        title: newTitle,
        description: newDescription,
        completed: item.completed,
      })
    );

    Alert.alert('Thông báo', 'Đã lưu thay đổi!');
    navigation.goBack();
  }, [dispatch, newTitle, newDescription, item.id]);

  return (
    <ImageBackground
      source={require('../assets/bg.png')}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <HeaderComponent title="Todo Details" />
      <View style={{ margin: 20 }}>
        <Text style={styles.textTitle}>Title</Text>
        <InputComponent
          placeholder="Title"
          value={newTitle}
          onChangeText={setNewTitle}
        />
        <Text style={styles.textTitle}>Description</Text>
        <InputComponent
          placeholder="Description"
          value={newDescription}
          onChangeText={setNewDescription}
          multiline={true}
          numberOfLines={4}
          height={100}
        />
        <ButtonComponent
          title="Save"
          colors={['#FF5789', '#FF9B9C']}
          onPress={handleSave}
        />
      </View>
    </ImageBackground>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({
  completeText: {
    fontSize: 20,
    color: 'green',
    marginTop: 5,
    textAlign: 'left',
    flex: 1,
  },
  checkbox: {
    alignSelf: 'center',
  },
  textTitle: {
    color: 'white', // Bạn có thể thêm màu sắc để phù hợp với giao diện
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 16,
  },
});
