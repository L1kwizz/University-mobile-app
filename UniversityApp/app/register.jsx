import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { router } from 'expo-router';
import { Text, TextInput } from '../components/AppText';

const EMAIL_RE = /^\S+@\S+\.\S+$/;

export default function RegisterScreen() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeat, setRepeat] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const emailError = submitted && !EMAIL_RE.test(email);
  const passError = submitted && password.length < 8;
  const repeatError = submitted && repeat !== password;

  const onContinue = () => {
    setSubmitted(true);
    if (EMAIL_RE.test(email) && password.length >= 8 && repeat === password) {
      router.replace('/home');
    }
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.back()} hitSlop={12}>
        <Text style={styles.back}>‹</Text>
      </Pressable>

      <Text style={styles.title}>Create Account</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#8A8A8E"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#8A8A8E"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        {emailError && <Text style={styles.error}>Email is not valid</Text>}

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
        {passError && <Text style={styles.error}>Must contain 8 character</Text>}

        <TextInput
          style={styles.input}
          placeholder="Re-type Password"
          placeholderTextColor="#8A8A8E"
          value={repeat}
          onChangeText={setRepeat}
          secureTextEntry={!showPass}
        />
        {repeatError && <Text style={styles.error}>Must match both password</Text>}
      </View>

      <Pressable style={styles.button} onPress={onContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 24, paddingTop: 60 },
  back: { fontSize: 36, color: '#1A1A1A', lineHeight: 36 },
  title: { fontSize: 20, fontWeight: '700', color: '#8E1D6B', textAlign: 'center', marginTop: 24 },
  form: { marginTop: 40 },
  input: { height: 48, borderBottomWidth: 1, borderBottomColor: '#C8C8CC', fontSize: 14, color: '#1A1A1A', marginTop: 8 },
  passRow: { flexDirection: 'row', alignItems: 'center' },
  eye: { fontSize: 18, marginLeft: 8 },
  error: { color: '#E02020', fontSize: 11, marginTop: 4 },
  button: {
    position: 'absolute',
    bottom: 40,
    left: 24,
    right: 24,
    height: 52,
    borderRadius: 4,
    backgroundColor: '#8E1D6B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});