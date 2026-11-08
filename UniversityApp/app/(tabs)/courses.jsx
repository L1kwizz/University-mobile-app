import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Text, TextInput } from '../../components/AppText';

const COURSES = [
  'Digital Marketing',
  'Design Learning',
  'Artifical Intelligence',
  'Software Management',
  'Digital Logical Thoughts',
  'Web 3.0',
  'Calculas',
  'Physics',
  'Mathematics',
];

export default function CoursesScreen() {
  const [query, setQuery] = useState('');
  const data = COURSES.filter((c) => c.toLowerCase().includes(query.toLowerCase()));

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.header}>Courses</Text>
        <Text style={styles.bell}>🔔</Text>
      </View>

      <TextInput
        style={styles.search}
        placeholder="🔍  Search"
        placeholderTextColor="#8A8A8E"
        value={query}
        onChangeText={setQuery}
      />

      <FlatList
        data={data}
        keyExtractor={(i) => i}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.rowText}>{item}</Text>
            <Text style={styles.arrow}>›</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F1EDF7', paddingTop: 50 },
  headerRow: { justifyContent: 'center', height: 30 },
  header: { fontSize: 16, fontWeight: '600', textAlign: 'center', color: '#1A1A1A' },
  bell: { position: 'absolute', right: 16, fontSize: 16 },
  search: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 16,
    height: 40,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#E0D4F0',
    paddingHorizontal: 12,
    fontSize: 13,
  },
  list: { padding: 16, gap: 10 },
  row: {
    backgroundColor: '#fff',
    borderRadius: 6,
    height: 40,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#E0D4F0',
  },
  rowText: { fontSize: 12, fontWeight: '600', color: '#1A1A1A' },
  arrow: { fontSize: 18, color: '#8A8A8E' },
});