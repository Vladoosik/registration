import React, {FC} from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {styles} from './styles.ts';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  active?: boolean;
}
const ActionButton: FC<ButtonProps> = props => {
  const {title, active} = props;
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.6}
      style={[
        styles.container,
        active ? styles.activeButton : styles.defaultButton,
      ]}>
      <Text
        style={[styles.text, active ? styles.activeText : styles.defaultText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ActionButton;
