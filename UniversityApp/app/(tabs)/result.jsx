import { FlatList, StyleSheet, View } from 'react-native';
import { Text } from '../../components/AppText';

const GRADES = [
  { course: 'Digital Marketing', grade: 'A+' },
  { course: 'Design Learning', grade: 'B' },
  { course: 'Software Management', grade: 'B+' },
  { course: 'Digital Logical Thoughts', grade: 'C' },
  { course: 'Artifical Intelligence', grade: 'F' },
  { course: 'Physics', grade: 'A+' },
  { course: 'Mathematics', grade: 'C+' },
];

export default function ResultScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Grades: <Text style={styles.headerAccent}>Final Grades</Text>
      </Text>

      <View style={styles.summaryRow}>
        <View>
          <Text style={styles.summary}>
            Overall CGPA: <Text style={styles.bold}>4.00</Text>
          </Text>
          <Text style={styles.summary}>
            Credits earned: <Text style={styles.bold}>50/150</Text>
          </Text>
        </View>
        <View style={styles.semesterBox}>
          <Text style={styles.semesterText}>Semester ⌄</Text>
        </View>
      </View>

      <FlatList
        data={GRADES}
        keyExtractor={(i) => i.course}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.course}>{item.course}</Text>
            <View style={styles.gradeBox}>
              <Text style={styles.grade}>{item.grade}</Text>
              <Text style={styles.sem}>S2023</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F1EDF7', paddingTop: 50 },
  header: { fontSize: 14, fontWeight: '600', textAlign: 'center', color: '#1A1A1A' },
  headerAccent: { color: '#8E1D6B', fontWeight: '600' },
  summaryRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, marginTop: 16 },
  summary: { fontSize: 10, color: '#4A4A4E', marginBottom: 2 },
  bold: { fontWeight: '700', color: '#1A1A1A' },
  semesterBox: { backgroundColor: '#fff', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 4, borderWidth: 1, borderColor: '#E0D4F0' },
  semesterText: { fontSize: 9, color: '#4A4A4E' },
  list: { padding: 16, gap: 12 },
  row: {
    backgroundColor: '#fff',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#E0D4F0',
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 12,
  },
  course: { fontSize: 12, fontWeight: '600', color: '#1A1A1A' },
  gradeBox: { width: 56, alignItems: 'center', borderLeftWidth: 1, borderLeftColor: '#E0D4F0', height: '100%', justifyContent: 'center' },
  grade: { fontSize: 11, fontWeight: '700', color: '#8E1D6B' },
  sem: { fontSize: 8, color: '#8A8A8E', marginTop: 2 },
});