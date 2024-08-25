import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputContainer: {
    marginLeft: 4,
    height: 64,
    width: 52,
    alignItems: 'center',
    borderColor: '#C4C5C6',
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
  },
  containerAndroid: {
    marginLeft: 4,
    height: 64,
    width: 52,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 4,
  },
  incorrect: {
    marginLeft: 4,
    height: 64,
    width: 52,
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
  },
  androidIncorrect: {
    marginLeft: 4,
    height: 64,
    width: 52,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 4,
  },
  inputContainerFocused: {
    borderColor: '#A180DC',
  },
  hyphen: {
    fontSize: 40,
    marginTop: 5,
    textAlign: 'center',
    fontWeight: '600',
    color: '#D0D5DD',
  },
  separatorContainer: {
    marginLeft: 4,
    height: 64,
    alignItems: 'center',
  },
  inputText: {
    fontSize: 40,
    textAlign: 'center',
    color: '#C4C5C6',
    fontWeight: '600',
  },
  inputActiveText: {
    fontSize: 40,
    textAlign: 'center',
    color: '#30B0C7',
    fontWeight: '600',
  },
  hiddenCodeInput: {
    position: 'absolute',
    height: 0,
    width: 0,
    opacity: 0,
  },
});
