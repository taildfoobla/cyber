import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CyberApp, CyberProvider } from "@cyberlab/cyber-app-sdk";
import { InjectedConnector } from "wagmi/connectors/injected";



function App() {
  const [count, setCount] = useState(0)

  // let cyberProvider;
 
  // if (typeof window !== "undefined") {
  //   const app = new CyberApp({
  //     appId: "fc2e27cd-065a-4de3-b76a-c41eb4663d1a", // required
  //     name: "tai", // required
  //     icon: "https://icon.com", // required
  //   });
   
  //   // cyberwallet provider
  // //   const cyberProvider = new CyberProvider({
  // //     app: app,
  // //     chainId: optimismGoerli.id, // default chain ID
  // //   });
  // }
   
  // const cyberWalletConnector = new InjectedConnector({
  //   chains,
  //   options: {
  //     name: "CyberWallet",
  //     getProvider: () => {
  //       return cyberProvider;
  //     },
  //   },
  // });
  
  const app = new CyberApp({
    appId: "fc2e27cd-065a-4de3-b76a-c41eb4663d1a", // required
    name: "tai", // required
    icon: "https://icon.com", // required
  });
   
  app.start().then((cyberAccount) => {
    if (cyberAccount) {
      console.log("Connected to CyberWallet");
    } else {
      console.log("Failed to connect to CyberWallet");
    }
  });
  
  async function sendTransaction() {
    const res = await app?.cyberwallet?.optimism
      .sendTransaction({
        to: "0x370CA01D7314e3EEa59d57E343323bB7e9De24C6",
        value: "0.01",
        data: "0x",
      })
      .catch((err) => console.log({ err }));
  }


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
