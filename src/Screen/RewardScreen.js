import { View, Text, ImageBackground } from 'react-native';
import HeaderComponent from '../Components/HeaderComponent';
import DrawerSceneWrapper from '../Components/DrawerSceneWrapper';
const RewardScreen = () => {
  return (
    <ImageBackground
      source={require('../../assets/bg.png')}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <DrawerSceneWrapper>
        <HeaderComponent title="Reward" />
        <Text>Reward</Text>
      </DrawerSceneWrapper>
    </ImageBackground>
  );
};
export default RewardScreen;
