import Button from "./Button";
import Snippets from "../assets/Snippets.svg";

const Navbar = (prop) => {

    return (
        <>
            <div className="w-full fixed top-0 z-10 px-4 2xl:px-0 bg-[#F9FAFB] shadow-sm">
                <div className="max-w-screen-2xl mx-auto py-4 justify-between flex items-center">
                    <div className="flex gap-2 items-center">
                        <img src={Snippets} className="h-8 stroke-slate-50" />
                        <h1 className="font-montserrat text-4xl font-black text-jetblack">
                            Snippets
                        </h1>
                    </div>
                    <div className="flex gap-5">
                        {
                            prop.initialized ? (
                                prop.connected ? (
                                    <div className="flex items-center">
                                        <div className="flex justify-center items-center gap-2  rounded-lg">
                                            <p className="text-lg font-semibold text-primary-light">
                                                {prop.username}
                                            </p>
                                            <img
                                                onClick={prop.toggleModal}
                                                src={prop.avatar} className="h-10 w-10 cursor-pointer lg:cursor-none lg:pointer-events-none bg-jetblack-light rounded-full bg-tertiary-100" />
                                        </div>
                                    </div>
                                ) : (
                                    <Button
                                        className="ml-3"
                                        loading={prop.connecting}
                                        onClick={prop.connect}>
                                        Connect Wallet 🚀
                                    </Button>
                                )
                            ) : (
                                <Button
                                    className="ml-3"
                                    loading={prop.connecting}
                                    onClick={prop.initUser}>
                                    Initialize User 🔑
                                </Button>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;



