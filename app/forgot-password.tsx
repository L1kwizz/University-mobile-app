import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { router } from 'expo-router';

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleNext = () => {
    if (email.trim() === '') {
      setError('Email is required');
      return;
    }
    setError('');
    // Тут позже появится переход на экран ввода одноразового кода,
    console.log('Send code to:', email);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backArrow}>‹</Text>
      </Pressable>

      <Text style={styles.title}>Forgot Password?</Text>
      <Text style={styles.subtitle}>
        Enter your email to receive a reset code
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      {error !== '' && <Text style={styles.error}>{error}</Text>}

      <Pressable style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Next</Text>
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
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#8A8A8E',
    marginBottom: 32,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8EC',
    fontSize: 16,
    paddingVertical: 10,
    marginBottom: 4,
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