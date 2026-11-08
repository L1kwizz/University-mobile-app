import { useRef, useState } from 'react';
import { Dimensions, FlatList, Image, Pressable, StyleSheet, View } from 'react-native';
import { router } from 'expo-router';
import { Text } from '../components/AppText';
import { IMAGES } from '../constants/images';

const width = Math.min(Dimensions.get('window').width, 420);

const SLIDES = [
  {
    image: IMAGES.onboarding[0],
    emoji: '📣',
    title: 'Better way to learning\nis calling you!',
    subtitle: 'Unlock Your Potential, Embrace Education',
  },
  {
    image: IMAGES.onboarding[1],
    emoji: '🧭',
    title: 'Find yourself by doing\nwhatever you do!',
    subtitle: 'Education with Grace and Style',
  },
  {
    image: IMAGES.onboarding[2],
    emoji: '❤️',
    title: 'it’s not just learning,\nit’s a promise!',
    subtitle: 'Learn Today, Lead Tomorrow',
  },
];

export default function OnboardingScreen() {
  const [activeIndex, setActiveIndex] = useState(0);
  const listRef = useRef(null);

  const isLast = activeIndex === SLIDES.length - 1;

  const goToLogin = () => router.replace('/login');

  // Обновляем индекс при свайпе пальцем или мышью
  const onScroll = (e) => {
    const index = Math.round(e.nativeEvent.contentOffset.x / width);
    if (index !== activeIndex && index >= 0 && index < SLIDES.length) {
      setActiveIndex(index);
    }
  };

  // Кнопка Next: сразу ставим новый индекс и прокручиваем к слайду
  const handleNext = () => {
    if (isLast) {
      goToLogin();
      return;
    }
    const next = activeIndex + 1;
    setActiveIndex(next);
    listRef.current?.scrollToOffset({ offset: next * width, animated: true });
  };

  return (
    <View style={styles.container}>
      <View style={styles.progressRow}>
        {SLIDES.map((_, i) => (
          <View
            key={i}
            style={[styles.progressSegment, i === activeIndex && styles.progressSegmentActive]}
          />
        ))}
      </View>

      <FlatList
        ref={listRef}
        data={SLIDES}
        keyExtractor={(_, i) => String(i)}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
        getItemLayout={(_, index) => ({ length: width, offset: width * index, index })}
        renderItem={({ item }) => (
          <View style={[styles.slide, { width }]}>
            {item.image ? (
              <Image source={item.image} style={styles.image} resizeMode="contain" />
            ) : (
              <Text style={styles.emoji}>{item.emoji}</Text>
            )}
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
          </View>
        )}
      />

      <View style={styles.footer}>
        <Pressable style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>{isLast ? 'Get Started' : 'Next'}</Text>
        </Pressable>
        <Pressable onPress={goToLogin}>
          <Text style={styles.skip}>Skip</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 60 },
  progressRow: { flexDirection: 'row', gap: 6, paddingHorizontal: 24, marginBottom: 24 },
  progressSegment: { flex: 1, height: 3, borderRadius: 2, backgroundColor: '#E8E8EC' },
  progressSegmentActive: { backgroundColor: '#8E1D6B' },
  slide: { alignItems: 'center', justifyContent: 'center', paddingHorizontal: 32 },
  image: { width: 280, height: 220, marginBottom: 32 },
  emoji: { fontSize: 72, marginBottom: 32 },
  title: { fontSize: 22, fontWeight: '700', color: '#1A1A1A', textAlign: 'center', marginBottom: 8 },
  subtitle: { fontSize: 14, color: '#8A8A8E', textAlign: 'center' },
  footer: { paddingHorizontal: 24, paddingBottom: 40, alignItems: 'center', gap: 16 },
  nextButton: {
    width: '100%',
    height: 52,
    borderRadius: 999,
    backgroundColor: '#8E1D6B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButtonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  skip: { color: '#8E1D6B', fontWeight: '600', fontSize: 16 },
});