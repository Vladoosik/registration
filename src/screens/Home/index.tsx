import React, {FC} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import ActionButton from '../../components/actionButton';
import {styles} from './styles.ts';
import HomeIcon from '../../assets/svg/homeIcon.tsx';

const Home: FC<any> = props => {
  const {navigation} = props;
  const handleLoginNavigate = () => {
    navigation.navigate('Login');
  };

  const handleRegisterNavigate = () => {
    navigation.navigate('Register');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <HomeIcon />
      </View>
      <View style={styles.buttonContainer}>
        <View>
          <Text style={styles.title}>Welcome to App</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet consectetur. A ut pellentesque amet
            phasellus augue. Neque at felis pulvinar malesuada varius egestas
            dis cras.{' '}
          </Text>
        </View>
        <ActionButton title={'Login'} active onPress={handleLoginNavigate} />
        <View style={styles.registerBtn}>
          <ActionButton title={'Register'} onPress={handleRegisterNavigate} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
