import React from 'react';
import {
  View,
  Text,
  Button,
  ImageBackground,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/authActions';
import { useState, useCallback } from 'react';
import DrawerSceneWrapper from '../Components/DrawerSceneWrapper';
const HomeScreen = ({ navigation }) => {
  const user = useSelector((state) => state.auth.user);
  const isLogin = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleLogout = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <ImageBackground
      source={require('../../assets/bg.png')}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <DrawerSceneWrapper>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Image
            style={styles.image}
            source={require('../../assets/MaskGroup.png')}
          />
        </TouchableOpacity>
        <View style={{ alignItems: 'center', flex: 1 }}>
          <Text style={{ fontSize: 20, color: 'white' }}>
            Welcome, {user?.json?.username || 'User'}!
          </Text>
          <Text style={{ fontSize: 20, color: 'white' }}>
            PassWord, {user?.json?.password || 'None'}!
          </Text>
          {isLogin == true ? (
            <Text style={{ fontSize: 20, color: 'white' }}>IsLogin</Text>
          ) : (
            <></>
          )}
          <Button title="Log Out" onPress={handleLogout} />
        </View>
      </DrawerSceneWrapper>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  image: {
    margin: 26,
  },
});
export default HomeScreen;
