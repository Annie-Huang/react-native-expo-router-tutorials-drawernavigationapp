import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
  // Wrap with <GestureHandlerRootView> so we can click the hamburger menu or use slider to draw the the drawer from the left hand side of the page out.
  // Pretty much like Gmail
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen name='index' options={{ title: 'Home title' }} />
        <Drawer.Screen
          name='dashboard'
          options={{ title: 'Dashboard title' }}
        />
        <Drawer.Screen name='settings' options={{ title: 'Settings title' }} />
      </Drawer>
    </GestureHandlerRootView>
  );
}
