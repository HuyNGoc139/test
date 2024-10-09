import CheckBox from '@react-native-community/checkbox';
import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from '../redux/reducers/todoReducer';

const TodoComponent = ({ item }: any) => {
  const dispatch = useDispatch();
  const onToggleCompleted = useCallback(() => {
    dispatch(toggleTodo(item.id));
  }, [dispatch, item.id]); // Chỉ tạo lại khi dispatch hoặc item.id thay đổi

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
      {/* Thông tin todo */}
      <View style={styles.textContainer}>
        <View style={{}}>
          <Text
            style={[
              styles.title,
              { textDecorationLine: item.completed ? 'line-through' : 'none' },
            ]}
          >
            {item.title}
          </Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          {item.completed && <Text style={styles.completeText}>Complete</Text>}
          <TouchableOpacity onPress={handleRemove}>
            <Text style={[styles.completeText, { color: 'red' }]}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TodoComponent;

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
    paddingRight: 50,
  },
  textContainer: {
    marginLeft: 10,
    flexDirection: 'row',
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
  completeText: {
    fontSize: 14,
    color: 'green',
    marginTop: 5,
    textAlign: 'right',
  },
});
