import { View, Text, ImageBackground } from 'react-native';
import HeaderComponent from '../Components/HeaderComponent';

const RewardScreen = () => {
  return (
    <ImageBackground
      source={require('../../assets/bg.png')}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <HeaderComponent title="RewardScreen" />
      <Text>RewardScreen</Text>
    </ImageBackground>
  );
};
export default RewardScreen;
