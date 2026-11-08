import { Tabs } from 'expo-router';
import { Text } from 'react-native';

const icon = (emoji) =>
  function TabIcon({ focused }) {
    return <Text style={{ fontSize: 20, opacity: focused ? 1 : 0.55 }}>{emoji}</Text>;
  };

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#8E1D6B',
        tabBarInactiveTintColor: '#1A1A1A',
        tabBarLabelStyle: { fontSize: 10 },
        tabBarStyle: { backgroundColor: '#fff', height: 64, paddingBottom: 8, paddingTop: 6 },
      }}
    >
      <Tabs.Screen name="home" options={{ title: 'Home', tabBarIcon: icon('🏠') }} />
      <Tabs.Screen name="courses" options={{ title: 'Courses', tabBarIcon: icon('📁') }} />
      <Tabs.Screen name="schedule" options={{ title: 'Schedule', tabBarIcon: icon('🗓') }} />
      <Tabs.Screen name="result" options={{ title: 'Result', tabBarIcon: icon('🎓') }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile', tabBarIcon: icon('👤') }} />
    </Tabs>
  );
}