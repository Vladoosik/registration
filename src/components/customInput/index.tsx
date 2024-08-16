import React, {FC} from 'react';
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TextInputProps,
} from 'react-native';
import {styles} from './styles.ts';

interface InputProps extends TextInputProps {
  description?: string;
  value: string;
  setValue: (s: string) => void;
}

const CustomInput: FC<InputProps> = props => {
  const {description, value, setValue} = props;
  return (
    <>
      <Text style={styles.description}>{description}</Text>
      <TextInput
        {...props}
        placeholderTextColor={'#667085'}
        style={styles.input}
        value={value}
        onChangeText={(text: string) => setValue(text)}
      />
    </>
  );
};

export default CustomInput;
