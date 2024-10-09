import React from 'react';
import {
  createDrawerNavigator,
  DrawerItemList,
} from '@react-navigation/drawer';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import HomeScreen from '../Screen/HomeScreen';
import SettingScreen from '../Screen/SettingScreen';
import { createStackNavigator } from '@react-navigation/stack';
import UserInfo from '../Screen/UserInfo';
import LoginScreen from '../Screen/LoginScreen.js';
import RewardScreen from '../Screen/RewardScreen';
import RemiderScreen from '../Screen/Remider';
import InviteScreen from '../Screen/InviteScreen';
import SendScreen from '../Screen/SendScreen';
import VideoScreen from '../Screen/VideoScreen';
import HelpScreen from '../Screen/HelpandSupport';
import DisclaimerScreen from '../Screen/Disclaimer';
import StreakScreen from '../Screen/StreakScreen';
import RegisterScreen from '../Screen/RegisterScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const drawerImage = ({ focused, source }) => {
  const tintColor = focused
    ? 'rgba(247, 112, 152, 1)'
    : 'rgba(149, 158, 167, 1)';

  return (
    <View
      style={{ width: 18, justifyContent: 'flex-end', alignItems: 'center' }}
    >
      <Image
        source={source}
        style={{
          tintColor: tintColor,
        }}
      />
    </View>
  );
};

function CustomDrawerContent(props) {
  const userName = useSelector((state) => state.auth.user?.json?.username);

  return (
    <>
      <View style={{ marginLeft: 45, marginTop: 50 }}>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/men/41.jpg' }}
          style={styles.image}
        />
        <Text style={styles.name}>{'James B.'}</Text>
      </View>
      <DrawerItemList {...props} />
    </>
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
        width: '56%',
        height: '86%', // Thiết lập chiều cao drawer là 80%
        position: 'absolute', // Giúp căn giữa drawer
        top: '7%', // Căn giữa từ trên xuống
      },
      overlayColor: 'transparent',
      drawerActiveTintColor: 'rgba(255, 255, 255, 1)',
      drawerInactiveTintColor: 'rgba(149, 158, 167, 1)',
      drawerActiveBackgroundColor: 'rgba(0, 0, 0, 0.2)',
    }}
  >
    <Drawer.Screen
      name="Home"
      component={HomeScreen}
      options={{
        drawerIcon: (options) =>
          drawerImage({
            ...options,
            source: require('../assets/ic_home_act.png'),
          }),
        drawerLabelStyle: { fontWeight: 'bold' ,marginLeft:-10 },
        drawerLabelStyleInactive: { fontWeight: '400' },
        drawerItemStyle: {
          borderTopLeftRadius: 100,
          borderBottomLeftRadius: 100,
          
        },
      }}
    />
    <Drawer.Screen
      name="Remider"
      component={RemiderScreen}
      options={{
        drawerIcon: (options) =>
          drawerImage({ ...options, source: require('../assets/Group1.png') }),
          drawerLabelStyle: { fontWeight: 'bold' ,marginLeft:-10 },
        drawerLabelStyleInactive: { fontWeight: '400' },
        drawerItemStyle: {
          borderTopLeftRadius: 100,
          borderBottomLeftRadius: 100,
        },
      }}
    />
    <Drawer.Screen
      name="Invite your friends"
      component={InviteScreen}
      options={{
        drawerIcon: (options) =>
          drawerImage({
            ...options,
            source: require('../assets/ic_invite.png'),
          }),
          drawerLabelStyle: { fontWeight: 'bold' ,marginLeft:-10 },
        drawerLabelStyleInactive: { fontWeight: '400' },
        drawerItemStyle: {
          borderTopLeftRadius: 100,
          borderBottomLeftRadius: 100,
        },
      }}
    />
    <Drawer.Screen
      name="Send a testimonial"
      component={SendScreen}
      options={{
        drawerIcon: (options) =>
          drawerImage({ ...options, source: require('../assets/Vector4.png') }),
        drawerLabelStyle: { fontWeight: 'bold',marginLeft:-10 },
        drawerLabelStyleInactive: { fontWeight: '400' },
        drawerItemStyle: {
          borderTopLeftRadius: 100,
          borderBottomLeftRadius: 100,
        },
      }}
    />
    <Drawer.Screen
      name="Welcome to Video"
      component={VideoScreen}
      options={{
        drawerIcon: (options) =>
          drawerImage({
            ...options,
            source: require('../assets/ic_welcome.png'),
          }),
        drawerLabelStyle: { fontWeight: 'bold',marginLeft:-10 },
        drawerLabelStyleInactive: { fontWeight: '400' },
        drawerItemStyle: {
          borderTopLeftRadius: 100,
          borderBottomLeftRadius: 100,
        },
      }}
    />
    <Drawer.Screen
      name="Help & Support"
      component={HelpScreen}
      options={{
        drawerIcon: (options) =>
          drawerImage({ ...options, source: require('../assets/ic_help.png') }),
        drawerLabelStyle: { fontWeight: 'bold',marginLeft:-10 },
        drawerLabelStyleInactive: { fontWeight: '400' },
        drawerItemStyle: {
          borderTopLeftRadius: 100,
          borderBottomLeftRadius: 100,
        },
      }}
    />
    <Drawer.Screen
      name="Reward"
      component={RewardScreen}
      options={{
        drawerIcon: (options) =>
          drawerImage({ ...options, source: require('../assets/rewawrd.png') }),
        drawerLabelStyle: { fontWeight: 'bold',marginLeft:-10 },
        drawerLabelStyleInactive: { fontWeight: '400' },
        drawerItemStyle: {
          borderTopLeftRadius: 100,
          borderBottomLeftRadius: 100,
        },
      }}
    />
    <Drawer.Screen
      name="Setting"
      component={SettingScreen}
      options={{
        drawerIcon: (options) =>
          drawerImage({
            ...options,
            source: require('../assets/ic_settings.png'),
          }),
        drawerLabelStyle: { fontWeight: 'bold' ,marginLeft:-10},
        drawerLabelStyleInactive: { fontWeight: '400' },
        drawerItemStyle: {
          borderTopLeftRadius: 100,
          borderBottomLeftRadius: 100,
        },
      }}
    />
    <Drawer.Screen
      name="Disclaimer"
      component={DisclaimerScreen}
      options={{
        drawerIcon: (options) =>
          drawerImage({
            ...options,
            source: require('../assets/Group201.png'),
          }),
        drawerLabelStyle: { fontWeight: 'bold' ,marginLeft:-10},
        drawerLabelStyleInactive: { fontWeight: '400' },
        drawerItemStyle: {
          borderTopLeftRadius: 100,
          borderBottomLeftRadius: 100,
        },
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
          <Stack.Screen name="StreakScreen" component={StreakScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 65,
    height: 65,
    borderWidth: 4,
    borderRadius: 170,
    borderColor: 'rgba(200, 216, 222, 0.9)',
  },
  name: {
    marginTop: 10,
    fontWeight: 'bold',
    color: 'white',
    fontSize: 24,
    marginBottom: 10,
  },
});

export default Router;
