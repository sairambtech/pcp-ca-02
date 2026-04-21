import AppRouter from './router/AppRouter';
import { AppProvider } from './context/AppContext';

export default function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}
