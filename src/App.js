import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { ROUTES } from './constants/routes';
import Home from './pages/home';
import Signin from './pages/signin';
import Signup from './pages/signup';
import Browse from './pages/browse';

function App() {
  // Assuming `user` comes from your context or Redux store
  const user = null; // Replace with actual user state

  return (
    <Router>
      <Routes>
        <Route
          path={ROUTES.SIGN_IN}
          element={
            user ? <Navigate to={ROUTES.BROWSE} /> : <Signin />
          }
        />

        <Route
          path={ROUTES.SIGN_UP}
          element={
            user ? <Navigate to={ROUTES.BROWSE} /> : <Signup />
          }
        />

        <Route
          path={ROUTES.BROWSE}
          element={
            user ? <Browse /> : <Navigate to={ROUTES.SIGN_IN} />
          }
        />

        <Route
          path={ROUTES.HOME}
          element={
            user ? <Navigate to={ROUTES.BROWSE} /> : <Home />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

