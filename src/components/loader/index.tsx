import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {styles} from './styles.ts';

const Loader = () => {
  return (
    <View style={styles.cover}>
      <ActivityIndicator size={'large'} />
    </View>
  );
};

export default Loader;
