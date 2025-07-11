import { Provider } from 'react-redux';
import AppNavigator from './src/navigation/app-navigation';
import { store } from './src/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return <SafeAreaProvider>
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  </SafeAreaProvider>;
}
