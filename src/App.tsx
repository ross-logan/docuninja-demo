import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import Profile from './components/Profile'
import Settings from './components/Settings'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
