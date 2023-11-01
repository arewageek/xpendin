import { useEffect, useState } from 'react';
import { Web3 } from 'web3'
import { TOKEN } from './config/env'

import './App.css';
import { Navbar } from './components/Navbar';
import { Transactions } from './components/Transactions';

function App() {

  const [web3, setWeb3] = useState(null)
  
  useEffect(() => {
    const wsRpc = `wss://yolo-long-bridge.ethereum-sepolia.quiknode.pro/${TOKEN}`
    const provider = new Web3.providers.WebsocketProvider(wsRpc)
    const instance = new Web3(provider)
 
    setWeb3(instance)

  }, [])

  return (
    <div className="App w-screen min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar />

      <Transactions provider={web3} />
      
    </div>
  );
}

export default App;
