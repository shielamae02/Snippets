import React, { useState, useEffect } from 'react';
import { getRandomColor } from "../functions/getRandomColor"

const getRandom = () => getRandomColor('#424874', '#DCD6F7', Math.random());

const PostCard = (prop) => {
    const [randomColor, setRandomColor] = useState(getRandom());

    useEffect(() => {
        setRandomColor(getRandom());
    }, []);

    const style = { backgroundColor: randomColor };

    return (
        <div className="h-auto mt-4 bg-white w-full rounded-xl p-6 shadow-sm relative">
            <div className="w-2 h-full absolute top-0 left-0 rounded-tl-xl rounded-bl-xl" style={style} />
            <p className="ml-2">{prop.content}</p>
        </div>
    );
};

export default PostCard;
