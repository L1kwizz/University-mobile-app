import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';

export default function SplashScreen() {
  // useEffect выполняет код один раз, когда экран открылся.
  // Тут таймер потом переход на онбординг
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/onboarding');
    }, 1800);
    return () => clearTimeout(timer); // очистка таймера, если экран закрылся раньше
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.logoCircle}>
        <Text style={styles.logoIcon}>✺</Text>
      </View>
      <Text style={styles.title}>Superior University</Text>
      <Text style={styles.subtitle}>e-Learning Platform</Text>
      <Text style={styles.copyright}>
        Copyright © 2026 Superior University{'\n'}All Right Reserved
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8E1D6B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoCircle: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  logoIcon: {
    fontSize: 32,
    color: '#8E1D6B',
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
  },
  subtitle: {
    color: '#fff',
    fontSize: 14,
    opacity: 0.85,
    marginTop: 4,
  },
  copyright: {
    position: 'absolute',
    bottom: 32,
    color: '#fff',
    opacity: 0.7,
    fontSize: 12,
    textAlign: 'center',
  },
});