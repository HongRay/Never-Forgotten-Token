import React, { useState } from "react";
import { useAddress, useContract, useStorageUpload, useMetamask } from "@thirdweb-dev/react";

const CONTRACT_ADDRESS = 0xDd054E532CA94b7E744A0934D5d54206995C83f0; // <-- Replace

export default function App() {
  const connectWithMetamask = useMetamask();
  const address = useAddress();
  const { contract } = useContract(CONTRACT_ADDRESS);
  const { mutateAsync: upload } = useStorageUpload();

  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");

  const handleUploadAndMint = async () => {
    if (!file || !address) return;

    setStatus("Uploading to IPFS...");
    const [ipfsUrl] = await upload({ data: [file] });

    setStatus("Minting NFT...");
    await contract.mintTo(address, {
      name: "Death Certificate NFT",
      description: "Official death certificate",
      image: ipfsUrl,
    });

    setStatus("✅ NFT Minted! View on OpenSea.");
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Death Certificate NFT Minting</h2>
      {!address ? (
        <button onClick={connectWithMetamask}>Connect Wallet</button>
      ) : (
        <>
          <input type="file" accept="image/*,.pdf" onChange={e => setFile(e.target.files[0])} />
          <button onClick={handleUploadAndMint} style={{ marginLeft: 10 }}>
            Upload & Mint NFT
          </button>
          <p>{status}</p>
        </>
      )}
    </div>
  );
}
