import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </>
  );
};
