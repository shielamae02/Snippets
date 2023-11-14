
import { useState, useEffect } from "react";
import Button from "./Button";
import { useWallet } from '@solana/wallet-adapter-react';
import * as Web3 from "@solana/web3.js";
import { useBlog } from "../context/SolanaProvider";

const Profile = (prop) => {

    const { publicKey } = useWallet();
    const [ balance, setBalance] = useState(0);
    const { posts } = useBlog();

    useEffect(() => {
        const fetchBalance = async () => {
            if (publicKey) {
                try {
                    const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"));
                    const balance = await connection.getBalance(publicKey);
                    setBalance(balance / Web3.LAMPORTS_PER_SOL);
                } catch (error) {
                    console.error("Error fetching balance:", error);
                }
            }
        };

        fetchBalance();
    }, [publicKey, posts]);


    return (
        <div className="bg-white w-full h-full rounded-2xl shadow-xl p-4 flex flex-col items-center justify-center">
            <img src={prop.avatar} className="h-28 w-28 bg-jetblack-light rounded-full mb-10" />
            <div className="w-full flex flex-col gap-1 mb-2.5">

                {publicKey && publicKey.toBase58() ? (
                    <>
                        <h1 className="whitespace-normal max-w-full break-words text-lg text-gray-500 font-semibold uppercase text-center">
                            Balance:
                            <span className="text-red-400 font-semibold"> {balance} SOL</span>
                        </h1>
                        <span className="whitespace-normal text-center max-w-full break-words text-sm text-jetblack-light font-semibold">
                            {publicKey.toBase58()}
                        </span>
                    </>
                ) : (
                    <>
                        <h1 className="whitespace-normal max-w-full break-words text-sm text-center text-gray-600">
                            Public key not available
                        </h1>
                    </>
                )}
            </div>
            <div className="w-full pt-2">
                {
                    prop.connected
                        ? (
                            <>
                                <div className="flex w-full flex-col gap-2">
                                    <Button
                                        className="w-full text-center"
                                        onClick={prop.disconnect}>
                                        Disconnect Wallet
                                    </Button>
                                    <button className=" border border-primary-light py-3 flex items-center justify-center text-sm text-primary-light rounded-lg shadow-xl font-semibold hover:-translate-y-px focus:shadow-sm focus:-translate-y-0"
                                        onClick={() => {
                                            window.open(
                                                `https://explorer.solana.com/address/${publicKey.toBase58()}?cluster=devnet`
                                            )
                                        }}
                                    >
                                        View Transaction History
                                    </button>

                                </div>
                            </>
                        )
                        : (
                            <h1 className="text-center mt-6 text-lg font-semibold text-primary-light">
                                Connect your wallet to start 💡
                            </h1>
                        )
                }
            </div>

        </div>
    );
}

export default Profile;