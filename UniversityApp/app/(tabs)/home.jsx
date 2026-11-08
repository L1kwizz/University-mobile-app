import { useState } from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { router } from 'expo-router';
import { Text } from '../../components/AppText';
import { IMAGES } from '../../constants/images';

const CATEGORIES = [
  { title: 'Computer\nScience', image: IMAGES.categories[0] },
  { title: 'Mathematics', image: IMAGES.categories[1] },
  { title: 'History &\nGeography', image: IMAGES.categories[2] },
  { title: 'Art &\nDesign', image: IMAGES.categories[3] },
];

const NEWS = [
  { title: 'FBISE', badge: 'May 01', badgeColor: '#E4DDF5', text: 'The Federal Board of Intermediate and Secondary Education (FBISE) has officially announced the date for the results of the Secondary School Certificate (SSC) Part I & II 1st Annual Examinations.' },
  { title: 'Gaza', badge: 'June 07', badgeColor: '#CFEFC9', text: 'The Pakistan Medical and Dental Council (PM&DC) has permitted medical/dental students from Gaza to complete their studies in Pakistan.' },
  { title: 'LUMS', badge: 'May 01', badgeColor: '#E4DDF5', text: 'LUMS recently celebrated the graduation of its students at the annual convocation.' },
];

const EVENTS = [
  { title: 'IDP Study Abroad Expo', place: 'Islamabad', date: 'Wed, 28 Feb 2024', image: IMAGES.events[0] },
  { title: 'Pathways to Development Conference', place: 'Lahore', date: 'Fri, 19 Apr 2024', image: IMAGES.events[1] },
  { title: 'IELTS Information Session', place: 'Karachi', date: 'Mon, 06 May 2024', image: IMAGES.events[2] },
];

export default function HomeScreen() {
  const [tab, setTab] = useState('news');

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.header}>Home</Text>
        <Text style={styles.bell}>🔔</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          data={CATEGORIES}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(i) => i.title}
          contentContainerStyle={styles.catList}
          renderItem={({ item }) => (
            <ImageBackground
              source={item.image}
              style={styles.catCard}
              imageStyle={styles.catImage}
            >
              <View style={styles.catShade} />
              <Text style={styles.catText}>{item.title}</Text>
            </ImageBackground>
          )}
        />

        <View style={styles.sectionRow}>
          <Text style={styles.sectionTitle}>Today’s Classes</Text>
          <Pressable onPress={() => router.push('/schedule')}>
            <Text style={styles.link}>Open schedule ›</Text>
          </Pressable>
        </View>

        <View style={styles.classCard}>
          <Text style={styles.classTitle}>Digital Thinking</Text>
          <Text style={styles.classMeta}>09:00 - 11:00    Main auditorium</Text>
          <Text style={styles.classMeta}>Mam Mahnoor</Text>
        </View>

        <View style={styles.tabs}>
          <Pressable onPress={() => setTab('news')}>
            <Text style={[styles.tab, tab === 'news' && styles.tabActive]}>News</Text>
          </Pressable>
          <Pressable onPress={() => setTab('events')}>
            <Text style={[styles.tab, tab === 'events' && styles.tabActive]}>Events</Text>
          </Pressable>
        </View>

        <View style={styles.feed}>
          {tab === 'news'
            ? NEWS.map((n) => (
                <View key={n.title} style={styles.feedCard}>
                  <View style={styles.feedTop}>
                    <Text style={styles.feedTitle}>{n.title}</Text>
                    <Text style={[styles.badge, { backgroundColor: n.badgeColor }]}>{n.badge}</Text>
                  </View>
                  <Text style={styles.feedText} numberOfLines={4}>{n.text}</Text>
                </View>
              ))
            : EVENTS.map((e) => (
                <View key={e.title} style={[styles.feedCard, styles.eventCard]}>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.feedTitle}>{e.title}</Text>
                    <Text style={styles.feedText}>{e.place}</Text>
                    <Text style={styles.feedText}>{e.date}</Text>
                  </View>
                  <Image source={e.image} style={styles.eventImg} />
                </View>
              ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 50 },
  headerRow: { justifyContent: 'center', height: 30 },
  header: { fontSize: 16, fontWeight: '600', textAlign: 'center', color: '#1A1A1A' },
  bell: { position: 'absolute', right: 16, fontSize: 16 },
  catList: { paddingHorizontal: 16, gap: 8, marginTop: 16 },
  catCard: { width: 76, height: 74, justifyContent: 'flex-end', padding: 6 },
  catImage: { borderRadius: 6 },
  catShade: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 36,
    backgroundColor: 'rgba(0,0,0,0.45)',
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  catText: { color: '#fff', fontSize: 9, fontWeight: '700' },
  sectionRow: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16, marginTop: 20 },
  sectionTitle: { fontSize: 14, fontWeight: '700', color: '#1A1A1A' },
  link: { fontSize: 12, color: '#8E1D6B' },
  classCard: { margin: 16, padding: 12, borderRadius: 6, borderWidth: 1, borderColor: '#E0D4F0', gap: 4 },
  classTitle: { fontSize: 13, fontWeight: '700', color: '#1A1A1A' },
  classMeta: { fontSize: 10, color: '#8A8A8E' },
  tabs: { flexDirection: 'row', gap: 20, paddingHorizontal: 16 },
  tab: { fontSize: 14, color: '#1A1A1A', paddingBottom: 4 },
  tabActive: { color: '#8E1D6B', borderBottomWidth: 1, borderBottomColor: '#8E1D6B' },
  feed: { backgroundColor: '#F1EDF7', padding: 12, gap: 10, marginTop: 8 },
  feedCard: { backgroundColor: '#fff', borderRadius: 6, padding: 12 },
  feedTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  feedTitle: { fontSize: 14, fontWeight: '700', color: '#1A1A1A', marginBottom: 4 },
  badge: { fontSize: 9, paddingHorizontal: 8, paddingVertical: 3, borderRadius: 10, overflow: 'hidden' },
  feedText: { fontSize: 10, color: '#8A8A8E', lineHeight: 14 },
  eventCard: { flexDirection: 'row', gap: 12 },
  eventImg: { width: 70, height: 70, borderRadius: 4 },
});