import { useRef, useState } from 'react';
import {
  Dimensions,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { router } from 'expo-router';

const { width } = Dimensions.get('window');

// Данные для 3 слайдов — текст берём прямо из макета Figma
const SLIDES = [
  {
    emoji: '📣',
    title: 'Better way to learning\nis calling you!',
    subtitle: 'Unlock Your Potential, Embrace Education',
  },
  {
    emoji: '🧭',
    title: 'Find yourself by doing\nwhatever you do!',
    subtitle: 'Education with Grace and Style',
  },
  {
    emoji: '❤️',
    title: 'it’s not just learning,\nit’s a promise!',
    subtitle: 'Learn Today, Lead Tomorrow',
  },
];

export default function OnboardingScreen() {
  // activeIndex — "состояние": какой слайд сейчас открыт (0, 1 или 2)
  const [activeIndex, setActiveIndex] = useState(0);
  const listRef = useRef<FlatList>(null);

  const goToLogin = () => router.replace('/login');

  // Срабатывает когда пользователь долистал свайпом до нового слайда
  const onScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(e.nativeEvent.contentOffset.x / width);
    setActiveIndex(index);
  };

  // Нажатие на кнопку Next
  const handleNext = () => {
    if (activeIndex < SLIDES.length - 1) {
      listRef.current?.scrollToIndex({ index: activeIndex + 1 });
    } else {
      goToLogin(); // на последнем слайде — сразу на логин
    }
  };

  return (
    <View style={styles.container}>
      {/* Прогресс-бар из 3 полосок сверху */}
      <View style={styles.progressRow}>
        {SLIDES.map((_, i) => (
          <View
            key={i}
            style={[
              styles.progressSegment,
              i === activeIndex && styles.progressSegmentActive,
            ]}
          />
        ))}
      </View>

      {/* Список слайдов, листается свайпом по горизонтали */}
      <FlatList
        ref={listRef}
        data={SLIDES}
        keyExtractor={(_, i) => String(i)}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={onScrollEnd}
        renderItem={({ item }) => (
          <View style={[styles.slide, { width }]}>
            <Text style={styles.emoji}>{item.emoji}</Text>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
          </View>
        )}
      />

      {/* Кнопки снизу */}
      <View style={styles.footer}>
        <Pressable style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>
            {activeIndex === SLIDES.length - 1 ? 'Get Started' : 'Next'}
          </Text>
        </Pressable>
        <Pressable onPress={goToLogin}>
          <Text style={styles.skip}>Skip</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
  },
  progressRow: {
    flexDirection: 'row',
    gap: 6,
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  progressSegment: {
    flex: 1,
    height: 3,
    borderRadius: 2,
    backgroundColor: '#E8E8EC',
  },
  progressSegmentActive: {
    backgroundColor: '#8E1D6B',
  },
  slide: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  emoji: {
    fontSize: 72,
    marginBottom: 32,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1A1A1A',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#8A8A8E',
    textAlign: 'center',
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 40,
    alignItems: 'center',
    gap: 16,
  },
  nextButton: {
    width: '100%',
    height: 52,
    borderRadius: 999,
    backgroundColor: '#8E1D6B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  skip: {
    color: '#8E1D6B',
    fontWeight: '600',
    fontSize: 16,
  },
});