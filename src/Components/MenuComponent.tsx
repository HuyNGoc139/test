import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
  Image,
} from 'react-native';

const MenuComponent = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [translateX] = useState(new Animated.Value(-250)); // Menu ban đầu nằm ngoài màn hình, đẩy trái 250px

  // Hàm điều khiển mở/đóng menu
  const toggleMenu = () => {
    if (menuVisible) {
      // Đóng menu
      Animated.timing(translateX, {
        toValue: -250, // Đẩy menu ra ngoài màn hình
        duration: 300,
        useNativeDriver: true,
      }).start(() => setMenuVisible(false));
    } else {
      setMenuVisible(true);
      // Mở menu
      Animated.timing(translateX, {
        toValue: 0, // Đưa menu vào màn hình
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <View style={styles.container}>
      {/* Nút để mở/đóng menu */}
      <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
        <Text style={styles.menuButtonText}>☰</Text> {/* Icon menu */}
      </TouchableOpacity>

      {/* Menu trượt từ bên trái */}
      {menuVisible && (
        <Animated.View
          style={[styles.menuContainer, { transform: [{ translateX }] }]}
        >
          <View style={styles.profileSection}>
            <Image
              source={{ uri: 'https://randomuser.me/api/portraits/men/44.jpg' }}
              style={styles.profileImage}
            />
            <Text style={styles.userName}>James B.</Text>
          </View>

          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Reminder</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Invite your friends</Text>
          </TouchableOpacity>
          {/* Thêm các mục menu khác ở đây */}

          <View style={styles.footer}>
            <Text style={styles.footerText}>Powered by UpNow</Text>
          </View>
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1f3d',
    justifyContent: 'center',
  },
  menuButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10, // Đảm bảo nút menu ở trên cùng
  },
  menuButtonText: {
    fontSize: 30,
    color: '#fff',
  },
  menuContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 250,
    height: '100%',
    backgroundColor: '#1f1f3d', // Màu nền của menu
    padding: 20,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  userName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  menuItem: {
    marginVertical: 15,
  },
  menuText: {
    color: '#fff',
    fontSize: 16,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  footerText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default MenuComponent;
