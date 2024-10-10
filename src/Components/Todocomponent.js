import CheckBox from '@react-native-community/checkbox';
import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from '../redux/reducers/todoReducer';
import { useNavigation } from '@react-navigation/native';

const TodoComponent = ({ item }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onToggleCompleted = useCallback(() => {
    dispatch(toggleTodo(item.id));
  }, [dispatch, item.id]);

  const handleRemove = useCallback(() => {
    Alert.alert(
      'Xác nhận xóa',
      'Bạn có chắc chắn muốn xóa việc này không?',
      [
        {
          text: 'Hủy',
          style: 'cancel',
        },
        {
          text: 'Xóa',
          onPress: () => dispatch(removeTodo(item.id)),
          style: 'destructive',
        },
      ],
      { cancelable: true }
    );
  }, [dispatch, item.id]);

  return (
    <View style={styles.container}>
      <CheckBox value={item.completed} onValueChange={onToggleCompleted} />
      <View style={styles.textContainer}>
        <TouchableOpacity
          style={{ width: 200 }}
          onPress={() => navigation.navigate('TodoScreen', { item })}
        >
          <Text
            style={[
              styles.title,
              { textDecorationLine: item.completed ? 'line-through' : 'none' },
            ]}
          >
            {item.title}
          </Text>
          <Text
            style={styles.description}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {item.description}
          </Text>
        </TouchableOpacity>
        <View style={styles.actionsContainer}>
          {item.completed && <Text style={styles.completeText}>Complete</Text>}
          <TouchableOpacity onPress={handleRemove}>
            <Text style={[styles.completeText, { color: 'red' }]}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    marginBottom: 20,
    borderRadius: 20,
    marginRight: 10,
  },
  textContainer: {
    marginLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-between', // Tạo khoảng cách giữa các phần tử
    flex: 1, // Cho phép textContainer sử dụng toàn bộ chiều rộng
    // maxWidth:260
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  description: {
    fontSize: 14,
    color: '#888',
  },
  actionsContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end', // Đảm bảo Remove nằm bên phải
    marginLeft: 10, // Khoảng cách giữa mô tả và nút Remove
  },
  completeText: {
    fontSize: 14,
    color: 'green',
    marginTop: 5,
    textAlign: 'right',
  },
});
export default TodoComponent;
