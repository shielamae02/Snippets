
const PostCard = (prop) => {
    return (
        <div className=" h-auto mt-4 bg-white w-full rounded-2xl p-6">
            {prop.content}
        </div>
    );
}

export default PostCard;