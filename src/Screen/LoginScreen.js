import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { validateEmail, validatePassword } from '../function/validate';
import { login } from '../../redux/authActions';
import SpaceComponent from '../Components/SpaceComponent';
import InputComponent from '../Components/InputComponent';
import ButtonComponent from '../Components/ButtonComponent';
const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);
  const [errText, setErrorText] = useState('');
  const handleLogin = useCallback(() => {
    if (!username || !password) {
      Alert.alert('Please enter your email and password!!!');
    } else if (!validateEmail(username)) {
      Alert.alert('Please enter the correct email format');
    } else if (!validatePassword(password)) {
      Alert.alert('Password must be at least 6 characters');
    } else {
      dispatch(login(username, password)).then(() => {
        if (!error) {
          navigation.navigate('Home');
        }
      });
    }
  }, [username, password, dispatch, error, navigation]);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <ImageBackground
          source={require('../../assets/bg.png')}
          style={styles.container}
          resizeMode="cover"
        >
          <View style={styles.header}>
            <Image
              source={require('../../assets/logo.png')}
              style={styles.logo}
            />
            <View style={{ marginLeft: 20 }}>
              <Text style={styles.upnow}>UpNow</Text>
              <Text style={styles.text}>Digital Hypnotherapy</Text>
            </View>
          </View>
          <SpaceComponent height={5} color="rgba(255, 255, 255, 0.1)" />
          <View style={styles.formContainer}>
            <Text style={[styles.upnow, { marginLeft: 14, marginBottom: 20 }]}>
              Log In
            </Text>

            <InputComponent
              placeholder="Email"
              value={username}
              onChangeText={setUsername}
              iconSource={require('../../assets/ic_mail.png')}
            />
            <InputComponent
              inputpassword
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              iconSource={require('../../assets/Vector.png')}
            />

            <TouchableOpacity>
              <Text style={styles.forgotPasswordText}>Forget password?</Text>
            </TouchableOpacity>

            <ButtonComponent
              title="Login"
              colors={['#FF5789', '#FF9B9C']}
              onPress={handleLogin}
            />
            <View style={styles.signupContainer}>
              <Text style={styles.signupText}>Don't have an account?</Text>
              <TouchableOpacity>
                <Text style={styles.signupLink}>Sign Up</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.orTextContainer}>
              <View style={styles.line}></View>
              <Text style={styles.orText}>Or Log in with</Text>
              <View style={styles.line}></View>
            </View>

            <ButtonComponent
              title="Log in with Facebook"
              backgroundColor="#rgba(63, 96, 178, 1)"
              source={require('../../assets/fb.png')}
            />

            <ButtonComponent
              title="Log in with Apple"
              backgroundColor="#000"
              source={require('../../assets/Vector1.png')}
            />
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    width: 203.54,
    height: 50.35,
    alignItems: 'center',
    marginLeft: 24,
    marginTop: 60,
    marginBottom: 20,
  },
  logo: {
    width: 50.35,
    height: 50.35,
  },
  upnow: {
    fontSize: 24,
    fontWeight: '900',
    color: '#fff',
    marginTop: 10,
    lineHeight: 24,
  },
  text: {
    fontSize: 14,
    color: '#2D8CFF',
    lineHeight: 17.59,
  },
  formContainer: {
    marginTop: 20,
    paddingHorizontal: 30,
    flex: 1,
  },

  input: {
    height: 50,
    color: '#fff',
    paddingHorizontal: 15,
    flex: 1,
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  forgotPasswordText: {
    color: 'rgba(255, 255, 255, 1)',
    textAlign: 'right',
    marginBottom: 30,
    fontSize: 15,
    fontWeight: '400',
  },

  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 36,
  },
  signupText: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 15,
    fontWeight: '400',
  },
  signupLink: {
    color: '#rgba(255, 88, 137, 1)',
    fontWeight: 'bold',
    marginLeft: 5,
    fontSize: 15,
  },
  line: {
    height: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    flex: 1,
  },
  orText: {
    color: '#rgba(255, 255, 255, 1)',
    textAlign: 'center',
    fontSize: 15,
    padding: 10,
  },
  orTextContainer: {
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
});

export default LoginScreen;
