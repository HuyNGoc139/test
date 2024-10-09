import { View, StyleSheet } from 'react-native';
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
      // Dịch chuyển sang bên trái và thu nhỏ khi mở menu
      transform: [
        {
          translateX: interpolate(progress.value, [0, 1], [0, 250], 'clamp'), // Dịch chuyển sang trái
        },
        {
          scale: interpolate(progress.value, [0, 1], [1, 0.8], 'clamp'), // Thu nhỏ màn hình
        },
      ],
      overflow: 'hidden',

      // Thêm border chỉ khi menu đang mở
      // borderWidth: progress.value > 0 ? 2 : 0, // Độ dày của viền
      // borderColor: progress.value > 0 ? 'rgba(200, 216, 222, 1)' : 'transparent', // Màu viền
      borderRadius: 15, // Bán kính góc viền
    };
  });

  return (
    <View style={styles.container}>
      {/* Shadow chỉ hiển thị khi mở menu */}
      {progress.value > 0 && <View style={styles.shadow} />}
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
  shadow: {},
  animatedContainer: {
    flex: 1,
    zIndex: 1, // Đặt zIndex để đảm bảo phần nội dung hiển thị trên shadow
  },
});
