import {StyleSheet} from 'react-native';
import {width} from '../../constants/dimensions.ts';

export const styles = StyleSheet.create({
  container: {
    // width: width - 32,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#D0D5DD',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 9,
  },
  description: {
    color: '#344054',
    fontSize: 12,
    fontWeight: '500',
    marginBottom: 8,
  },
});
