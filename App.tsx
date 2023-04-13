import { QueryClientProvider, QueryClient } from 'react-query';
import AppRoutes from './src/routes';

const query = new QueryClient();

export default function App () {
  return (
    <QueryClientProvider client={query}>
      <AppRoutes />
    </QueryClientProvider>
  );
}
