import { useState } from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { router } from 'expo-router';
import { Text, TextInput } from '../components/AppText';
import { IMAGES } from '../constants/images';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const passError = submitted && password.length < 8;

  const onLogin = () => {
    setSubmitted(true);
    if (password.length >= 8) router.replace('/home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!{'\n'}Sign in to continue!</Text>

      <Pressable style={styles.socialBtn} onPress={() => router.replace('/home')}>
        {IMAGES.google ? (
          <Image source={IMAGES.google} style={styles.googleIcon} resizeMode="contain" />
        ) : (
          <View style={styles.googleBadge}>
            <Text style={styles.googleG}>G</Text>
          </View>
        )}
        <Text style={styles.socialText}>Log in with Google</Text>
      </Pressable>

      <Pressable style={styles.socialBtn} onPress={() => router.replace('/home')}>
        <View style={styles.fbBadge}>
          <Text style={styles.fbF}>f</Text>
        </View>
        <Text style={styles.socialText}>Log in with Facebook</Text>
      </Pressable>

      <Text style={styles.or}>or</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#8A8A8E"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />

      <View style={styles.passRow}>
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="Password"
          placeholderTextColor="#8A8A8E"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPass}
        />
        <Pressable onPress={() => setShowPass((v) => !v)} hitSlop={10}>
          <Text style={styles.eye}>{showPass ? '🙈' : '👁'}</Text>
        </Pressable>
      </View>
      {passError && <Text style={styles.error}>Password is not valid!</Text>}

      <Pressable style={styles.button} onPress={onLogin}>
        <Text style={styles.buttonText}>Log in</Text>
      </Pressable>

      <Text style={styles.forget}>Forget password?</Text>
      <Pressable onPress={() => router.push('/register')}>
        <Text style={styles.signup}>
          Don’t have an account? <Text style={styles.signupBold}>Sign up</Text>
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 24, paddingTop: 90 },
  title: { fontSize: 20, fontWeight: '700', textAlign: 'center', color: '#1A1A1A', lineHeight: 28, marginBottom: 36 },
  socialBtn: {
    height: 44,
    borderRadius: 4,
    backgroundColor: '#D9D9DB',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 12,
  },
  socialText: { fontSize: 12, color: '#1A1A1A' },
  googleIcon: { width: 20, height: 20 },
  googleBadge: { width: 20, height: 20, borderRadius: 10, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  googleG: { fontSize: 13, fontWeight: '700', color: '#4285F4' },
  fbBadge: { width: 20, height: 20, borderRadius: 10, backgroundColor: '#1877F2', alignItems: 'center', justifyContent: 'center' },
  fbF: { fontSize: 13, fontWeight: '700', color: '#fff' },
  or: { textAlign: 'center', color: '#8A8A8E', fontSize: 13, marginVertical: 16 },
  input: { height: 44, borderBottomWidth: 1, borderBottomColor: '#C8C8CC', fontSize: 13, color: '#1A1A1A' },
  passRow: { flexDirection: 'row', alignItems: 'center', marginTop: 8 },
  eye: { fontSize: 18, marginLeft: 8 },
  error: { color: '#E02020', fontSize: 10, marginTop: 4 },
  button: { height: 48, borderRadius: 4, backgroundColor: '#8E1D6B', alignItems: 'center', justifyContent: 'center', marginTop: 40 },
  buttonText: { color: '#fff', fontSize: 15, fontWeight: '600' },
  forget: { textAlign: 'center', color: '#8E1D6B', fontSize: 12, fontWeight: '600', marginTop: 20 },
  signup: { textAlign: 'center', color: '#8E1D6B', fontSize: 10, marginTop: 14 },
  signupBold: { fontWeight: '700' },
});