
import './App.css'
import HomeScreen from './screens/HomeScreen'
import { BrowserRouter, Route } from 'react-router'
import { Routes } from 'react-router'
import Wallet from './screens/Wallet'
import Payment from './screens/Payment'
import History from './screens/History'
import Webhook from './screens/Webhook'
import Sidebar from './components/Sidebar'

function App() {


  return (
    <>
    
    <BrowserRouter>
    <div className='flex'>
      <div className='flex-shrink-0'>
      <Sidebar/>
      </div>
      
   <div className='flex-1 px-6'>
     <Routes>

      <Route path="/" element={<HomeScreen/>}/>
      <Route path="/wallet" element={<Wallet/>}/>
      <Route path="/payment" element={<Payment/>}/>
      <Route path="/history" element={<History/>}/>
      <Route path="/webhook" element={<Webhook/>}/>
    </Routes>
   </div>
    </div>
    </BrowserRouter>
    </>
  )
}

export default App
