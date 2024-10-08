import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Dimensions,
} from 'react-native';
import HeaderComponent from '../Components/HeaderComponent';
import TextComponent from '../Components/TextComponent';
import SpaceComponent from '../Components/SpaceComponent';
import DrawerSceneWrapper from '../Components/DrawerSceneWrapper';

const height = Dimensions.get('screen').height;

const SettingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/bg.png')}
        style={styles.container}
        resizeMode="cover"
      >
        <DrawerSceneWrapper>
          <HeaderComponent title="Settings" />
          <ScrollView>
            <TextComponent
              title="User Info"
              onPress={() => navigation.navigate('UserInfo')}
              isNext
            />
            <TextComponent
              title="My Subscriptions"
              isNext
              onPress={() => navigation.navigate('StreakScreen')}
            />
            <TextComponent title="Profile Tags" isNext />
            <SpaceComponent height={height * 0.32} />
            <TextComponent title="Terms & Conditions" />
            <TextComponent title="Privacy Policy" />
            <SpaceComponent height={100} />
            <TextComponent title="Delete account" color />
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
});

export default SettingScreen;
