import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function RootLayout() {
  // Wrap with <GestureHandlerRootView> so we can click the hamburger menu or use slider to draw the the drawer from the left hand side of the page out.
  // Pretty much like Gmail
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerStyle: {
            backgroundColor: '#ffffff',
          },
          headerTintColor: '#8b5cf6',
          drawerStyle: {
            backgroundColor: '#ffffff',
          },
          drawerActiveTintColor: '#8b5cf6',
          drawerInactiveTintColor: '#64748b',
        }}
      >
        <Drawer.Screen
          name='index'
          options={{
            title: 'Home title',
            drawerLabel: 'Home label', // Change the label display inside the drawer page.
            drawerIcon: ({ color }) => (
              <FontAwesome name='home' size={24} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name='dashboard'
          options={{
            title: 'Dashboard title',
            drawerLabel: 'Dashboard label',
            drawerIcon: ({ color }) => (
              <FontAwesome name='dashboard' size={24} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name='settings'
          options={{
            title: 'Settings title',
            drawerLabel: 'Settings label',
            drawerIcon: ({ color }) => (
              <FontAwesome name='cog' size={24} color={color} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
