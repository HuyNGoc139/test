import { View, Text, ImageBackground } from 'react-native';
import HeaderComponent from '../Components/HeaderComponent';

const SendScreen = () => {
  return (
    <ImageBackground
      source={require('../../assets/bg.png')}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <HeaderComponent title="SendScreen" />
      <Text>SendScreen</Text>
    </ImageBackground>
  );
};
export default SendScreen;
