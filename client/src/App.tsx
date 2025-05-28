import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/layout';
import Home from './pages/home';
import CheckoutPage from './pages/checkout';
function App() {

  return (
    <Router>
    <Routes>
      {/* Layout wraps all routes */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path='/checkout' element={<CheckoutPage/>} />
      </Route>
    </Routes>
  </Router>
  )
}

export default App
