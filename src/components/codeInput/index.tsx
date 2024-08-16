import React, {useRef, useState} from 'react';
import {style} from './styles.ts';
import {
  Platform,
  View,
  Text,
  Pressable,
  Keyboard,
  TextInput,
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

interface CodeInputProps {
  code: string;
  setCode: (s: string) => void;
  incorrect?: boolean;
}

const CodeInput = (props: CodeInputProps) => {
  const {code, setCode, incorrect} = props;
  const [containerIsFocused, setContainerIsFocused] = useState(false);
  const codeArray = [1, 2, 3, '-', 4, 5, 6];

  const ref = useRef<TextInput>(null);

  const handleOnPress = () => {
    setContainerIsFocused(true);
    ref?.current?.focus();
  };

  const handleOnBlur = () => {
    setContainerIsFocused(false);
    ref?.current?.blur();
  };

  const toInput = (_value: number | string, idx: number) => {
    const emptyChar = '0';
    const isSeparator = typeof _value === 'string';
    const codeInx = !isSeparator
      ? code[idx >= 3 ? idx - 1 : idx] || emptyChar
      : '-';

    const containerStyleIOS = !isSeparator
      ? containerIsFocused && code[idx >= 3 ? idx - 1 : idx] && !incorrect
        ? {...style.inputContainer, ...style.inputContainerFocused}
        : containerIsFocused && code[idx >= 3 ? idx - 1 : idx] && incorrect
        ? style.incorrect
        : style.inputContainer
      : style.separatorContainer;

    const containerStyleAndroid = !isSeparator
      ? containerIsFocused && code[idx >= 3 ? idx - 1 : idx] && !incorrect
        ? {...style.containerAndroid, ...style.inputContainerFocused}
        : containerIsFocused && code[idx >= 3 ? idx - 1 : idx] && incorrect
        ? style.androidIncorrect
        : style.containerAndroid
      : style.separatorContainer;

    const textStyle = !isSeparator
      ? containerIsFocused && code[idx >= 3 ? idx - 1 : idx] && !incorrect
        ? style.inputActiveText
        : style.inputText
      : style.hyphen;

    return !isSeparator ? (
      <View
        key={idx}
        style={
          Platform.OS === 'ios' ? containerStyleIOS : containerStyleAndroid
        }>
        <Text style={[textStyle, incorrect && {color: '#30B0C7'}]}>
          {codeInx}
        </Text>
      </View>
    ) : (
      <View key={idx} style={style.separatorContainer}>
        <Text style={style.hyphen}>-</Text>
      </View>
    );
  };

  const handleChangeText = (text: string) => {
    const updatedText = text.replace('-', '');
    setCode(updatedText);
  };
  return (
    <SafeAreaProvider style={style.container}>
      <Pressable style={style.inputsContainer} onPress={handleOnPress}>
        {codeArray.map(toInput)}
      </Pressable>
      <Pressable onPress={() => Keyboard.dismiss()}>
        <TextInput
          ref={ref}
          value={code}
          onChangeText={handleChangeText}
          onSubmitEditing={handleOnBlur}
          keyboardType="number-pad"
          returnKeyType="done"
          textContentType="oneTimeCode"
          maxLength={6}
          style={style.hiddenCodeInput}
        />
      </Pressable>
    </SafeAreaProvider>
  );
};

export default CodeInput;
