import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginTop: 40,
    paddingHorizontal: 16,
  },
  title: {
    fontWeight: '600',
    fontSize: 24,
    color: '#344054',
    marginTop: 80,
    textAlign: 'center',
  },
  description: {
    marginTop: 8,
    color: '#667085',
    fontSize: 16,
    lineHeight: 23,
    textAlign: 'center',
  },
  secureCode: {
    color: '#344054',
    fontSize: 12,
    fontWeight: '500',
    marginBottom: 8,
    marginTop: 40,
  },
  codeInputContainer: {
    height: 62,
  },
  resendBtn: {
    borderBottomWidth: 1,
    borderBottomColor: '#00D1AC',
    alignSelf: 'center',
    marginTop: 32,
  },
  resendBtnText: {
    color: '#00D1AC',
    fontSize: 14,
    fontWeight: '600',
  },
  buttonContainer: {
    marginTop: 32,
  },
});
