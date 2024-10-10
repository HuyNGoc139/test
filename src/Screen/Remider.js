import {
  View,
  Text,
  ImageBackground,
  FlatList,
  StyleSheet,
} from 'react-native';
import HeaderComponent from '../Components/HeaderComponent';
import DrawerSceneWrapper from '../Components/DrawerSceneWrapper';
import TodoComponent from '../Components/Todocomponent';
import InputComponent from '../Components/InputComponent';
import ButtonComponent from '../Components/ButtonComponent';
import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addTodo,
  toggleTodo,
  removeTodo,
  setFilter,
  selectFilteredTodos,
} from '../redux/reducers/todoReducer';
import CheckBox from '@react-native-community/checkbox';
const RemiderScreen = (navigation) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const filteredTodos = useSelector(selectFilteredTodos); // Sử dụng selector để lấy todos đã lọc
  const { filter } = useSelector((state) => state.todos);
  const handleAddTodo = useCallback(() => {
    if (title && description) {
      const newTodo = {
        id: Date.now(),
        title: title,
        description: description,
        completed: false,
      };
      dispatch(addTodo(newTodo));
      setTitle('');
      setDescription('');
    }
  }, [dispatch, title, description]);
  return (
    <ImageBackground
      source={require('../assets/bg.png')}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <HeaderComponent title="TodoList" />
      {/* <InputComponent
          placeholder="Search"
          value={search}
          onChangeText={setSearch}
        /> */}
      <View style={styles.filterContainer}>
        <Text style={styles.filterText}>Filter By Status:</Text>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={filter === 'all'}
            onValueChange={() => dispatch(setFilter('all'))}
          />
          <Text style={styles.checkboxLabel}>All</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={filter === 'completed'}
            onValueChange={() => dispatch(setFilter('completed'))}
          />
          <Text style={styles.checkboxLabel}>Completed</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={filter === 'todo'}
            onValueChange={() => dispatch(setFilter('todo'))}
          />
          <Text style={styles.checkboxLabel}>To do</Text>
        </View>
      </View>

      <View style={{ flex: 1, margin: 20 }}>
        <FlatList
          data={filteredTodos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TodoComponent item={item} navigation={navigation} />
          )}
          ListEmptyComponent={<Text>No Todos Available</Text>}
        />
      </View>
      <View style={{ margin: 20 }}>
        <Text style={styles.textTitle}>Title</Text>
        <InputComponent
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
        />
        <Text style={styles.textTitle}>Description</Text>
        <InputComponent
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
        />
        <ButtonComponent
          title="Add"
          colors={['#FF5789', '#FF9B9C']}
          onPress={handleAddTodo}
        />
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  textTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 16,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 10,
  },
  filterText: {
    color: 'white',
    fontSize: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxLabel: {
    color: 'white',
    marginLeft: 8,
  },
});
export default RemiderScreen;
