import { View, Text, ImageBackground } from 'react-native';
import HeaderComponent from '../Components/HeaderComponent';

const VideoScreen = () => {
  return (
    <ImageBackground
      source={require('../../assets/bg.png')}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <HeaderComponent title="VideoScreen" />
      <Text>VideoScreen</Text>
    </ImageBackground>
  );
};
export default VideoScreen;
