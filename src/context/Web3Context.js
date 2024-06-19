import React, { useEffect, useState, createContext } from "react";
import { Web3 } from "web3";
import { QUICKNODE_URL_WSS } from "../config";

export const Web3Context = createContext();

export const Web3Provider = ({ children }) => {
  const [web3, setWeb3] = useState(null);

  useEffect(() => {
    const wsRpc = QUICKNODE_URL_WSS;
    const provider = new Web3.providers.WebsocketProvider(wsRpc);
    const instance = new Web3(provider);

    setWeb3(instance);
  }, []);

  // format value to readable format
  const valueFormatter = async (value) => {
    try {
      const formatted = await web3.utils.fromWei(value, "ether");
      return Number(formatted);
    } catch (e) {
      console.log(e);
      return false;
    }
  };

  const gasFormatter = async (value) => {
    try {
      // const gasInWei = await web3.utils.toWei(value, 'gwei')
      const gasInGwei = await web3.utils.fromWei(value, "gwei");
      return gasInGwei;
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Web3Context.Provider
      value={{
        web3,
        valueFormatter,
        gasFormatter,
      }}
    >
      {children}
    </Web3Context.Provider>
  );
};
