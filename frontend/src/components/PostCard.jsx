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
            <div className='flex gap-3 items-start'>
                <img src={prop.avatar} className="h-10 w-10 bg-jetblack-light rounded-full bg-tertiary-100" />
                <div className='flex flex-col'>
                    <p className="text-xs font-medium text-gray-500">
                        {prop.username}
                    </p>
                    <p className="text-md">{prop.content}</p>
                </div>

            </div>
        </div>
    );
};

export default PostCard;
