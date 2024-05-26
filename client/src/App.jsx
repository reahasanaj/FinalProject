
import './App.css'
import Form from './components/From'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import TripDetails from './components/TripsDetails'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Form />} />
          <Route path="/getAllDetails" element={<TripDetails />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
