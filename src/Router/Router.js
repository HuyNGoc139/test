import React from 'react';
import {
  createDrawerNavigator,
  DrawerItemList,
} from '@react-navigation/drawer';
import { ImageBackground, View, Text, Image } from 'react-native';
import { useSelector } from 'react-redux';
import HomeScreen from '../Screen/HomeScreen';
import SettingScreen from '../Screen/SettingScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from '@react-navigation/stack';
import UserInfo from '../Screen/UserInfo';
import LoginScreen from '../Screen/LoginScreen';
import RewardScreen from '../Screen/RewardScreen';
import RemiderScreen from '../Screen/Remider';
import InviteScreen from '../Screen/InviteScreen';
import SendScreen from '../Screen/SendScreen';
import VideoScreen from '../Screen/VideoScreen';
import HelpScreen from '../Screen/HelpandSupport';
import DisclaimerScreen from '../Screen/Disclaimer';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const drawerIcon = ({ focused, size }, name) => (
  <Icon
    name={name}
    color={focused ? 'rgba(247, 112, 152, 1)' : 'rgba(149, 158, 167, 1)'}
    size={size}
  />
);
function CustomDrawerContent(props) {
  const userName = useSelector((state) => state.auth.user?.json?.username);

  return (
    <ImageBackground
      source={require('../../assets/bg.png')} // Sử dụng cùng ảnh nền như HomeScreen
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <View style={{ alignItems: 'center', marginTop: 50 }}>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/men/41.jpg' }}
          style={{ width: 80, height: 80, borderRadius: 40 }}
        />
        <Text style={{ marginTop: 10, fontWeight: 'bold', color: 'white' }}>
          {userName || 'James B.'}
        </Text>
      </View>
      <DrawerItemList {...props} />
    </ImageBackground>
  );
}

const DrawerNavigator = () => (
  <Drawer.Navigator
    initialRouteName="Home"
    drawerContent={(props) => <CustomDrawerContent {...props} />}
    screenOptions={{
      headerShown: false,
      drawerStyle: {
        backgroundColor: 'transparent',
        width: '60%',
      },
      overlayColor: 'transparent',
      drawerType: 'slide',
      drawerActiveTintColor: 'rgba(255, 255, 255, 1)',
      drawerInactiveTintColor: 'rgba(149, 158, 167, 1)',
      drawerActiveBackgroundColor: 'rgba(0, 0, 0, 0.2)',
    }}
  >
    <Drawer.Screen
      name="Home"
      component={HomeScreen}
      options={{
        drawerIcon: (options) => drawerIcon(options, 'home'),
        drawerLabelStyle: { fontWeight: 'bold' },
      }}
    />
    <Drawer.Screen
      name="Remider"
      component={RemiderScreen}
      options={{
        drawerIcon: (options) => drawerIcon(options, 'bell'),
        drawerLabelStyle: { fontWeight: 'bold' },
      }}
    />
    <Drawer.Screen
      name="Invite your friends"
      component={InviteScreen}
      options={{
        drawerIcon: (options) => drawerIcon(options, 'user-plus'),
        drawerLabelStyle: { fontWeight: 'bold' },
      }}
    />
    <Drawer.Screen
      name="Send a testimonial"
      component={SendScreen}
      options={{
        drawerIcon: (options) => drawerIcon(options, 'envelope'),
        drawerLabelStyle: { fontWeight: 'bold' },
      }}
    />
    <Drawer.Screen
      name="Welcome to Video"
      component={VideoScreen}
      options={{
        drawerIcon: (options) => drawerIcon(options, 'camera'),
        drawerLabelStyle: { fontWeight: 'bold' },
      }}
    />
    <Drawer.Screen
      name="Help & Support"
      component={HelpScreen}
      options={{
        drawerIcon: (options) => drawerIcon(options, 'question-circle'),
        drawerLabelStyle: { fontWeight: 'bold' },
      }}
    />
    <Drawer.Screen
      name="Reward"
      component={RewardScreen}
      options={{
        drawerIcon: (options) => drawerIcon(options, 'trophy'),
        drawerLabelStyle: { fontWeight: 'bold' },
      }}
    />
    <Drawer.Screen
      name="Setting"
      component={SettingScreen}
      options={{
        drawerIcon: (options) => drawerIcon(options, 'cog'),
        drawerLabelStyle: { fontWeight: 'bold' },
      }}
    />
    <Drawer.Screen
      name="Disclaimer"
      component={DisclaimerScreen}
      options={{
        drawerIcon: (options) => drawerIcon(options, 'warning'),
        drawerLabelStyle: { fontWeight: 'bold' },
      }}
    />
  </Drawer.Navigator>
);

const Router = () => {
  const isLogin = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isLogin ? (
        <>
          <Stack.Screen name="Drawer" component={DrawerNavigator} />
          <Stack.Screen name="UserInfo" component={UserInfo} />
        </>
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
};

export default Router;
