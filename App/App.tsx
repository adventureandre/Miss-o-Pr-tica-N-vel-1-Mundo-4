import theme from '@theme/index';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components';

export default function App() {
  return (
    
    <ThemeProvider theme={theme}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
