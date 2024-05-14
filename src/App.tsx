import './reset.css'
import classes from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { ErrorBoundary } from './componets/common/errorBoundary.jsx';
import { Header } from './componets/header/Header';
import { SearchForm } from './componets/search/SearchForm';
import { Preloader } from './componets/common/Preloader';
import LoginPage from './componets/login/LoginPage';
import { SearchPage } from './componets/search/SearchPage';
import ProtectedRoute from './componets/common/ProtectedRoute';

const Main = lazy(() => import('./componets/main/Main'));
const Favorites = lazy(() => import('./componets/favorites/Favorites'));
const History = lazy(() => import('./componets/history/History'));
const RegistrationPage = lazy(() => import('./componets/login/RegistrationPage'));
const Description = lazy(() => import('./componets/cards/Description'));

function App() {
  return (
    <div className={classes.app}>
      <Header />
      <SearchForm />
      <ErrorBoundary>
        <Suspense fallback={<Preloader />}>
          <Routes>
            <Route path="/*" element={<Main />} />
            <Route path="/main" element={<Main />} />
            <Route path="/favorites" element={
              <ProtectedRoute>
                <Favorites />
              </ProtectedRoute>} />
            <Route path="/history" element={
              <ProtectedRoute>
                <History />
              </ProtectedRoute>
            } />
            <Route path="/registrationPage" element={<RegistrationPage />} />
            <Route path="/loginPage" element={<LoginPage />} />
            <Route path="/description/:userId?" element={<Description />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;