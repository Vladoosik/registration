import React, {FC, useEffect, useState} from 'react';
import {
  Alert,
  Keyboard,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {styles} from './styles.ts';
import CustomInput from '../../components/customInput';
import ActionButton from '../../components/actionButton';
import {handlePhoneNumberChange} from '../../utils/formatPhoneNumber.ts';

interface UserType {
  name: string;
  lastname: string;
  number: string;
}

interface RegisteredNumber {
  registeredNumbers: UserType[];
}
const Login: FC<any> = props => {
  const {navigation} = props;
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [registeredUsers, setRegisteredUsers] = useState<UserType[]>([]);

  const handleRegisterNavigate = () => {
    navigation.navigate('Register');
  };

  useEffect(() => {
    const fetchRegisteredNumbers = async () => {
      try {
        const response = await fetch(
          'https://demo9298797.mockable.io/registeredUsers',
        );
        const data: RegisteredNumber = await response.json();
        setRegisteredUsers(data.registeredNumbers);
      } catch (e) {
        console.error(e);
      }
    };
    fetchRegisteredNumbers();
  }, []);

  const checkIfNumberRegistered = () => {
    const cleanedPhoneNumber = phoneNumber.replace(/\s+/g, '');
    const registeredNum = registeredUsers?.some(
      user => user.number === cleanedPhoneNumber,
    );

    if (registeredNum) {
      Alert.alert(
        'Login success!',
        'You have successfully sign in.',
        [
          {
            text: 'OK',
            onPress: () => navigation.navigate('Home'),
          },
        ],
        {cancelable: false},
      );
    } else {
      Alert.alert('User not found');
    }
  };
  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Welcome to App</Text>
          <Text style={styles.description}>Please enter your details.</Text>
          <View style={styles.inputContainer}>
            <CustomInput
              keyboardType={'number-pad'}
              value={phoneNumber}
              setValue={(value: string) =>
                handlePhoneNumberChange(value, setPhoneNumber)
              }
              description={'Phone number'}
              placeholder={'+33 222 111 2222'}
            />
            <View style={styles.buttonContainer}>
              <ActionButton
                title={'Login'}
                active
                onPress={checkIfNumberRegistered}
              />
            </View>
          </View>
          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>Don’t have an account? </Text>
            <Pressable style={styles.regBtn} onPress={handleRegisterNavigate}>
              <Text style={styles.regBtnText}>Sign up</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </Pressable>
  );
};

export default Login;
