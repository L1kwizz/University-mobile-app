import { StyleSheet, View } from 'react-native';
import { Text } from '../../components/AppText';

const STATS = [
  { icon: '📅', label: 'Attendance', value: '90%' },
  { icon: '📝', label: 'Task & Work', value: '70%' },
  { icon: '❓', label: 'Quiz', value: '85%' },
];

const DASH = [
  { icon: '⚙️', label: 'Setting' },
  { icon: '🏆', label: 'Achievement' },
  { icon: '🔒', label: 'Privacy' },
];

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profile</Text>

      <View style={styles.userRow}>
        <View style={styles.avatar}>
          <View style={styles.avatarHead} />
          <View style={styles.avatarBody} />
        </View>
        <View>
          <Text style={styles.name}>Ammar Ali</Text>
          <Text style={styles.id}>SU92-BSCSM-S23-040</Text>
        </View>
      </View>

      <View style={styles.summary}>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryValue}>50/130</Text>
          <Text style={styles.summaryLabel}>Credit earns</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryValue}>3.02</Text>
          <Text style={styles.summaryLabel}>GPA</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryValue}>2</Text>
          <Text style={styles.summaryLabel}>Year student</Text>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.cardTop}>
          <View>
            <Text style={styles.cardTitle}>Statistics</Text>
            <Text style={styles.cardDate}>Monday, 06 June 2024</Text>
          </View>
          <Text style={styles.markBadge}>Mark Attend</Text>
        </View>
        <View style={styles.statsGrid}>
          {STATS.map((s) => (
            <View key={s.label} style={styles.statItem}>
              <Text style={styles.statIcon}>{s.icon}</Text>
              <View>
                <Text style={styles.statLabel}>{s.label}</Text>
                <Text style={styles.statValue}>{s.value}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.dashTitle}>Dashboard</Text>
        {DASH.map((d) => (
          <View key={d.label} style={styles.dashRow}>
            <Text style={styles.dashIcon}>{d.icon}</Text>
            <Text style={styles.dashLabel}>{d.label}</Text>
            <Text style={styles.arrow}>›</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 50, paddingHorizontal: 16 },
  header: { fontSize: 16, fontWeight: '600', textAlign: 'center', color: '#1A1A1A' },
  userRow: { flexDirection: 'row', alignItems: 'center', gap: 12, marginTop: 20 },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#E4DDF5',
    borderWidth: 1,
    borderColor: '#8E1D6B',
    overflow: 'hidden',
    alignItems: 'center',
  },
  avatarHead: { width: 20, height: 20, borderRadius: 10, backgroundColor: '#8E1D6B', marginTop: 10 },
  avatarBody: { width: 40, height: 30, borderRadius: 20, backgroundColor: '#8E1D6B', marginTop: 4 },
  name: { fontSize: 18, fontWeight: '700', color: '#1A1A1A' },
  id: { fontSize: 11, color: '#8A8A8E', marginTop: 2 },
  summary: { flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#F1EDF7', borderRadius: 8, paddingVertical: 14, marginTop: 20 },
  summaryItem: { alignItems: 'center' },
  summaryValue: { fontSize: 12, fontWeight: '700', color: '#8E1D6B' },
  summaryLabel: { fontSize: 11, fontWeight: '700', color: '#8E1D6B', marginTop: 2 },
  card: { backgroundColor: '#F7F2FB', borderWidth: 1, borderColor: '#8E1D6B', borderRadius: 8, padding: 14, marginTop: 20 },
  cardTop: { flexDirection: 'row', justifyContent: 'space-between' },
  cardTitle: { fontSize: 14, fontWeight: '700', color: '#1A1A1A' },
  cardDate: { fontSize: 9, color: '#8A8A8E', marginTop: 2 },
  markBadge: { fontSize: 9, backgroundColor: '#A8E6A3', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 4, overflow: 'hidden', height: 20 },
  statsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 20, marginTop: 14 },
  statItem: { flexDirection: 'row', alignItems: 'center', gap: 6, width: '45%' },
  statIcon: { fontSize: 22 },
  statLabel: { fontSize: 9, color: '#8A8A8E' },
  statValue: { fontSize: 11, fontWeight: '700', color: '#1A1A1A' },
  dashTitle: { fontSize: 11, color: '#8A8A8E', marginBottom: 8 },
  dashRow: { flexDirection: 'row', alignItems: 'center', gap: 10, paddingVertical: 8 },
  dashIcon: { fontSize: 18 },
  dashLabel: { flex: 1, fontSize: 12, fontWeight: '600', color: '#1A1A1A' },
  arrow: { fontSize: 18, color: '#8A8A8E' },
});