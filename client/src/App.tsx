import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/layout';
import Home from './pages/home';
function App() {

  return (
    <Router>
    <Routes>
      {/* Layout wraps all routes */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  </Router>
  )
}

export default App
