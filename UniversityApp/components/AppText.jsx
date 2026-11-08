import { StyleSheet, Text as RNText, TextInput as RNTextInput } from 'react-native';

const FAMILY = {
  '400': 'Poppins_400Regular',
  '500': 'Poppins_500Medium',
  '600': 'Poppins_600SemiBold',
  '700': 'Poppins_700Bold',
  normal: 'Poppins_400Regular',
  bold: 'Poppins_700Bold',
};

function withFont(style) {
  const flat = StyleSheet.flatten(style) || {};
  const family = FAMILY[String(flat.fontWeight || '400')] || FAMILY['400'];
  return [style, { fontFamily: family, fontWeight: undefined }];
}

export function Text({ style, ...props }) {
  return <RNText {...props} style={withFont(style)} />;
}

export function TextInput({ style, ...props }) {
  return <RNTextInput {...props} style={withFont(style)} />;
}