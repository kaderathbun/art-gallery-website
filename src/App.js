import { BrowserRouter, Routes, Route } from 'react-router-dom'
// styles
import './App.scss'
// Components
import Home from './pages/Home'
import Location from './pages/Location'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/location" element={<Location />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
