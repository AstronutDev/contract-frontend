import { ethers } from "ethers";
import { JsonRpcProvider, Web3Provider } from "@ethersproject/providers";

let provider: Web3Provider | JsonRpcProvider;

export const getProvider = async () => {
  if (window.ethereum) {
    console.log("here1");
    provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    return provider;
  }
  return null;
};

export const getSigner = async () => {
  const provider = await getProvider();
  return provider ? provider.getSigner() : null;
};
