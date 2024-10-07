import { View, Text, ImageBackground } from 'react-native';
import HeaderComponent from '../Components/HeaderComponent';

const DisclaimerScreen = () => {
  return (
    <ImageBackground
      source={require('../../assets/bg.png')}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <HeaderComponent title="DisclaimerScreen" />
      <Text>DisclaimerScreen</Text>
    </ImageBackground>
  );
};
export default DisclaimerScreen;
