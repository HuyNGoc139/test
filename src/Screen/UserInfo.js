import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image,
} from 'react-native';
import HeaderComponent from '../Components/HeaderComponent';
import TextComponent from '../Components/TextComponent';
import SpaceComponent from '../Components/SpaceComponent';
import UserInfoInput from '../Components/UserInfoComponent';
import { useSelector } from 'react-redux';
import DrawerSceneWrapper from '../Components/DrawerSceneWrapper';
const UserInfo = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/bg.png')}
        style={styles.container}
        resizeMode="cover"
      >
        <HeaderComponent title="User Info" />
        <DrawerSceneWrapper>
          <ScrollView>
            <View style={styles.viewImage}>
              <Image
                style={styles.image}
                source={require('../../assets/avatar.png')}
              />
              <TouchableOpacity>
                <Text style={styles.text}>Change profile photo</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.infomation}>
              <UserInfoInput label="First Name" value="Renata" />
              <UserInfoInput label="Last Name" value="Andryshyn" />
              <UserInfoInput label="Email" value={user?.json?.username} />
              <UserInfoInput
                label="Password"
                value={user?.json?.password}
                secureTextEntry
              />
            </View>
          </ScrollView>
        </DrawerSceneWrapper>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewImage: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: 'rgba(255, 88, 137, 1)',
  },
  image: {
    marginBottom: 12,
  },
  infomation: {
    marginTop: 20,
  },
});

export default UserInfo;
