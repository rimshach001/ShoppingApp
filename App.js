import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigation from './src/navigation/AppNavigation';
import { Provider } from 'react-redux';
import Store_ReduxToolkit from './src/ReduxToolkit/store_reduxToolkit';

export default function App() {
  return (
    <Provider store={Store_ReduxToolkit}>
      <AppNavigation/>
    </Provider>
  );
}


