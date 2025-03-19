import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import HomePage from './HomePage';
import ProductsGridPage from './ProductsGridPage';
import SignUpPage from './SignUpPage';
import SignInPage from './SignInPage';
import NotFound from './NotFound';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
        <Route path='/sign-in' element={<SignInPage />} />
        <Route path='/men/products-grid' element={<ProductsGridPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
