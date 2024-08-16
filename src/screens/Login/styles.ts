import {StyleSheet} from 'react-native';
import {width} from '../../constants/dimensions.ts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  registerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
  },
  contentContainer: {
    marginTop: 40,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  title: {
    fontWeight: '600',
    fontSize: 24,
    color: '#344054',
    marginTop: 80,
  },
  description: {
    marginTop: 8,
    color: '#667085',
    fontSize: 16,
    lineHeight: 23,
  },
  inputContainer: {
    width: width - 32,
    marginTop: 40,
  },
  buttonContainer: {
    marginTop: 24,
  },
  registerText: {
    color: '#727477',
    fontSize: 14,
  },
  regBtn: {
    borderBottomWidth: 1,
    borderBottomColor: '#00D1AC',
  },
  regBtnText: {
    color: '#00D1AC',
    fontSize: 14,
    fontWeight: '600',
  },
  error: {
    marginTop: 5,
    color: 'red',
    fontSize: 10,
  },
});
