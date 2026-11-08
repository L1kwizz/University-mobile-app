import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { Text } from '../../components/AppText';

const DAYS = [
  { letter: 'S', num: '04' },
  { letter: 'S', num: '05' },
  { letter: 'M', num: '06' },
  { letter: 'T', num: '07' },
  { letter: 'W', num: '08' },
  { letter: 'T', num: '09' },
  { letter: 'F', num: '10' },
];

const CLASSES = [
  { start: '11:35', end: '13:05', title: 'Computer Science', lecture: 'Lecture 2: Data management', room: 'Room 2 - 124', teacher: 'Mam Laiba Khalid', bg: '#A8E6A3', titleColor: '#1A1A1A' },
  { start: '13:15', end: '14:45', title: 'Digital Marketing', lecture: 'Lecture 3: Shopify Creation', room: 'Room 34 - G4', teacher: 'Mam Hira', bg: '#DFFA6B', titleColor: '#E02020' },
  { start: '15:10', end: '16:40', title: 'Digital Marketing', lecture: 'Lecture 3: Shopify Creation', room: 'Room 18 - 81', teacher: 'Mam Hira', bg: '#A9C4D9', titleColor: '#fff' },
];

export default function ScheduleScreen() {
  const [selected, setSelected] = useState('06');

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.header}>Schedule</Text>
        <Text style={styles.bell}>🔔</Text>
      </View>

      <View style={styles.dateRow}>
        <Text style={styles.bigDate}>06</Text>
        <View>
          <Text style={styles.dateSmall}>Mon</Text>
          <Text style={styles.dateSmall}>July,2024</Text>
        </View>
      </View>

      <View style={styles.week}>
        {DAYS.map((d) => {
          const active = d.num === selected;
          return (
            <Pressable
              key={d.num}
              onPress={() => setSelected(d.num)}
              style={[styles.day, active && styles.dayActive]}
            >
              <Text style={[styles.dayLetter, active && styles.dayTextActive]}>{d.letter}</Text>
              <Text style={[styles.dayNum, active && styles.dayTextActive]}>{d.num}</Text>
            </Pressable>
          );
        })}
      </View>

      <View style={styles.colsHeader}>
        <Text style={styles.colTime}>Time</Text>
        <Text style={styles.colCourses}>Courses</Text>
      </View>

      <ScrollView contentContainerStyle={styles.list} showsVerticalScrollIndicator={false}>
        {CLASSES.map((c, i) => (
          <View key={i} style={styles.item}>
            <View style={styles.timeCol}>
              <Text style={styles.timeStart}>{c.start}</Text>
              <Text style={styles.timeEnd}>{c.end}</Text>
            </View>
            <View style={[styles.card, { backgroundColor: c.bg }]}>
              <Text style={[styles.cardTitle, { color: c.titleColor }]}>{c.title}</Text>
              <Text style={styles.cardLecture}>{c.lecture}</Text>
              <Text style={styles.cardMeta}>📍 {c.room}</Text>
              <Text style={styles.cardMeta}>👤 {c.teacher}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F1EDF7', paddingTop: 50 },
  headerRow: { justifyContent: 'center', height: 30 },
  header: { fontSize: 16, fontWeight: '600', textAlign: 'center', color: '#1A1A1A' },
  bell: { position: 'absolute', right: 16, fontSize: 16 },
  dateRow: { flexDirection: 'row', alignItems: 'center', gap: 8, paddingHorizontal: 16, marginTop: 16 },
  bigDate: { fontSize: 32, fontWeight: '700', color: '#1A1A1A' },
  dateSmall: { fontSize: 10, color: '#8A8A8E' },
  week: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 16, paddingHorizontal: 8 },
  day: { width: 38, paddingVertical: 8, alignItems: 'center', borderRadius: 6, gap: 6 },
  dayActive: { backgroundColor: '#8E1D6B' },
  dayLetter: { fontSize: 10, color: '#8A8A8E' },
  dayNum: { fontSize: 13, fontWeight: '700', color: '#1A1A1A' },
  dayTextActive: { color: '#fff' },
  colsHeader: { flexDirection: 'row', paddingHorizontal: 16, marginTop: 20 },
  colTime: { width: 64, fontSize: 12, color: '#8A8A8E' },
  colCourses: { fontSize: 12, color: '#8A8A8E' },
  list: { paddingHorizontal: 16, paddingVertical: 12, gap: 16 },
  item: { flexDirection: 'row' },
  timeCol: { width: 64, paddingTop: 4 },
  timeStart: { fontSize: 14, fontWeight: '700', color: '#1A1A1A' },
  timeEnd: { fontSize: 11, color: '#8A8A8E', marginTop: 4 },
  card: { flex: 1, borderRadius: 8, padding: 14, gap: 4, minHeight: 130 },
  cardTitle: { fontSize: 14, fontWeight: '700' },
  cardLecture: { fontSize: 9, color: '#4A4A4E', marginBottom: 20 },
  cardMeta: { fontSize: 9, color: '#1A1A1A' },
});