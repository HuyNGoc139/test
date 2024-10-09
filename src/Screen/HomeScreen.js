import React, { useState, useCallback } from 'react';
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
import { logoutUser } from '../redux/authActions';
import DrawerSceneWrapper from '../Components/DrawerSceneWrapper';
import { useFocusEffect } from '@react-navigation/native';
import { useDrawerProgress } from '@react-navigation/drawer';
const HomeScreen = ({ navigation }) => {
  const user = useSelector((state) => state.auth.user);
  const isLogin = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const progress = useDrawerProgress();
  const handleLogout = useCallback(() => {
    dispatch(logoutUser());
  }, [dispatch]);

  const closeDrawer = useCallback(() => {
    navigation.closeDrawer();
    setIsOpen(false);
  }, [navigation]);

  const openDrawer = useCallback(() => {
    navigation.openDrawer();
    setIsOpen(true);
  }, [navigation]);

  return (
    <ImageBackground
      source={require('../assets/bg.png')}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      {/* Header */}
      {isOpen && (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            zIndex: 10,
          }}
        >
          <TouchableOpacity onPress={closeDrawer}>
            <Image
              style={styles.image}
              source={require('../assets/MaskGroup.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={closeDrawer}>
            <Image
              style={styles.image}
              source={require('../assets/close.png')}
            />
          </TouchableOpacity>
        </View>
      )}
      <DrawerSceneWrapper>
        <ImageBackground
          style={{ flex: 1 }}
          resizeMode="cover"
          source={{
            uri: 'https://s3-alpha-sig.figma.com/img/4b67/6a2d/4edf7f5da5d0388a0e118a254c21a8ef?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LZ6zid6DBrlmYEmzE0pemy83D3oYGvsetnxoMLD9IuaXBjUF6vrrh-O18o-1n9DQjGF-DHGirHnrQ7npfB-oGTWTdu3F5U0w7Y3jWSARy9eedIprGIoj9575dgtikh9IktZ3G7MtC6CbMtnTG5oG6kEo~Oj~DIksIUMB09dw0pwm~EiDgvzshav6NLhT~45-SC-RJ1SVkHw~sIa6fOBG8NAGHZblixePPQiZOWvbb8ii4QqSsBkAF2VLXkwoyAuGoT2WcAM7W9MMAfZfHeRqedBIxB-S1IZpoqiK31xiUAwxfp39uKn4kqhNZHCoN9qUeUhNnNx-Z9DTTd8PZbLzhw__',
          }}
        >
          <TouchableOpacity onPress={openDrawer}>
            <Image
              style={styles.image}
              source={require('../assets/MaskGroup.png')}
            />
          </TouchableOpacity>
          <View style={{ alignItems: 'center', flex: 1 }}>
            <Text style={{ fontSize: 20, color: 'white' }}>
              Welcome, {user?.json?.username || 'User'}!
            </Text>
            <Button title="Log Out" onPress={handleLogout} />
          </View>
        </ImageBackground>
      </DrawerSceneWrapper>
      {/* Footer */}
      {isOpen && (
        <View
          style={{ marginBottom: 20, marginLeft: 20, flexDirection: 'row' }}
        >
          <Text style={{ color: 'rgba(255, 255, 255, 1)' }}>Powered by </Text>
          <Text style={{ color: 'rgba(255, 255, 255, 1)', fontWeight: '700' }}>
            UpNow{' '}
          </Text>
        </View>
      )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.5)', // Đảm bảo header nổi bật
    zIndex: 1, // Đặt zIndex cao để header ở trên cùng
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  headerText: {
    color: 'white',
    fontSize: 18,
  },
  image: {
    margin: 26,
  },
});

export default HomeScreen;
