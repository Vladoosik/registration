import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
  },
  loginContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
  },
  contentContainer: {
    // marginTop: 40,
    paddingHorizontal: 16,
    // alignItems: 'center',
    width: '100%',
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 24,
    color: '#344054',
    marginTop: 80,
  },
  description: {
    textAlign: 'center',
    marginTop: 8,
    color: '#667085',
    fontSize: 16,
    lineHeight: 23,
  },
  inputContainer: {
    // flex: 2,
    marginTop: 40,
  },
  inputContent: {
    marginTop: 20,
  },
  buttonContainer: {
    marginTop: 16,
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
});
