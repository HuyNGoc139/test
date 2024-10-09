import { View, StyleSheet } from 'react-native';
import React from 'react';
import Animated, {
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { useDrawerProgress, useDrawerStatus } from '@react-navigation/drawer';

const DrawerSceneWrapper = ({ children }) => {
  const progress = useDrawerProgress();
  const drawerStatus = useDrawerStatus();

  const animatedStyle = useAnimatedStyle(() => {
    return {
      // Dịch chuyển sang bên trái và thu nhỏ khi mở menu
      transform: [
        {
          translateX: interpolate(progress.value, [0, 1], [0, 240], 'clamp'), // Dịch chuyển sang trái
        },
        {
          scale: interpolate(progress.value, [0, 1], [1, 0.9], 'clamp'), // Thu nhỏ màn hình
        },
      ],
      overflow: 'hidden',
      borderRadius: progress.value > 0 ? 15 : 0, // Bán kính góc viền
    };
  });

  const shadowStyle = useAnimatedStyle(() => {
    return {
      // Di chuyển shadow bên trái khi mở drawer
      transform: [
        {
          translateX: interpolate(progress.value, [0, 1], [-250, 0], 'clamp'), // Shadow chỉ di chuyển bên trái
        },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.shadow, shadowStyle]} />
      <Animated.View style={[styles.animatedContainer, animatedStyle]}>
        {children}
      </Animated.View>
    </View>
  );
};

export default DrawerSceneWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative', // Để cho phần shadow và animatedContainer có thể chồng lên nhau
  },
  shadow: {
    
  },
  animatedContainer: {
    flex: 1,
    zIndex: 1, // Đặt zIndex để đảm bảo phần nội dung hiển thị trên shadow
  },
});
