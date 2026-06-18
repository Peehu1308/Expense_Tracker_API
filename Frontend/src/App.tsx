
import './App.css'
import HomeScreen from './screens/HomeScreen'
import { BrowserRouter, Route } from 'react-router'
import { Routes } from 'react-router'
import Wallet from './screens/Wallet'
import Payment from './screens/Payment'
import History from './screens/History'
import Webhook from './screens/Webhook'

function App() {


  return (
    <>
    
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<HomeScreen/>}/>
      <Route path="/wallet" element={<Wallet/>}/>
      <Route path="/payment" element={<Payment/>}/>
      <Route path="/history" element={<History/>}/>
      <Route path="/webhook" element={<Webhook/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
