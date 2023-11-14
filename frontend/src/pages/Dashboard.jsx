import { Buffer } from 'buffer';
import { useEffect, useState } from "react";
import { useBlog } from "../context/SolanaProvider";
import { useWallet } from "@solana/wallet-adapter-react"
import { PhantomWalletName } from "@solana/wallet-adapter-wallets";
import {
    PostCard,
    Navbar,
    Profile,
    CreatePost
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
        <main className={`bg-[#F4EEF6] w-screen ${connected ? (posts.length < 4 ? "h-screen" : "h-full") : "h-screen"}`}>
            <div className="max-w-screen-2xl mx-auto px-4 2xl:px-0 h-full">
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
                <div className="pt-24 h-full w-full flex grap-8 gap-4">
                    {/* Profile */}
                    <div className="w-[45%] 2xl:w-[55%] h-96">
                        <Profile
                            connected={connected}
                            disconnect={disconnectWallet}
                            avatar={user?.avatar} />
                    </div>

                    {/* Feed */}
                    <div className="w-full">
                        {/* Create Post */}
                        <div className="flex flex-col">
                            <div className="pb-4">
                                <p className="font-semibold text-xl">
                                    Hey, there!
                                </p>
                                <p className="font-bold text-3xl">
                                    What's up?👋
                                </p>
                            </div>
                            <CreatePost
                                avatar={user?.avatar}
                                postContent={postContent}
                                setPostContent={setPostContent}
                                onSubmit={() => createPost(postContent)} />
                        </div>

                        {/* Posts View */}
                        {connected && (
                            <div className="relative overflow-y-auto my-4 w-full flex flex-col">
                                {posts.map((item) => {
                                    return (
                                        <PostCard
                                            key={item.account.id}
                                            content={item.account.content}
                                        />
                                    )
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </main>
    );
}

export default Dashboard;