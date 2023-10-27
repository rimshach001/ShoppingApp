import AppNavigation from './src/navigation/Stack/AppNavigation';
import { Provider } from 'react-redux';
import Store_ReduxToolkit from './src/ReduxToolkit/store_reduxToolkit';

export default function App() {
  return (
    <Provider store={Store_ReduxToolkit}>
      <AppNavigation/>
    </Provider>
  );
}


