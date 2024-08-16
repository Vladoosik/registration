import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 7,
    borderWidth: 1,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
  activeButton: {
    backgroundColor: '#30B0C7',
    borderColor: '#30B0C7',
  },
  defaultButton: {
    backgroundColor: 'transparent',
    borderColor: '#C4C5C6',
  },
  activeText: {
    color: 'white',
  },
  defaultText: {
    color: '#14171D',
  },
});
