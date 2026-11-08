import { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { router } from 'expo-router';
import { Text } from '../components/AppText';
import { IMAGES } from '../constants/images';

export default function SplashScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/onboarding');
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {IMAGES.logo ? (
        <Image source={IMAGES.logo} style={styles.logo} resizeMode="contain" />
      ) : (
        <View style={styles.logoCircle}>
          <Text style={styles.logoIcon}>✺</Text>
        </View>
      )}
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
  logo: { width: 110, height: 110, marginBottom: 16 },
  logoCircle: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  logoIcon: { fontSize: 32, color: '#8E1D6B' },
  title: { color: '#fff', fontSize: 22, fontWeight: '700' },
  subtitle: { color: '#fff', fontSize: 14, opacity: 0.85, marginTop: 4 },
  copyright: {
    position: 'absolute',
    bottom: 32,
    color: '#fff',
    opacity: 0.7,
    fontSize: 12,
    textAlign: 'center',
  },
});