import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Animated, {
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { useDrawerProgress } from '@react-navigation/drawer';

const DrawerSceneWrapper = ({ children }) => {
  const progress = useDrawerProgress();

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: interpolate(progress.value, [0, 1], [1, 0.8], 'clamp') },
        {
          rotateY: `${interpolate(
            progress.value,
            [0, 1],
            [0, -0.2],
            'clamp'
          )}deg`,
        },
      ],
      overflow: 'hidden',
    };
  });

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      {children}
    </Animated.View>
  );
};

export default DrawerSceneWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    shadowColor: '#000', // Màu đổ bóng
    shadowOffset: { width: 0, height: 5 }, // Vị trí đổ bóng
    shadowOpacity: 0.3, // Độ mờ của bóng
    shadowRadius: 10, // Bán kính bóng
    elevation: 10, // Độ cao (chỉ Android)
  },
});
