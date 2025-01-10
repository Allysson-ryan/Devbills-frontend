import { AppProvider } from './hooks';
import { Home } from './screens/home';
import GlobalStyles from './style/global';

export function App() {
  return (
    <AppProvider>
      <GlobalStyles />
      <Home />
    </AppProvider>
  );
}
