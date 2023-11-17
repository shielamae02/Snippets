import { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import Button from "./Button";

const CreatePost = (prop) => {
    
    const [loading, setLoading] = useState(false);

    return (
        <div className="bg-white w-full h-auto rounded-2xl shadow-md pt-6 px-6 pb-4 flex flex-col">
            <div className="flex gap-1 justify-end">
                <div className="h-3 w-3 bg-primary-light rounded-full" />
                <div className="h-3 w-3 bg-secondary-light rounded-full" />
                <div className="h-3 w-3 bg-tertiary-light rounded-full" />
            </div>
            <div className="flex gap-2 my-2"> 
                {prop.connected && prop.initialized ? (
                    <img src={prop.avatar} className="h-14 w-14 bg-jetblack-light rounded-full bg-tertiary-100" />
                    ): (
                    <div className="h-14 w-14 bg-jetblack-light rounded-full bg-tertiary-100" />
                )}
                <textarea 
                    readOnly={prop.connected ? false : true}
                    value={prop.postContent}
                    onChange={(e) => prop.setPostContent(e.target.value)}
                    name="content"
                    id="content-area"
                    className="resize-none transition rounded-md p-2 w-full focus:outline-none font-normal text-lg h-20"
                    placeholder="Spill the tea! 🍵" />

            </div>
            <div className="w-full bg-gray-200 rounded-full h-[0.1rem]" />
            <Button
                className={`mt-4 self-end py-2 ${loading ? "w-36" : "w-24"}`}
                disabled={!prop.initialized || !prop.connected}
                loading={loading}
                onClick={async () => {
                    setLoading(true);
                    await prop.onSubmit();
                   
                    prop.setPostContent("");

                    setLoading(false);
                }}
            >
                Post
                <MdArrowForwardIos className="ml-2"/>
            </Button>
        </div>
    );
}

export default CreatePost;

