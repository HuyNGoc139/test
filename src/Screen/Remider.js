import { View, Text, ImageBackground } from 'react-native';
import HeaderComponent from '../Components/HeaderComponent';

const RemiderScreen = () => {
  return (
    <ImageBackground
      source={require('../../assets/bg.png')}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <HeaderComponent title="RemiderScreen" />
      <Text>RemiderScreen</Text>
    </ImageBackground>
  );
};
export default RemiderScreen;
