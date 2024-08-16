import React, {FC, useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {styles} from './styles.ts';
import CustomInput from '../../components/customInput';
import ActionButton from '../../components/actionButton/index.tsx';
import Loader from '../../components/loader';
import {
  formatPhoneNumber,
  handlePhoneNumberChange,
} from '../../utils/formatPhoneNumber.ts';

const Register: FC<any> = props => {
  const {navigation} = props;
  const [userInfo, setUserInfo] = useState({
    name: '',
    lastName: '',
    number: '',
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleUserInfoChange = (key: string, value: string) => {
    setUserInfo(prevData => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleNumChange = (value: string) => {
    const numValue = formatPhoneNumber(value);
    handleUserInfoChange('number', numValue);
  };

  const handleLoginNavigate = () => {
    navigation.navigate('Login');
  };

  const checkCode = async () => {
    try {
      const response = await fetch('https://demo9298797.mockable.io/checkCode');
      const data = await response.json();
      return data?.code;
    } catch (e) {
      console.error(e);
      return null;
    }
  };

  const handleConfirmCodeNavigate = async () => {
    setLoading(true);
    try {
      const fetchedCode = await checkCode();
      const response = await fetch(
        'https://demo9298797.mockable.io/registration',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: userInfo.name,
            lastname: userInfo.lastName,
            number: userInfo.number,
          }),
        },
      );

      if (response.status === 201 && fetchedCode) {
        navigation.navigate('ConfirmCode', {
          fetchedCode,
        });
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <View style={styles.contentContainer}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'position' : 'position'}
            keyboardVerticalOffset={Platform.select({ios: 70, android: 40})}
            style={styles.inputContainer}>
            <Text style={styles.title}>Welcome to App</Text>
            <Text style={styles.description}>Please enter your details.</Text>
            <CustomInput
              description={'Name'}
              value={userInfo.name}
              placeholder={'Enter name'}
              setValue={value => handleUserInfoChange('name', value)}
            />
            <View style={styles.inputContent}>
              <CustomInput
                description={'Last Name'}
                placeholder={'Enter last name'}
                value={userInfo.lastName}
                setValue={value => handleUserInfoChange('lastName', value)}
              />
            </View>
            <View style={styles.inputContent}>
              <CustomInput
                description={'Phone number'}
                value={userInfo.number}
                keyboardType={'number-pad'}
                placeholder={'+33 222 111 2222'}
                setValue={value => handleNumChange(value)}
              />
            </View>
            <View style={styles.buttonContainer}>
              <ActionButton
                title={'Continue'}
                active
                onPress={handleConfirmCodeNavigate}
              />
            </View>
          </KeyboardAvoidingView>
          <View style={styles.loginContainer}>
            <Text style={styles.registerText}>Do you have an account? </Text>
            <Pressable style={styles.regBtn} onPress={handleLoginNavigate}>
              <Text style={styles.regBtnText}>Login</Text>
            </Pressable>
          </View>
        </View>
        {loading && <Loader />}
      </SafeAreaView>
    </Pressable>
  );
};

export default Register;
