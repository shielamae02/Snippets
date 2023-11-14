import { useEffect, useState } from "react";
import { useBlog } from "../context/SolanaProvider";
import { useWallet } from "@solana/wallet-adapter-react"
import { PhantomWalletName } from "@solana/wallet-adapter-wallets";
import {
    PostCard,
    Navbar
} from "../components";


const Dashboard = () => {
    const [connecting, setConnecting] = useState(false);
    const { select, connected } = useWallet();
    const [postContent, setPostContent] = useState("");

    const {
        user,
        initialized,
        initUser,
        disconnectWallet,
        createPost,
        posts
    } = useBlog();
    
    console.log(initialized)

    const onConnect = () => {
        setConnecting(true);
        select(PhantomWalletName)
    }

    useEffect(() => {
        if (user) {
            setConnecting(false)
        }
    }, [user])

    
    return (
        <main className="bg-[#F4EEF6] h-full w-screen">
            <div className="max-w-screen-2xl mx-auto px-4 md:px-0 h-full">
                {/* Navbar */}
                <div className="absolute top-0 left-0 right-0">
                    <Navbar
                        connected={connected}
                        onConnect={onConnect}
                        initialized={initialized}
                        disconnect={disconnectWallet}
                        initUser={() => initUser()}
                        connecting={connecting}
                        username={user?.name}
                        avatar={user?.avatar} />
                </div>
                
                {/* Body */}
                <div className="pt-20 h-full w-full flex grap-8 px-4 2xl:px-0gap-4">
                    {/* Profile */}
                   

                    {/* Feed */}
                    <div className="w-full"> 
                        {/* Create Post */}
                        x

                        {/* Posts View */}
                        <div className="relative overflow-y-auto mt-4 w-full bg-green-100 flex flex-col ">
                            
                        </div>
                    </div>
                </div>
            </div>

        </main>
    );
}

export default Dashboard;