import './App.css'
// import TradingChat from './Components/Dashboard/TradingChat';
import Router from './Router/Router'
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <>
      <Router />
      <ToastContainer />
      {/* <TradingChat/> */}
    </>
  )
}

export default App
