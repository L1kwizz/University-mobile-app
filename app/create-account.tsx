import { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { router } from 'expo-router';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function CreateAccountScreen() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleContinue = () => {
    const newErrors = {
      username: username.trim() === '' ? 'Username is required' : '',
      email: !EMAIL_RE.test(email) ? 'Email is not valid' : '',
      password: password.length < 8 ? 'Must contain 8 character' : '',
      confirmPassword:
        confirmPassword !== password ? 'Must match both password' : '',
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((msg) => msg !== '');
    if (!hasErrors) {
      router.replace('/login');
    }
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backArrow}>‹</Text>
      </Pressable>

      <Text style={styles.title}>Create Account</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      {errors.username !== '' && (
        <Text style={styles.error}>{errors.username}</Text>
      )}

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      {errors.email !== '' && <Text style={styles.error}>{errors.email}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {errors.password !== '' && (
        <Text style={styles.error}>{errors.password}</Text>
      )}

      <TextInput
        style={styles.input}
        placeholder="Re-type Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      {errors.confirmPassword !== '' && (
        <Text style={styles.error}>{errors.confirmPassword}</Text>
      )}

      <Pressable style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  backButton: {
    marginBottom: 24,
  },
  backArrow: {
    fontSize: 28,
    color: '#1A1A1A',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#8E1D6B',
    marginBottom: 32,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8EC',
    fontSize: 16,
    paddingVertical: 10,
    marginBottom: 4,
    marginTop: 16,
  },
  error: {
    color: '#E23D3D',
    fontSize: 12,
  },
  button: {
    height: 52,
    borderRadius: 999,
    backgroundColor: '#8E1D6B',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});