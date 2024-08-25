import React, {FC, useEffect, useState} from 'react';
import {Alert, Pressable, SafeAreaView, Text, View} from 'react-native';
import {styles} from './styles.ts';
import CodeInput from '../../components/codeInput';
import ActionButton from '../../components/actionButton';

const ConfirmCode: FC<any> = props => {
  const {navigation, route} = props;
  const {fetchedCode} = route?.params;
  const [code, setCode] = useState<string>('');
  const [incorrectCode, setIncorrectCoe] = useState<boolean>(false);
  const incorrectInput = code.length === 6 && code !== fetchedCode;

  useEffect(() => {
    if (code.length === 6 && incorrectCode){
      setIncorrectCoe(true)
    }else {
      setIncorrectCoe(false)
    }
  }, [code]);

  const handleSignUp = () => {
    const codeIsMatch = code === fetchedCode;
    const requireLength = code.length === 6;

    if (codeIsMatch && requireLength) {
      Alert.alert(
        'Registration success!',
        'You have successfully registered.',
        [
          {
            text: 'OK',
            onPress: () => navigation.navigate('Home'),
          },
        ],
        {cancelable: false},
      );
    } else {
      setIncorrectCoe(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to App</Text>
        <Text style={styles.description}>
          Enter the confirmation code that will be sent to you by SMS
        </Text>
        <Text style={styles.secureCode}>Secure Code</Text>
        <View style={styles.codeInputContainer}>
          <CodeInput code={code} setCode={setCode} incorrect={incorrectInput && incorrectCode} />
        </View>
        <Pressable style={styles.resendBtn}>
          <Text style={styles.resendBtnText}>Resend the Code</Text>
        </Pressable>
        <View style={styles.buttonContainer}>
          <ActionButton
            disabled={code.length !== 6}
            title={'Sign up'}
            active
            onPress={handleSignUp}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ConfirmCode;
