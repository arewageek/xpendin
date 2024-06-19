import "./App.css";
import { Navbar } from "./components/Navbar";
import { Transactions } from "./components/Transactions";
import { Web3Provider } from "./context/Web3Context";

function App() {
  // const [web3, setWeb3] = useState(null)

  // useEffect(() => {
  //   const wsRpc = `wss://yolo-long-bridge.ethereum-sepolia.quiknode.pro/${TOKEN}`
  //   const provider = new Web3.providers.WebsocketProvider(wsRpc)
  //   const instance = new Web3(provider)

  //   setWeb3(instance)

  // }, [])

  return (
    <Web3Provider>
      <div className="App w-screen min-h-screen bg-gray-100 dark:bg-gray-900">
        <Navbar />
        <Transactions />
      </div>
    </Web3Provider>
  );
}

export default App;
