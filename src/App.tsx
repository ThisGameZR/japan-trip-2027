import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Itinerary from './pages/Itinerary';
import Budget from './pages/Budget';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="itinerary" element={<Itinerary />} />
        <Route path="budget" element={<Budget />} />
      </Route>
    </Routes>
  );
}
