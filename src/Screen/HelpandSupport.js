import { View, Text, ImageBackground } from 'react-native';
import HeaderComponent from '../Components/HeaderComponent';

const HelpScreen = () => {
  return (
    <ImageBackground
      source={require('../../assets/bg.png')}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <HeaderComponent title="HelpScreen" />
      <Text>HelpScreen</Text>
    </ImageBackground>
  );
};
export default HelpScreen;
