import { AppRouter } from './Router';
import { BrowserRouter } from 'react-router-dom';
import { NotificationProvider } from './context/notification.context';
import { Suspense } from 'react'

function App() {
  return (
    <NotificationProvider>
    <BrowserRouter>
    <Suspense fallback={'cargando...'}>
    <AppRouter />
    </Suspense>
    </BrowserRouter>
    </NotificationProvider>
  );
}

export default App;
